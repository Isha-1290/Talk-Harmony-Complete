import os
from flask import Flask, request, jsonify, flash, redirect, url_for, send_file
from marshmallow import ValidationError
from models.user import User
from models.post import Post
from auth import generate_auth_token, protected, decode_token
from werkzeug.utils import secure_filename
from datetime import datetime
import json
from bson import json_util
from flask_cors import CORS
from utils import generate_random_id, allowed_file


# Initilize Flask
app = Flask(__name__)
UPLOAD_FOLDER = "./uploads"
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER
CORS(app, resources={r"/*": {"origins": "*"}})


@app.route("/", methods=["GET"])
def hello_world():
    return "<p>Hello, World!</p>"


@app.route("/signup", methods=["POST"])
def signup():
    # Validate Sign up data
    try:
        validated_user = User.validate_signup(request.get_json())
        # Check if user exists if not, create new user
        if User.exists(validated_user["username"]):
            return jsonify({"status": "fail", "message": "User already exists"}), 400
        else:
            # Instantiate User
            user = User(validated_user)
            # Create new user
            user = user.save()
            if user:
                print("created: ", user)
                # Generate user token using JWT
                token = generate_auth_token(user["username"], user["email"])
                return (
                    jsonify(
                        {
                            "status": "ok",
                            "message": "Account has been created",
                            "data": {"token": token},
                        }
                    ),
                    201,
                )

            else:
                return (
                    jsonify(
                        {"status": "fail", "message": "Failed to create an account"}
                    ),
                    400,
                )

    except ValidationError as err:
        return (
            jsonify(
                {
                    "status": "fail",
                    "message": "validation_error",
                    "data": {"errors": err.messages},
                }
            ),
            400,
        )


@app.route("/signin", methods=["POST"])
def signin():
    # Validate Sign in data
    try:
        validated_user = User.validate_signin(request.get_json())
        # Check if user exists
        user = User.exists(validated_user["username"])
        print(f"existing user: {user}")
        # Sign in the user
        if user:
            token = User.signin(
                validated_user["password"],
                user["password"],
                user["username"],
                user["email"],
            )
            print(token)
            # Check if user is valid
            if token:
                return (
                    jsonify(
                        {
                            "status": "ok",
                            "message": "Successfully logged in",
                            "data": {"token": token},
                        },
                    ),
                    200,
                )
            else:
                return (
                    jsonify(
                        {
                            "status": "fail",
                            "message": "Failed to sign in",
                        }
                    ),
                    403,
                )
        else:
            return jsonify({"status": "fail", "message": "Failed to sign in"}), 403

    except ValidationError as err:
        return jsonify({"status": "fail", "message": "Failed to sign in"}), 403


@app.route("/posts", methods=["GET", "POST"])
@protected
def posts():
    if request.method == "POST":
        try:
            # Check is post is valid
            validated_post = Post.validate_create_post(request.get_json())
            # Decode username from token
            decoded = decode_token(request.headers["Authorization"])
            validated_post["username"] = decoded["username"]
            validated_post["date"] = datetime.now().isoformat()
            print(f"validated post: {validated_post}")
            # Create post
            post = Post(validated_post).create()
            if post:
                return jsonify({"status": "ok", "message": "Post created"}), 201
            else:
                return (
                    jsonify({"status": "fail", "message": "Failed to create post"}),
                    400,
                )
        except ValidationError as err:
            return jsonify({"status": "fail", "message": err}), 403
    elif request.method == "GET":
        posts = list(Post.get_all())
        posts = json.dumps(posts, default=json_util.default)
        # print(f"jsonposts: {posts}")
        if posts:
            return (
                jsonify(
                    {
                        "status": "ok",
                        "message": "Got all posts",
                        "data": {"posts": posts},
                    },
                ),
                200,
            )
        else:
            return (
                jsonify({"status": "fail", "message": "Failed to get all posts"}),
                400,
            )


@app.route("/profile", methods=["POST", "GET"])
@protected
def profile():
    # Updating the User Profile
    if request.method == "POST":
        try:
            validated_user = User.validate_update_profile(request.get_json())
            print(validated_user)
            # Decode token to get username and email
            decoded = decode_token(request.headers["Authorization"])
            # Create new user
            user = User.updateprofile(
                validated_user, decoded["username"], decoded["email"]
            )
            if user:
                print("updated: ", user)
                return (
                    jsonify(
                        {
                            "status": "ok",
                            "message": "Profile has been updated",
                            "data": {"user": user},
                        }
                    ),
                    200,
                )

            else:
                return (
                    jsonify(
                        {"status": "fail", "message": "Failed to update the profile"}
                    ),
                    400,
                )
        except ValidationError as err:
            return jsonify({"status": "fail", "message": err}), 403
    elif request.method == "GET":
        # Decode username from token
        decoded = decode_token(request.headers["Authorization"])
        username = decoded["username"]
        email = decoded["email"]
        profile = User.getprofile(username, email)
        print(f"userprofile: {profile}")
        if profile:
            return (
                jsonify(
                    {
                        "status": "ok",
                        "message": "Got the correct user data",
                        "data": {"profile": profile},
                    },
                ),
                200,
            )
        else:
            return (
                jsonify(
                    {"status": "fail", "message": "Failed to get the user profile"}
                ),
                400,
            )


@app.route("/picture", methods=["POST", "GET"])
@protected
def picture():
    # Updating the User Profile
    if request.method == "POST":
        # check if the post request has the file part
        print(request.files)
        if "file" not in request.files:
            return (
                jsonify(
                    {
                        "status": "fail",
                        "message": "No file",
                    },
                ),
                400,
            )
        file = request.files["file"]
        # If the user does not select a file, the browser submits an
        # empty file without a filename.
        if file.filename == "":
            return (
                jsonify(
                    {
                        "status": "fail",
                        "message": "Not a valid file",
                    },
                ),
                400,
            )
        if file and allowed_file(file.filename):
            new_filename = generate_random_id()
            file_extention = os.path.splitext(file.filename)[1]
            file.save(
                os.path.join(
                    app.config["UPLOAD_FOLDER"], f"{new_filename}{file_extention}"
                )
            )  
            User.updateprofile({"dp_id": f"{new_filename}{file_extention}"}, decode_token(request.headers["Authorization"])["username"])

            return (
                jsonify(
                    {
                        "status": "ok",
                        "message": "Image uploaded",
                        "data": {"file_url": new_filename},
                    },
                ),
                200,
            )
    elif request.method == "GET":
        # Get the profile image associated to the user
        username = decode_token(request.headers["Authorization"])["username"]
        dp = User.getprofile(username)["dp_id"]
        return send_file(os.path.join(app.config["UPLOAD_FOLDER"], dp))
    
@app.route("/picture/<dp_id>", methods=[ "GET"])
def get_dp(dp_id):
    return send_file(os.path.join(app.config["UPLOAD_FOLDER"], dp_id))

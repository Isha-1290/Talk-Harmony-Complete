from marshmallow import Schema, fields, validate
from argon2 import PasswordHasher
from db import db
from auth import generate_auth_token


class User:
    def __init__(self, user_fields):
        self.user_fields = user_fields
        self.username = user_fields["username"]
        self.first_name = user_fields["first_name"]
        self.last_name = user_fields["last_name"]
        self.password = user_fields["password"]
        self.email = user_fields["email"]
        self.bio=user_fields["bio"]

    def __str__(self):
        return "<User(username={self.username!r})>".format(self=self)

    @staticmethod
    def exists(username, email=None):
        user = db.get_collection("users").find_one(
            {"$or": [{"username": username}, {"email": email}]}
        )
        return user

    def save(self):
        ph = PasswordHasher()
        self.user_fields["password"] = ph.hash(self.user_fields["password"])
        id = db.get_collection("users").insert_one(self.user_fields).inserted_id
        print(f"created user with id: {id}")
        return self.user_fields

    @staticmethod
    def signin(unhashed_password, db_hashed_password, username, email):
        auth_token = None
        ph = PasswordHasher()     
        if ph.verify(db_hashed_password, unhashed_password):
            auth_token = generate_auth_token(username, email)
        print(f"SIGN IN {auth_token, unhashed_password, db_hashed_password, username, email}\n")

        return auth_token

    @staticmethod
    def validate_signup(signup_data):
        schema = SignUpSchema()
        result = schema.load(signup_data)
        return result

    @staticmethod
    def validate_signin(signin_data):
        schema = SignInSchema()
        result = schema.load(signin_data)
        return result
    
    @staticmethod
    def validate_update_profile(profile_data):
        schema = UpdateProfileSchema()
        result = schema.load(profile_data)
        return result
    
    @staticmethod
    def updateprofile( new_details, old_username= None, old_email = None):
        username = new_details.get("username", None)
        email = new_details.get("email", None)

        if  username != None or email != None:
            # Check if user with the same email and username exists
            existing_user = User.exists(username, email)
            if existing_user:
                return None
            else:
                id = db.get_collection("users").find_one_and_update({"username": old_username} , {"$set": new_details})
                return new_details
        else:
            id = db.get_collection("users").find_one_and_update({"username": old_username} , {"$set": new_details})
            return new_details
    
    @staticmethod
    def getprofile(username, email=None):
        user = db.get_collection("users").find_one(
            {"$or": [{"username": username}, {"email": email}]}, { "username": 1, "email": 1, "first_name": 1, "last_name": 1, "dp_id":1, "_id": False}
        )
        return user
        # Convert ObjectId to string using map (otherwise we cannot serialize to JSON)

class SignUpSchema(Schema):
    username = fields.Str(required=True)
    first_name = fields.Str(required=True)
    last_name = fields.Str(required=True)
    password = fields.Str(required=True, validate=validate.Length(min=8))
    email = fields.Email(required=True)
    bio = fields.Str(required=True)


class SignInSchema(Schema):
    username = fields.Str(required=True)
    password = fields.Str(required=True)

class UpdateProfileSchema(Schema):
    username = fields.Str(required=False)
    first_name = fields.Str(required=False)
    last_name = fields.Str(required=False)
    email = fields.Email(required=False)
    bio = fields.Str(required=False)
    dp_id = fields.Str(required=False)


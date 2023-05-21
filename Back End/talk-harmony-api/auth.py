from functools import wraps
import jwt
from flask import jsonify, request
from config import config
from datetime import datetime, timedelta

JWT_SECRET = config.get("JWT_SECRET")


def protected(func):
    @wraps(func)
    def decorated(*args, **kwargs):
        if "Authorization" in request.headers:
            token = request.headers["Authorization"]
            print(f"token_head: {token} JWTSEC: {JWT_SECRET}")
            try:
                decoded = jwt.decode(token, JWT_SECRET, algorithms="HS256")
                print(f"decoded: {decoded}")
            except jwt.DecodeError as err:
                print(err)
                return jsonify(
                    {"status": "fail", "message": "Authorization failed"}), 401
            
            return func(*args, **kwargs)
        else:
            return jsonify(
                {"status": "fail", "message": "No Authorization header present"}), 401
            

    return decorated


def generate_auth_token(username, email):
    print(f"gen_auth: {username},{email}")
    exp = datetime.now() + timedelta(hours=24)
    token = jwt.encode(
        {"username": username, "email": email, "exp": exp},
        JWT_SECRET,
        algorithm="HS256",
    )

    print(f"token: {token}")
    return token


def decode_token(token):
    return jwt.decode(token, JWT_SECRET, algorithms="HS256")

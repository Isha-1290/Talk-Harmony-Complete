from marshmallow import Schema, fields, validate
from argon2 import PasswordHasher
from db import db


class Post:
    def __init__(self, post_fields):
        self.post_fields = post_fields
        self.username = post_fields["username"]
        self.text = post_fields["text"]
        self.date = post_fields["date"]

    def __str__(self):
        return "<Post(username={self.username!r})>".format(self=self)

    def create(self):
        dp_id=db.get_collection("users").find_one({"username" : self.username}, {"dp_id":1})["dp_id"]
        self.post_fields["dp_id"] = dp_id
        id = db.get_collection("posts").insert_one(self.post_fields)
        self.post_fields["id"] = id
        return self.post_fields

    @staticmethod
    def get_all():
        posts = db.get_collection("posts").find().sort("date", -1)
        #user = db.get_collection("users").find()
        # Convert ObjectId to string using map (otherwise we cannot serialize to JSON)
        return map(lambda post: (post.update({"_id": str(post["_id"])}) or post), posts)

    @staticmethod
    def validate_create_post(post_data):
        schema = CreatePostSchema()
        result = schema.load(post_data)
        return result


class CreatePostSchema(Schema):
    text = fields.Str(required=True, validate=validate.Length(min=1))
    date = fields.DateTime()

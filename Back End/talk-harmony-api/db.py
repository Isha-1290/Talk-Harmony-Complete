# Connect to MongoDB Atlas
from pymongo import MongoClient
from config import config

client = MongoClient(config.get("DB_URL"))
db = client[config.get("DB_NAME")]

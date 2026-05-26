import pymongo
from django.conf import settings

client = pymongo.MongoClient(settings.MONGO_URI)
db = client[settings.MONGO_DB]

def get_db():
    return db

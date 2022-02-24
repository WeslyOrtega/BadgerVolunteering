import pymongo
from bson import ObjectId
import dns

from dotenv import load_dotenv
import os


class Model(dict):
    """
    A simple model that wraps mongodb document
    """

    __getattr__ = dict.get
    __delattr__ = dict.__delitem__
    __setattr__ = dict.__setitem__

    load_dotenv()
    URI = os.environ['URI']

    db_client = pymongo.MongoClient(
        URI,
        tls=True,
        tlsAllowInvalidCertificates=True)
    db = db_client.get_database('badgerdatabase')
    collection = db['choices']

    def save(self):
        if not self._id:
            self.collection.insert(self)
        else:
            self.collection.update(
                {"_id": ObjectId(self._id)}, self)
        self._id = str(self._id)

    def reload(self):
        if self._id:
            result = self.collection.find_one({"_id": ObjectId(self._id)})
            if result:
                self.update(result)
                self._id = str(self._id)
                return True
        return False

    def remove(self):
        if self._id:
            resp = self.collection.remove({"_id": ObjectId(self._id)})
            self.clear()
            return resp

    def find_by_id(self, id: str) -> list:

        user = self.collection.find_one({"_id": ObjectId(id)})

        if user:
            user["_id"] = str(user["_id"])

        return user
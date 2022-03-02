from flask import Flask, request
from flask.helpers import send_from_directory
from flask_cors import CORS, cross_origin
from data_model import Nodes_DB, Options_DB
import uuid

app = Flask(__name__, static_folder='client/build', static_url_path='')
CORS(app)


@app.route('/api/node', methods=['GET'])
@cross_origin()
def choice():

    token = request.headers.get("user_token")
    if not token:
        return {"err": "Missing user token"}, 400

    node_id = request.args.get("node_id")
    if not node_id:
        return {"err": "No node id was provided"}, 400

    node = Nodes_DB().find_by_id(node_id)
    if not node:
        return {"err": "Node not found"}, 404

    if node['isFinal']:
        return {"final": node["final"]}, 200

    res = node.copy()

    del(res['_id'])

    obj1 = Options_DB().find_by_id(res["option1_obj"])
    obj2 = Options_DB().find_by_id(res["option2_obj"])

    del(obj1["_id"])
    del(obj2["_id"])

    res["option1_obj"] = obj1
    res["option2_obj"] = obj2

    #res["user_token"] = token

    return res, 200


@app.route('/api/begin', methods=['GET'])
@cross_origin()
def begin():

    res = {"start": "6217035701d269f6df9092f0"}
    res["user_token"] = str(uuid.uuid4())
    return res, 200


@app.route('/')
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, 'index.html')


if __name__ == '__main__':
    app.run()

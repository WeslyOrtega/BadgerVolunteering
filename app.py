import uuid

from flask import Flask, request
from flask.helpers import send_from_directory
from flask_cors import CORS, cross_origin

from data_model import Nodes_DB, Options_DB
from logger import Logger

app = Flask(__name__, static_folder='client/build', static_url_path='')
CORS(app)

logger = Logger()


@app.route('/api/review', methods=['POST'])
@cross_origin()
def review():
    
    token = request.headers.get("user_token")
    if not token:
        return {"err": "Missing user token"}, 400

    req = request.get_json(force=True, silent=True)
    if req:
        agreement = req.get('agree')
        if agreement != None:
            logger.log_user_review(token, agreement)

        else:
            return {"err": "Missing data"}, 400

    return {}, 204


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

    logger.log_user_choice(token, node_id, node['isFinal'])

    if node['isFinal']:
        return {"final": node["final"], "isFinal": True}, 200

    res = node.copy()

    del(res['_id'])

    obj1 = Options_DB().find_by_id(res["option1_obj"])
    obj2 = Options_DB().find_by_id(res["option2_obj"])

    if obj1:
        del(obj1["_id"])

    if obj2:
        del(obj2["_id"])

    res["option1_obj"] = obj1
    res["option2_obj"] = obj2

    return res, 200


@app.route('/api/begin', methods=['GET'])
@cross_origin()
def begin():

    res = {"start": "62635a16bd9caf3728a46690"}
    res["user_token"] = str(uuid.uuid4())
    return res, 200


@app.route('/')
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, 'index.html')


if __name__ == '__main__':
    app.run()

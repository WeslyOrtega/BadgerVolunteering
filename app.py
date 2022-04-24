import uuid

from flask import Flask, request
from flask.helpers import send_from_directory
from flask_cors import CORS, cross_origin

from data_model import Nodes_DB, Options_DB
from logger import Logger

import os

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
        if agreement is not None:
            logger.log_user_review(token, agreement)

        else:
            return {"err": "Missing data"}, 400

    return {}, 204


@app.route('/api/node', methods=['GET', 'POST', 'PUT', 'DELETE'])
@cross_origin()
def choice():

    # Start GET method
    if request.method == "GET":

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

        if res["option1_obj"]:
            obj1 = Options_DB().find_by_id(res["option1_obj"])
            if obj1:
                del(obj1["_id"])
            res["option1_obj"] = obj1

        if res["option2_obj"]:
            obj2 = Options_DB().find_by_id(res["option2_obj"])
            if obj2:
                del(obj2["_id"])
            res["option2_obj"] = obj2

        return res, 200
    # End GET method

    # Start POST method
    elif request.method == 'POST':

        # Check if environment is in dev mode
        if os.environ['FLASK_ENV'] != 'development':
            return {"err": "operation not allowed"}, 400

        req = request.get_json(force=True, silent=True)

        new_node = {
            "img": req.get("img", ""),
            "name": req.get("name", ""),
            "option1_destination": req.get("option1_destination", ""),
            "option2_destination": req.get("option2_destination", ""),
            "option1_obj": req.get("option1_obj", ""),
            "option2_obj": req.get("option2_obj", ""),
            "isFinal": req.get("isFinal", False)
        }

        return Nodes_DB(new_node).save(), 200

    # End POST method

    # Start PUT method
    elif request.method == 'PUT':

        # Check if environment is in dev mode
        if os.environ['FLASK_ENV'] != 'development':
            return {"err": "operation not allowed"}, 400
        pass
    # End POST method

    # Start DELETE method
    elif request.method == 'DELETE':

        # Check if environment is in dev mode
        if os.environ['FLASK_ENV'] != 'development':
            return {"err": "operation not allowed"}, 400
        pass
    # End DELETE method


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

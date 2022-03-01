from flask import Flask
from flask.helpers import send_from_directory
from flask_cors import CORS, cross_origin
from data_model import Nodes_DB, Options_DB
import uuid

app = Flask(__name__, static_folder='client/build', static_url_path='')
CORS(app)


@app.route('/api', methods=['GET'])
@cross_origin()
def index():
    return {
        "msg": "Coming Soon"
    }


@app.route('/api/choice', methods=['GET'])
@cross_origin()
def choice():

    response = {"id": "someID"}

    choices = [
        
    ]

    response["choices"] = choices

    return response


@app.route('/api/begin', methods=['GET'])
@cross_origin()
def begin():

    start_node: dict = Nodes_DB().find_by_id("6217035701d269f6df9092f0")

    res = start_node.copy()

    obj1 = Options_DB().find_by_id(res["option1_obj"])
    obj2 = Options_DB().find_by_id(res["option2_obj"])

    res["option1_obj"] = obj1
    res["option2_obj"] = obj2

    res["user_token"] = str(uuid.uuid4())

    print(res)

    return res


@app.route('/')
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, 'index.html')


if __name__ == '__main__':
    app.run()

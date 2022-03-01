from flask import Flask
from flask.helpers import send_from_directory
from flask_cors import CORS, cross_origin
from data_model import Model
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
        Model.find_by_id(Model(), "6204877c11377c28cac4cafa"),
        Model.find_by_id(Model(), "6204889811377c28cac4cafb")
    ]

    response["choices"] = choices

    return response


@app.route('/api/begin', methods=['GET'])
@cross_origin()
def begin():

    user_id = uuid.uuid4()

    return {
        "user_token": str(user_id),
        "_id": "6217035701d269f6df9092f0",
        "name": "Work with People/Not work with people",
        "option1_destination": "6216ff0201d269f6df9092ed",
        "option1_obj": "621706bc01d269f6df9092f5",
        "option2_destination": "6217000401d269f6df9092ee",
        "option2_obj": "6217074f01d269f6df9092f8",
        "isFinal": False,
        "final": []
    }


@app.route('/')
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, 'index.html')


if __name__ == '__main__':
    app.run()

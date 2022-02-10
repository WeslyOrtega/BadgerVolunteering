from cgitb import reset
from urllib import response
from flask import Flask
from flask.helpers import send_from_directory
from flask_cors import CORS, cross_origin
from data_model import Model

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


@app.route('/')
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, 'index.html')


if __name__ == '__main__':
    app.run()

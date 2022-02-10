#!/bin/bash

pip install -r requirements.txt
flask run &

cd client
npm install
npm start &

cd ..
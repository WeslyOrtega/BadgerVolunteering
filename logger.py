import gspread
from oauth2client.service_account import ServiceAccountCredentials
from pprint import pprint
from dotenv import load_dotenv
import os

scopes = ["https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/spreadsheets",
          "https://www.googleapis.com/auth/drive.file", "https://www.googleapis.com/auth/drive"]

load_dotenv()


class Logger():

    creds = {
        "type": os.environ['D_T'],
        "project_id": os.environ['D_PID'],
        "private_key_id": os.environ['D_PKID'],
        "private_key": os.environ['D_PK'],
        "client_email": os.environ['D_CE'],
        "client_id": os.environ['D_CID'],
        "auth_uri": os.environ['D_AURI'],
        "token_uri": os.environ['D_TURI'],
        "auth_provider_x509_cert_url": os.environ['D_ACERT_URL'],
        "client_x509_cert_url": os.environ['D_CCERT_URL']
    }

    creds = ServiceAccountCredentials.from_json_keyfile_dict(creds, scopes)
    client = gspread.authorize(creds)
    sheet = client.open("Badger Choice Log").sheet1

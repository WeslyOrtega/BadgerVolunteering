import gspread
from oauth2client.service_account import ServiceAccountCredentials
from pprint import pprint

scope = ["https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/spreadsheets",
         "https://www.googleapis.com/auth/drive.file", "https://www.googleapis.com/auth/drive"]

creds = ServiceAccountCredentials.from_json_keyfile_name("sheets_creds.json", scope)
client = gspread.authorize(creds)
sheet = client.open("Badger Choice Log").sheet1

data = sheet.get_all_records()
pprint(data)
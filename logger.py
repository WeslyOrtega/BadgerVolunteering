from gspread import authorize
from oauth2client.service_account import ServiceAccountCredentials
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
    client = authorize(creds)
    sheet = client.open("Badger Choice Log").sheet1

    FINAL_COL = 2
    REVIEW_COL = 3

    ROW_OFFSET = 2
    DATA_OFFSET = 3

    def log_user_choice(self, user_id, choice, isFinal=False):
        data = self.sheet.get_all_records()

        existing: dict = None
        for i, record in enumerate(data):
            if record["user_id"] == user_id:
                existing = record
                break

        if existing:

            if isFinal:
                self.sheet.update_cell(i + self.ROW_OFFSET, self.FINAL_COL, choice)

            else:
                values = list(filter(lambda x: x != "", list(existing.values())[self.DATA_OFFSET:]))
                colNum = len(values) + self.DATA_OFFSET + 1

                if colNum > len(existing.keys()):
                    self.sheet.update_cell(1, colNum, f"choice{colNum - self.DATA_OFFSET}")

                self.sheet.update_cell(i + self.ROW_OFFSET, colNum, choice)

        else:
            values = [user_id]
            for _ in range(1, self.DATA_OFFSET):
                values.append("")
            values.append(choice)

            self.sheet.append_row(values)

    
    def log_user_review(self, user_id, review):
        
        data = self.sheet.get_all_records()

        existing: dict = None
        for i, entry in enumerate(data):
            if entry['user_id'] == user_id:
                existing = entry
                break

        if existing:

            self.sheet.update_cell(i + self.ROW_OFFSET, self.REVIEW_COL, review)

# Badger Volunteering

# Frontend

See the `client` directory for information on the frontend.

# Backend

The backend for this project was implemented using Flask.
There are a couple things that you need to do to get started.

# Set Up

## Virtual Environment

It is recommended that you set up a virtual environment to ensure that the project is isolated.

For more information about setting up virtual environments, go to https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/

## Dependencies

To make sure that you have all the necessary dependencies run

```
pip install -r requirements.txt
```

This will install all the required libraries that are used in the project.

## URIs and Secret Keys

In order to protect our information, URIs and secret keys were not uploaded into the repo, but are required.

You will need to go to the backend channel in the server and check the pinned message for all needed environment variables.

All of those should be copied into a file named `.env` in the root directory.

Any questions, please contact Wes.

## Starting Up The Application

After carrying all the previous steps, all that is left is starting up the application.

To do this, run the following command:

```
flask run
```

# Collaborating

If you make any changes, it would be appreciated that you follow PEP8 styling conventions. There exist a few tools to help aid with that (those are installed when running `pip install -r requirements.txt`). Note that these tools are not able to cover all styling issues, so you will still need to do some checking and fixing yourself.

Info about the PEP8 Style Guide can be found at https://www.python.org/dev/peps/pep-0008/

## pycodestyle

`pycodestyle` is a tool that checks the formatting of a specific file and reports any lines of code that do not follow typical styling conventions. To use it, run

```
pycodestyle <filename>
```

on your terminal.

If your file follows PEP8 styling, nothing should be printed to the terminal.

Any reported issues should be addressed before pushing.

## autopep8

`autopep8` automatically addresses minor formatting issues. To use it, run

```
autopep8 --in-place -a -a <filename>
```

on your terminal.

Please note that this does NOT remove all styling errors. You should re-run `pycodestyle` afterwards to make sure that all issues were addressed.

# Routes

## `/api/begin`

Used to get the starting node and a token for the user.

### Compatible Methods

* GET

### Request

Does not expect any data

### Response

| Field | Description |
| ----- | ----------- |
| `start` | The `node_id` of the top of the tree |
| `user_token` | A token to be used as an identifier for a user |

## `/api/node`

Used to get the data of a node.

### Compatible Methods

* GET

### Request

| Field | Description |
| ----- | ----------- |
| `user_token` | Token used to identify the user. Passed in through the header. ex: `.../api/node?node_id=123`|
| `node_id` | ID of the node to be searched. Passed in as a query string |

### Response

| Field | Description |
| ----- | ----------- |
| `isFinal` | Boolean indicating whether the response contains a leaf node |
| `name` | The name of the current node |
| `option1_obj` | Object holding the data for the option (see #Option Representation) |
| `option1_destination` | ID of the node linked to `option1_obj` |
| `option2_obj` | Object holding the data for the option (see #Option Representation) |
| `option2_destination` | ID of the node linked to `option2_obj` |

## `/api/review`

Used to store the review from a user

### Compatible Methods

* POST

### Request

| Field | Description |
| ----- | ----------- |
| `agree` | Bool representing user review (`true` for agreement) |

### Resonse

Does not return any data

#  Option Representation

| Field | Description |
| ----- | ----------- |
| `alt` | Alt text for `img` |
| `img` | Image for the option |
| `text` | The test corresponding the option |

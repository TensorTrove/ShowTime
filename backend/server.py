from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv
import requests
import datetime
from pymongo import MongoClient


load_dotenv()

client=MongoClient(f'mongodb+srv://personalankitdey:{os.getenv("MONGO")}@cluster0.s8vxgku.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

db=client["logininfo"]
data=db["login"]
receipts=db["receipts"]

app = Flask(__name__)
cors = CORS(app, origins=["http://localhost:3000", "http://127.0.0.1:5001" , "http://localhost:3000/login"])

img_path = "https://image.tmdb.org/t/p/w500"
movie_path_popular = f"https://api.themoviedb.org/3/movie/popular"
movie_path_genre=f"https://api.themoviedb.org/3/discover/movie"
api_key = os.getenv("MOVIE_API")


@app.route("/billing",methods=["POST"])
def billing():
    response=request.get_json()
    print(response)
    receipts.insert_one(response)
    return {"message":"bill entry created"},200
@app.route("/searchOneMovie/<string:id>",methods=["POST"])
def searchOneMovie(id):
    url=f"https://api.themoviedb.org/3/movie/{id}?api_key={api_key}"
    response=requests.get(url)
    response=response.json()
    result=[]
    result.append(response["original_title"])
    result.append(response["release_date"])
    runtime=response["runtime"]
    minutes = runtime
    hours = minutes // 60
    remaining_minutes = minutes % 60

    time_string = f"{hours}h {remaining_minutes}m"
    result.append(time_string)
    genres=[]
    for genre in response["genres"]:
        genres.append(genre["name"])
    if len(genres)>0:
        result.append(genres)
    result.append(str(round(response["vote_average"], 1)))
    result.append(response["backdrop_path"])
    if len(result)==6:
        return result,200
    else:
        return {"message":"Could not fetch"},400


@app.route("/searchmovie",methods=["POST"])
def searchMovie():
    result=[]
    movie_name=request.get_json()
    movie_name=movie_name["movie"]
    url=f"https://api.themoviedb.org/3/search/movie?query={movie_name}&language=en-US&page=1&api_key={api_key}"
    response = requests.get(url)
    data = response.json()
    for i in data['results']:
        img = []
        img.append(i["poster_path"])
        img.append(i["backdrop_path"])
        img.append(i["title"])
        img.append(shorten_overview(i["overview"]))
        if i["release_date"]!="":
            img.append(i["release_date"])
        else:
            continue
        img.append(str(i["id"]))
        if int((i["release_date"])[:4])>=2018 and int((i["release_date"])[:4])<=2024:
            result.append(img)
    return jsonify(result), 200


@app.route("/sliderpopular", methods=["GET"])
def sliderpopular():
    result = []
    url = f"{movie_path_popular}?api_key={api_key}"
    response = requests.get(url)
    data = response.json()
    for i in data['results']:
        img = []
        img.append(i["poster_path"])
        img.append(i["backdrop_path"])
        img.append(i["title"])
        img.append(shorten_overview(i["overview"]))
        if i["release_date"]!="":
            img.append(i["release_date"])
        else:
            continue
        img.append(str(i["id"]))
        result.append(img)
    return jsonify(result), 200

@app.route("/slidertrending", methods=["GET"])
def slidertrending():
    result = []
    url = f"https://api.themoviedb.org/3/trending/movie/day?api_key={api_key}"
    response = requests.get(url)
    data = response.json()
    for i in data['results']:
        img = []
        img.append(i["poster_path"])
        img.append(i["backdrop_path"])
        img.append(i["title"])
        img.append(shorten_overview(i["overview"]))
        if i["release_date"]!="":
            img.append(i["release_date"])
        else:
            continue
        img.append(str(i["id"]))
        result.append(img)
    return jsonify(result), 200

def shorten_overview(overview:str):
    overview=overview.replace("!",".")
    overview=overview.replace("?",'.')
    if len(overview) > 300:
        truncated_overview = overview[:300]
        last_fullstop_index = truncated_overview.rfind('.')
        if last_fullstop_index != -1:
            return truncated_overview[:last_fullstop_index + 1]
        else:
            return truncated_overview
    else:
        return overview

@app.route("/sliderhorror", methods=["GET"])
def sliderhorror():
    result = []
    url = f"{movie_path_genre}?api_key={api_key}&with_genres=27"
    response = requests.get(url)
    data = response.json()
    for i in data['results']:
        img = []
        img.append(i["poster_path"])
        img.append(i["backdrop_path"])
        img.append(i["title"])
        img.append(shorten_overview(i["overview"]))
        if i["release_date"]!="":
            img.append(i["release_date"])
        else:
            continue
        img.append(str(i["id"]))
        result.append(img)
    return jsonify(result), 200

@app.route("/signup",methods=["POST"])
def signup():
    response = request.get_json()
    mail_check=response["email"]
    result = data.insert_one(response)
    return jsonify({"message": "new_signup"}), 200

@app.route("/loginInfo", methods=["POST"])
def loginInfo():
    response = request.get_json()
    mail_check=response["email"]
    returned=data.find_one({"email":mail_check})
    if returned!=None:
        return jsonify({"message": "login_present"}), 200
    else:
        return jsonify({"message": "new_login"}), 200

if '__main__' == __name__:
    app.run(host="0.0.0.0", port=5001,debug=True)
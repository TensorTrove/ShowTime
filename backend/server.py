from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv
import requests
import datetime

app = Flask(__name__)
cors = CORS(app, origins=["http://localhost:3000"])

img_path = "https://image.tmdb.org/t/p/w500"
movie_path_popular = f"https://api.themoviedb.org/3/movie/popular"
movie_path_genre=f"https://api.themoviedb.org/3/discover/movie"
load_dotenv()
api_key = os.getenv("MOVIE_API")

@app.route("/searchmovie",methods=["POST"])
def searchmovie():
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
        img.append(i["overview"])
        if i["release_date"]!="":
            img.append(i["release_date"])
        else:
            continue
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
        img.append(i["overview"])
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
        img.append(i["overview"])
        result.append(img)
    return jsonify(result), 200

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
        img.append(i["overview"])
        result.append(img)
    return jsonify(result), 200

if '__main__' == __name__:
    app.run(host="0.0.0.0", port=5001,debug=True)
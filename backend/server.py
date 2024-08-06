from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv
import requests

app = Flask(__name__)
cors = CORS(app, origins=["http://localhost:3000"])

img_path = "https://image.tmdb.org/t/p/w500"
movie_path = f"https://api.themoviedb.org/3/movie/popular"
load_dotenv()
api_key = os.getenv("MOVIE_API")

@app.route("/slider", methods=["GET"])
def slider():
    result = []
    url = f"{movie_path}?api_key={api_key}"
    response = requests.get(url)
    data = response.json()
    for i in data['results']:
        img = []
        img.append(i["poster_path"])
        img.append(i["backdrop_path"])
        img.append(i["title"])
        result.append(img)
    return jsonify(result), 200

if '__main__' == __name__:
    app.run(host="0.0.0.0", port=5001,debug=True)
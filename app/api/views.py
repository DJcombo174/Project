from flask import Blueprint, jsonify, request
from .database.db import db 
from .models import Video

main = Blueprint('main', __name__)

@main.route('/add_video', methods=['POST'])
def add_video():
    video_data = request.get_json()

    new_video = Video(title=video_data['title'], views=video_data['views'])

    db.session.add(new_video)
    db.session.commit()

    return 'Done', 201

@main.route('/videos')
def videos():
    video_list = Video.query.all()
    videos = []

    for video in video_list:
        videos.append({'title' : video.title, 'rating' : video.rating})

    return jsonify({'videos' : videos})


main.run(debug=True)
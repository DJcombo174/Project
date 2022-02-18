from flask import Flask, render_template, request, url_for, redirect

app = Flask(__name__)

@app.route('/')
@app.route('/api')
def home():
    return {
        'userid': 1,
        'title': 'you shamen',
        'completed': False
    }


if __name__ == '__main__':
    app.run(debug=True)

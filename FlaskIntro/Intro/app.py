from flask import Flask  # type: ignore[reportMissingImports]

app = Flask(__name__)

@app.route("/")
def home():
    return "Intro to Flask."
if __name__=="__main__":
    app.run(debug=True)

@app.route("/about")
def about():
    return "Welcome to the about page"

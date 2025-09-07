from flask import Flask, render_template, jsonify
import json

app = Flask(__name__)

# Load property data from the JSON file
with open('properties.json') as f:
    properties_data = json.load(f)

# This route renders the main webpage
@app.route('/')
def index():
    return render_template('index.html')

# This route provides the raw data as JSON (like a mini-API)
@app.route('/api/properties')
def get_properties():
    return jsonify(properties_data)

if __name__ == '__main__':
    app.run(debug=True)
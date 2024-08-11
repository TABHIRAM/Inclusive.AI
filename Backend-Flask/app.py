from flask import Flask, request, jsonify
from flask_cors import CORS
import json

from budget import process_budget
from timeline import process_timeline
from tabs import process_tabs
import time
import re

app = Flask(__name__)
CORS(app)

# In-memory storage for responses
timeline_response = None
budget_response = None
tab_response = None


@app.route('/process_timeline', methods=['POST', 'GET'])
def handle_timeline():
    global timeline_response
    try:
        # Simulating received data (replace with request.json for actual usage)
        # data = request.json
        data = request.form 
        data = {
            key: (
                value.lower() == 'true' if value.lower() in ['true', 'false'] else
                float(value.replace(',', '')) if re.match(r'^\d+(\.\d+)?$', value.replace(',', '')) else
                value.strip()
            )
            for key, value in data.items()
        }
        print("process_timeline data is...")
        print(data)

        # Process the timeline and store the result
        timeline_response = process_timeline(data)

        # return timeline_response, 200
        return  timeline_response, 200
        
        # return jsonify({
        #     "message": "Timeline processing completed successfully.",
        #     "timeline": timeline_response  # Include the processed timeline data directly
        # }), 200
    except Exception as e:
        return jsonify({"message": "An error occurred while processing the timeline.",
                          "error": str(e)}), 500

@app.route('/process_budget', methods=['POST', 'GET'])
def handle_budget():
    global budget_response
    try:
        # data = request.json
        data = request.form 
        data = {
            key: (
                value.lower() == 'true' if value.lower() in ['true', 'false'] else
                float(value.replace(',', '')) if re.match(r'^\d+(\.\d+)?$', value.replace(',', '')) else
                value.strip()
            )
            for key, value in data.items()
        }
        
        print("process_budget data is...")
        print(data)

        # Sleep for 5 seconds before processing
        time.sleep(5)
        # Process the budget using the timeline_response
        budget_response = process_budget(data)

        return  budget_response, 200

        # return jsonify({
        #     "message": "Budget processing completed successfully.",
        #     "budget": json.loads(budget_response)
        # }), 200
    except Exception as e:
        return jsonify({"message": "An error occurred while processing the budget.", "error": str(e)}), 500


@app.route('/process_tabs', methods=['POST', 'GET'])
def handle_tabs():
    global tab_response
    try:
        # data = request.json
        data = request.form 
        data = {
            key: (
                value.lower() == 'true' if value.lower() in ['true', 'false'] else
                float(value.replace(',', '')) if re.match(r'^\d+(\.\d+)?$', value.replace(',', '')) else
                value.strip()
            )
            for key, value in data.items()
        }
        print("handle_tabs data is...")
        print(data)

        # Sleep for 10 seconds before processing
        time.sleep(10)

        # Process the budget using the timeline_response
        tab_response = process_tabs(data)

        return tab_response, 200
        
        # return jsonify({
        #     "message": "Budget processing completed successfully.",
        #     "budget": json.loads(budget_response)
        # }), 200
    except Exception as e:
        return jsonify({"message": "An error occurred while processing the budget.", "error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True, port=8080)

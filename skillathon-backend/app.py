from flask import Flask, request, jsonify, Response
from utils import translate, summarize
import json

app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False


@app.route('/translate', methods=['POST'])
def translate_api():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        body = request.json

        text = body['text']
        to = body['to']

        translated = translate(text, to)
        result = {
            'text': text,
            'translated': translated
        }
        json_string = json.dumps(result,ensure_ascii = False)
        response = Response(json_string,content_type="application/json; charset=utf-8" )
        return response

        
    else:
        return 'Content-Type not supported!'


@app.route('/summarize', methods=['POST'])
def summarize_api():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        body = request.json

        text = body['text']
        lines = body['lines']

        translated = summarize(text, lines)
        result = {
            'text': text,
            'summary': translated
        }
        json_string = json.dumps(result,ensure_ascii = False)
        response = Response(json_string,content_type="application/json; charset=utf-8" )
        return response

        
    else:
        return 'Content-Type not supported!'




@app.route('/summarize_and_translate', methods=['POST'])
def summarize_and_translate_api():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        body = request.json

        text = body['text']
        to = body['to']
        lines = body['lines']

        summarized = summarize(text, lines)
        translated = translate(summarized, to)
        result = {
            'text': text,
            'translated_summary': translated
        }
        json_string = json.dumps(result,ensure_ascii = False)
        response = Response(json_string,content_type="application/json; charset=utf-8" )
        return response

        
    else:
        return 'Content-Type not supported!'


if __name__ == '__main__':
    app.run(debug=True)
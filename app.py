from flask import Flask, render_template, jsonify, send_from_directory, redirect, url_for
import os

app = Flask(__name__)

# Serve the main page
@app.route('/')
def index():
    return render_template('index.html')

# Serve teaching module pages
@app.route('/learn/<language>/<module>')
def learn_module(language, module):
    template_path = f"{language}/{module}_module.html"
    if os.path.exists(os.path.join('templates', template_path)):
        return render_template(template_path)
    else:
        return redirect(url_for('index'))

# Support for legacy URLs (redirect to C++ modules)
@app.route('/learn/<module>')
def learn_module_legacy(module):
    if module in ['basics', 'conditionals', 'loops', 'functions', 'arrays']:
        return redirect(url_for('learn_module', language='cpp', module=module))
    else:
        return redirect(url_for('index'))

# Serve quiz module pages
@app.route('/quiz/<language>/<module>')
def quiz_module(language, module):
    if os.path.exists(os.path.join('data', language, f"{module}.json")):
        return render_template('index.html')
    else:
        return redirect(url_for('index'))

# Support for legacy URLs (redirect to C++ modules)
@app.route('/quiz/<module>')
def quiz_module_legacy(module):
    if module in ['basics', 'conditionals', 'loops', 'functions', 'arrays']:
        return redirect(url_for('quiz_module', language='cpp', module=module))
    else:
        return redirect(url_for('index'))

# Serve JSON data files
@app.route('/data/<language>/<filename>')
def serve_json(language, filename):
    return send_from_directory(f'data/{language}', filename)

# Support for legacy URLs (serve C++ JSON files)
@app.route('/data/<filename>')
def serve_json_legacy(filename):
    if filename in ['basics.json', 'conditionals.json', 'loops.json', 'functions.json', 'arrays.json']:
        return send_from_directory('data/cpp', filename)
    else:
        return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
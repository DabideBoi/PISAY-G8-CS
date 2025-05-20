from flask import Flask, render_template, jsonify, send_from_directory, redirect, url_for
import os

app = Flask(__name__)

# Serve the main page
@app.route('/')
def index():
    return render_template('index.html')

# Serve teaching module pages
@app.route('/learn/<module>')
def learn_module(module):
    if module == 'basics':
        return render_template('basics_module.html')
    elif module == 'conditionals':
        return render_template('conditionals_module.html')
    elif module == 'loops':
        return render_template('loops_module.html')
    elif module == 'functions':
        return render_template('functions_module.html')
    elif module == 'arrays':
        return render_template('arrays_module.html')
    else:
        return redirect(url_for('index'))

# Serve quiz module pages
@app.route('/quiz/<module>')
def quiz_module(module):
    if module in ['basics', 'conditionals', 'loops', 'functions', 'arrays']:
        return render_template('index.html')
    else:
        return redirect(url_for('index'))

# Serve JSON data files
@app.route('/data/<filename>')
def serve_json(filename):
    return send_from_directory('data', filename)

if __name__ == '__main__':
    app.run(debug=True)
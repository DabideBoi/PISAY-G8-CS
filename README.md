# C++ Quiz Application

An interactive quiz application for learning C++ programming concepts.

## Features

- Multiple quiz modules:
  - Programming Basics
  - If-Else & Switch Statements
  - Loops
  - Functions
- 30 questions per module
- Interactive feedback
- Score tracking
- Quiz review mode

## Project Structure

```
.
├── app.py                  # Flask application
├── requirements.txt        # Python dependencies
├── data/                   # JSON data files
│   ├── basics.json
│   ├── conditionals.json
│   ├── functions.json
│   └── loops.json
├── static/                 # Static assets
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── script.js
└── templates/              # HTML templates
    └── index.html
```

## Setup Instructions

1. Install Python dependencies:
   ```
   pip install -r requirements.txt
   ```

2. Run the Flask application:
   ```
   python app.py
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:5000
   ```

## Quiz Modules

1. **Programming Basics**: Learn fundamental concepts of programming and C++
2. **If-Else & Switch**: Test your knowledge of conditional statements
3. **Loops**: Test your knowledge of for, while, and do-while loops
4. **Functions**: Test your knowledge of C++ functions, parameters, and return values
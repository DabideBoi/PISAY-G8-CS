# Programming Quiz Modules Plan

This document outlines the quiz modules for each programming language, including sample questions and answers.

## Table of Contents
- [Python Modules](#python-modules)
- [JavaScript Modules](#javascript-modules)
- [Web Development Modules](#web-development-modules)
- [Java Modules](#java-modules)

## Python Modules

### 1. Python Basics

```json
{
    "title": "Python Basics Quiz",
    "description": "Test your knowledge of fundamental Python programming concepts!",
    "questions": [
        {
            "question": "What is the correct way to create a variable in Python?",
            "code": "# Which is the correct way to assign 10 to a variable?",
            "options": ["x = 10", "int x = 10;"],
            "correctIndex": 0,
            "explanation": "In Python, variables are dynamically typed and don't require type declarations. You simply use the variable name, equals sign, and the value."
        },
        {
            "question": "What is the output of this code?",
            "code": "x = 5\ny = 2\nprint(x / y)",
            "options": ["2.5", "2"],
            "correctIndex": 0,
            "explanation": "In Python 3, division of integers results in a float. So 5/2 equals 2.5."
        },
        {
            "question": "What is the correct way to create a multi-line string in Python?",
            "code": "# Which creates a multi-line string?",
            "options": ["'''This is a\nmulti-line string'''", "\"This is a\nmulti-line string\""],
            "correctIndex": 0,
            "explanation": "Triple quotes (''' or \"\"\") are used to create multi-line strings in Python."
        },
        {
            "question": "What is the output of this code?",
            "code": "x = 10\nif x > 5:\n    print(\"A\")\nelif x > 8:\n    print(\"B\")\nelse:\n    print(\"C\")",
            "options": ["A", "B"],
            "correctIndex": 0,
            "explanation": "The condition x > 5 is True (since x is 10), so 'A' is printed. The elif block is not evaluated because the first condition was True."
        },
        {
            "question": "What is the correct way to check if a key exists in a dictionary?",
            "code": "my_dict = {'a': 1, 'b': 2}\n# Which is the correct way to check if 'c' is in the dictionary?",
            "options": ["'c' in my_dict", "my_dict.has_key('c')"],
            "correctIndex": 0,
            "explanation": "The 'in' operator is used to check if a key exists in a dictionary. The has_key() method is deprecated in Python 3."
        }
    ]
}
```

### 2. Data Structures

```json
{
    "title": "Python Data Structures Quiz",
    "description": "Test your knowledge of Python's built-in data structures!",
    "questions": [
        {
            "question": "Which of the following is a mutable data structure in Python?",
            "code": "# Which of these can be modified after creation?",
            "options": ["list", "tuple"],
            "correctIndex": 0,
            "explanation": "Lists in Python are mutable, meaning they can be modified after creation. Tuples are immutable."
        },
        {
            "question": "What is the output of this code?",
            "code": "my_dict = {'a': 1, 'b': 2}\nmy_dict['c'] = 3\nprint(my_dict)",
            "options": ["{'a': 1, 'b': 2, 'c': 3}", "Error: cannot add new keys"],
            "correctIndex": 0,
            "explanation": "Dictionaries in Python are mutable. You can add new key-value pairs using the square bracket notation."
        },
        {
            "question": "What is the output of this code?",
            "code": "my_list = [1, 2, 3]\nmy_list.append([4, 5])\nprint(len(my_list))",
            "options": ["4", "5"],
            "correctIndex": 0,
            "explanation": "The append() method adds the entire object as a single element. So [4, 5] is added as one element, making the length 4."
        },
        {
            "question": "What is the difference between a list and a tuple in Python?",
            "code": "# Which statement is true?",
            "options": ["Lists are mutable, tuples are immutable", "Lists can contain mixed types, tuples cannot"],
            "correctIndex": 0,
            "explanation": "The key difference is that lists are mutable (can be changed after creation) while tuples are immutable (cannot be changed after creation)."
        },
        {
            "question": "What is the output of this code?",
            "code": "set1 = {1, 2, 3}\nset2 = {3, 4, 5}\nprint(set1.intersection(set2))",
            "options": ["{3}", "{1, 2, 4, 5}"],
            "correctIndex": 0,
            "explanation": "The intersection() method returns a set containing only the elements that are common to both sets, which is just {3}."
        }
    ]
}
```

### 3. File I/O

```json
{
    "title": "Python File I/O Quiz",
    "description": "Test your knowledge of file operations in Python!",
    "questions": [
        {
            "question": "What is the correct way to open a file for reading in Python?",
            "code": "# Which is the correct way to open 'data.txt' for reading?",
            "options": ["with open('data.txt', 'r') as file:", "file = open('data.txt', 'read')"],
            "correctIndex": 0,
            "explanation": "The correct way to open a file is using the open() function with the file name and mode. 'r' is the mode for reading."
        },
        {
            "question": "What is the output of this code?",
            "code": "with open('example.txt', 'w') as f:\n    f.write('Hello')\n    f.write(' World')\n\nwith open('example.txt', 'r') as f:\n    print(f.read())",
            "options": ["Hello World", "HelloWorld"],
            "correctIndex": 1,
            "explanation": "The write() method doesn't add spaces. It writes exactly what you provide, so 'Hello' followed by ' World' becomes 'HelloWorld'."
        },
        {
            "question": "What is the output of this code?",
            "code": "with open('example.txt', 'w') as f:\n    f.write('Line 1\\n')\n    f.write('Line 2\\n')\n\nwith open('example.txt', 'r') as f:\n    print(f.readline().strip())",
            "options": ["Line 1", "Line 1\nLine 2"],
            "correctIndex": 0,
            "explanation": "The readline() method reads a single line from the file. The strip() method removes the newline character, so only 'Line 1' is printed."
        },
        {
            "question": "What is the correct way to read all lines from a file into a list?",
            "code": "# Which is the correct way to read all lines into a list?",
            "options": ["with open('file.txt', 'r') as f:\n    lines = f.readlines()", "with open('file.txt', 'r') as f:\n    lines = f.read_all_lines()"],
            "correctIndex": 0,
            "explanation": "The readlines() method reads all lines from a file and returns them as a list of strings."
        },
        {
            "question": "What is the output of this code?",
            "code": "import os\n\nif os.path.exists('example.txt'):\n    print('File exists')\nelse:\n    print('File does not exist')",
            "options": ["It depends on whether 'example.txt' exists in the current directory", "File exists"],
            "correctIndex": 0,
            "explanation": "The os.path.exists() function checks if a file or directory exists. The output depends on whether 'example.txt' exists in the current directory."
        }
    ]
}
```

### 4. Data Analysis with Pandas

```json
{
    "title": "Python Pandas Quiz",
    "description": "Test your knowledge of data analysis with the Pandas library!",
    "questions": [
        {
            "question": "What is the correct way to create a DataFrame from a dictionary in Pandas?",
            "code": "import pandas as pd\n\n# Which creates a DataFrame from this dictionary?\ndata = {'Name': ['John', 'Anna'], 'Age': [28, 22]}",
            "options": ["pd.DataFrame(data)", "pd.Series(data)"],
            "correctIndex": 0,
            "explanation": "pd.DataFrame(data) is the correct way to create a DataFrame from a dictionary in Pandas."
        },
        {
            "question": "What is the output of this code?",
            "code": "import pandas as pd\n\ndf = pd.DataFrame({'A': [1, 2, 3], 'B': [4, 5, 6]})\nprint(df['A'].mean())",
            "options": ["2.0", "3.5"],
            "correctIndex": 0,
            "explanation": "The mean of column 'A' (values 1, 2, 3) is 2.0."
        },
        {
            "question": "What is the correct way to filter rows in a DataFrame?",
            "code": "import pandas as pd\n\ndf = pd.DataFrame({'A': [1, 2, 3], 'B': [4, 5, 6]})\n# Which filters rows where column A > 1?",
            "options": ["df[df['A'] > 1]", "df.filter(A > 1)"],
            "correctIndex": 0,
            "explanation": "To filter rows in a DataFrame, you use boolean indexing: df[condition], where condition is a Series of boolean values."
        },
        {
            "question": "What is the output of this code?",
            "code": "import pandas as pd\n\ndf = pd.DataFrame({'A': [1, 2, None], 'B': [4, None, 6]})\nprint(df.isnull().sum())",
            "options": ["A    1\nB    1\ndtype: int64", "A    1\nB    1\ndtype: float64"],
            "correctIndex": 0,
            "explanation": "The isnull() method returns a DataFrame of the same shape with boolean values indicating whether each value is null. The sum() method counts the number of True values (nulls) in each column."
        },
        {
            "question": "What is the correct way to join two DataFrames in pandas?",
            "code": "import pandas as pd\n\ndf1 = pd.DataFrame({'key': ['A', 'B'], 'val1': [1, 2]})\ndf2 = pd.DataFrame({'key': ['A', 'C'], 'val2': [3, 4]})\n# Which performs an inner join on the 'key' column?",
            "options": ["pd.merge(df1, df2, on='key', how='inner')", "pd.join(df1, df2, on='key', how='inner')"],
            "correctIndex": 0,
            "explanation": "The pd.merge() function is used to join DataFrames. With how='inner', it returns only the rows where the join key appears in both DataFrames."
        }
    ]
}
```

### 5. Web Scraping

```json
{
    "title": "Python Web Scraping Quiz",
    "description": "Test your knowledge of web scraping with Python!",
    "questions": [
        {
            "question": "Which library is commonly used for web scraping in Python?",
            "code": "# Which library would you import for web scraping?",
            "options": ["BeautifulSoup", "WebScraper"],
            "correctIndex": 0,
            "explanation": "BeautifulSoup is a popular Python library for parsing HTML and XML documents, commonly used for web scraping."
        },
        {
            "question": "What is the output of this code?",
            "code": "import requests\nfrom bs4 import BeautifulSoup\n\nhtml = '<html><body><h1>Title</h1><p>Paragraph</p></body></html>'\nsoup = BeautifulSoup(html, 'html.parser')\nprint(soup.h1.text)",
            "options": ["Title", "<h1>Title</h1>"],
            "correctIndex": 0,
            "explanation": "soup.h1.text extracts just the text content of the h1 tag, which is 'Title'."
        },
        {
            "question": "What is the correct way to extract all links from a webpage using BeautifulSoup?",
            "code": "from bs4 import BeautifulSoup\nimport requests\n\nresponse = requests.get('https://example.com')\nsoup = BeautifulSoup(response.text, 'html.parser')\n# Which extracts all links?",
            "options": ["links = soup.find_all('a')", "links = soup.get_all('a')"],
            "correctIndex": 0,
            "explanation": "The find_all() method is used to find all occurrences of a tag in the document. To find all links, you use find_all('a') since links are represented by <a> tags."
        },
        {
            "question": "What is the output of this code?",
            "code": "from bs4 import BeautifulSoup\n\nhtml = '<p class=\"highlight\">Text 1</p><p>Text 2</p>'\nsoup = BeautifulSoup(html, 'html.parser')\nprint(soup.find('p', class_='highlight').text)",
            "options": ["Text 1", "Text 2"],
            "correctIndex": 0,
            "explanation": "The find() method with the class_ parameter finds the first <p> tag with class='highlight', which contains 'Text 1'."
        },
        {
            "question": "What is the correct way to handle pagination when scraping multiple pages?",
            "code": "import requests\nfrom bs4 import BeautifulSoup\n\n# Which approach is best for scraping multiple pages?",
            "options": ["Use a loop to iterate through page numbers and construct URLs", "Scrape all pages at once using soup.find_all('page')"],
            "correctIndex": 0,
            "explanation": "To handle pagination, you typically use a loop to iterate through page numbers, construct the URL for each page, and scrape each page individually."
        }
    ]
}
```

## JavaScript Modules

### 1. JavaScript Basics

```json
{
    "title": "JavaScript Basics Quiz",
    "description": "Test your knowledge of fundamental JavaScript programming concepts!",
    "questions": [
        {
            "question": "What is the correct way to declare a variable in modern JavaScript?",
            "code": "// Which is the preferred way to declare a variable in modern JS?",
            "options": ["let x = 10;", "var x = 10;"],
            "correctIndex": 0,
            "explanation": "In modern JavaScript, 'let' is preferred over 'var' for variable declarations because it has block scope."
        },
        {
            "question": "What is the output of this code?",
            "code": "let x = 5;\nlet y = '5';\nconsole.log(x == y);",
            "options": ["true", "false"],
            "correctIndex": 0,
            "explanation": "The == operator performs type coercion, so it converts the number 5 to a string and then compares, resulting in true."
        },
        {
            "question": "What is the difference between let and var in JavaScript?",
            "code": "// What is the output of this code?\nfunction test() {\n  if (true) {\n    var x = 1;\n    let y = 2;\n  }\n  console.log(x);\n  console.log(y);\n}",
            "options": ["1, ReferenceError", "1, 2"],
            "correctIndex": 0,
            "explanation": "var has function scope, so x is accessible outside the if block. let has block scope, so y is only accessible within the if block, causing a ReferenceError when trying to access it outside."
        },
        {
            "question": "What is the output of this code?",
            "code": "console.log(typeof null);",
            "options": ["object", "null"],
            "correctIndex": 0,
            "explanation": "In JavaScript, typeof null returns 'object', which is considered a historical bug in the language."
        },
        {
            "question": "What is the correct way to check if a variable is an array in JavaScript?",
            "code": "// Which is the correct way to check if 'arr' is an array?",
            "options": ["Array.isArray(arr)", "typeof arr === 'array'"],
            "correctIndex": 0,
            "explanation": "Array.isArray() is the correct method to check if a variable is an array. typeof arr returns 'object' for arrays, which doesn't distinguish them from other objects."
        }
    ]
}
```

### 2. DOM Manipulation

```json
{
    "title": "JavaScript DOM Manipulation Quiz",
    "description": "Test your knowledge of manipulating the Document Object Model with JavaScript!",
    "questions": [
        {
            "question": "What is the correct way to select an element by its ID in JavaScript?",
            "code": "// Which selects an element with id='myElement'?",
            "options": ["document.getElementById('myElement')", "document.querySelector('#myElement')"],
            "correctIndex": 0,
            "explanation": "Both options are actually valid. document.getElementById('myElement') is the traditional way, while document.querySelector('#myElement') is a newer method that uses CSS selector syntax."
        },
        {
            "question": "What is the output of this code?",
            "code": "// Assuming HTML: <div id=\"test\">Hello</div>\n\nconst div = document.getElementById('test');\ndiv.innerHTML = 'World';\nconsole.log(div.textContent);",
            "options": ["World", "Hello"],
            "correctIndex": 0,
            "explanation": "The code changes the inner HTML of the div to 'World', so div.textContent will return 'World'."
        },
        {
            "question": "What is the correct way to create a new element and add it to the DOM?",
            "code": "// Which creates a new paragraph and adds it to the body?",
            "options": ["const p = document.createElement('p');\np.textContent = 'New paragraph';\ndocument.body.appendChild(p);", "const p = new Element('p');\np.textContent = 'New paragraph';\ndocument.body.add(p);"],
            "correctIndex": 0,
            "explanation": "To create a new element, you use document.createElement(). To add it to the DOM, you use appendChild() on the parent element."
        },
        {
            "question": "What is the output of this code?",
            "code": "// Assuming HTML: <div id=\"test\"><p>Hello</p><p>World</p></div>\n\nconst div = document.getElementById('test');\nconsole.log(div.childNodes.length);",
            "options": ["It depends on whitespace in the HTML", "2"],
            "correctIndex": 0,
            "explanation": "childNodes includes all nodes, including text nodes (whitespace). The exact count depends on whitespace in the HTML. To get just element nodes, use children.length instead."
        },
        {
            "question": "What is event delegation in JavaScript?",
            "code": "// Which demonstrates event delegation?\ndocument.getElementById('parent').addEventListener('click', function(e) {\n  if (e.target.className === 'child') {\n    console.log('Child clicked');\n  }\n});",
            "options": ["Adding an event listener to a parent element to handle events for its children", "Adding multiple event listeners to the same element"],
            "correctIndex": 0,
            "explanation": "Event delegation is a technique where you add a single event listener to a parent element to handle events for its children, rather than adding listeners to each child."
        }
    ]
}
```

### 3. Async Programming

```json
{
    "title": "JavaScript Async Programming Quiz",
    "description": "Test your knowledge of asynchronous programming in JavaScript!",
    "questions": [
        {
            "question": "What is the modern way to handle asynchronous operations in JavaScript?",
            "code": "// Which is the modern approach for async operations?",
            "options": ["async/await", "callbacks"],
            "correctIndex": 0,
            "explanation": "async/await is the modern approach for handling asynchronous operations in JavaScript, providing cleaner and more readable code than callbacks."
        },
        {
            "question": "What is the output of this code?",
            "code": "console.log('Start');\n\nsetTimeout(() => {\n  console.log('Timeout');\n}, 0);\n\nPromise.resolve().then(() => {\n  console.log('Promise');\n});\n\nconsole.log('End');",
            "options": ["Start, End, Promise, Timeout", "Start, End, Timeout, Promise"],
            "correctIndex": 0,
            "explanation": "This demonstrates the JavaScript event loop. 'Start' and 'End' are logged first (synchronous code), then 'Promise' (microtask), and finally 'Timeout' (macrotask)."
        },
        {
            "question": "What is the output of this code?",
            "code": "async function test() {\n  return 'Hello';\n}\n\nconsole.log(test());",
            "options": ["Promise { 'Hello' }", "'Hello'"],
            "correctIndex": 0,
            "explanation": "An async function always returns a Promise, so test() returns a Promise that resolves to 'Hello', not the string 'Hello' directly."
        },
        {
            "question": "What is the correct way to handle errors in async/await code?",
            "code": "// Which is the correct way to handle errors with async/await?",
            "options": ["async function fetchData() {\n  try {\n    const response = await fetch(url);\n    return await response.json();\n  } catch (error) {\n    console.error('Error:', error);\n  }\n}", "async function fetchData() {\n  const response = await fetch(url).catch(error => {\n    console.error('Error:', error);\n  });\n  return await response.json();\n}"],
            "correctIndex": 0,
            "explanation": "With async/await, the best practice for error handling is to use try/catch blocks, which can catch errors from any await expression within the try block."
        },
        {
            "question": "What is the difference between Promise.all() and Promise.race()?",
            "code": "// What is the output of this code?\nconst promise1 = new Promise(resolve => setTimeout(() => resolve('one'), 200));\nconst promise2 = new Promise(resolve => setTimeout(() => resolve('two'), 100));\n\nPromise.race([promise1, promise2]).then(console.log);",
            "options": ["'two'", "'one'"],
            "correctIndex": 0,
            "explanation": "Promise.race() returns the result of the first promise that resolves (or rejects). Since promise2 resolves after 100ms and promise1 after 200ms, 'two' is logged."
        }
    ]
}
```

### 4. Frontend Frameworks

```json
{
    "title": "JavaScript Frontend Frameworks Quiz",
    "description": "Test your knowledge of popular JavaScript frontend frameworks!",
    "questions": [
        {
            "question": "Which framework uses the Virtual DOM for efficient rendering?",
            "code": "// Which framework is known for its Virtual DOM implementation?",
            "options": ["React", "Angular"],
            "correctIndex": 0,
            "explanation": "React is known for its Virtual DOM implementation, which optimizes rendering by minimizing actual DOM manipulations."
        },
        {
            "question": "What is the output of this React code?",
            "code": "function Counter() {\n  const [count, setCount] = React.useState(0);\n  \n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </div>\n  );\n}",
            "options": ["A counter component with an increment button", "Error: React hooks can only be used in functional components"],
            "correctIndex": 0,
            "explanation": "This is a valid React functional component that uses the useState hook to create a counter with an increment button."
        },
        {
            "question": "What is the key difference between React and Angular?",
            "code": "// Which statement is true?",
            "options": ["React is a library focused on UI components, Angular is a complete framework", "React uses two-way data binding, Angular uses one-way data flow"],
            "correctIndex": 0,
            "explanation": "React is a library that focuses on building UI components, while Angular is a complete framework that provides a full solution including routing, forms, HTTP client, etc."
        },
        {
            "question": "What is the output of this Vue.js code?",
            "code": "<template>\n  <div>{{ message }}</div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      message: 'Hello Vue!'\n    }\n  }\n}\n</script>",
            "options": ["A div containing the text 'Hello Vue!'", "A div containing the text '{{ message }}'"],
            "correctIndex": 0,
            "explanation": "In Vue.js, the double curly braces {{ }} are used for text interpolation. The expression inside them is replaced with the corresponding property from the component's data."
        },
        {
            "question": "What is the purpose of React's useEffect hook?",
            "code": "// What does this code do?\nimport React, { useState, useEffect } from 'react';\n\nfunction Example() {\n  const [count, setCount] = useState(0);\n\n  useEffect(() => {\n    document.title = `You clicked ${count} times`;\n  });\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>Click me</button>\n    </div>\n  );\n}",
            "options": ["It updates the document title whenever the count changes", "It prevents the component from re-rendering"],
            "correctIndex": 0,
            "explanation": "The useEffect hook in React is used for side effects in function components. In this example, it updates the document title whenever the component renders (which happens when count changes)."
        }
    ]
}
```

### 5. APIs

```json
{
    "title": "JavaScript APIs Quiz",
    "description": "Test your knowledge of working with APIs in JavaScript!",
    "questions": [
        {
            "question": "What is the modern way to make HTTP requests in JavaScript?",
            "code": "// Which is the modern approach for making HTTP requests?",
            "options": ["fetch()", "XMLHttpRequest"],
            "correctIndex": 0,
            "explanation": "fetch() is the modern API for making HTTP requests in JavaScript, providing a cleaner interface than the older XMLHttpRequest."
        },
        {
            "question": "What is the output of this code?",
            "code": "fetch('https://api.example.com/data')\n  .then(response => response.json())\n  .then(data => console.log(typeof data));",
            "options": ["object", "string"],
            "correctIndex": 0,
            "explanation": "response.json() parses the JSON response into a JavaScript object, so typeof data will be 'object'."
        },
        {
            "question": "What is the correct way to send JSON data in a POST request using fetch?",
            "code": "// Which is the correct way to send JSON data?",
            "options": ["fetch('https://api.example.com/data', {\n  method: 'POST',\n  headers: {\n    'Content-Type': 'application/json'\n  },\n  body: JSON.stringify({ name: 'John' })\n})", "fetch('https://api.example.com/data', {\n  method: 'POST',\n  headers: {\n    'Content-Type': 'application/json'\n  },\n  body: { name: 'John' }\n})"],
            "correctIndex": 0,
            "explanation": "When sending JSON data with fetch, you need to convert the JavaScript object to a JSON string using JSON.stringify() for the body property."
        },
        {
            "question": "What is CORS in web development?",
            "code": "// What might cause this error?\n// Access to fetch at 'https://api.example.com' from origin 'https://myapp.com' has been blocked by CORS policy",
            "options": ["Cross-Origin Resource Sharing - a security feature that restricts web pages from making requests to a different domain", "Cross-Origin Request Scripting - a type of attack that injects malicious code into websites"],
            "correctIndex": 0,
            "explanation": "CORS (Cross-Origin Resource Sharing) is a security feature implemented by browsers that restricts web pages from making requests to a different domain than the one that served the page."
        },
        {
            "question": "What is the purpose of the Authorization header in API requests?",
            "code": "// What is the purpose of this code?\nfetch('https://api.example.com/data', {\n  headers: {\n    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'\n  }\n})",
            "options": ["To authenticate the request with the server", "To specify the format of the response data"],
            "correctIndex": 0,
            "explanation": "The Authorization header is used to send credentials to the server to authenticate the request. In this example, it's using a JWT (JSON Web Token) with the Bearer authentication scheme."
        }
    ]
}
```

## Web Development Modules

### 1. HTML Basics

```json
{
    "title": "HTML Basics Quiz",
    "description": "Test your knowledge of HTML fundamentals!",
    "questions": [
        {
            "question": "What is the correct HTML element for the largest heading?",
            "code": "<!-- Which tag creates the largest heading? -->",
            "options": ["<h1>", "<heading>"],
            "correctIndex": 0,
            "explanation": "The <h1> tag defines the largest and most important heading in HTML."
        },
        {
            "question": "What is the output of this code?",
            "code": "<!DOCTYPE html>\n<html>\n<body>\n  <p>This is <em>emphasized</em> text.</p>\n</body>\n</html>",
            "options": ["The word 'emphasized' will be displayed in italic", "The word 'emphasized' will be displayed in bold"],
            "correctIndex": 0,
            "explanation": "The <em> tag is used to emphasize text, which browsers typically display in italic."
        },
        {
            "question": "What is the correct HTML for creating a hyperlink?",
            "code": "<!-- Which creates a link to example.com? -->",
            "options": ["<a href=\"https://example.com\">Example</a>", "<link href=\"https://example.com\">Example</link>"],
            "correctIndex": 0,
            "explanation
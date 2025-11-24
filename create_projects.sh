#!/bin/bash

# List of project folders to create
projects=(
  "02_calculator"
  "03_digital_clock"
  "04_guess_the_number"
  "05_weather_app"
  "06_quiz_app"
  "07_stopwatch"
  "08_image_slider"
  "09_expense_tracker"
  "10_notes_app"
)

# Template content for index.html
html_template='<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Project</title>
    <link rel="stylesheet" href="style.css" />
</head>
<body>

    <div class="container">
        <h1>Project Title</h1>
        <p class="subtitle">Short description here...</p>

        <div id="app"></div>
    </div>

    <script src="script.js"></script>
</body>
</html>
'

# Template content for style.css
css_template='
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    background: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.container {
    background: white;
    width: 380px;
    padding: 25px 30px;
    border-radius: 12px;
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
    text-align: center;
}
'

# Template content for script.js
js_template='
// JS Template File
console.log("Project Loaded Successfully!");
'

echo "🚀 Creating project folders..."

for project in "${projects[@]}"; do
  echo "📁 Creating $project ..."
  mkdir -p "$project"
  echo "$html_template" > "$project/index.html"
  echo "$css_template" > "$project/style.css"
  echo "$js_template" > "$project/script.js"
done

echo "🎉 All folders created successfully!"

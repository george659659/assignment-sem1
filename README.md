# assignment-sem1
## Random Recipe Generator

This is a website that promotes digital wellness, encouraging users to reduce ordering takeout or eating fast food and to develop healthy eating habits at home.\
With just a simple click, you can get a random recipe or browse different categories to find recipes.

## Deployment and Access
This application is hosted on GitHub Pages and can be accessed and tested directly at:
[https://george659659.github.io/assignment-sem1/](https://george659659.github.io/assignment-sem1/)  

You can find the source code on GitHub:
[https://github.com/george659659/assignment-sem1.git](https://github.com/george659659/assignment-sem1.git)

## Project Purpose
•Promoting digital wellness and healthier lifestyle habits.\
•Helping you enjoy cooking at home.\
•Discover random recipes in a fun and easy way.\
•Making home cooking a fun and easy habit.\
•Reducing takeout and fast food consumption.

## Features
◦Generate a random meal.\
◦Filter meals by category.\
◦Showcasing real photos of the dishes.\
◦Detailed ingredients and step-by-step cooking instructions.

## Technologies 
▪HTML5\
▪CSS3\
▪JavaScript\
▪TheMealDB API

## How it works
1.  **Initialization:** The website fetches all available categories from TheMealDB API and populates the `<select>` dropdown menu (`chooseCategories()` function).
2.  **Initial Load:** A random recipe is loaded when the user enters the recipe view (`loadNewMeal()` function).
3.  **User Interaction:**
    * Users can click the "New Meal" button to switch to another random recipe anytime.
    * Users can also select a category, which triggers the application to fetch a new recipe from the selected category.
4.  **Data Display:** The application clearly displays the recipe details, including an ingredient list (measures paired with ingredients) and all cooking steps (parsed from a single string into an ordered list).

## Project File Structure
asssignment-sem1/\
|---index.html\
|---style.css\
|---script.js\
|---README.md\
|---background1.jpg

























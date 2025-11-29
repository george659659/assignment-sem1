        //get dom element
        const homeContent = document.getElementById("home");
        const recipeview = document.getElementById("recipe-view");
        const startButton = document.getElementById("start-button");

        //event listener for start button
        const categorySelect = document.getElementById("category");   
        const mealContainer = document.getElementById("random-meal");
        const newMealButton = document.getElementById("new-meal");

        //function to start the recipe app
        function startRecipeApp(){
          homeContent.classList.add("hidden"); 
          recipeview.classList.remove("hidden");
          loadNewMeal();
        }

        //fetch and populate categories in the dropdown
         async function chooseCategories(){
          try{
          const respone = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
           const result = await respone.json()
            const categories = result.categories

            if(categories){
              for(let i = 0;i < categories.length;i++){
                const food = categories[i];

                const option = document.createElement("option");
                option.value = food.strCategory;
                option.textContent = food.strCategory;
                categorySelect.appendChild(option)
              }
            }
           }catch(error) {
            console.error("Category load error", error);
          }
        }
        // fetch and display a random meal (option by category)
        async function loadNewMeal(){
          mealContainer.innerHTML = "Loading new recipe..."
          const category  = categorySelect.value;
          let url = "https://www.themealdb.com/api/json/v1/1/random.php";

          if(category){
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
            const list = await res.json();
            const meals = list.meals;

            if(!meals || meals.length === 0){
              mealContainer.innerHTML = `<p> No recipes found </p>`
              return;
            }

            //pick a random meal
            const randomMeal = meals[Math.floor(Math.random()* meals.length)];
            url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${randomMeal.idMeal}`;
          }
          try{
                //fetch full meal details
                const response = await fetch(url);
                const result = await response.json();
                const meal = result.meals[0];

                const category = meal.strCategory;
                const area =meal.strArea;

              //build ingrediient list
              let strIngredientList = `<h3>🍽️ Ingredient </h3>
              <ul>`

              for(let i = 1; i <= 20; i++){               
                const ingredients = meal[`strIngredient${i}`];
                const measure = meal [`strMeasure${i}`];

              if(ingredients && ingredients.trim() !== "") {                 
                strIngredientList += `<li>${measure} ${ingredients}</li>`;
            }
          }                           
          strIngredientList += `

          </ul>`

          //build instructions list
          const rawInstructions = meal.strInstructions
          const instructionsSteps = rawInstructions
              .split(".")//句号分割
              .filter(step => step.trim() !=="")//remove空的step
              .map(step => `<li>${step.trim()}.</li>`)
              .join('');

      //display meal details
      mealContainer.innerHTML = `<h2>${meal.strMeal}</h2>
      <h4>Category: ${category}</h4> <h4>Source:${area}</h4>
      <img src ="${meal.strMealThumb}" alt = "${meal.strMeal}"> 
  
       ${strIngredientList} 
      <h3>📝 Instructions </h3>
      <ol>${instructionsSteps}</ol>
       `                          
      
    } catch(error){
      console.error(error)
      mealContainer.innerHTML = "<p>Failed to load recipe.Please try again.</p>"
    } 
  }
  //load categories and first random meal initialize
if(startButton) startButton.addEventListener("click", startRecipeApp);

if(newMealButton) newMealButton.addEventListener("click", loadNewMeal);
if(categorySelect) categorySelect.addEventListener("change", loadNewMeal);

document.addEventListener("DOMContentLoaded", () => {
  chooseCategories();
});
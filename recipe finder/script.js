const searchBtn = document.getElementById("searchBtn");
const recipeContainer = document.getElementById("recipeContainer");

searchBtn.addEventListener("click", getRecipes);

async function getRecipes() {

    const userInput = document.getElementById("recipeInput").value.trim();

    if (userInput === "") {
        alert("Please type something first 💕");
        return;
    }

    recipeContainer.innerHTML = "<h2>Loading...</h2>";

    try {

        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`
        );

        const data = await response.json();

        recipeContainer.innerHTML = "";

        if (data.meals === null) {
            recipeContainer.innerHTML =
                `<p class="not-found">No recipe found 😢</p>`;
            return;
        }

        data.meals.forEach(function(meal) {

            let ingredientList = "";

            for (let i = 1; i <= 6; i++) {

                let item = meal[`strIngredient${i}`];

                if (item && item.trim() !== "") {
                    ingredientList += `• ${item}<br>`;
                }
            }

            const card = document.createElement("div");
            card.className = "recipe-card";

            card.innerHTML = `
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}">

                <div class="recipe-info">

                    <h3>${meal.strMeal}</h3>

                    <p>
                        <strong>Instructions:</strong><br>
                        ${meal.strInstructions.slice(0, 120)}...
                    </p>

                    <div class="ingredients">
                        <strong>Ingredients:</strong><br>
                        ${ingredientList}
                    </div>

                </div>
            `;

            recipeContainer.appendChild(card);
        });

    } catch (error) {

        recipeContainer.innerHTML =
            `<p class="not-found">Something went wrong 😭</p>`;

        console.log(error);
    }
}
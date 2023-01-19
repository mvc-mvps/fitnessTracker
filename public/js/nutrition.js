const { doc } = require("prettier");

const newSubmit = document.getElementById('newFoodSubmit');
newSubmit.addEventListener('click', function () {
  newFoodHandler();
});
// const searchButton = document.getElementById('search-button');
// const nutritionSearchInput = document.querySelector('input').value;
// const postNutrition = async () => {

//   const response = await fetch('/api/nutrition').then((data) => console.log(data));

//   if (response.ok) {
//     alert('Nutrition Data pull successful');
//   } else {
//     console.log(response);
//   }
// };

// searchButton.addEventListener('click', function (event) {
//   event.preventDefault();

//   console.log("search input: ", );
//   postNutrition();
// });

const nutritionSearchHandler = async () => {
  const nutritionSearchInput = document
    .getElementById('food-input')
    .value.trim();
  if (nutritionSearchInput) {
    const response = await fetch('/api/nutrition', {
      method: 'POST',
      body: JSON.stringify({ nutritionSearchInput }),
      headers: { 'Content-Type': 'application/json' },
    }).then(function (nutritionData) {
      console.log(nutritionData);
    });
    if (response.ok) {
      console.log(data);
    } else {
      console.log('keep trying');
    }
  }
};
const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', function () {
  nutritionSearchHandler();
});
const body = document.getElementById('food-output');

// const newFoodHandler = async () => {
//   const name = document.querySelector('#newFoodName').value.trim();
//   const calories = document.querySelector('#newFoodCalories').value.trim();
//   const protein = document.querySelector('#newFoodProtein').value.trim();
//   const carbs = document.querySelector('#newFoodCarbs').value.trim();
//   const serving = document.querySelector('#food-servings').value.trim();

//   if(name && calories && protein && carbs && serving) {
//     console.log(serving);
//     const response = await fetch('/api/nutrition/add', {
//       method: 'POST',
//       body: JSON.stringify({ name, calories, protein, carbs, serving }),
//       headers: { 'Content-Type': 'application/json' },
//     });
//     if (response.ok) {
//       alert('New Food Added :)');
//     } else {
//       alert('Something went wrong :(');
//     }
//   }

// };

addFoodHandler = async () => {
  const name = document.getElementById('newFoodName');
  const calories = document.getElementById('newFoodCalories');
  const protein = document.getElementById('newFoodProtein');
  const carbs = document.getElementById('newFoodCarbs');
  const serving = document.getElementById('newFoodServing');

  if(name && calories && protein && carbs && serving) {
    const response = await fetch('/api/')
  }
 }

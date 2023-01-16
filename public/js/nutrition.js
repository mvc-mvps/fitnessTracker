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

const newFoodHandler = async () => {
  const newName = document.getElementById('newFoodName');
  const newCalories = document.getElementById('newFoodCalories');
  const newProtein = document.getElementById('newFoodProtein');
  const newCarbs = document.getElementById('newFoodCarbs');
  const newServing = document.getElementById('newFoodServing');

  if(newName && newCalories && newProtein && newCarbs && newServing) {
    const response = await fetch('/api/nutrition/add', {
      method: 'POST',
      body: JSON.stringify({ newName, newCalories, newProtein, newCarbs, newServing }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      alert('New Food Added :)');
    } else {
      alert('Something went wrong :(');
    }
  }

};

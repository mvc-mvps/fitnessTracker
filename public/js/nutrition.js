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
  const nutritionSearchInput = document.getElementById('food-input').value.trim();
  console.log(nutritionSearchInput);
  if (nutritionSearchInput) {
    const res = await fetch('/api/nutrition', {
      method: 'POST',
      body: JSON.stringify({ nutritionSearchInput }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (res.ok) {
      console.log('working');
      console.log('food-input: ',nutritionSearchInput);
    } else {
      console.log('keep trying');
    }
  }
};
const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', function() {
  nutritionSearchHandler();
});

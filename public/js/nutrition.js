const searchButton = document.getElementById('search-button');
const nutritionSearchInput = document.querySelector('#food-input').value.trim();

const postNutrition = async () => {

  const response = await fetch('/api/nutrition').then((data) => data.json());

  if (response.ok) {
    alert('Nutrition Data pull successful');
  } else {
    alert(response.statusText);
  }
};

searchButton.addEventListener('click', function (event) {
  event.preventDefault();
  console.log("search input: ", nutritionSearchInput);
  postNutrition();
});

// const nutritionSearchHandler = async (buttonClick) => {
//   buttonClick.preventDefault();
//   const nutritionSearchInput = document.getElementById('#food-input').value.trim();
//   if (nutritionSearchInput) {
//     const res = await fetch('/api/nutrition', {
//       method: 'POST',
//       body: JSON.stringify({ nutritionSearchInput }),
//       headers: { 'Content-Type': 'application/json' },
//     });
//     if (res.ok) {
//       console.log('success');
//     } else {
//       console.log('keep trying');
//     }
//   }
// };

// document
//   .querySelector('#food-input')
//   .addEventListener('click', nutritionSearchHandler);

// const requestUrl = 'https://api.nutritionix.com/v1_1/search/';
// const searchInput = document.getElementById('foodInput');
// const resultParams = '?results=0:20&fields=item_name,brand_name,item_id,nf_calories,nf_protein';
// const appIdAndKey = process.env.APP_ID_KEY;
const searchButton = document.getElementById('search-button');


// const nutritionData = () => {
// let request = `${requestUrl}${searchInput}${resultParams}${appIdAndKey}`
//   console.log(request);
//   fetch(request)
//     .then(function (res) {
//       return res.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       for(i = 0; i < data.hit.length; i++) {
//       const brand = data.hits[i].fields.brand_name;
//       const calories = data.hits[i].fields.nf_calories;
//       const protein = data.hits[i].fields.nf_protein;
//       console.log(brand);
//       console.log(calories);
//       console.log(protein);
//       }
//     });
// };

// document
//   .querySelector('#foodInput-form')
//   .addEventListener('submit', function() {
//     nutritionData();
//   });

const postNutrition = async () => {
  const response = await fetch('/api/nutrition', {
    method: 'POST',
    // headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    alert("Nutrition Data pull successful");
  } else {
    alert(response.statusText);
  }
};

searchButton.addEventListener('click', function(event) {
  event.preventDefault();
  console.log('testing');
  postNutrition();
});
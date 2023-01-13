const requestUrl = 'https://api.nutritionix.com/v1_1/search/';
const searchInput = document.getElementById('foodInput');
const resultParams = '?results=0:20&fields=item_name,brand_name,item_id,nf_calories,nf_protein';
const appIdAndKey = '&appId=E77012d9&appKey=92d7491ebf927740552c294741b0472a-';
const searchButton = document.getElementById('search-button');


const nutritionData = () => {
let request = `${requestUrl}${searchInput}${resultParams}${appIdAndKey}`
  console.log(request);
  fetch(request)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      for(i = 0; i < data.hit.length; i++) {
      const brand = data.hits[i].fields.brand_name;
      const calories = data.hits[i].fields.nf_calories;
      const protein = data.hits[i].fields.nf_protein;
      console.log(brand);
      console.log(calories);
      console.log(protein);
      }
    });
};

// document
//   .querySelector('#foodInput-form')
//   .addEventListener('submit', function() {
//     nutritionData();
//   });

searchButton.addEventListener('submit', function() {
  console.log('testing');
});
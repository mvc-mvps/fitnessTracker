//do the fetch from the API in the nutrition routes controller page

const { Nutrition } = require('../../models');
const router = require('express').Router();

// const displayBrand = document.getElementById('brand-display');
// const displayCalories = document.getElementById('calorie-display');
// const displayProtein = document.getElementById('protein-display');
// const searchButton = document.getElementById('search-button');

// base inputs for request from api
const requestUrl = 'https://api.nutritionix.com/v1_1/search/';
const searchInput = 'mcdonalds';
const resultParams =
  '?results=0:20&fields=item_name,brand_name,item_id,nf_calories,nf_protein';
const appIdAndKey = '&appId=E77012d9&appKey=92d7491ebf927740552c294741b0472a-';

// //   const username = document.querySelector('#email-login').value.trim();
// // const url = "https://api.nutritionix.com/v1_1/search/mcdonalds?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=E77012d9&appKey=92d7491ebf927740552c294741b0472a-"

// let query = document.querySelector("#foodInput").value.trim();

let request = `${requestUrl}${searchInput}${resultParams}${appIdAndKey}`;

const nutritionData = () => {
  console.log(request);
  fetch(request)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      const brand = data.hits[0].fields.brand_name;
      const calories = data.hits[0].fields.nf_calories;
      console.log(brand);
      console.log(calories);
    });
};
nutritionData(request);

// router.post('/', async (req, res) => {
//     try {
//       const nutritionData = await Nutrition.create({
//       brand: req.body.hits[0].fields.brand_name,
//       calories: req.body.hits[0].fields.nf_calories,
//     });
//     // if the dish is successfully created, the new response will be returned as json
//     res.status(200).json(nutritionData)
//   } catch (err) {
//     res.status(400).json(err);
//   }
//   });

// router.post('/', async (req, res) => {
//   res.render(console.log(foodSearch(request)));
//   res.render('console.log(foodSearch(request))');
// });

// router.get('/', async (req, res) => {
//   try {
//     const plannerData = await Planner.findAll({
//       include: [{ model: Nutrition }, { model: Exercise }],
//     });
//     res.status(200).json(plannerData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });



module.exports = router;

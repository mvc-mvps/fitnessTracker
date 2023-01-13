//do the fetch from the API in the nutrition routes controller page

const { Nutrition } = require('../../models');
const router = require('express').Router();
const axios = require('axios');
const path = require('path');
const express = require('express');

// const displayBrand = document.getElementById('brand-display');
// const displayCalories = document.getElementById('calorie-display');
// const displayProtein = document.getElementById('protein-display');
// const searchButton = document.getElementById('search-button');

// base inputs for request from api
const requestUrl = 'https://api.nutritionix.com/v1_1/search/';
const searchInput = document.querySelector('#foodInput').value.trim();
const resultParams =
  '?results=0:20&fields=item_name,brand_name,item_id,nf_calories,nf_protein';
const appIdAndKey = process.env.APP_ID_KEY;

// //   const username = document.querySelector('#email-login').value.trim();

// let query = document.querySelector("#foodInput").value.trim();

let request = `${requestUrl}${searchInput}${resultParams}${appIdAndKey}`;

const getNutritionDataa = () => {
  axios
    .get(request)
    .then((response) => {
      // Code for handling the response
      console.log(response.data.hits[0].fields.brand_name);
      data = response.data.hits[0];
      express.use('/', function(req, res, next){
        res.send({"name":"GeeksforGeeks"});
        next();
     });
    })
    .catch((error) => {
      // Code for handling the error
      console.error(error);
    });
};

// const getNutritionData = () => {
//   console.log(request);
//   fetch(request)
//     .then(function (res) {
//       return res.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       const brand = data.hits[0].fields.brand_name;
//       const calories = data.hits[0].fields.nf_calories;
//       console.log(brand);
//       console.log(calories);
//     });
// };
// getNutritionData(request);

router.post('/', async (req, res) => {
  try {
    getNutritionDataa();
    const getNutritionData = await Nutrition.create({
      name: req.body.hits[0].fields.item_name,
      calories: req.body.hits[0].fields.nf_calories,
    });
    // if the dish is successfully created, the new response will be returned as json
    res.status(200).json(getNutritionData);
  } catch (err) {
    res.status(400).json(err);
  }
});

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

//do the fetch from the API in the nutrition routes controller page

const router = require('express').Router();
const Nutrition = require('../../models/Nutrition');
const axios = require('axios');
const path = require('path');
const express = require('express');
const sequelize = require('./../../config/connection');
// base inputs for request from api
const requestUrl = 'https://api.nutritionix.com/v1_1/search/';
const resultParams =
  '?results=0:20&fields=item_name,brand_name,item_id,nf_calories,nf_protein';
const appIdAndKey = '&appId=E77012d9&appKey=92d7491ebf927740552c294741b0472a-';

// router.post('/', async (req, res) => {
//   console.log('food-input backend: ', req.body.nutritionSearchInput);
//   axios
//     .get(
//       `${requestUrl}${req.body.nutritionSearchInput}${resultParams}${appIdAndKey}`
//     )
//     .then((response) => {
//       // Code for handling the response
//       console.log('firing');
//       let data = response.data.hits[0];
//       res.render('nutrition', (apiData = data));
//     });
//   // if the dish is successfully created, the new response will be returned as json
//   res.status(200).json();
// });

// router.post('/', async (req, res) => {
//   try {
//     const foodData = await Nutrition.create({
//       // name: req.body.nutritionSearchInput,
//       name: 'apple',
//     });
//     // if the dish is successfully created, the new response will be returned as json
//     console.log(foodData);
//     res.status(200).json(foodData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

router.post('/', async (req, res) => {

  sequelize.query(`SELECT * FROM nutrition WHERE name LIKE '${req.body.nutritionSearchInput}'`, (err, rows, fields) => {
    if (err) {
      throw err;
    } else {
     console.log('success');
    }
  })
  .then(function (data) {
    res.send(data);
  })
});

module.exports = router;

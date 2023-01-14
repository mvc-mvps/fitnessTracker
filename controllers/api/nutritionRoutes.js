//do the fetch from the API in the nutrition routes controller page

const { Nutrition } = require('../../models');
const router = require('express').Router();
const axios = require('axios');
const path = require('path');
const express = require('express');

// base inputs for request from api
const requestUrl = 'https://api.nutritionix.com/v1_1/search/';
const resultParams =
  '?results=0:20&fields=item_name,brand_name,item_id,nf_calories,nf_protein';
const appIdAndKey = '&appId=E77012d9&appKey=92d7491ebf927740552c294741b0472a-';

router.post('/', async (req, res) => {
  axios.get(`${requestUrl}${req.body.nutritionSearchInput}${resultParams}${appIdAndKey}`).then((response) => {
    // Code for handling the response
    console.log('firing');
    let data = response.data.hits[0];
    res.render('nutrition', (apiData = data));
  });
  // if the dish is successfully created, the new response will be returned as json
  res.status(200).json();

});

module.exports = router;

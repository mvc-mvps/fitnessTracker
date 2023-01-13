//Getting errors cannot use import and cannot use require
// import axios from 'axios';
// const axios = require('axios');

// const path = require('path');
// const express = require('express');

const searchButton = document.getElementById('search-button');
const searchInput = document.querySelector('#foot-input').value.trim();
const resultsContainer = document.getElementById('data-container');

const requestUrl = 'https://api.nutritionix.com/v1_1/search/';
const resultParams = '?results=0:20&fields=item_name,brand_name,item_id,nf_calories,nf_protein';
//need api key in env file
// const appIdAndKey = process.env.APP_ID_KEY;

let request = `${requestUrl}${searchInput}${resultParams}`;

//need api key in env file
// let request = `${requestUrl}${searchInput}${resultParams}${appIdAndKey}`;

const getNutritionData = () => {
  fetch(request)
  .then(function (responseNutrition) {
    return responseNutrition.json();
  })
  .then(function (data) {
    console.log(data);
      // Code for handling the response
      for (i = 0; i < data.hits.length; i++) {
        var name = data.hits[i].fields.item_name;
        var brand = data.hits[i].fields.brand_name;
        var calories = data.hits[i].fields.nf_calories;
        var protein = data.hits[i].fields.nf_protein;
        console.log(name);
        console.log(brand);
        console.log(calories);
        console.log(protein);
        var nutritionCard = document.createElement('div');
        var foodName = document.createElement('p');
        var foodBrand = document.createElement('p');
        var foodCalories = document.createElement('p');
        var foodProtein = document.createElement('p');
        var plannerAdd = document.createElement('button');
        //Add code to set attributes to cards for styling
        resultsContainer.appendChild(nutritionCard);
        nutritionCard.appendChild(foodName);
        nutritionCard.appendChild(foodBrand);
        nutritionCard.appendChild(foodCalories);
        nutritionCard.appendChild(foodProtein);
        nutritionCard.appendChild(plannerAdd);
        foodName.textContent = "Name: " + name;
        foodBrand.textContent = "Brand: " + brand;
        foodCalories.textContent = "Calories: " + calories;
        foodProtein.textContent = "Protein: " + protein;
        plannerAdd.textContent = "Add Food to Planner";
      }
    })
    .catch((error) => {
      // Code for handling the error
      console.error(error);
    });
}

// };
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
    headers: { 'Content-Type': 'application/json' },
  });
  console.log(response);
  if (response.ok) {
    alert("Nutrition Data pull successful");
  } else {
    alert(response.statusText);
  }
};

searchButton.addEventListener('click', function (event) {
  event.preventDefault();
  console.log(searchInput);
  getNutritionData();
});
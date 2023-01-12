//do the fetch from the API in the nutrition routes controller page

const router = require('express').Router();
// const { Nutrition } = require('../../models');


// base inputs for request from api
const baseUrl = 'https://api.nutritionix.com/v1_1/search/'
const userFood = 'chicken'
const bseUrl2 = '?results=0:20&fields=item_name,brand_name,item_id,nf_calories,nf_protein&appId=E77012d9&appKey=92d7491ebf927740552c294741b0472a-'
// //   const username = document.querySelector('#email-login').value.trim();
// // const url = "https://api.nutritionix.com/v1_1/search/mcdonalds?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=E77012d9&appKey=92d7491ebf927740552c294741b0472a-"

// let query = document.querySelector("#foodInput").value.trim();
// const url = "https://api.nutritionix.com/v1_1/search/"+query;

// router.post('/nutrition', async (req, res) => {
    
// });

const foodSearch = () => {
    let request = `${baseUrl}${userFood}${bseUrl2}`

    fetch(request)
        .then((res => {
            return res.json();
        }));

};

module.exports = router;
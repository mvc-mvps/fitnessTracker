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

// get all nutrition items
router.get(
  '/',
  // withAuth
  (req, res) => {
    Nutrition.findAll({
      // where: {
      //     user_id: req.session.user_id
      // },
      attributes: ['id', 'name', 'protein', 'calories', 'serving'],
      // ,
      // include: [
      //     {
      //         model: User,
      //         attributes: ['username']
      //     }
      // ]
    })
      .then((nutritionData) => {
        const nutritionitems = nutritionData.map((nutritionitem) =>
          nutritionitem.get({ plain: true })
        );
        res.render('nutrition-homepage', { nutritionitems });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }
);

router.get('/', (req, res) => {
  Nutrition.findAll({
    attributes: ['calories'],
  }).then((caloriData) => {
    const calorieData = caloriData.map((calori) => calori.get({ plain: true }));
    res.json(calorieData);
  });
});
// create new nutrition item
router.post('/add', (req, res) => {
  Nutrition.create({
    name: req.body.name,
    protein: req.body.protein,
    calories: req.body.calories,
    serving: req.body.serving,
  })
    .then((nutrition) => {
      res.status(200).json(nutrition);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});
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

// router.get('/updatefood/:id', (req, res) => {
//   res.render('updatefood');
// });

router.put('/updateNutrition/:id', (req, res) => {
  console.log(req.body.name);
  try {
    Nutrition.update(
      {
        name: req.body.name,
        calories: req.body.calories,
        protein: req.body.protein,
        serving: req.body.serving,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then((nutritionItem) => {
        res.json(nutritionItem);
        // res.render('nutrition-homepage', { nutritionItem });
        // console.log(nutritionItem);
      })
      .catch((err) => {
        res.json(err);
      });
  } catch (err) {
    res.json(err);
  }
});

router.post('/', async (req, res) => {
  const nutritionData = Nutrition.findOne({
    where: { name: req.body.nutritionSearchInput },
  });

  if (nutritionData === null) {
    res.status(400).json({ message: 'not a listed food' });
    return;
  } else {
    res.send(nutritionData);
  }
});

// router.post('/add', async (req, res) => {
//   try {
//     console.log(req.body);
//     const newtritionData = await Nutrition.create(req.body);

//     res.status(200).json(newtritionData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

router.delete('/deletefood/:id', (req, res) => {
  Nutrition.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedFood) => {
      res.json(deletedFood);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;

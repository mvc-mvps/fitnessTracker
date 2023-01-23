const router = require('express').Router();
const Nutrition = require('../../models/Nutrition');
const axios = require('axios');
const path = require('path');
const express = require('express');
const sequelize = require('./../../config/connection');

// get all nutrition items
router.get('/', (req, res) => {
  Nutrition.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: ['id', 'name', 'protein', 'calories', 'serving'],
  })
    .then((nutritionData) => {
      const nutritionitems = nutritionData.map((nutritionitem) =>
        nutritionitem.get({ plain: true })
      );
      res.json(nutritionitems);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// create new nutrition item
router.post('/add', (req, res) => {
  Nutrition.create({
    user_id: req.session.user_id,
    name: req.body.name,
    protein: req.body.protein,
    calories: req.body.calories,
    serving: req.body.serving,
  })
    .then((nutrition) => {
      res.status(200).json(nutrition);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get('/findone/:id', (req, res) => {
  Nutrition.findOne({
    where: {
      id: req.params.id,
      user_id: req.session.user_id,
    },
  })
    .then((output) => {
      res.status(200).json.toString(output);
      res.send(output);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put('/updateNutrition/:id', (req, res) => {
  console.log(req.body.name);
  Nutrition.update(
    {
      calories: req.body.calories,
      protein: req.body.protein,
      serving: req.body.serving,
    },
    {
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    }
  )
    .then((nutritionItem) => {
      res.json(nutritionItem);
    })
    .catch((err) => {
      res.json(err);
    });
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

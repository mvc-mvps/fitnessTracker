const router = require('express').Router();
const { request } = require('express');
const { User, Planner, Nutrition } = require('../models');
const withAuth = require('../utils/auth');

// renders login page
router.get('/', (req, res) => {
  res.render('login');
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('homepage');
    return;
  }
  res.render('login');
});

//renders the signup page
router.get('/signup', (req, res) => {
  res.render('signup');
});

//renders homepage with nutrition data
router.get('/homepage', async (req, res) => {
  await Planner.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: ['date', 'goal', 'completed'],
  })
    .then((workoutData) => {
      const exerciseitems = workoutData.map((exerciseitem) =>
        exerciseitem.get({ plain: true })
      );
      res.render('homepage', { data1: exerciseitems });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//renders nutrition-homepage with all of the nutrition data on it
router.get('/nutrition-homepage', (req, res) => {
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
      res.render('nutrition-homepage', { nutritionitems });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//renders exercise-homepage with all of the exercise data on it
router.get('/exercise-homepage', (req, res) => {
  Planner.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: ['id', 'date', 'type', 'goal', 'completed'],
  })
    .then((plannerData) => {
      const planneritems = plannerData.map((planneritem) =>
        planneritem.get({ plain: true })
      );
      res.render('exercise-homepage', { planneritems });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get('/addexercise', (req, res) => {
  res.render('addexercise');
});

router.get('/updateexercise/:id', (req, res) => {
  res.render('updateexercise');
});

router.get('/addfood', (req, res) => {
  res.render('addfood');
});

router.get('/updatefood/:id', (req, res) => {
  res.render('updatefood');
});

module.exports = router;

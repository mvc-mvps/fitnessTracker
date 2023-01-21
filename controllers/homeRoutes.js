const router = require('express').Router();
const { request } = require('express');
const { User, Planner, Nutrition } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  res.render('login');
});

router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((user) => user.get({ plain: true }));

    res.render('/api/planner', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('homepage');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/homepage', async (req, res) => {
  await Nutrition.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: ['id', 'name', 'protein', 'calories', 'serving'],
  })
    .then((nutritionData) => {
      const nutritionitems = nutritionData.map((nutritionitem) =>
        nutritionitem.get({ plain: true })
      );
      // console.log(data);
      res.render('homepage', { data1: nutritionitems });
      // res.json(nutritionitems);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });

    // await Planner.findAll({
    //   where: {
    //     user_id: req.session.user_id
    // },
    //   attributes: ['id', 'date', 'type', 'goal', 'completed'],
    // })
    //   .then((plannerData) => {
    //     const planneritems = plannerData.map((planneritem) =>
    //       planneritem.get({ plain: true })
    //     );
    //     res.send({ data2: planneritems });
    //     // res.json(planneritems);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     res.status(500).json(err);
    //   });
});

router.get('/nutrition', (req, res) => {
  res.render('nutrition');
});

router.get('/exercise-homepage', (req, res) => {
  res.render('exercise-homepage');
});

router.get('/nutrition-homepage', (req, res) => {
  res.render('nutrition-homepage');
});

router.get('/addexercise', (req, res) => {
  res.render('addexercise');
});

router.get('/updateexercise', (req, res) => {
  res.render('updateexercise');
});

router.get('/addfood', (req, res) => {
  res.render('addfood');
});

router.get('/updatefood/:id', (req, res) => {
  res.render('updatefood');
});

module.exports = router;

const router = require('express').Router();
const { User, Planner } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((user) => user.get({ plain: true }));

    res.render('homepage', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/homepage', (req, res) => {
  res.render('homepage');
});

router.get('/nutrition', (req, res) => {
  res.render('nutrition');
});

router.get('/exercise', (req, res) => {
  res.render('exercise');
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

router.get('/updatefood', (req, res) => {
  res.render('updatefood');
});



// router.get('/', async (req, res) => {
//   try {
//     const plannerData = await Planner.findAll({
//       order: [['date']],
//     });

//     const planners = plannerData.map((planner) => planner.get({ plain: true }));

//     res.render('homepage', {
//       planners,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;

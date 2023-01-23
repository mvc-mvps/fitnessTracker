const router = require('express').Router();
const { Planner, User } = require('../../models');
const withAuth = require('../../utils/auth');

// The `/api/planner` endpoint

// get all planner items
router.get('/', (req, res) => {
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
      res.json(planneritems);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// display update exercise with correct id value
router.get('/updateexercise/:id', (req, res) => {
  res.render('updateexercise');
});

// create new planner item
router.post('/add', (req, res) => {
  Planner.create({
    type: req.body.type,
    date: req.body.date,
    goal: req.body.goal,
    completed: req.body.completed,
    user_id: req.session.user_id,
  })
    .then((planner) => {
      res.status(200).json(planner);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// update one planner item by its `id` value

router.put('/updateexercise/:id', async (req, res) => {
  const plannerData = await Planner.update(
    {
      goal: req.body.goal,
      completed: req.body.completed,
      user_id: req.session.user_id,
    },
    {
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    }
  )
    .then((updatedExercise) => {
      res.status(200).json(updatedExercise);
    })
    .catch((err) => res.status(500).json(err));
});

// delete one planner item by its `id` value
router.delete('/delete/:id', (req, res) => {
  Planner.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedPlanner) => {
      res.json(deletedPlanner);
    })
    .catch((err) => res.json(err));
});

module.exports = router;

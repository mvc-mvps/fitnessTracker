const router = require('express').Router();
const { Planner, User } = require('../../models');
const withAuth = require('../../utils/auth');

// The `/api/planner` endpoint

// get all planner items
router.get('/', (req, res) => {
  Planner.findAll({
    attributes: ['id', 'date', 'type', 'goal', 'completed'],
  })
    .then((plannerData) => {
      const planneritems = plannerData.map((planneritem) =>
        planneritem.get({ plain: true })
      );
      res.render('exercise-homepage', { planneritems });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

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
    user_id: req.body.user_id,
  })
    .then((planner) => {
      res.status(200).json(planner);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// update one planner item by its `id` value

router.put('/updateexercise/:id', async (req, res) => {
  const plannerData = await Planner.update(
    {
      type: req.body.type,
      date: req.body.date,
      goal: req.body.goal,
      completed: req.body.completed,
    },
    {
      where: {
        id: req.params.id,
      },
    }

    // if (!plannerData) {
    //   res.status(404).json({ message: 'No planner item found with this id!' });
    //   return;
    // }
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
//     if (!plannerData) {
//       res.status(404).json({ message: 'No planner item found with this id!' });
//       return;
//     }

//     res.status(200).json(plannerData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;

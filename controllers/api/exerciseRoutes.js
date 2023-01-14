const router = require('express').Router();
const { Exercise } = require('../../models');

// The `/api/exercise` endpoint

// get all exercises
router.get('/', async (req, res) => {
  try {
    const exerciseData = await Exercise.findAll({
    });
    res.status(200).json(exerciseData);
    const exercises = exerciseData.map((exercise) => exercise.get({ plain: true }));
    res.render('exercise', { exercises });
  } catch (err) {
    res.status(500).json(err);
  }
});

// find a single exercise by its `id`
router.get('/:id', async (req, res) => {
  try {
    const exerciseData = await Exercise.findByPk(req.params.id);
    if (!exerciseData) {
      res.status(404).json({ message: 'No exercise found with this id!' });
      return;
    }
    res.status(200).json(exerciseData);
    const exercise = exerciseData.get({ plain: true });
    res.render('exercise', exercise);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create new exercise
router.post('/', (req, res) => {
  Exercise.create({
    type: req.body.type,
    user_id: req.body.user_id
  })
    .then((exercise) => {
      res.status(200).json(exercise);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// update one exercise by its `id` value
  router.put('/:id', async (req, res) => {
    try {
      const exerciseData = await Exercise.update({
        where: {
          id: req.params.id
        }
      });
  
      if (!exerciseData) {
        res.status(404).json({ message: 'No exercise found with this id!' });
        return;
      }

      res.status(200).json(exerciseData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // delete one exercise by its `id` value
  router.delete('/:id', async (req, res) => {
  try {
    const exerciseData = await Exercise.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!exerciseData) {
      res.status(404).json({ message: 'No exercise found with this id!' });
      return;
    }

    res.status(200).json(exerciseData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

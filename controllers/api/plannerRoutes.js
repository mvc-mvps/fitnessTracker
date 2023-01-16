const router = require('express').Router();
const Planner = require('../../models/Planner');

// The `/api/planner` endpoint

// get all planner items
router.get('/', async (req, res) => {
    try {
        const plannerData = await Planner.findAll({
        });
        res.status(200).json(plannerData);
        const plans = plannerData.map((plan) => plan.get({ plain: true }));
        res.render('homepage', { plans });
    } catch (err) {
        res.status(500).json(err);
    }
});

// find a single planner item by its `id`
router.get('/:id', async (req, res) => {
    try {
        const plannerData = await Planner.findByPk(req.params.id, {
        });
        if (!plannerData) {
            res.status(404).json({ message: 'No planner item found with this id!' });
            return;
        }
        res.status(200).json(plannerData);
        const plan = plannerData.get({ plain: true });
        res.render('homepage', plan);
    } catch (err) {
        res.status(500).json(err);
    }
});

// create new planner item
router.post('/add', (req, res) => {
    Planner.create({
        type: req.body.type,
        date: req.body.date,
        goal: req.body.goal,
        completed: req.body.completed,
        user_id: req.body.user_id
    })
        .then((planner) => {
            res.status(200).json(planner);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
});

// router.post('/', async (req, res) => {
//     try {
//       const exerciseInput = await Planner.create(req.body);
  
//       req.session.save(() => {
//         req.session.planner_id = exerciseInput.id;
//         res.status(200).json(exerciseInput);
//       });
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   });

// router.post('/add', async (req, res) => {
//     try {
//       console.log(req.body);
//       const plannerData = await Planner.create(req.body);
  
//       res.status(200).json(plannerData);
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   });

// update one planner item by its `id` value
router.put('/:id', async (req, res) => {
    try {
        const plannerData = await Planner.update({
            where: {
                id: req.params.id
            }
        });

        if (!plannerData) {
            res.status(404).json({ message: 'No planner item found with this id!' });
            return;
        }

        res.status(200).json(plannerData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// delete one planner item by its `id` value
router.delete('/:id', async (req, res) => {
    try {
        const plannerData = await Planner.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!plannerData) {
            res.status(404).json({ message: 'No planner item found with this id!' });
            return;
        }

        res.status(200).json(plannerData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;

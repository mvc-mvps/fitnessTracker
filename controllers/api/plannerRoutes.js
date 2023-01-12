const router = require('express').Router();
const { Planner, Exercise, Nutrition } = require('../../models');

// The `/api/planner` endpoint

// get all planner items
router.get('/', async (req, res) => {
    try {
        const plannerData = await Planner.findAll({
            include: [{ model: Nutrition }, { model: Exercise }],
        });
        res.status(200).json(plannerData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// find a single planner item by its `id`
router.get('/:id', async (req, res) => {
    try {
        const plannerData = await Planner.findByPk(req.params.id, {
            include: [{ model: Nutrition }, { model: Exercise }], 
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

// create new planner item
router.post('/', (req, res) => {
    Planner.create({
        date: req.body.date,
        exercisegoal: req.body.exercisegoal,
        exercisecompleted: req.body.exercisecompleted,
        exercise_id: req.body.exercise_id,
        nutrition_id: req.body.nutrition_id,
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

const router = require('express').Router();
const { Location, Traveller, Trip } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const travelerData = await Traveller.findAll();
        res.json(travelerData);
    } catch(err) {
        console.error(err);
        res.json(err);
    }
})

router.get('/:id', async (req, res) => {
    try {
        const travelerData = await Traveller.findByPk(req.params.id, {
            include: [{ 
            model: Trip,
            include: Location, 
        }]
        });
        res.json(travelerData);
    } catch(err) {
        console.error(err);
        res.json(err);
    }
})

router.post('/', async (req, res) => {
    try {
        const travelerData = await Traveller.create(req.body);
        res.json(travelerData);
    } catch(err) {
        console.error(err);
        res.json(err);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const travelerData = await Traveller.destroy({ where: {id: req.params.id }});
        res.json(travelerData);
    } catch(err) {
        console.error(err);
        res.json(err);
    }
})


module.exports = router;
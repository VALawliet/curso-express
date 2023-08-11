
const express = require('express');
const CategoriesService = require('./../services/categories.service.js');


const router = express.Router();
const service = new CategoriesService();

router.get('/', (req, res)=>{

    let categories = service.find();
    res.json(categories);
})

router.get('/:id', (req, res)=>{

    const { id } = req.params;

    let category = service.findOne(id)

    res.json(category);
})

router.post('/', (req, res)=>{
    
    const bodyPost = req.body;

    let confirmacion = service.create(bodyPost);

    res.status(201).json(confirmacion);
});


router.patch('/:id', (req, res)=>{

    const { id } = req.params;

    const bodyPatch = req.body;

    let confirmation = service.update(id, bodyPatch);

    res.json(confirmation)
})

router.delete('/:id', (req, res)=>{
    const { id } = req.params;

    let confirmacion = service.delete(id);

    res.json(confirmacion);
})
module.exports = router
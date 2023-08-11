
const express = require('express');
const CategoriesService = require('./../services/categories.service.js');


const router = express.Router();
const service = new CategoriesService();

router.get('/', async (req, res)=>{

    try{
        let categories = await service.find();
        res.json(categories);
    }catch(err){

        res.json({
            error: err.message
        })
    }
    
})

router.get('/:id', async (req, res)=>{

    try{
        const { id } = req.params;

        let category = await service.findOne(id)

        res.json(category);
    }catch(err){
        res.json({
            error: err.message
        })
    }

    
})

router.post('/', async (req, res)=>{

    try{

        const bodyPost = req.body;

        let confirmacion = await service.create(bodyPost);

        res.status(201).json(confirmacion);
    }catch(err){

        res.status(403).json({
            error: err.message
        })
    }
    
    
});


router.patch('/:id', async (req, res)=>{

    try{
        const { id } = req.params;

        const bodyPatch = req.body;

        let confirmation = await service.update(id, bodyPatch);

        res.json(confirmation)
    
    }catch(err){

        res.status(404).json({
            message: err.message
        })
    }
    
})

router.delete('/:id', async(req, res)=>{

    try{
        const { id } = req.params;

        let confirmacion = await service.delete(id);

        res.json(confirmacion);
    }catch(err){
        
        res.status(404).json({
            message: err.message
        })
    }
    
})
module.exports = router
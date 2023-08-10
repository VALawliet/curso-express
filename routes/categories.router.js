const { faker } = require('@faker-js/faker');
const express = require('express');

const router = express.Router();

router.get('/', (req, res)=>{

    const categoryList = [];

    const { size } = req.params;

    const limit = size || 10;

    for(let i = 0; i < limit; i++){
        categoryList.push({
            name: faker.commerce.productMaterial(),
            productsInCategory: parseInt(faker.commerce.price())
        });
    }

    res.json(categoryList)
})

module.exports = router
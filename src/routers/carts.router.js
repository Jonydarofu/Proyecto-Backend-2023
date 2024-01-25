const express = require('express')

const router = express.Router()

router 
.post('/', (req, res)=>{
    res.send('create carts')
})
.get('/:cid',(req, res)=>{
    res.send('gert carts')
})
.post('/:cid/products/:pid', (req, res)=>{
    res.send ('add product to carts')
})

module.exports= router
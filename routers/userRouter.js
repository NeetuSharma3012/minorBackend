const express = require('express');
const Model = require('../models/UserModel');

const router = express.Router();

router.get('/add' , (req,res) => {
    console.log(req.body);

    new Model (req.body).save()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        if(err?.code === 11000){
            res.status(500).json({message: 'email already registered'});
        }
        else{
            res.status(500).json({message: 'Internal server error'})
        }
        
    });
    
    
});

router.get('/getall', (req, res) => {
    Model.find()

    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
});

module.exports = router;
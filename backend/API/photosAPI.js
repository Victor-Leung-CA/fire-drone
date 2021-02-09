var express = require('express');
var router = express.Router();
let photosModel = require('../models/photos');

/**
 * POST method for raspberry pi to send a collection of photos
 * 
 * @param incidentNum - int
 * @param photos - [{}]
 * 
**/
router.post('/',(req, res, next) => {
    
    //Create a new document/ instance of a model
    const photoCollection = new photosModel({
        incidentNum: req.body.incidentNum,
        photos: req.body.photos
    })

    //Check if there are any duplicate incident numbers
    photosModel.findOne({'incidentNum': req.body.incidentNum})
        .then(searchedPhotoCollection => {
            if(searchedPhotoCollection != null){
                res.status(406).send({error: 'Incident number already exists'})
            }
            else{
                //Upload document to mongoDB database
                photoCollection.save()
                .then(() =>{
                    res.json("Photo collection saved successfully");
                })
                .catch(err => {
                    res.status(400).send(err.message)
                })
            }
        })
        .catch(err => {
            res.error(err.message)
        })

});


/**
 *  GET method to retrieve the desired photo collection.
 * 
 * @param incidentNum - int
 * 
 * @return JSON message/ error
 * 
**/
router.get('/',(req, res, next) => {
    
    const incidentNum = req.body.incidentNum; //Incident number to be referenced, should be an integer starting from 0

    photosModel.findOne({'incidentNum': incidentNum})
        .then(photoCollection => {
            if(photoCollection == null){
                res.status(406).json({error: "No photos found"})
            }
            else{
                res.json(photoCollection);
            }
        })
        .catch(err => {
            res.error(err);
        })
})

module.exports = router;
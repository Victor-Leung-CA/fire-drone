var express = require('express');
var router = express.Router();
let photosModel = require('../models/photos');

/**
 * POST method for raspberry pi to send a collection of photos
 * @module photos/POST
 * 
 * @param {number} incidentNum - Number to keep track of alert/ IFR
 * @param {object[]} photos - Array of photos
 * @param {buffer} photos.data
 * @param {string} photos.dataType
 * @param {string} photos.time
 * @param {object} photos.coordinate
 * @param {number} photos.coordinate.longitutde
 * @param {number} photos.coordinate.latitude
 * 
 * @return {object} Success message
 * @return {object} Error message
 */
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
 * @module photos/GET
 * @param {number} incidentNum - number to reference the alert/IFR
 * @return {object} photoCollection - Collection of photos
 * @return {object} Error message
 */
router.get('/:incidentNum',(req, res, next) => {
    
    photosModel.findOne({'incidentNum': req.params.incidentNum})
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
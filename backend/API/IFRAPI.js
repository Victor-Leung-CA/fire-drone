var express = require('express');
var router = express.Router();
let IFRModel = require('../models/IFR');

/**
 * GET method to find and retrieve existing IFRs based on incidentNum given
 * 
 * @module IFR/GET
 * 
 * @param {number} incidentNum
 * 
 * @return {object} IFR
 */
router.get('/', (req, res, next) => {
    incidentNum = req.body.incidentNum;

    IFRModel.findOne({"incidentNum": incidentNum})
        .then(item => {
            if(item == null){
                res.status(406).send("IFR has not been filled yet");
            }
            else{
                res.json(item);
            }
        })


})

/**
 * POST method to create a new unique IFR (unique incidentNum).
 * IFR should not exist beforehand.
 * 
 * @module IFR/POST
 * 
 * @param {number} incidentNum
 * @param {string} reportedBy
 * @param {number} elevation
 * @param {number} radius
 * @param {number} fireRank
 * @param {number} fuels
 * @param {number} valAtRisk
 * @param {number} wind
 * @param {number} adjFuels
 * @param {number} slope
 * @param {number} aspect
 * @param {number} slopePos
 * @param {number} access
 * @param {number} availWater
 * @param {number} paperTrail
 * @param {string} suspectedCause
 * @param {string} action
 * @param {number} probSuccess
 * @param {number} estCost
 * 
 * @return {object} IFR
 */
router.post('/', (req, res, next) => {

    const IFR = new IFRModel({
        incidentNum: req.body.incidentNum,
        reportedBy: req.body.reportedBy,
        elevation: req.body.elevation,
        radius: req.body.radius,
        fireRank: req.body.fireRank,
        fuels: req.body.fuels,
        valAtRisk: req.body.valAtRisk,
        wind: req.body.wind,
        adjFuels: req.body.adjFuels,
        slope: req.body.slope,
        aspect: req.body.aspect,
        slopePos: req.body.slopePos,
        access: req.body.access,
        availWater: req.body.availWater,
        suspectedCause: req.body.suspectedCause,
        action: req.body.action,
        pobSuccess: req.body.pobSuccess,
        estCost: req.body.estCost
    })
        
})

/**
 * PUT method to update an exisiting IFR
 * 
 * @module IFR/PUT
 * 
 * @param {number} incidentNum
 * 
 * @return {object} IFR
 */
router.post('/', (req, res, next) => {



})
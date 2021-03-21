const mongoose = require('mongoose');
let photoSchema = require('./photos');

//Schema object
const Schema = mongoose.Schema;

const IFRSchema = new Schema({
    // Step 1
    incidentNum: { //Used to search photo collection
        type: Number,
        unique: true, //No duplicate incident numbers
        required: true
    },
    elevation: Number,
    reportedBy: String,

    // Step 2
    radius: Number,
    fuels: Number,
    fireRank: Number,
    //Alpha

    // Step 3
    valAtRisk: Number,
    wind: Number,
    adjFuels: Number,
    slope: Number,
    aspect: Number,
    slopePos: String,
    access: Number,
    availWater: Number,

    // Step 4
    suspectedCause: String,
    action: String,
    pobSuccess: Number,
    estCost: Number

}, {
        timestamps: true //Time the photo collection was logged onto server
});

//Compile model from schema
const IFRModel = mongoose.model('IFRModel', IFRSchema);

module.exports = IFRModel;
const mongoose = require('mongoose');
let photoSchema = require('./photos');

//Schema object
const Schema = mongoose.Schema;

const IFRSchema = new Schema({
    incidentNum: { //Used to search photo collection
        type: Number,
        unique: true, //No duplicate incident numbers
        required: true
    },
    reportedBy: String,
    elevation: Number,
    radius: Number,
    fireRank: Number,
    fuels: Number,
    valAtRisk: Number,
    wind: Number,
    adjFuels: Number,
    slope: Number,
    aspect: Number,
    slopePos: Number,
    access: Number,
    availWater: Number,
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
import React, { useState, useEffect } from 'react';
import Select from "react-select"
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/IFR-form.css";
import errorImg from '../images/server-error.svg'
const getOneSensorData = require("../API/sensorData").getOneSensorData;

const IFRForm = (props) => {
    const [error, setError] = useState(null);
    
    const [sensorDataInfo, setSensorDataInfo] = useState({
        incidentNum: 0,
        coordinates: [{
            longitude: 0,
            latitude: 0,
            time: 0
        }]
    })
    
    const [formInfo, setFormInfo] = useState({
        // Step 1
        incidentNum: sensorDataInfo.incidentNum,
        reportedBy: '',
        elevation: 0,

        // Step 2
        radius: 0,
        fireRank: 0,
        fuels: 0,

        // Step 3
        valAtRisk: 0,
        wind: 0,
        adjFuels: 0,
        slope: 0,
        aspect: 0,
        slopePos: 0,
        access: 0,
        availWater: 0,

        // Step 4
        suspectedCause: '',
        action: '',
        probSuccess: 0,
        estCost: 0
    });


    const handleInputChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setFormInfo(formInfo => ({...formInfo, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formInfo);
    }

    useEffect(() => {
        getOneSensorData(props.match.params.incidentNum)
            .then(data => {
                setSensorDataInfo(data);
                setFormInfo(formInfo => ({...formInfo, incidentNum: data.incidentNum}))
            })
            .catch(error => {
                setError({error: 1, code: error.message});
            })
    }, []);

    if(error){
        return(
            <div className="container-fluid IFR-form-body-error">
                <img className="ErrorImage" src={errorImg} />
                <h2>Oops! There is an error with the server.</h2> <br />
                <h5>Error Code {error.code} </h5>
            </div>
        )
    }
    else{
        return (
            <div className="container-fluid IFR-form-body">
                <div className = "formHeader">
                    <h2>Edit IFR form</h2>
                    <h5>Incident Numer {props.match.params.incidentNum}</h5>
                </div>

                {/* Step 1: General Information */}
                <div className="IFRFormBlock">
                    <h5 className="formBlockTitle">Step 1: General Information</h5>
                    <br className="formBlockBorder"/>
                    <div className="row">
                        <div className="col-md-6 formBlockCol">
                            <p>Incident Number</p>
                            <Select className="formSubmissionSelect" 
                            options={[{value: sensorDataInfo.incidentNum, label: sensorDataInfo.incidentNum}]}/>
                            <p>Date & Time</p>
                            <Select className="formSubmissionSelect"
                            options= {[{value: sensorDataInfo.coordinates[0].time, label: sensorDataInfo.coordinates[0].time}]}/>
                            <p>Elevation (m)</p>
                            <input className="IFRInput" onChange={handleInputChange} type="number" min="0" name="elevation"></input>
                        </div>
                        <div className="col-md-6">
                            <p>Reported By</p>
                            <input className="IFRInput" onChange={handleInputChange} name="reportedBy"></input>
                            <p>Longitude</p>
                            <Select className="formSubmissionSelect"
                            options={ [{value: sensorDataInfo.coordinates[0].longitude, label: sensorDataInfo.coordinates[0].longitude}] }/>
                            <p>Latitude</p>
                            <Select className="formSubmissionSelect"
                            options={ [{value: sensorDataInfo.coordinates[0].latitude, label: sensorDataInfo.coordinates[0].latitude}] }/>
                        </div>
                    </div>
                </div>

                {/* Step 2: Fire Information */}
                <div className="IFRFormBlock">
                    <h5 className="formBlockTitle">Step 2: Fire Information</h5>
                    <br className="formBlockBorder"/>
                    <div className="row">
                        <div className="col-md-6 formBlockCol">
                            <p>Alpha Size</p>
                            <input className="IFRInput" onChange={handleInputChange} type="number" min="0" name="alpha"></input>
                            <p>Fuels</p>
                            <input className="IFRInput" onChange={handleInputChange} type="number" min="0" name="fuels"></input>
                        </div>
                        <div className="col-md-6">
                            <p>Fire Rank</p>
                            <input className="IFRInput" onChange={handleInputChange} type="number" min="0" name="fireRank"></input>
                            <p>Radius (m)</p>
                            <input className="IFRInput" onChange={handleInputChange} type="number" min="0" name="radius"></input>
                        </div>
                    </div>
                </div>

                {/* Step 3: Environmental Factors */}
                <div className="IFRFormBlock">
                    <h5 className="formBlockTitle">Step 3: Environment Factors</h5>
                    <br className="formBlockBorder"/>
                    <div className="row">
                        <div className="col-md-6 formBlockCol">
                            <p>Values at Risk</p>
                            <input className="IFRInput" onChange={handleInputChange} name="valAtRisk"></input>
                            <p>Adjacent Fuels</p>
                            <input className="IFRInput" onChange={handleInputChange} name="adjFuels"></input>
                            <p>Aspect</p>
                            <input className="IFRInput" onChange={handleInputChange} name="aspect"></input>
                            <p>Access</p>
                            <input className="IFRInput" onChange={handleInputChange} name="access"></input>
                        </div>
                        <div className="col-md-6">
                            <p>Wind</p>
                            <input className="IFRInput" onChange={handleInputChange} type="number" min="0" name="wind"></input>
                            <p>Slope</p>
                            <input className="IFRInput" onChange={handleInputChange} type="number" min="0" name="slope"></input>
                            <p>Slope Position</p>
                            <input className="IFRInput" onChange={handleInputChange} name="slopePos"></input>
                            <p>Available Water</p>
                            <input className="IFRInput" onChange={handleInputChange} type="number" min="0" name="availWater"></input>
                        </div>
                    </div>
                </div>


                {/* Step 4: Cause and Action */}
                <div className="IFRFormBlock">
                    <h5 className="formBlockTitle">Step 4: Cause and Action</h5>
                    <br className="formBlockBorder"/>
                    <div className="row">
                        <div className="col-md-6 formBlockCol">
                            <p>Probability of Success (%)</p>
                            <input className="IFRInput" onChange={handleInputChange} type="number" min="0" name="probSuccess"></input>
                            <p>Action Recommended</p>
                            <textarea className="IFRInput" onChange={handleInputChange} name="action" contenteditable="true"></textarea>
                        </div>
                        <div className="col-md-6">
                            <p>Estimated Cost of Control</p>
                            <input className="IFRInput" onChange={handleInputChange} type="number" min="0" name="estCost"></input>
                            <p>Suspected Cause</p>
                            <input className="IFRInput" onChange={handleInputChange} name="suspectedCause"></input>
                        </div>
                    </div>
                </div>

                <button className="btn IFRFormBtn" onClick={handleSubmit}>Submit</button>
            </div>

        );
    }
}

export default IFRForm;
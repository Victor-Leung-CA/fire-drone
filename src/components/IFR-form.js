import React, { useState, useEffect } from 'react';
import Select from "react-select"
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/IFR-form.css";
const getOneSensorData = require("../API/sensorData").getOneSensorData;

const IFRForm = (props) => {
    const [sensorDataInfo, setSensorDataInfo] = useState({
        incidentNum: 0,
        coordinates: [{
            longitude: 0,
            latitude: 0,
            time: 0
        }]
    })
    
    const [formInfo, setFormInfo] = useState({
        incidentNum: sensorDataInfo.incidentNum,
        reportedBy: '',
        elevation: 0,
        radius: 0,
        fireRank: 0,
        fuels: 0,
        valAtRisk: 0,
        wind: 0,
        adjFuels: 0,
        slope: 0,
        aspect: 0,
        slopePos: 0,
        access: 0,
        availWater: 0,
        suspectedCause: '',
        action: '',
        pobSuccess: 0,
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
        getOneSensorData(props.match.params.incidentNum).then(data => {
            setSensorDataInfo(data.data);
            setFormInfo(formInfo => ({...formInfo, incidentNum: data.data.incidentNum}))
        });
    }, []);

    return (
        <div className="container-fluid IFR-form-body">
            <div className = "formHeader">
                <h2>Edit IFR form</h2>
                <h5>Incident Numer {props.match.params.incidentNum}</h5>
            </div>

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
                        options= {[{value: sensorDataInfo.coordinates[0].time, label: sensorDataInfo.coordinates[0].time}]}
                        />
                        <p>Elevation (m)</p>
                        <input className="IFRInput" onChange={handleInputChange} type="number" min="0" name="elevation"></input>
                    </div>
                    <div className="col-md-6">
                        <p>Reported By</p>
                        <input className="IFRInput" onChange={handleInputChange} name="reportedBy"></input>
                        <p>Longitude</p>
                        <Select className="formSubmissionSelect"
                        options={ [{value: sensorDataInfo.coordinates[0].longitude, label: sensorDataInfo.coordinates[0].longitude}] }
                        />
                        <p>Latitude</p>
                        <Select className="formSubmissionSelect"
                        options={ [{value: sensorDataInfo.coordinates[0].latitude, label: sensorDataInfo.coordinates[0].latitude}] }
                        />
                    </div>
                </div>
            </div>

            <div className="IFRFormBlock">
                <h5 className="formBlockTitle">Step 2: Fire Information</h5>
                <br className="formBlockBorder"/>
                <div className="row">
                    <div className="col-md-6 formBlockCol">
                        <p>Alpha Size</p>
                        <Select className="formSubmissionSelect" 
                        options={[{value: sensorDataInfo.incidentNum, label: sensorDataInfo.incidentNum}]}/>
                        <p>Fuels</p>
                        <Select className="formSubmissionSelect"
                        options= {[{value: sensorDataInfo.coordinates[0].time, label: sensorDataInfo.coordinates[0].time}]}
                        />
                    </div>
                    <div className="col-md-6">
                        <p>Fire Rank</p>
                        <input className="IFRInput" onChange={handleInputChange} name="reportedBy"></input>
                    </div>
                </div>
            </div>

            <div className="IFRFormBlock">
                <h5 className="formBlockTitle">Step 3: Environment Factors</h5>
                <br className="formBlockBorder"/>
                <div className="row">
                    <div className="col-md-6 formBlockCol">
                        <p>Values at Risk</p>
                        <Select className="formSubmissionSelect" 
                        options={[{value: sensorDataInfo.incidentNum, label: sensorDataInfo.incidentNum}]}/>
                        <p>Adjacent Fuels</p>
                        <Select className="formSubmissionSelect"
                        options= {[{value: sensorDataInfo.coordinates[0].time, label: sensorDataInfo.coordinates[0].time}]}
                        />
                    </div>
                    <div className="col-md-6">
                        <p>Wind</p>
                        <input className="IFRInput" onChange={handleInputChange} name="reportedBy"></input>
                    </div>
                </div>
            </div>

            <div className="IFRFormBlock">
                <h5 className="formBlockTitle">Step 4: Cause and Action</h5>
                <br className="formBlockBorder"/>
                <div className="row">
                    <div className="col-md-6 formBlockCol">
                        <p>Values at Risk</p>
                        <Select className="formSubmissionSelect" 
                        options={[{value: sensorDataInfo.incidentNum, label: sensorDataInfo.incidentNum}]}/>
                        <p>Adjacent Fuels</p>
                        <Select className="formSubmissionSelect"
                        options= {[{value: sensorDataInfo.coordinates[0].time, label: sensorDataInfo.coordinates[0].time}]}
                        />
                    </div>
                    <div className="col-md-6">
                        <p>Wind</p>
                        <input className="IFRInput" onChange={handleInputChange} name="reportedBy"></input>
                    </div>
                </div>
            </div>

            <button className="btn IFRFormBtn" onClick={handleSubmit}>Submit</button>

        </div>
    );
}

export default IFRForm;
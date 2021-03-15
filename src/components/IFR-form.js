import React, { useState, useEffect } from 'react';
// import Select from "react-select"
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
    incidentNum: props.incidentNum,
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
        const value = e.value;
        const name = e.name;
        setFormInfo({
            [name]: value
        })
    }

    useEffect(() => {
        getOneSensorData(props.match.params.incidentNum).then(data => {
            setSensorDataInfo(data.data);
        });
    }, []);

    return (
        <div className="container-fluid IFR-form-body">
            <h2>Edit IFR form</h2> <br/>
            <p>Incident Numer: {props.match.params.incidentNum}</p> <br />
            <b>Coordinates:</b> <br />
            {sensorDataInfo.coordinates.map(coords => {
                return <p>{"Longitude: " + coords.longitude + " ,Latitude: " + coords.latitude} <br /></p>;
            })}
            <p>Time: {sensorDataInfo.coordinates[0].time}</p>
        </div>
    );
}

export default IFRForm;
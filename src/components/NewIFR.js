import React, { useState, useEffect } from 'react';
import Select from "react-select"
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/NewIFR.css"
import pencilImg from '../images/pencil-square.svg';
const getNum = require("../API/sensorData").getNumSensorData;

var options = [];

const NewIFR = (props) => {
    const [value, setValue] = useState(0);

    useEffect(()=>{
        getNum().then(number => {
            for (var i=0; i < number; i++){
                options.push({value: i, label: i});
            }
        });
    }, [])

    const handleChange = (e) => {
        setValue(e.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = 'http://localhost:3000/edit-ifr/' + value;
    }

    return (
        <form className="container-fluid newIFRContainer" onSubmit={handleSubmit}>
            <div className= "container-fluid newIFRSubcontainer">
                <h2>Edit IFR form</h2> <br/>
                <p>Please select the incident number to fill in the IFR form.</p>
                <Select className= "newIFRSelect" options={options} onChange={handleChange}/>
                <br />
                <button className= "btn newIFRbtn" type="submit" value="Submit"><img src={pencilImg} className="pencilImg"/>Edit IFR Form</button>
            </div>
        </form>
    );
}

export default NewIFR;
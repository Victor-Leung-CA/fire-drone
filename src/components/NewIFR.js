import React, { useState, useEffect } from 'react';
import Select from "react-select"
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/NewIFR.css"
import pencilImg from '/Users/victor/Desktop/fire-drone/src/images/pencil-square.svg'

const NewIFR = (props) => {
    const options = [
        { value: '0', label: '0' },
        { value: '1', label: '1' },
        { value: '2', label: '2' }
    ]

    return (
        <div className="container-fluid newIFRContainer">
            <div className= "container-fluid newIFRSubcontainer">
                <h2>Edit IFR form</h2> <br/>
                <p>Please select the incident number to fill in the IFR form.</p>
                <Select className= "newIFRSelect" options={options} />
                <br />
                <button className= "btn newIFRbtn"><img src={pencilImg} className="pencilImg"/>Edit IFR Form</button>
            </div>
        </div>
    );
}

export default NewIFR;
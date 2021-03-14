import React, { Component } from "react";
const sensorData = require('../API/sensorData');

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
  }
  getData = () => {
    console.log(sensorData.getSensorData());
  }
  render() {
    return (

      <div>

        <h2>DASHBOARD</h2>
        <p>charts and stuff</p>
 
        <button onClick={ this.getData }>
          Get Data
        </button>

      </div>
    );
  }
}
 
export default Dashboard;
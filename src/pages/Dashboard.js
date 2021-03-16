import React, { Component } from "react";
import '../css/Dashboard.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Grid from "react-fast-grid";

import DataChart from '../components/Chart.js';
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
      <div className="page">
        <Grid container spacing={2} direction="row" className="dashBoard-row">

          <Grid item sm={6} xs={12}>
            <button onClick={ this.getData } className="btn refreshBtn">
              Refresh Data
            </button>
          </Grid>
          
          <Grid item sm={6} xs={12}>
            <div className="fireRisk">
              <p>INSERT FIRE RISK API HERE</p>
            </div>
          </Grid>

          <Grid item sm={6} xs={12} >
            <div className="recentAlerts">
              <Grid container spacing={2} direction="row">
                <Grid item sm={6} xs={12}>
                  <div>Location</div>
                </Grid>

                <Grid item sm={6} xs={12}>
                  <div>Rank</div>
                </Grid>

                <Grid item sm={6} xs={12}>
                  <div>Suspected Cause</div>
                </Grid>

                <Grid item sm={6} xs={12}>
                  <div>Estimated Cost of Control</div>
                </Grid>

                <Grid item sm={6} xs={12}>
                  <div>Size</div>
                </Grid>

                <Grid item sm={6} xs={12}>
                  <div>Values at Risk</div>
                </Grid>

                <Grid item sm={6} xs={12}>
                  <div>Action Recommended</div>
                </Grid>

                <Grid item sm={6} xs={12}>
                  <div>Fuels</div>
                </Grid>

                <Grid item sm={6} xs={12}>
                  <div>Access</div>
                </Grid>

                <Grid item sm={6} xs={12}>
                  <div>Status</div>
                </Grid>

              </Grid>   
            </div>


            <div className="recentAlerts">
              <Grid container spacing={2} direction="row">
                <Grid item sm={6} xs={12}>
                  <div>Location</div>
                </Grid>

                <Grid item sm={6} xs={12}>
                  <div>Rank</div>
                </Grid>

                <Grid item sm={6} xs={12}>
                  <div>Suspected Cause</div>
                </Grid>

                <Grid item sm={6} xs={12}>
                  <div>Estimated Cost of Control</div>
                </Grid>

                <Grid item sm={6} xs={12}>
                  <div>Size</div>
                </Grid>

                <Grid item sm={6} xs={12}>
                  <div>Values at Risk</div>
                </Grid>

                <Grid item sm={6} xs={12}>
                  <div>Action Recommended</div>
                </Grid>

                <Grid item sm={6} xs={12}>
                  <div>Fuels</div>
                </Grid>

                <Grid item sm={6} xs={12}>
                  <div>Access</div>
                </Grid>

                <Grid item sm={6} xs={12}>
                  <div>Status</div>
                </Grid>

              </Grid>   
            </div>
          </Grid>


          <Grid item sm={6} xs={12}>
            <div className="graphContainer">
              <h5>Daily Active Fire Count</h5>
              <br />
              <DataChart className="graph"/>
            </div>
           
          </Grid>
        </Grid>

        
      </div>
    );
  }
}
 
export default Dashboard;
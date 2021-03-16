import React, { Component } from "react";
import '../css/Dashboard.css';
import Grid from "react-fast-grid";


import DataChart from '../components/Chart.js';

const sensorData = require('../API/sensorData');

const styles = {
  outer: {
    borderRadius: 5,
    boxShadow: "0 10px 30px #BBB",
    padding: 10,
    marginBottom:25,
  },
};

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
        <Grid container spacing={2} direction="row">

          <Grid item sm={6} xs={12} className="refreshButton" style={styles.outer}>
            <button onClick={ this.getData }>
              Refresh Data
            </button>
          </Grid>
          
          <Grid item sm={6} xs={12} className="fireRisk" style={styles.outer}>
            <p>INSERT FIRE RISK API HERE</p>
          </Grid>

          <Grid item sm={6} xs={12} className="recentAlerts" style={styles.outer}>
            <div style={styles.outer}>
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

            <div style={styles.outer}>
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


            <div style={styles.outer}>
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


          <Grid item sm={6} xs={12} className="graph" style={styles.outer}>
            <p>Daily Active Fire Count</p>
            <DataChart />
          </Grid>
        </Grid>

        

      </div>
    );
  }
}
 
export default Dashboard;
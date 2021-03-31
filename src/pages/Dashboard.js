import React, { Component } from "react";
import '../css/Dashboard.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Grid from "react-fast-grid";

import DataChart from '../components/Chart.js';
const sensorData = require('../API/sensorData');


class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {data: [{incidentNum: "loading...", coordinates: "loading...", IFRStatus: "loading...", alertStatus: "loading..."}]};
    this.eventSource = new EventSource('http://localhost:5000/SSE');

    this.sleep(2000).then(()=>{
        if(this.eventSource.readyState === 0 || this.eventSource.readyState === 2){
            console.log("Attempting to reconnect to SSE...");
            this.eventSource = new EventSource('http://localhost:5000/SSE');
        }
    })

    this.eventSource.onopen = (e) => {
        console.log("Connected to SSE...");
    };

    this.reconnect = this.reconnect.bind(this);

  }

  // sleep time expects milliseconds
  sleep(time) {
      return new Promise((resolve) => setTimeout(resolve, time));
  }

  componentDidMount() {
      this.eventSource.addEventListener('alertUpdate', (e) => {
        console.log(JSON.parse(e.data));
        var data = JSON.parse(e.data);
        this.setState({data: data});
      })
  }

  componentWillUnmount() {
      console.log("Disconnecting from SSE...")
      this.eventSource.close();
  }

  reconnect() {
    this.eventSource = new EventSource('http://localhost:5000/SSE');
    console.log("Reconnecting...")
  }

  render() {
    return (
      <div className="page">
        <Grid container spacing={2} direction="row" className="dashBoard-row">

          <Grid item sm={6} xs={12}>
            <button onClick={this.reconnect} className="btn refreshBtn">
              Refresh Data
            </button>
          </Grid>
          
          <Grid item sm={6} xs={12}>
            <div className="fireRisk">
              <p>INSERT FIRE RISK API HERE</p>
            </div>
          </Grid>

          <Grid item sm={6} xs={12} >

          {this.state.data.map(item => {
            return(
              <div className="recentAlerts">
              <Grid container spacing={2} direction="row">
                <Grid item sm={6} xs={12}>
                  <div>Incident Num: {item.incidentNum}</div>
                </Grid>

                <Grid item sm={6} xs={12}>
                  <div>Coordinate: {item.coordinates[0].longitude}, {item.coordinates[0].latitude}</div>
                </Grid>

                <Grid item sm={6} xs={12}>
                  <div>IFR Status: {item.IFRStatus}</div>
                </Grid>

                <Grid item sm={6} xs={12}>
                  <div>Alert Status: {item.alertStatus}</div>
                </Grid>

              </Grid>   
            </div>
            )
          })}
          
            {/* *note: probably don't need this? */}

            {/* <div className="recentAlerts">
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
            </div> */}

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
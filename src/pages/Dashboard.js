import React, { Component } from "react";
import '../css/Dashboard.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Grid from "react-fast-grid";
import { Icon } from '@iconify/react';
import formatGallery from '@iconify-icons/dashicons/format-gallery';
import LMap from '../components/LightningMap.js';
import pencilImg from '../images/pencil-square.svg';
import galleryImg from '../images/images.svg'


import DataChart from '../components/Chart.js';

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {data: [{incidentNum: "loading...", coordinates: "loading...", IFRStatus: "loading...", alertStatus: "loading..."}]};
    this.eventSource = new EventSource('http://localhost:5000/SSE');

    this.eventSource.onopen = (e) => {
        console.log("Connected to real time data streaming...");
    };

    this.eventSource.onerror = () => {
      this.eventSource = new EventSource('http://localhost:5000/SSE');
    }

    this.onClickIFR = this.onClickIFR.bind(this);
    this.onClickPhoto = this.onClickPhoto.bind(this);

  }

  onClickIFR(num) {
    window.location.href = 'http://localhost:3000/edit-ifr/' + num;
  }

  onClickPhoto(num){
    window.location.href = 'http://localhost:3000/photos/' + num;
  }

  componentDidMount() {
      this.eventSource.addEventListener('alertUpdate', (e) => {
        var data = JSON.parse(e.data);
        this.setState({data: data});
      })
  }

  componentWillUnmount() {
      console.log("Disconnecting from data stream...")
      this.eventSource.close();
  }

  render() {
 
    return (
      <div className="page">
        <Grid container spacing={2} direction="row" className="dashBoard-row">

          <Grid item sm={6} xs={6}>
            {this.state.data.map(item => {

              let ifrStat;
              let alertStat;
              let editBtn;

              if (item.IFRStatus=="0"){ //Unfilled
                ifrStat = <div className="alertUnfilled">IFR Unfilled</div>;
                editBtn = <button className= "btn seePhotobtn" onClick={() => this.onClickIFR(item.incidentNum)}><img src={pencilImg} className="buttonIcon"/>Edit IFR form</button>
              }
              if (item.IFRStatus=="1"){ //Filled
                ifrStat = <div className="alertFilled">IFR Filled</div>;
                editBtn=<div></div>;
              }
              if (item.alertStatus=="0"){ //Inactive
                alertStat = <div className = "alertStatusInactive"> Inactive </div>;
              }
              if (item.alertStatus=="1"){ //Active
                alertStat = <div className = "alertStatusActive"> Active </div>;
              }

              return(
                <div className="recentAlerts">
                <Grid container spacing={3}>
                  <Grid item xs={8}>
                    <div style={{fontWeight:'700', fontSize:'20px'}}>Coordinates: {item.coordinates[0].longitude}, {item.coordinates[0].latitude}</div>
                  </Grid>
                  <Grid item xs={7}>
                    <div>Incident Number: {item.incidentNum}</div>
                  </Grid>
                  <Grid item xs={5} style={{textAlign: 'right'}}>
                    {ifrStat}
                  </Grid>
                  <Grid item xs={6}>
                    {alertStat}
                  </Grid>
                  <Grid item xs={3}>
                    {editBtn}
                  </Grid>
                  <Grid item xs={3}>
                    <button className= "btn seePhotobtn" onClick={() => this.onClickPhoto(item.incidentNum)}><img src={galleryImg} className="buttonIcon"/> View photos</button> 
                  </Grid>
                </Grid>   
              </div>
              )
            })}
          </Grid> 
          
          <Grid>
            <Grid item sm={6} xs={6}>
                <div className="graphContainer container-fluid">
                  <h3>Daily Active Fire Count</h3>
                  <br />
                  <DataChart className="graph"/>
                </div>
            </Grid>
            <Grid item sm={6} xs={6}>
              <div className="fireRisk container-fluid">
                <h3 style={{paddingBottom: "0.7rem"}}>Lightning Risk Map</h3>
                <LMap> </LMap>
              </div>
            </Grid>
          </Grid>
          

        </Grid>

      </div>
    );
  }
}
 
export default Dashboard;
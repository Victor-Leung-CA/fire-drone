import React, { Component } from "react";
import '../css/AlertHistory.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Grid from "react-fast-grid";
import pencilImg from '../images/pencil-square.svg';


class AlertHistory extends Component {
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

        <Grid item  xs={12}>
        {this.state.data.map(item => {

          let ifrStat;
          let alertStat;

          if (item.IFRStatus=="0"){
            /*un-edited*/
            ifrStat = <div className="alertUnfilled">IFR Unfilled </div>;
          }
          if (item.IFRStatus=="1"){
            /*edited*/
            ifrStat = <div className="alertFilled">IFR Filled </div>;
          }
          if (item.alertStatus=="0"){
            /*inactive*/
            alertStat = <div className = "alertStatusInactive"> Not Active </div>;
          }
          if (item.alertStatus=="1"){
            /*active*/
            alertStat = <div className = "alertStatusActive"> Active </div>;
          }

            return(
              <div className="recentAlerts">
              <Grid container spacing={3}>
              

                <Grid item xs={11}>
                  <div style={{fontWeight:'700', fontSize:'20px'}}>Coordinates: {item.coordinates[0].longitude}, {item.coordinates[0].latitude}</div>
                </Grid>

                <Grid item xs={1}>
                  <button className= "btn seePhotobtn" onClick={() => this.onClickIFR(item.incidentNum)}><img src={pencilImg} className="buttonIcon"/></button>
                </Grid>


                <Grid item xs={4}>
                  <div>Incident Number: {item.incidentNum}</div>
                </Grid>

                <Grid item xs={4}>
                  <div>Rank: {item.fireRank}</div>
                </Grid>

                <Grid item xs={4}>
                  <div>Fuels: {item.fuels}</div>
                </Grid>


                <Grid item xs={4}>
                  <div>Values at Risk: {item.valAtRisk}</div>
                </Grid>

                <Grid item xs={4}>
                  <div>Access: {item.access}</div>
                </Grid>

                <Grid item xs={4}>
                  <div>Fire Size: {item.radius}</div>
                </Grid>


                <Grid item xs={6}>
                  {ifrStat}
                </Grid>

                <Grid item xs={6}>
                  {alertStat}
                </Grid>

              </Grid>   
            </div>
            )
          })}
        </Grid>           

        </Grid>

        
      </div>
    );
  }
}
 
export default AlertHistory;
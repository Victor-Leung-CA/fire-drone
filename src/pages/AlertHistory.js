import React, { Component } from "react";
import '../css/AlertHistory.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Grid from "react-fast-grid";

class AlertHistory extends Component {
  constructor(props){
    super(props);
    this.state = {data: [{incidentNum: "loading...", coordinates: "loading...", IFRStatus: "loading...", alertStatus: "loading...", radius: "loading...", fireRank: "loading...", fuels: "loading...", valAtRisk: "loading...", access: "loading..."}]};
    this.eventSource = new EventSource('http://localhost:5000/SSE');
    this.eventSource.onopen = (e) => {
        console.log("Connected to SSE...");
    };
    this.eventSource.onerror = () => {
      this.eventSource = new EventSource('http://localhost:5000/SSE');
    }
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

  render() {
 
    return (
      <div className="page">
        <Grid container spacing={3} direction="row" className="dashBoard-row">

        <Grid item  xs={12}>
        {this.state.data.map(item => {

          let ifrStat;
          let alertStat;

          if (item.IFRStatus=="0"){
            /*un-edited*/
            ifrStat = <div>Alert Status: Unfilled </div>;
          }
          if (item.IFRStatus=="1"){
            /*edited*/
            ifrStat = <div>Alert Status: Filled </div>;
          }
          if (item.alertStatus=="0"){
            /*inactive*/
            alertStat = <div style={{borderRadius: '2rem', backgroundColor:'#4A6572', color:'white', fontWeight: 'bold', textAlign:'center'}}> Not Active </div>;
          }
          if (item.alertStatus=="1"){
            /*active*/
            alertStat = <div style={{borderRadius: '2rem', backgroundColor:'#F9AA33', color:'white', fontWeight: 'bold', textAlign:'center'}}> Active </div>;
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

                <Grid item xs={5}>
                  {ifrStat}
                </Grid>

                <Grid item xs={5}>
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
import React, { Component } from "react";
import Grid from "react-fast-grid";
import '../css/Alert History.css';


const styles = {
  outer: {
    borderRadius: 5,
    boxShadow: "0 10px 30px #BBB",
    padding: 10,
    marginBottom:25,
  },
};

 
export const AlertHistory = () => (
  <div className="AlertHistory">
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
  </div>
);

export default AlertHistory;
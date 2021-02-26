import './App.css';
import React, {Component} from "react";
import{ Route, NavLink, BrowserRouter, Switch } from "react-router-dom";

// Page imports
import Home from "./Home";
import AlertHistory from "./AlertHistory";
import Gallery from "./Gallery";
import Map from "./Map";
import NewIFR from "./NewIFR";
import IFRForm from "./components/IFR-form";
import SSETest from "./components/sse-test"

class App extends Component {
  render() {
  return (
    <BrowserRouter>
      <div className="App">
    
        <h1> FireDrone </h1>
        <ul className="header">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/map">Map</NavLink></li>
          <li><NavLink to="/alert-history">Alert History</NavLink></li>
          <li><NavLink to="/new-ifr">Create New IFR</NavLink></li>
          <li><NavLink to="/gallery">Gallery</NavLink></li>
          <li><NavLink to="/sse-test">Real Time Data</NavLink></li>
        </ul>
        

        {/* Routes */}
        <Route exact path="/" component={Home}/>
        <Route path="/map" component={Map}/>
        <Route path="/alert-history" component={AlertHistory}/>
        <Route path="/new-ifr" component={NewIFR}/>
        <Route path="/gallery" component={Gallery}/>

        {/* IFR paths for different incident nums */}
        <Route path="/edit-ifr/:incidentNum" component = {IFRForm}/>

        {/* For testing real time updates */}
        <Route path="/sse-test" component = {SSETest}/>
          
      </div>
    </BrowserRouter>
  ); }
}

export default App;

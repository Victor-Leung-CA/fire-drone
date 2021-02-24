import React, {Component} from "react";
import{
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Dashboard from "./Dashboard";
import AlertHistory from "./AlertHistory";
import Gallery from "./Gallery";
import Map from "./Map";
import NewIFR from "./NewIFR";
import {slide as Menu} from 'react-burger-menu';

class SideBar extends Component {
  render() {
  return (
    <HashRouter>
      <div className="App">
    
        <h1> FireDrone </h1>
        <Menu>
            <a><NavLink to="/" className="menu-item">Dashboard</NavLink></a>
            <a><NavLink to="/map" className="menu-item">Map</NavLink></a>
            <a><NavLink to="/alert-history" className="menu-item">Alert History</NavLink></a>
            <a><NavLink to="/new-ifr" className="menu-item">Create New IFR</NavLink></a>
            <a><NavLink to="/gallery" className="menu-item">Gallery</NavLink></a>
        </Menu>
        
        <div className="content">
          <Route exact path="/" component={Dashboard}/>
          <Route path="/map" component={Map}/>
          <Route path="/alert-history" component={AlertHistory}/>
          <Route path="/new-ifr" component={NewIFR}/>
          <Route path="/gallery" component={Gallery}/>
          
        </div>
      </div>
    </HashRouter>
  ); }
}

export default SideBar;
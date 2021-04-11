import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {NavLink} from "react-router-dom";
import '../css/Sidebar.css';

//Images
import fireDroneLogo from '../images/FireDrone Logo.svg';
import dashboardImg from '../images/dashboard.svg';
import mapImg from '../images/map.svg';
import alertImg from '../images/journal-album.svg';
import galleryImg from '../images/images.svg'
import penImg from '../images/pen.svg'

class Sidebar extends React.Component {
  render(){
    return(
        <nav className="sidebar">
            <img className = "sidebarLogo" alt="icon" src={fireDroneLogo} />
                <NavLink 
                    className="navbarLink" 
                    activeClassName="active" 
                    exact to ='/'>
                    <img className="sidebarIcon" src={dashboardImg}/> Dashboard
                </NavLink>
                <NavLink 
                    className="navbarLink" 
                    activeClassName="active" 
                    to='/map'>
                    <img className="sidebarIcon" alt="icon" src={mapImg}/>Map
                </NavLink>
                <NavLink 
                    className="navbarLink" 
                    activeClassName="active" 
                    to='/alert-history'>
                    <img className="sidebarIcon" alt="icon" src={alertImg}/>Alert History
                </NavLink>
                <NavLink 
                    className="navbarLink" 
                    activeClassName="active" 
                    to='/new-ifr'>
                    <img className="sidebarIcon" alt="icon" src={penImg}/>New IFR
                </NavLink>
                <NavLink 
                    className="navbarLink" 
                    activeClassName="active" 
                    to='/photos/0'>
                    <img className="sidebarIcon" alt="icon" src={galleryImg}/>Photos
                </NavLink>
        </nav>
    );
  }
}
export default Sidebar;
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import{ Router, NavLink, Link} from "react-router-dom";
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
            <img className = "sidebarLogo" src={fireDroneLogo} />
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
                    <img className="sidebarIcon" src={mapImg}/>Map
                </NavLink>
                <NavLink 
                    className="navbarLink" 
                    activeClassName="active" 
                    to='/alert-history'>
                    <img className="sidebarIcon" src={alertImg}/>Alert History
                </NavLink>
                <NavLink 
                    className="navbarLink" 
                    activeClassName="active" 
                    to='/new-ifr'>
                    <img className="sidebarIcon" src={penImg}/>New IFR
                </NavLink>
                <NavLink 
                    className="navbarLink" 
                    activeClassName="active" 
                    to='/gallery'>
                    <img className="sidebarIcon" src={galleryImg}/>Gallery
                </NavLink>
                <NavLink 
                    className="navbarLink" 
                    activeClassName="active" 
                    to='/sse-test'>
                    <img className="sidebarIcon" src={alertImg}/>SSE Test
                </NavLink>
        </nav>
    );
  }
}
export default Sidebar;
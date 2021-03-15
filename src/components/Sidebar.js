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


const items = [
  { name: '/dashboard', label: 'Dashboard', url: "/dashboard" },
  { name: '/map', label: 'Map', url: "/map" },
  { name: '/alert-history', label: 'Alert History', url: "/alert-history" },
  { name: '/new-ifr', label: 'Create New IFR', url: "/new-ifr" },
  { name: '/gallery', label: 'Gallery', url: "/gallery" },
  { name: '/sse-test', label: 'Real Time Data', url: "/edit-ifr/1" },
  { name: '//edit-ifr/:incidentNum', label: 'IFR Form', url: "/sse-test" },
]


class Sidebar extends React.Component {
  render(){
    return(
        <nav className="sidebar">
            <img className = "sidebarLogo" src={fireDroneLogo} />
            {/* <h3 className="sidebarTitle" >FireDrone</h3> */}
                <NavLink 
                    className="navbarLink" 
                    activeClassName="active" 
                    to='/dashboard'>
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
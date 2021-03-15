import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import{ Router, NavLink, Link} from "react-router-dom";
import '../css/Sidebar.css';
import fireDroneLogo from '../images/FireDrone Logo Min.png';

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
            <h3 className="sidebarTitle" >FireDrone</h3>
            <List disablePadding dense>
                {items.map(({label, name, url}) => (
                    <ListItem key={name}>
                        <NavLink 
                            className="navbarLink" 
                            activeClassName="active" 
                            to={url}>
                            {label}
                        </NavLink>
                    </ListItem>
                ))}
            </List>
        </nav>
    );
  }
}
export default Sidebar;
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import{ Route, NavLink, BrowserRouter, Switch } from "react-router-dom";

//page imports
import Dashboard from "../pages/Dashboard";
import AlertHistory from "../pages/AlertHistory";
import Gallery from "../pages/Gallery";
import Map from "../pages/Map";
import NewIFR from "../pages/NewIFR";
import IFRForm from "./IFR-form";
import SSETest from "./sse-test";

import '../css/Sidebar.css';


const items = [
  { name: '/dashboard', label: 'Dashboard', url: "/dashboard" },
  { name: '/map', label: 'Map', url: "/map" },
  { name: '/alert-history', label: 'Alert History', url: "/alert-history" },
  { name: '/new-ifr', label: 'Create New IFR', url: "/new-ifr" },
  { name: '/gallery', label: 'Gallery', url: "/gallery" },
  { name: '/sse-test', label: 'Real Time Data', url: "/edit-ifr/:incidentNum" },
  { name: '//edit-ifr/:incidentNum', label: 'IFR Form', url: "/sse-test" },
]


class Sidebar extends React.Component {
  render(){
  return(
    <div className="navbar">
          <BrowserRouter>
              <List disablePadding dense>
                  {items.map(({ label, name, url, ...rest }) => (
                      <ListItem key={name} button {...rest}>
                          <NavLink to={url}>{label}</NavLink>
                      </ListItem>
                  ))}
              </List>

              {/* Routes */}
              <Route path="/dashboard">
                  <Dashboard />
              </Route>
              <Route path="/map">
                  <Map />
              </Route>
              <Route path="/alert-history">
                  <AlertHistory />
              </Route>
              <Route path="/new-ifr">
                  <NewIFR />
              </Route>
              <Route path="/gallery">
                  <Gallery />
              </Route>

              {/* IFR paths for different incident nums */}
              <Route path="/edit-ifr/:incidentNum">
                  <IFRForm />
              </Route>

              {/* For testing real time updates */}
              <Route path="/sse-test">
                  <SSETest />
              </Route>

          </BrowserRouter>
    </div>
  );
  }
}
export default Sidebar;
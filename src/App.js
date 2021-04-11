import React from 'react';
import{ Route, Switch, BrowserRouter } from "react-router-dom";

//Page imports
import Sidebar from './components/Sidebar';
import Dashboard from "./pages/Dashboard";
import AlertHistory from "./pages/AlertHistory";
import Gallery from "./pages/Gallery";
import Map from "./pages/Map";
import NewIFR from "./components/NewIFR";
import IFRForm from "./components/IFR-form";
import Photos from "./pages/Photos"

class App extends React.Component {
  render(){
  return(
    <div>
      <BrowserRouter basename="/">
          <Route path="/" component = {Sidebar} />
          <Switch>
            <Route path="/" exact component = {Dashboard} />
            <Route path="/map" exact component = {Map} />
            <Route path="/alert-history" exact component = {AlertHistory} />
            <Route path="/new-ifr" exact component = {NewIFR} />
            <Route path="/gallery" exact component = {Gallery} />
            <Route path="/edit-ifr/:incidentNum" exact component = {IFRForm} />
            <Route path="/photos/:incidentNum" exact component = {Photos} />
          </Switch>
      </BrowserRouter>
    </div>
  );
  }
}
export default App;
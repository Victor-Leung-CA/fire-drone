import React from 'react';
import{ Route, Switch, BrowserRouter } from "react-router-dom";

//Page imports
import Sidebar from './components/Sidebar';
import Dashboard from "./pages/Dashboard";
import AlertHistory from "./pages/AlertHistory";
import Gallery from "./pages/Gallery";
import Map from "./pages/Map";
import NewIFR from "./pages/NewIFR";
import IFRForm from "./components/IFR-form";
import SSETest from "./components/sse-test";

class App extends React.Component {
  render(){
  return(
    <body>
      <BrowserRouter basename="/">
          <Route path="/" component = {Sidebar} />
          <Switch>
            <Route path="/dashboard" exact component = {Dashboard} />
            <Route path="/map" exact component = {Map} />
            <Route path="/alert-history" exact component = {AlertHistory} />
            <Route path="/new-ifr" exact component = {NewIFR} />
            <Route path="/gallery" exact component = {Gallery} />
            <Route path="/edit-ifr/:incidentNum" exact component = {IFRForm} />
            <Route path="/sse-test" exact component = {SSETest} />
          </Switch>
      </BrowserRouter>
    </body>
  );
  }
}
export default App;
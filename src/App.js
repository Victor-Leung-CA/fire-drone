import React from 'react';
import SideBar from './components/Sidebar';
import './App.css';
import{
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import SSETest from "./components/sse-test";

class App extends React.Component {
  render() {
  return(
     <div className="App" id="outer-container">
      <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
      <div className="content">
        
      </div>
    </div>
  );}
}

export default App;
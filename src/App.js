import React from 'react';
import SideBar from './components/Sidebar';
import './App.css'

class App extends React.Component {
  render() {
  return(
     <div className="App" id="outer-container">
      <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
    </div>
  );}
}

export default App;
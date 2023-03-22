import React from "react";
import './index.css';
import Header from "./components/Header";
import headshot from "./assets/headshot.png";

const App = () => {
  return (<div className='outer'>
    <Header/>
    <img id='headshot' src={headshot} alt=''/>
  </div>);
}


export default App

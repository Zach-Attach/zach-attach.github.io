import React from "react";
import './index.css';
import Header from "./components/Header";
import Section from "./components/Section";

const App = () => {

  return (<div className='outer'>
    <Header/>
    <Section name='aboutme'/>
    <Section name='history'/>
  </div>);
}


export default App

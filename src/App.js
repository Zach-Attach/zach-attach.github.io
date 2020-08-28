import React from "react";
import './index.css';
import {body} from './strings.json';
import Section from "./components/Section";
import Header from "./components/Header";

const section = ({title, id, description, crest = null}) => (
  <Section id={id} key={id} title={title} crest={crest}> {description} </Section>);

const allSections = body => body.map(i => section(i));


const App = () => {

  return (<div className='outer'>
    <Header/>

    {allSections(body)}

  </div>);
}


export default App

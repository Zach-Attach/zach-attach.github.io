import React from "react";
import '../index.css';
import {header} from "../strings.json";
import CV from "../assets/Social/CV.svg";
import email from "../assets/Social/email.svg";
import github from "../assets/Social/github.svg";
import linkedin from "../assets/Social/linkedin.svg";

// const icon = (href, src, alt) => (<a href={}>
//   <img src={} alt={} width="15.25%" style={{'margin-left':'4.875%','margin-right':'4.875%'}}/>
// </a>);


export default () => {

  return (<>
    {/*<div id="top">*/}
    {/*  <ul id="nav">*/}
    {/*    <li><a href="#history">History</a></li>*/}
    {/*    <li><a href="#">Achievements</a></li>*/}
    {/*    <li><a href="#">Skills</a></li>*/}
    {/*    <li><a href="#">Contact</a></li>*/}
    {/*  </ul>*/}
    {/*</div>*/}
    <header className='container main background big'>
      {/*<div className='centered' style={{'width': '40%'}}>*/}
      <div style={{
        'width': '40%',
        'font-size': '400%',
        'text-align': 'center',
        'padding': '2%',
        'background': 'rgba(0, 0, 0, 0.7)',
        'color': 'white'
      }}>
        {header.name}
      </div>
      <div style={{'width': '40%', 'background': 'rgba(0, 0, 0, 0.7)', 'padding-left': '2%', 'padding-right': '2%'}}>
        <a href="/Laborde_CV_2020.pdf">
          <img src={CV} alt="CV" className="icon"/>
        </a>
        <a href="mailto:zachary.c.laborde@gmail.com">
          <img src={email} alt="email" className="icon"/>
        </a>
        <a href="https://github.com/Zach-Attach">
          <img src={github} alt="GitHub" className="icon"/>
        </a>
        <a href="https://www.linkedin.com/in/zachlaborde">
          <img src={linkedin} alt="LinkedIn" className="icon"/>
        </a>
      </div>
      {/*</div>*/}
    </header>
  </>);
}

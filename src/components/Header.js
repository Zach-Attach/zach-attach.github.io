import React from "react";
import '../index.css';
import {header} from "../strings.json";
import CV from "../assets/Social/CV.svg";
import email from "../assets/Social/email.svg";
import github from "../assets/Social/github.svg";
import linkedin from "../assets/Social/linkedin.svg";

export default () => {

  return (<>
    <header id='main'>
      <div id='name'>
        <svg height='100%' width='100%'>
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" className='text'>
            {header.name}
          </text>
        </svg>
      </div>
      <div id='icons'>
        <a href="/Laborde_CV_2023_Public.pdf">
          <img src={CV} alt="CV"/>
        </a>
        <a href="mailto:zachary.c.laborde@gmail.com">
          <img src={email} alt="email"/>
        </a>
        <a href="https://github.com/Zach-Attach">
          <img src={github} alt="GitHub"/>
        </a>
        <a href="https://www.linkedin.com/in/zachlaborde">
          <img src={linkedin} alt="LinkedIn"/>
        </a>
      </div>
    </header>
  </>);
}

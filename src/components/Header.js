import React, {useEffect, useState} from "react";
import '../index.css';
import {header} from "../strings.json";

// const percentHeightOfBar = 0.05;
const percentHeightNotOfBar = 0.95

export default () => {
  const [headerOpacity, setHeaderOpacity] = useState();
  const [navOpacity, setNavOpacity] = useState();
  const [namePosY, setNamePosY] = useState();
  const [namePosX, setNamePosX] = useState();
  const [nameScale, setNameScale] = useState();

  const handleScroll = () => {

    const {scrollTop, clientHeight, clientWidth} = document.documentElement || document.body; //scrollHeight

    if (scrollTop > clientHeight) {
      setHeaderOpacity(0);
      setNavOpacity(1);
      setNameScale(0.5);
      setNamePosY((-0.45 * clientHeight));
      setNamePosX((-0.4 * clientWidth));
    } else {
      const percent = scrollTop / clientHeight;
      const moveWidth = -0.4 * clientWidth;
      setHeaderOpacity((1 - percent));
      setNavOpacity(0.5);
      setNameScale(1 - (percent / 2));
      setNamePosY((-0.45 * scrollTop));
      setNamePosX((percent * moveWidth));
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  return (<>
    <div id="top">
      <ul id="nav" style={{background: `rgba(0,0,0,${navOpacity})`}}>
        <li><a href="#">History</a></li>
        <li><a href="#">Achievements</a></li>
        <li><a href="#">Skills</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
    <div id='name' style={{transform: `translate(${namePosX}px, ${namePosY}px) scale(${nameScale})`}}>
      <h1>
        {header.name}
      </h1>
    </div>
    <header style={{opacity: headerOpacity}} className='container main background big'>
    </header>
  </>);
}

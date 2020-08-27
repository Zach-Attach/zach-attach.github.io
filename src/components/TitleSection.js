import React, {useEffect, useState} from "react";
import '../index.css';
import {header} from "../strings.json";

const percentHeightOfBar = 0.05;

export default () => {
  const [scrollPos, setScrollPos] = useState();

  const handleScroll = () => {
    const {clientHeight, scrollTop} = document.documentElement || document.body; //scrollHeight

    const opacity = Math.max(0, 1 - percentHeightOfBar - (scrollTop / clientHeight)); // TODO: this is the lazy way
    setScrollPos(opacity);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  return (<header style={{opacity: scrollPos}} className='container main background big'>
    <div className='blur'>
      <h1>
        {header.name}
      </h1>
    </div>
  </header>);
}

import React, {useEffect} from "react";
import '../index.css';
import {header} from "../strings.json";

// const percentHeightOfBar = 0.05;
const percentHeightNotOfBar = 0.95
let nav, name, background, link, topZ, midZ, bottomZ, topL, bottomL, fullL, fullZ, zl

export default () => {

  const handleScroll = () => {

    const {scrollTop, clientHeight, clientWidth} = document.documentElement || document.body; //scrollHeight

    if (scrollTop > clientHeight) {
      background.style.opacity = 0
      nav.style.background = 'rgba(0,0,0,1)'
      // name.style.transform = `translate(${-0.4 * clientWidth}px, ${-0.45 * clientHeight}px) scale(0.5)`
      link.href = "#header"

      fullZ.style.transform = `rotate(-45deg)`
      topZ.style.transform = `scaleX(0.9)`
      bottomZ.style.transform = `scaleX(1.1)`
      topL.style.transform = `scaleY(1.2)`
      bottomL.style.transform = `rotate(-45deg) scaleX(0.8)`
      fullL.style.transform = `translate(40px, -215px)`


      zl.style.transform = `translate(${-0.393 * clientWidth}px, ${-0.447 * clientHeight}px) scale(0.1)`
    } else {
      const percent = scrollTop / clientHeight
      const moveWidth = -0.4 * clientWidth
      const moveWidth2 = -0.393 * clientWidth
      background.style.opacity = 1 - percent
      if (percent > 0.94) nav.style.background = 'rgba(0,0,0,1)'
      else nav.style.background = `rgba(0, 0, 0, 0.5)`
      // name.style.transform = `translate(${percent * moveWidth}px,${-0.45 * scrollTop}px) scale(${1 - (percent / 2)})`
      link.href = ""

      fullZ.style.transform = `rotate(${-45 * (percent)}deg)`
      topZ.style.transform = `scaleX(${1 - (percent / 10)})`
      bottomZ.style.transform = `scaleX(${1 + (percent / 10)})`
      topL.style.transform = `scaleY(${1 + (percent / 5)})`
      bottomL.style.transform = `rotate(${-45 * (percent)}deg) scaleX(${1 - (percent / 5)})`
      fullL.style.transform = `translate(${40 * percent}px, ${-215 * percent}px)`

      zl.style.transform = `translate(${percent * moveWidth2}px,${-0.447 * scrollTop}px) scale(${1 - (percent * 9 / 10)})`
    }
  }

  useEffect(() => {
    nav = document.getElementById('nav')
    name = document.getElementById('name')
    background = document.querySelector('.container.main.background.big')
    link = name.getElementsByClassName('a')
    topZ = document.getElementById('topZ')
    midZ = document.getElementById('midZ')
    bottomZ = document.getElementById('bottomZ')
    topL = document.getElementById('topL')
    bottomL = document.getElementById('bottomL')
    fullZ = document.getElementById('fullZ')
    fullL = document.getElementById('fullL')
    zl = document.getElementById('ZL')
    window.addEventListener('scroll', handleScroll)
  })

  return (<>
    <div id="top">
      <ul id="nav">
        <li><a href="#history">History</a></li>
        <li><a href="#">Achievements</a></li>
        <li><a href="#">Skills</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
    <div style={{position: 'fixed', top: '45%', left: '40%', zIndex: 2}} id={'ZL'}>
      <svg id="fullZ" height="430" width="200" style={{overflow: 'visible', position: 'absolute'}}>
        <line id='topZ' x1="10" y1="0" x2="200" y2="0" style={{
          stroke: 'aqua',
          strokeWidth: 10,
          strokeLinecap: "round",
          position: 'fixed',
          transformOrigin: 'top right'
        }}/>
        <line id='midZ' x1="0" y1="200" x2="200" y2="0"
              style={{stroke: 'aqua', strokeWidth: 10, strokeLinecap: "round", position: 'fixed'}}/>
        <line id='bottomZ' x1="0" y1="200" x2="190" y2="200"
              style={{stroke: 'aqua', strokeWidth: 10, strokeLinecap: "round", position: 'fixed'}}/>
      </svg>
      <svg id="fullL" height="430" width="200"
           style={{overflow: 'visible', position: 'absolute', transformOrigin: 'bottom left'}}>
        <line id='topL' x1="0" y1="230" x2="0" y2="430" style={{
          stroke: 'aqua',
          strokeWidth: 10,
          strokeLinecap: "round",
          position: 'fixed',
          transformOrigin: 'bottom left'
        }}/>
        <line id='bottomL' x1="0" y1="430" x2="190" y2="430" style={{
          stroke: 'aqua',
          strokeWidth: 10,
          strokeLinecap: "round",
          position: 'fixed',
          transformOrigin: 'bottom left'
        }}/>
      </svg>
    </div>
    <div id='name'>
      <h1>
        {header.name}
      </h1>
    </div>
    <header className='container main background big'>
    </header>
  </>);
}

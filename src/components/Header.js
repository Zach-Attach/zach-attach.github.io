import React, {useEffect} from "react";
import '../index.css';
import {header} from "../strings.json";
import acharyAborde from '../assets/achary_aborde.svg';
import acharySvg from '../assets/achary.svg';
import achary2 from '../assets/achary2.svg';
import abordeSvg from '../assets/aborde.svg';

// const percentHeightOfBar = 0.05;
const percentHeightNotOfBar = 0.95
let nav, name, background, link, topZ1, topZ2, midZ1, bottomZ1, bottomZ2, topL1, topL2, bottomL1, bottomL2, fullL, fullZ, zl, achary, aborde

export default () => {

  const handleScroll = () => {

    const {scrollTop, clientHeight, clientWidth} = document.documentElement || document.body;
    nav.style.background = 'rgba(0,0,0,1)'

    const percent = Math.min(Math.max(scrollTop / clientHeight, 0), 1)

    background.style.opacity = 1 - percent
    if (percent > 0.94) nav.style.background = 'rgba(0,0,0,1)'
    else nav.style.background = `rgba(0, 0, 0, 0.5)`

    link.href = top.outerHeight >= scrollTop? "#header" : ""
    background.style.opacity = top.outerHeight >= scrollTop? 1 : 0
    const ratio = (0.05*window.innerHeight) / (0.2*window.innerWidth)
    const ratio1 = (0.02*window.innerHeight) / (0.2*window.innerWidth)
    const ratio2 = (0.04*window.innerHeight) / (0.2*window.innerWidth)
    const ratio3 = (0.02*window.innerHeight) / (0.19*window.innerWidth)
    const diff = (0.2*window.innerWidth) - (0.03*window.innerHeight)

    fullZ.style.transform = `translateY(${(1-percent)*9}svh) scale(${ratio1+(1-ratio1)*(1-percent)},${ratio1+(1-ratio1)*(1-percent)}) skew(${45*percent}deg, ${-45*percent}deg)`

    topZ1.style.opacity = 1 - percent

    midZ1.style.opacity = 1 - percent

    bottomZ1.style.opacity = 1 - percent

    topL1.style.opacity = 1 - percent

    bottomL1.style.opacity = 1 - percent

    fullL.style.transform = `translate(${percent*1.6}svh,${(1-percent)*6}svh) translate(0,${43 * (1-percent)}svw) skew(0deg, ${-45*percent}deg) scale(${(ratio3)+(1-(ratio3))*(1-percent)},${(ratio2)+(1-(ratio2))*(1-percent)})` // translateY(-5svh)

    aborde.style.transform = `translateY(10svh) translateY(21px) translateX(${2*percent*76}svw)`
    achary.style.transform = `translateY(2.5svw) translateY(21px) translateX(${2*percent*76}svw)`

  }

  useEffect(() => {
    achary = document.getElementById('achary')
    aborde = document.getElementById('aborde')

    nav = document.getElementById('nav')
    name = document.getElementById('name')
    background = document.querySelector('.container.main.background.big')
    link = name.getElementsByClassName('a')
    topZ1 = document.getElementById('topZFront')
    topZ2 = document.getElementById('topZBack')
    midZ1 = document.getElementById('midZFront')
    bottomZ1 = document.getElementById('bottomZFront')
    bottomZ2 = document.getElementById('bottomZBack')
    topL1 = document.getElementById('topLFront')
    topL2 = document.getElementById('topLBack')
    bottomL1 = document.getElementById('bottomLFront')
    bottomL2 = document.getElementById('bottomLBack')
    fullZ = document.getElementById('fullZ')
    fullL = document.getElementById('fullL')
    zl = document.getElementById('ZL')
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('load', handleScroll)
    window.addEventListener('resize', handleScroll)
  })

  const zlProps = {thickness:'1svw', thickness2:'2svw', color: 'black', color2: 'white'}

  const elements = {
    topZFront:
      <line id='topZFront' x1="1svw" y1="0" x2="20svw" y2="0" style={{
        stroke: zlProps.color,
        strokeWidth: zlProps.thickness,
        strokeLinecap: "round",
        position: 'fixed',
        transformOrigin: 'top right'
      }}/>,
    topZBack:
      <line id='topZBack' x1="1svw" y1="0" x2="20svw" y2="0" style={{
          stroke: zlProps.color2,
          strokeWidth: zlProps.thickness2,
          strokeLinecap: "round",
          position: 'fixed',
          transformOrigin: 'top right'
      }}/>,
  }

  return (<>
    <div id="top">
      <ul id="nav">
        <li><a href="#history">History</a></li>
        <li><a href="#">Achievements</a></li>
        <li><a href="#">Skills</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div style={{position: 'fixed', top: '0', left: '0', zIndex: 2, position: 'absolute'}} id={'ZL'}>
        <svg id="fullZ" style={{overflow: 'visible', position: 'absolute', top:'3svh', left:'5svw', transformOrigin:'top left', width:'20svw', transform: 'translateY(5svh)'}}>
          {elements.topZBack}
          <line id='midZBack' x1="0" y1="20svw" x2="20svw" y2="0"
                style={{stroke: zlProps.color2, strokeWidth: zlProps.thickness2, strokeLinecap: "round", position: 'fixed'}}/>
          <line id='bottomZBack' x1="0" y1="20svw" x2="19svw" y2="20svw"
                style={{stroke: zlProps.color2, strokeWidth: zlProps.thickness2, strokeLinecap: "round", position: 'fixed'}}/>
          {elements.topZFront}
          <line id='midZFront' x1="0" y1="20svw" x2="20svw" y2="0"
                style={{stroke: zlProps.color, strokeWidth: zlProps.thickness, strokeLinecap: "round", position: 'fixed'}}/>
          <line id='bottomZFront' x1="0" y1="20svw" x2="19svw" y2="20svw"
                style={{stroke: zlProps.color, strokeWidth: zlProps.thickness, strokeLinecap: "round", position: 'fixed'}}/>
        </svg>
        <svg id="fullL"
            style={{overflow: 'visible', position: 'absolute', top: '6svh', left: '5svw', height: '20svw', transform: 'translateY(43svw) translateY(2svh)', width:'19svw', transformOrigin: 'top left'}}>
          <line id='topLBack' x1="0" y1="-20svw" x2="0" y2="0svw" style={{
            stroke: zlProps.color2,
            strokeWidth: zlProps.thickness2,
            strokeLinecap: "round",
            position: 'fixed',
            transformOrigin: 'bottom left'
          }}/>
          <line id='bottomLBack' x1="0" y1="0svw" x2="19svw" y2="0svw" style={{
            stroke: zlProps.color2,
            strokeWidth: zlProps.thickness2,
            strokeLinecap: "round",
            position: 'fixed',
            transformOrigin: 'bottom left'
          }}/>
          <line id='topLFront' x1="0" y1="-20svw" x2="0" y2="0svw" style={{
            stroke: zlProps.color,
            strokeWidth: zlProps.thickness,
            strokeLinecap: "round",
            position: 'fixed',
            transformOrigin: 'bottom left'
          }}/>
          <line id='bottomLFront' x1="0" y1="0svw" x2="19svw" y2="0svw" style={{
            stroke: zlProps.color,
            strokeWidth: zlProps.thickness,
            strokeLinecap: "round",
            position: 'fixed',
            transformOrigin: 'bottom left'
          }}/>
        </svg>
      </div>
      <div style={{position: 'absolute', width: '70svw', left:'27svw', top: '10svh', transform:`translateY(2.5svw) translateY(21px)`}} id={'achary'}>
        <img src={acharySvg} alt="achary" />
      </div>
      <div style={{position: 'absolute', width: '70svw', left:'27svw', top:'25.5svw', transform:`translateY(6svh) translateY(21px)`}} id={'aborde'}>
        <img src={abordeSvg} alt="aborde" />
      </div>
    </div>
    <div id='name'>
      <h1>
        {header.name}
      </h1>
    </div>
    <header className='container main background big' style={{zIndex:1}}>
    </header>
  </>);
}

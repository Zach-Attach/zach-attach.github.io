import React from "react";
import '../index.css';
import icons from '../assets/icons';

export default ({id, title, children}) => {
  return <>
    <div className={'medium background'} id={id}>
      <div className={'iconDiv'}>
        <img src={icons[id]} alt='' className={'icon'}/>
      </div>
      <div className='small'>
        <div className='blur title'>
          <h2>
            {title}
          </h2>
        </div>
        <div className='blur para'>
          <p>
            {children}
          </p>
        </div>
      </div>
    </div>
  </>
}


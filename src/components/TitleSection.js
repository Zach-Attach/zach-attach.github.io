import React from "react";
import '../index.css';
import {header} from "../strings.json";

export default () =>
  <header className='container main background big'>
    <div className='blur'>
      <h1>
        {header.name}
      </h1>
    </div>
  </header>

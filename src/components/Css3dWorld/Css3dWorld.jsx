import React, { Component } from 'react'
import style from './Css3dWorld.scss';

import Coordinate from './tool/Coordinate';
import DPlane from './sprite/DPlane';
import { Transform } from 'stream';

export class Css3dWorld extends Component {
  render() {
    return (
      <div className={style.ViewBox}>
        <div className={style.Stage}>
            
            <Coordinate />
            <DPlane type='bottom'/>
        </div>
      </div>
    )
  }
}

export default Css3dWorld

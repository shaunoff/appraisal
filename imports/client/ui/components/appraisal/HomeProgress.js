import React from 'react';
import {Circle} from 'rc-progress';

import ProgCircle from '../progressSidebar/ProgCircle.js';
import Header from '../progressSidebar/Header.js';
import Radium from 'radium'

@Radium
export default class HomeProgress extends React.Component {
  render(){
    return(
      <div style={{display: 'flex'}}>
      <div style={{flex: '1', flexDirection: 'column',justifyContent: 'center',alignItems: 'center',minWidth: '200px'}}>
        <div style={{height: '0px',width: '60px',margin: 'auto',flex: '1',textAlign:'center',position: 'relative', top: '20px'}}>100%</div>
        <div  style={{flex: '1',width: '60px', margin: 'auto'}}>
          <Circle trailWidth={6}  percent="10" strokeWidth="8" strokeColor="#007681"/>
        </div>
        <div  style={{flex: '1'}}>
          <Header stage="complete" text="Self-Assessment"/>
        </div>

      </div>
      <div style={{flex: '1', flexDirection: 'column',justifyContent: 'center',alignItems: 'center',minWidth: '200px'}}>
        <div style={{height: '0px',width: '60px',margin: 'auto',flex: '1',textAlign:'center',position: 'relative', top: '20px'}}><img style={{width: '20px'}} src="/icons/checked2.svg"/></div>
        <div  style={{flex: '1',width: '60px', margin: 'auto'}}>
          <Circle trailWidth={6}  percent="10" strokeWidth="8" strokeColor="#007681"/>
        </div>
        <div  style={{flex: '1'}}>
          <Header stage="complete" text="Self-Assessment"/>
        </div>

      </div>
      <div style={{flex: '1', flexDirection: 'column',justifyContent: 'center',alignItems: 'center',minWidth: '200px'}}>
        <div style={{height: '0px',width: '60px',margin: 'auto',flex: '1',textAlign:'center',position: 'relative', top: '20px'}}><img style={{width: '20px'}} src="/icons/checked2.svg"/></div>
        <div  style={{flex: '1',width: '60px', margin: 'auto'}}>
          <Circle trailWidth={6}  percent="10" strokeWidth="8" strokeColor="#007681"/>
        </div>
        <div  style={{flex: '1'}}>
          <Header stage="complete" text="Self-Assessment"/>
        </div>

      </div>
    </div>
    )
  }
}

import React from 'react';
import {Line} from 'rc-progress';


const OverallProgress = ({stage}) => {
  const percent = Math.round(((stage-1)/9)*100)
  return <div style={{display: 'flex'}}>

            <div style={{flex: '2'}}><Line percent={percent} strokeWidth="6" strokeColor="#007681" trailWidth="6" trailColor='#ccc'/></div>
            <div style={{flex: '1', marginLeft: '15px'}}>{`${percent} %`}</div>

        </div>
}


export default OverallProgress;

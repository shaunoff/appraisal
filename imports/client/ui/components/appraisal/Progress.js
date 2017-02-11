import React from 'react';
import {progressStyles} from "./progressStyles.js"

import { Circle } from 'rc-progress';

export default class Progress extends React.Component {
  render(){
    const {progressContainer,headerActive,headerInactive,headerComplete,circleActive,circleComplete,numberActive,numberInactive,circleInactive,textComplete,textActive,textInactive,lineComplete,line1Active,line2Active,line1Inactive,line2Inactive} = progressStyles
    const {stage} = this.props
    return(
      <div style={progressContainer}>
        <div style={{display: 'flex', flexDirection: 'column',alignItems: 'center',justifyContent: 'left',alignItems: 'left'}}>
          <div style={{display: "flex", flexDirection: 'column',marginLeft: '10px',marginTop: '10px',marginBottom: "50px"}}>
            <div style={{display: 'flex',flex: '1',alignItems:'center'}}>
              <div style={headerComplete}>Self Assessment</div>
                </div>
                <div style={{display: 'flex',flex: '1',marginTop: '10px',alignItems:'center'}}>
                  <div style={stage > 1 ? circleComplete : circleActive}>
                    <img style={{width: '12px'}} src="/icons/checked.svg"/>
                    <div style={stage == 1 ? line1Inactive : stage == 2 ? line1Active : lineComplete}></div>
                  </div>
                  <div style={stage > 1 ? textComplete : textActive}>Competencies</div>

                </div>
                <div style={{display: 'flex',flex: '1',marginTop: '10px',alignItems:'center'}}>
                  <div style={stage == 1 ? circleInactive : stage == 2 ? circleActive : circleComplete}>
                    <img style={{width: '12px'}} src="/icons/checked.svg"/>
                    <div style={stage <= 2 ? line2Inactive : stage == 3 ? line2Active : lineComplete}></div>
                  </div>
                  <div style={stage == 1 ? textInactive : stage == 2 ? textActive : textComplete}>Questions</div>
                </div>
                <div style={{display: 'flex',flex: '1',marginTop: '10px',alignItems:'center'}}>
                  <div style={stage <=2  ? circleInactive : stage == 3 ? circleActive : circleComplete}>
                    <img style={{width: '12px'}} src="/icons/checked.svg"/>
                  </div>
                  <div style={stage <= 2 ? textInactive : stage == 3 ? textActive : textComplete}>Summary</div>
                </div>

              </div>
              <div style={{display: "flex", flexDirection: 'column',marginLeft: '10px',marginTop: '10px',marginBottom: "50px"}}>
                <div style={{display: 'flex',flex: '1',alignItems:'center'}}>

                  <div style={headerActive}>Manager Assessment</div>
                </div>
                <div style={{display: 'flex',flex: '1',marginTop: '10px',alignItems:'center'}}>
                  <div style={circleActive}>
                    <div style={numberActive}>1</div>
                    <div style={line1Active}></div>
                  </div>
                  <div style={textActive}>Competencies</div>
                </div>
                <div style={{display: 'flex',flex: '1',marginTop: '10px',alignItems:'center'}}>
                  <div style={{display: 'flex',alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px',background:'white',borderRadius: '40px', border: '2px solid #6bada7',zIndex: '3', marginRight: '8px'}}>
                    <div style={numberActive}>2</div>
                    <div style={line2Active}></div>
                  </div>
                  <div style={textActive}>Questions</div>
                </div>
                <div style={{display: 'flex',flex: '1',marginTop: '10px',alignItems:'center'}}>
                  <div style={{display: 'flex',alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px',background:'white',borderRadius: '40px', border: '2px solid #6bada7',zIndex: '3', marginRight: '8px'}}>
                    <div style={numberActive}>3</div>
                  </div>
                  <div style={textActive}>Summary</div>
                </div>

              </div>
              <div style={{display: "flex", flexDirection: 'column',marginLeft: '10px',marginTop: '10px'}}>
                <div style={{display: 'flex',flex: '1',alignItems:'center'}}>

                  <div style={headerInactive}>Approval</div>
                </div>
                <div style={{display: 'flex',flex: '1',marginTop: '10px',alignItems:'center'}}>
                  <div style={circleInactive}>
                    <div style={numberInactive}>1</div>
                    <div style={line1Inactive}></div>
                  </div>
                  <div style={textInactive}>Employee Approval</div>
                </div>
                <div style={{display: 'flex',flex: '1',marginTop: '10px',alignItems:'center'}}>
                  <div style={circleInactive}>
                    <div style={numberInactive}>2</div>
                    <div style={line2Inactive}></div>
                  </div>
                  <div style={textInactive}>Manager Approval</div>
                </div>
                <div style={{display: 'flex',flex: '1',marginTop: '10px',alignItems:'center'}}>
                  <div style={circleInactive}>
                    <div style={numberInactive}>3</div>
                  </div>
                  <div style={textInactive}>Final Approval</div>
                </div>

              </div>


            </div>







      </div>




    )
  }
}

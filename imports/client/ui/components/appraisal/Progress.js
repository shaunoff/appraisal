import React from 'react';
import {progressStyles} from "./progressStyles.js"

import Circle from '../progressSidebar/Circle.js';
import SubHeader from '../progressSidebar/SubHeader.js';
import Radium from 'radium'

@Radium
export default class Progress extends React.Component {
  render(){
    const {progressContainer,headerActive,header,headerComplete,circleActive,circleComplete,numberActive,numberInactive,circleInactive,textComplete,textActive,textInactive,lineComplete,line1Active,line2Active,line1Inactive,line2Inactive} = progressStyles
    const {stage} = this.props
    return(
      <div style={progressContainer}>
        <div style={{display: 'flex', flexDirection: 'column',alignItems: 'center',justifyContent: 'left',alignItems: 'left'}}>
          <div style={{display: "flex", flexDirection: 'column',marginLeft: '10px',marginTop: '10px',marginBottom: "50px"}}>
            <div style={{display: 'flex',flex: '1',alignItems:'center'}}>
              <div style={[header, stage > 1 ? headerComplete: headerActive]}>Self Assessment</div>
                </div>
                <div style={{display: 'flex',flex: '1',marginTop: '10px',alignItems:'center'}}>
                <Circle stage={stage == 1 ? 'active' : 'complete'} number="1"/>
                <SubHeader stage={stage == 1 ? 'active' : 'complete'} text="Competencies"/>


                </div>
                <div style={{display: 'flex',flex: '1',marginTop: '10px',alignItems:'center'}}>
                  <Circle stage={stage == 2 ? 'active' : stage > 2 ? "complete" : ""} number="2"/>
                  <SubHeader stage={stage == 2 ? 'active' : stage > 2 ? "complete" : ""} text="Questions"/>
                </div>
                <div style={{display: 'flex',flex: '1',marginTop: '10px',alignItems:'center'}}>
                  <Circle stage={stage > 3 ? 'complete' : stage == 3 ? "active" : ""} number="3"/>
                  <SubHeader stage={stage > 3 ? 'complete' : stage == 3 ? "active" : ""} text="Summary"/>
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

                  <div style={header}>Approval</div>
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

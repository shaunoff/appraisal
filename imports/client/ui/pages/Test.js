import React from 'react';
import { Circle } from 'rc-progress';

import Formsy from 'formsy-react';

import Competencies from '../components/appraisal/Competencies.js'
import Questions from '../components/appraisal/Questions.js'
import Summary from '../components/appraisal/Summary.js'

import Appraisals from '../../../api/appraisals/appraisals';


export default class Test extends React.Component {
constructor(){
  super()
  this.state={
    stage: 1
  }
}
addAppraisal(data){
  this.setState({appraisal: data})

}
handleChange(data){
  console.log(data)
}
changeAssess(data){

  Meteor.call('insertNewAppraisal', this.state.appraisal, (err, res) => {
      if(err) {
        console.log('error')
      }
      if(!err) {
        console.log('Success')
      }
    });

  this.setState({stage: this.state.stage +=data})
  console.log(this.state.stage)
}
render(){
  return(
<div>
<div style={{display: 'flex'}}>
<div style={{margin: '15px',flex: '1', display: 'flex', flexDirection: 'column',border: "2px solid #ccc", borderRadius: '8px',marginBottom: '22px', background: "white",}}>
    <div style={{fontSize: "18px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
      Appraisal Progress
    </div>
    <div style={{display: "flex"}}>
    <div style={{display: 'flex',flexDirection: 'column',height:'112px', width: '80px', alignItems: 'center'}}>
      <div style={{height: '60px'}}>
        <Circle percent="45" strokeWidth="8" trailWidth="8" trailColor="#ccc" strokeColor="#007681" style={{width: '60px', height: '60px',borderRadius: '40px', marginRight: '8px',zIndex: '3'}}/>
        <div style={{fontSize: '18px', fontWeight: '700', position: 'relative', top: '-45px',left: '16px'}}> 10% </div>
      </div>
      <div style={{position: 'relative', top: '0px',left: '-3px',height: '52px', width: '4px', background:'#ccc',zIndex: '2'}}></div>
    </div>
    <div>
      <div style={{fontSize: '16px', fontWeight: '700',}}>Self-Assessment</div>
      <div style={{fontSize: '16px', fontWeight: '500',}}>Competencies</div>
      <div style={{fontSize: '16px', fontWeight: '500',}}>Questions</div>
      <div style={{fontSize: '16px', fontWeight: '500',}}>Summary</div>

    </div>
  </div>
    <div style={{display: 'flex',flexDirection: 'column',height:'164px', width: '80px', alignItems: 'center'}}>
        <div style={{position: 'relative', top: '0px',left: '-3px',height: '52px', width: '4px', background:'#ccc',zIndex: '2'}}></div>
      <div style={{height: '60px'}}>
        <Circle percent="45" strokeWidth="8" trailWidth="8" trailColor="#ccc" strokeColor="#007681" style={{width: '60px', height: '60px',borderRadius: '40px', marginRight: '8px',zIndex: '3'}}/>
        <div style={{fontSize: '18px', fontWeight: '700', position: 'relative', top: '-45px',left: '16px'}}> 10% </div>
      </div>
      <div style={{position: 'relative', top: '0px',left: '-3px',height: '52px', width: '4px', background:'#ccc',zIndex: '2'}}></div>
    </div>
    <div style={{display: 'flex',flexDirection: 'column',height:'164px', width: '80px', alignItems: 'center'}}>
        <div style={{position: 'relative', top: '0px',left: '-3px',height: '52px', width: '4px', background:'#007681',zIndex: '2'}}></div>
      <div style={{height: '60px'}}>
        <Circle percent="45" strokeWidth="8" trailWidth="8" trailColor="#ccc" strokeColor="#007681" style={{width: '60px', height: '60px',borderRadius: '40px', marginRight: '8px',zIndex: '3'}}/>
        <div style={{fontSize: '18px', fontWeight: '700', position: 'relative', top: '-45px',left: '16px'}}> 10% </div>
      </div>
      <div style={{position: 'relative', top: '0px',left: '-3px',height: '52px', width: '4px', background:'#007681',zIndex: '2'}}></div>
    </div>
    <div style={{display: 'flex',flexDirection: 'column',height:'164px', width: '80px', alignItems: 'center'}}>
        <div style={{position: 'relative', top: '0px',left: '-3px',height: '52px', width: '4px', background:'#ccc',zIndex: '2'}}></div>
      <div style={{height: '60px'}}>
        <Circle percent="45" strokeWidth="8" trailWidth="8" trailColor="#ccc" strokeColor="#007681" style={{width: '60px', height: '60px',borderRadius: '40px', marginRight: '8px',zIndex: '3'}}/>
        <div style={{fontSize: '18px', fontWeight: '700', position: 'relative', top: '-45px',left: '16px'}}> 10% </div>
      </div>

    </div>




</div>
{this.state.stage == 1 ? <Competencies appraisal={this.addAppraisal.bind(this)}/> : this.state.stage ==  2 ? <Questions/> : <Summary/>}
</div>
<div style={{display: 'flex'}}>
  <div style={{flex: '1'}}></div>
  {this.state.stage >= 2 ?
  <div onClick={this.changeAssess.bind(this, -1)} style={{cursor: 'pointer', width: '80px', textAlign: 'center', display: 'flex', flexDirection: "column", fontSize: "18px", fontWeight: '700', background: '#6bada7',color: 'white',marginTop:"-5px",marginRight:"15px",padding: "10px"}}>
      Previous
  </div>
  :""}
  <div onClick={this.changeAssess.bind(this, 1)} style={{cursor: 'pointer', width: '80px', textAlign: 'center', display: 'flex', flexDirection: "column", fontSize: "18px", fontWeight: '700', background: '#6bada7',color: 'white',marginTop:"-5px",marginRight:"15px",padding: "10px"}}>
      Continue
  </div>
</div>


</div>
)
}
}

import React from 'react';
import { Circle } from 'rc-progress';

import Formsy from 'formsy-react';

import Competencies from '../components/appraisal/Competencies.js'
import Questions from '../components/appraisal/Questions.js'
import Summary from '../components/appraisal/Summary.js'
import Progress from '../components/appraisal/Progress.js'
import Appraisals from '../../../api/appraisals/appraisals';

import Test2 from './Test2.js'


export default class Test extends React.Component {
constructor(){
  super()
  this.state={
    stage: 1
  }
}

handleChange(data){
  console.log(data)
}
advance(){
  this.setState({stage: this.state.stage +=1})
  console.log(this.state.stage)
}
previous(){
  this.setState({stage: this.state.stage -=1})

}
render(){
  return(
<div>
<div style={{display: 'flex',flexDirection: 'row'}}>
<Progress stage={this.state.stage}/>

<Test2 element={this.state.stage}>
{this.state.stage == 1 ? <Competencies advance={this.advance.bind(this)}/> : this.state.stage ==  2 ? <Questions previous={this.previous.bind(this)} advance={this.advance.bind(this)}/> : <Summary/>}
</Test2>
</div>



</div>
)
}
}

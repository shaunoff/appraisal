import React from 'react';


import Formsy from 'formsy-react';

import Competencies from '../components/appraisal/Competencies.js'
import ManagerCompetencies from '../components/appraisal/ManagerCompetencies.js'
import ManagerQuestions from '../components/appraisal/ManagerQuestions.js'
import ManagerSummary from '../components/appraisal/ManagerSummary.js'
import Questions from '../components/appraisal/Questions.js'
import Summary from '../components/appraisal/Summary.js'
import Progress from '../components/appraisal/Progress.js'
import Appraisals from '../../../api/appraisals/appraisals';

import Test2 from './Test2.js'


export default class Test extends React.Component {
constructor(props){
  super(props)
  const {stage} = this.props.user[0]
  this.state={
    stage: stage
  }
}
stageNumber(managerAccess,user) {
  switch (this.state.stage) {
                   case 1:
                    return <Competencies advance={this.advance.bind(this)}/>;
                   case 2:
                    return <Questions previous={this.previous.bind(this)} advance={this.advance.bind(this)}/>;
                   case 3:
                    return <Summary previous={this.previous.bind(this)} advance={this.advance.bind(this)}/>;
                   case 4:
                    return <ManagerCompetencies managerAccess={managerAccess} user={user} advance={this.advance.bind(this)}/>;
                   case 5:
                    return <ManagerQuestions managerAccess={managerAccess} user={user} previous={this.previous.bind(this)} advance={this.advance.bind(this)}/>;
                   case 6:
                    return <ManagerSummary user={user} previous={this.previous.bind(this)}/>;
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
  const paramId = this.props.params._id
  const user = Meteor.users.findOne({_id: paramId})
  const managerAccess = user._id == Meteor.userId() ? true : false

  return(
<div>
<div style={{display: 'flex',flexDirection: 'row'}}>
<Progress stage={this.props.user[0].stage}/>

{/*<Test2 element={this.state.stage}>
{this.state.stage == 1 ? <Competencies advance={this.advance.bind(this)}/> : this.state.stage ==  2 ? <Questions previous={this.previous.bind(this)} advance={this.advance.bind(this)}/> : <Summary/>}
</Test2>*/}
<Test2 element={this.state.stage}>
{this.stageNumber(managerAccess,user)}
{/*{this.state.stage == 1 ? <ManagerCompetencies managerAccess={managerAccess} user={user} advance={this.advance.bind(this)}/> : this.state.stage ==  2 ? <ManagerQuestions managerAccess={managerAccess} user={user} previous={this.previous.bind(this)} advance={this.advance.bind(this)}/> : <ManagerSummary user={user} previous={this.previous.bind(this)}/>}*/}
</Test2>
</div>



</div>
)
}
}

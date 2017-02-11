import React from 'react';


import Formsy from 'formsy-react';

import Rating from './Rating.js'
import Comment from './Comment.js'

export default class Competencies extends React.Component {
constructor(){
  super()
  this.state={
    test: 0,
    canSubmit: false,
  }
}
handleSubmit(data){
  Meteor.call('insertCompetencies', data, (err, res) => {
      if(err) {
        console.log('error')
      }
      if(!err) {
        console.log('Success')
        this.props.advance()
      }
    });
}
enableButton() {
      this.setState({
        canSubmit: true
      });
    }
disableButton() {
      this.setState({
        canSubmit: false
      });
    }
render(){
  const {competencies = {}} = Meteor.user()

  return(

    <div style={{display: 'flex', flexDirection: 'column',margin: '15px',flex: '3', display: 'flex',border: "2px solid #ccc", borderRadius: '8px',background: "white"}}>
        <div style={{fontSize: "18px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
          Self-Assessment: Competencies
        </div>
        <Formsy.Form ref="form" onValidSubmit={this.handleSubmit.bind(this)} onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)}>


        <div style={{display: 'flex', flexDirection: "column"}}>
        <div style={{fontSize: "14px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
          1. Communication: <span style={{color: "#ccc"}}>Ability to explain, convince and be understood in oral and written communications with employees and clients at all levels. Also, consider evidence of an understanding of people's views and the effect of own actions on others.</span>
        </div>
        <Rating value={competencies.commRating} name="commRating" validations="isExisty" required/>
        <Comment value={competencies.commComment} rows={4} name="commComment" validations="isExisty" required/>
      </div>
      <div style={{display: 'flex', flexDirection: "column"}}>
      <div style={{fontSize: "14px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
        2. Cooperation: <span style={{color: "#ccc"}}>Ability to demonstrate a spirit of willingness and interest when working with superior(s), co-workers and clients.</span>
      </div>
      <Rating value={competencies.coopRating} name="coopRating" validations="isExisty" required/>
      <Comment value={competencies.coopComment} rows={4} name="coopComment" validations="isExisty" required/>
    </div>
    <div style={{display: 'flex', flexDirection: "column"}}>
    <div style={{fontSize: "14px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
      3. Judgement and Initiative: <span style={{color: "#ccc"}}>Ability to identify and appropriately solve or refer problems. Willingness to expand responsibilities.</span>
    </div>
    <Rating value={competencies.judgeRating} name="judgeRating" validations="isExisty" required/>
      <Comment value={competencies.judgeComment} rows={4} name="judgeComment" validations="isExisty" required/>

    </div>
    <div style={{display: 'flex', flexDirection: "column"}}>
    <div style={{fontSize: "14px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
      4. Time Management: <span style={{color: "#ccc"}}>Ability to organize time effectively. Also consider ability to set priorities, anticipate problems, estimate time requirements and meet deadlines.</span>
    </div>
      <Rating value={competencies.timeRating} name="timeRating" validations="isExisty" required/>
      <Comment value={competencies.timeComment} rows={4} name="timeComment" validations="isExisty" required/>
    </div>
    <button  type="submit" disabled={!this.state.canSubmit}>Submit</button>
    </Formsy.Form>


    </div>
  )
}
}

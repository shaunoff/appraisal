import React from 'react';

import { browserHistory } from 'react-router';
import Formsy from 'formsy-react';
import Button from '../button/Button.js'
import Rating from './Rating.js'
import Comment from './Comment.js'

export default class Summary extends React.Component {
constructor(){
  super()
  this.state={
    canSubmitFalse: 0
  }
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
handleSubmit(data){

  Meteor.call('insertSummary', data, (err, res) => {
      if(err) {
        console.log('error')
      }
      if(!err) {
        console.log('Success')
        browserHistory.push('/')
      }
    });
}
previous(){

  this.props.previous()
}
render(){
  const {summary = {}} = Meteor.user()
  const {employee = {}} = summary
  return(

    <div style={{display: 'flex', flexDirection: 'column',margin: '15px',flex: '3', display: 'flex',border: "2px solid #ccc", borderRadius: '8px', background: "white"}}>
        <div style={{fontSize: "18px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
          Self Assessment: Summary
        </div>
        <Formsy.Form ref="form"  onValidSubmit={this.handleSubmit.bind(this)} onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)}>
          <div style={{display: 'flex', flexDirection: "column"}}>
          <div style={{fontSize: "14px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
            Overall Rating:
          </div>
          <Rating value={employee.summaryRating} size="40px" name="summaryRating" required/>


          </div>

        <div style={{display: 'flex', flexDirection: "column"}}>
        <div style={{fontSize: "14px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
          Overall Summary: <span style={{color: "#ccc"}}>How well have you performed over the last year?</span>
        </div>

        <Comment value={employee.overall} rows={8} name="overall" required/>
      </div>
      <div style={{display: 'flex', flexDirection: "column"}}>
      <div style={{fontSize: "14px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
        Other Points: <span style={{color: "#ccc"}}>Any other points you would like to discuss at you appraisal</span>
      </div>

      <Comment value={employee.otherComments} rows={8} name="otherComments"/>
    </div>
    <div style={{display: 'flex',margin: '10px'}}>
    <Button type="button" click={this.previous.bind(this)}>Previous</Button>
    <div style={{flex: '1'}}></div>
    <Button type="submit" disabled={!this.state.canSubmit}>Submit</Button>
    </div>

    </Formsy.Form>


    </div>
  )
}
}

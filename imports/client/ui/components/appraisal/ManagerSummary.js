import React from 'react';


import Formsy from 'formsy-react';
import DummyRating from './DummyRating.js'
import DummyComment from './DummyComment.js'
import Rating from './Rating.js'
import Comment from './Comment.js'
import Button from '../button/Button.js'

export default class ManagerSummary extends React.Component {
constructor(){
  super()
  this.state={
    test: 0
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
  Meteor.call('insertManSummary', data, (err, res) => {
      if(err) {
        console.log('error')
      }
      if(!err) {
        console.log('Success')
        browserHistory.push('/');
      }
    });
}
previous(){
  this.props.previous()
}
render(){
  const {summary = {}} = Meteor.user()
  const {employee = {}, manager ={}} = summary
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
          <div style={{display: 'flex'}}>
            <div style={{display: 'flex',flex: '1'}}>
                <DummyRating value={employee.summaryRating} size="40px" name="summaryRating"/>
            </div>
            <div style={{display: 'flex',flex: '1'}}>
                <Rating value={manager.manSummaryRating} size="40px" name="manSummaryRating"/>
            </div>
          </div>



          </div>

        <div style={{display: 'flex', flexDirection: "column"}}>
        <div style={{fontSize: "14px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
          Overall Summary: <span style={{color: "#ccc"}}>How well have you performed over the last year?</span>
        </div>
        <div style={{display: 'flex'}}>
          <div style={{display: 'flex',flex: '1'}}>
              <DummyComment value={employee.overall} rows={8} name="overall"/>
          </div>
          <div style={{display: 'flex',flex: '1'}}>
              <Comment value={manager.manOverall} rows={8} name="manOverall"/>
          </div>
        </div>

      </div>
      <div style={{display: 'flex', flexDirection: "column"}}>
      <div style={{fontSize: "14px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
        Other Points: <span style={{color: "#ccc"}}>Any other points you would like to discuss at you appraisal</span>
      </div>
      <div style={{display: 'flex'}}>
        <div style={{display: 'flex',flex: '1'}}>
            <DummyComment value={employee.otherComments} rows={8} name="otherComments"/>
        </div>
        <div style={{display: 'flex',flex: '1'}}>
          <Comment value={manager.manOtherComments} rows={8} name="manOtherComments"/>
        </div>
      </div>

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

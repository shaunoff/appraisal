import React from 'react';


import Formsy from 'formsy-react';

import Rating from './Rating.js'
import Comment from './Comment.js'

export default class Summary extends React.Component {
constructor(){
  super()
  this.state={
    test: 0
  }
}
handleChange(data){
  console.log(data)
}
render(){
  return(

    <div style={{display: 'flex', flexDirection: 'column',margin: '15px',flex: '3', display: 'flex',border: "2px solid #ccc", borderRadius: '8px',marginBottom: '22px', background: "white"}}>
        <div style={{fontSize: "18px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
          Self Assessment: Summary
        </div>
        <Formsy.Form ref="form"  onChange={this.handleChange.bind(this)}>
          <div style={{display: 'flex', flexDirection: "column"}}>
          <div style={{fontSize: "14px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
            Overall Rating:
          </div>
          <Rating size="40px" name="3"/>


          </div>

        <div style={{display: 'flex', flexDirection: "column"}}>
        <div style={{fontSize: "14px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
          Overall Summary: <span style={{color: "#ccc"}}>How well have you performed over the last year?</span>
        </div>

        <Comment rows={8} name="1comment"/>
      </div>
      <div style={{display: 'flex', flexDirection: "column"}}>
      <div style={{fontSize: "14px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
        Other Points: <span style={{color: "#ccc"}}>Any other points you would like to discuss at you appraisal</span>
      </div>

      <Comment rows={8} name="2comment"/>
    </div>


    </Formsy.Form>


    </div>
  )
}
}

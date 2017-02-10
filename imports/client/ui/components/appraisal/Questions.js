import React from 'react';


import Formsy from 'formsy-react';

import Rating from './Rating.js'
import Comment from './Comment.js'

export default class Questions extends React.Component {
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
          Self-Assessment: Questions
        </div>
        <Formsy.Form ref="form"  onChange={this.handleChange.bind(this)}>


        <div style={{display: 'flex', flexDirection: "column"}}>
        <div style={{fontSize: "14px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
          1. What are your principle strengths
        </div>

        <Comment rows={4} name="1comment"/>
      </div>
      <div style={{display: 'flex', flexDirection: "column"}}>
      <div style={{fontSize: "14px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
        2. What have been your most important accomplishments this year?
      </div>

      <Comment rows={4} name="2comment"/>
    </div>
    <div style={{display: 'flex', flexDirection: "column"}}>
    <div style={{fontSize: "14px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
      3. How well did you accomplish last year's goals?
    </div>

    <Comment rows={4} name="2comment"/>
  </div>
    <div style={{display: 'flex', flexDirection: "column"}}>
    <div style={{fontSize: "14px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
      4. What do you think are the areas in which you need to improve and what training is needed to achieve these imrovements??
    </div>

      <Comment rows={4} name="3comment"/>

    </div>

    </Formsy.Form>


    </div>
  )
}
}

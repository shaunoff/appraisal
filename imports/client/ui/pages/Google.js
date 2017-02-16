import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import {createContainer} from 'meteor/react-meteor-data'

class Google extends React.Component {
  handleClick(){
    Meteor.call('directory',(err, res) => {
        if(err) {
          console.log('error')
        }
        if(!err) {
          console.log('success', res)
          googleQuery.set(res)
        }
      });
  }
  render() {
    console.log(this.props.google)
    return (
      <div>
        <div onClick={this.handleClick.bind(this)}>Click Me</div>
        {this.props.google.data && this.props.google.data.users.map((field,index)=>{
          return <div key={index}>{field.name.fullName}</div>
        })}
      </div>
    )
  }
}

const googleQuery = new ReactiveVar([]);


export  default createContainer(()=>{

  //let userSub = Meteor.subscribe("currentUser");
  return {
    google: googleQuery.get()
  }
}, Google);

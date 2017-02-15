import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import {createContainer} from 'meteor/react-meteor-data'

export default class Google extends React.Component {
  handleClick(){
    Meteor.call('directory',(err, res) => {
        if(err) {
          console.log('error')
        }
        if(!err) {
          console.log('success', res)

        }
      });
  }
  render() {
    return (
      <div onClick={this.handleClick.bind(this)}>Click Me</div>
    )
  }
}

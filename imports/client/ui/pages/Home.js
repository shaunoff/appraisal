import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { autobind } from 'core-decorators';
import { Link } from 'react-router';

import Item from '../components/Item.js';

import Appraisals from '../../../api/appraisals/appraisals';

@autobind
class Home extends Component {
  addAppraisals(event) {
    event.preventDefault();
    const appraisal = this.refs.item.value.trim();
    Meteor.call('insertNewAppraisal', appraisal, (err, res) => {
        if(err) {
          console.log('error')
        }
        if(!err) {
          console.log('Success')
        }
      });
    }


  render() {
    if (!this.props.ready) {
        return <div>Loading</div>;
    }
    const test = true;
    return (
      <div style={{padding: '50px'}}>

          <Link style={{ fontSize: "16px",textDecoration: 'none',color: "#585858 " }} to={`appraisal/${Meteor.userId()}`}>Targets</Link>
        <form  onSubmit={this.addAppraisals}>
          <input type='text' ref='item' />
          <button type='submit'>Add Items</button>
        </form>

          {this.props.appraisals.map((appraisal) => {
            return <Item appraisal={appraisal} key={appraisal._id}/>
          })}

      </div>
    );
  }
}

export default createContainer(({params}) => {
  let appraisalsSub = Meteor.subscribe('allAppraisals');


  let appraisalsArray = Appraisals.find({}).fetch();

  return {
    ready: appraisalsSub.ready(),
    appraisals: appraisalsArray
  }
}, Home);

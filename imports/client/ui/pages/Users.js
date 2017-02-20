import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import {createContainer} from 'meteor/react-meteor-data'
import Radium from 'radium'
import TablePage from '../components/table/TablePage.js'
import moment from 'moment';

@Radium
class Users extends React.Component {
  constructor(){
    super()
    this.state={
      skip: 0,
      arrowUp: true,
      }
  }
  lastSort(){
    const arrowDirection = sortDirection.get()
    const value = sortValue.get()
    if (value == 'lastName'){
      if (arrowDirection == 1) {
        sortDirection.set(-1)
        this.setState({arrowUp: false})
      }
      if (arrowDirection == -1) {
        sortDirection.set(1)
        this.setState({arrowUp: true})
      }
    }
    if (value !== 'lastName'){
      sortValue.set('lastName')
      sortDirection.set(1)
      this.setState({arrowUp: true})

    }

  }
  firstSort(){
    console.log('clicked')
    const arrowDirection = sortDirection.get()
    const value = sortValue.get()
    console.log(value)
    if (value == 'firstName'){
      if (arrowDirection == 1) {
        sortDirection.set(-1)
        this.setState({arrowUp: false})
      }
      if (arrowDirection == -1) {
        sortDirection.set(1)
        this.setState({arrowUp: true})
      }
    }
    if (value !== 'firstName'){
      sortValue.set('firstName')
      sortDirection.set(1)
      this.setState({arrowUp: true})

    }
  }
  dateSort(){
    const arrowDirection = sortDirection.get()
    const value = sortValue.get()
    if (value == 'startDate'){
      if (arrowDirection == 1) {
        sortDirection.set(-1)
        this.setState({arrowUp: false})
      }
      if (arrowDirection == -1) {
        sortDirection.set(1)
        this.setState({arrowUp: true})
      }
    }
    if (value !== 'startDate'){
      sortValue.set('startDate')
      sortDirection.set(1)
      this.setState({arrowUp: true})

    }

  }
  handleNext(){
    console.log('clicked')
    this.setState({skip: this.state.skip + 10}, ()=>{
      skipAmount.set(this.state.skip)
    }
    );

  }
  handlePrev(){
    this.setState({skip: this.state.skip - 10}, ()=>{
      skipAmount.set(this.state.skip)
    }
    );

  }

  render() {
    const styles={
      even: {
        background: "#f6f6f6"
      },
      row: {
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottom: '2px solid #ccc'
      },
      header: {
        fontWeight: '700',
        fontSize: '18px',
        padding: '5px',
        color: '#6bada7'

      },
      rowContent: {
        fontWeight: '700',
        fontSize: '16px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5px',
        color: '#585858',
        height: '40px',
        borderBottom: '2px solid #ccc'

      },
      navigation: {
        color: '#6bada7',
        fontWeight: '700',
        fontSize: '16px',

      },
      sortArrow:{
        marginLeft: "20px",
         height: '12px',
         width: '12px'
      },
      arrowUp:{
        transform: 'rotate(180deg)'
      }
    }
      const {users} = this.props
      const sortActive =sortValue.get()
      return (
          <div style={{margin:'15px', border: "2px solid #ccc", borderRadius: '8px', padding: '0px 15px 5px 15px'}}>

          <div style={[styles.row,styles.header]}>
            <div onClick={this.lastSort.bind(this)} style={{display: 'flex',flex: '1',alignItems: 'center'}}>
              <div>Last Name</div>
              <img style={[styles.sortArrow, this.state.arrowUp && styles.arrowUp,sortActive == 'lastName' ? '' : {display: 'none'}]} src="/icons/down.svg"/>
              <div style={{flex: '1'}}></div>
            </div>
            <div onClick={this.firstSort.bind(this)} style={{display: 'flex',flex: '1',alignItems: 'center'}}>
              <div>First Name</div>
              <img style={[styles.sortArrow, this.state.arrowUp && styles.arrowUp,sortActive == 'firstName' ? '' : {display: 'none'}]} src="/icons/down.svg"/>
              <div style={{flex: '1'}}></div>
            </div>
            <div onClick={this.dateSort.bind(this)} style={{display: 'flex',flex: '1',alignItems: 'center'}}>
              <div>Start Date</div>
              <img style={[styles.sortArrow, this.state.arrowUp && styles.arrowUp,sortActive == 'startDate' ? '' : {display: 'none'}]} src="/icons/down.svg"/>
              <div style={{flex: '1'}}></div>
            </div>

            <div style={{flex: '2'}}>Complete</div>
          </div>
          <div>
            {users && users.map((field,index)=>{


            return <div style={[styles.rowContent, index%2 == 0 ? styles.even : ""]} key={index}>
                      <div style={{flex: '1'}}>{field.profile.lastName}</div>
                      <div style={{flex: '1'}}>{field.profile.firstName}</div>
                      <div style={{flex: '1'}}>{moment(field.profile.startDate).format('Do, MMM, YYYY')}</div>
                      <div style={{flex: '2'}}>Complete</div>
                  </div>
            })}
          </div>
          <div style={{display: 'flex',alignItems: 'center', height: '40px'}}>
            <div style={{flex: '1'}}></div>
            <div style={[styles.navigation]} onClick={this.handlePrev.bind(this)}>Previous</div>
            <TablePage />
            <div style={[styles.navigation]} onClick={this.handleNext.bind(this)}>next</div>

          </div>

        </div>

      )
    }


}
const skipAmount = new ReactiveVar(0);
const sortValue = new ReactiveVar('lastName');
const sortDirection = new ReactiveVar(1);
export default createContainer(({params}) => {
    let allUsersSub =  Meteor.subscribe('allUsers',skipAmount.get(),sortValue.get(),sortDirection.get());
    return {
      subsReady: allUsersSub.ready(),
      users: Meteor.users.findFromPublication('allUsers').fetch(),

    }
  }, Users);

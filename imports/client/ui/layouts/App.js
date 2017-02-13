import React, { Component } from 'react';
import { LoginButtons } from 'meteor/okgrow:accounts-ui-react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
import {StyleRoot} from 'radium';

import Header from '../components/header/Header.js'
import Sidebar from '../components/sidebar/Sidebar.js'

const handleLogout = () => Meteor.logout(() => browserHistory.push('/login'));

class App extends Component {
  render() {

    if (!this.props.userReady) {
        return <div>Loading</div>;
    }
    if (this.props.userReady) {
      const path = this.props.location.pathname
      return  <StyleRoot>
                <div style={{display: 'flex', height: '100%',width: "calc(100% - 2px)"}}>
                  <Sidebar path={path}/>
                  <div style={{flex: '1', display: 'flex', flexDirection: 'column'}}>
                    <Header />
                    <div style={{flex: '1', height: 'calc(100vh - 60px)', background: '#F8FAFB'}}>
                      {this.props.children}
                    </div>
                  </div>
                </div>
            </StyleRoot>
    }
  }
}


export default createContainer(({params}) => {
    let currentUserSub =  Meteor.subscribe('currentUser');
    return {
      userReady: currentUserSub.ready(),

    }
  }, App);

import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Radium from 'radium'
import Checkbox from 'material-ui/Checkbox';

@Radium
class UserManager extends Component {
  constructor(){
    super()
    this.state ={
      checked: false,
      indexChecked: null
    }
  }
  assignManager(manager,index){
    if (index == this.state.indexChecked) {
      this.setState({
        checked: false,
        indexChecked: null
      })
      Meteor.call('assignManager', null, this.props.user)
    }
    else {
      this.setState({
        checked: true,
        indexChecked: index
      })
      Meteor.call('assignManager', manager, this.props.user)
    }



  }
  render() {
    if (!this.props.subsReady) {
        return <div>Loading</div>;
    }
    if (this.props.subsReady) {
    const {user,leads} = this.props
    const styles = {
      managerWrapper: {
        display: 'flex',
        flex: '1',
        alignItems: 'center',
        minWidth: '40%',
        maxWidth: '48%',
        margin: '5px 10px 5px 0px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        height: '40px'
      },
      name: {
        flex: '1',
        fontSize: "16px",
        fontWeight: '700',
        padding:"10px"
      },
      circle: {
        background: "#007681",
        margin: '10px',
        display:'flex',
        fontWeight: '500',
        height: "30px",
        width: "30px",
        borderRadius: '30px',
        alignItems:'center',
        justifyContent: "center",
        color: 'white'}
    }
    return (
      <div style={{display: 'flex'}}>
        <div style={{display: 'flex',flexWrap: 'wrap'}}>
          {leads.map((lead,index)=>{
            return (
            <div key={index} style={[styles.managerWrapper]}>
              <div style={[styles.circle]}>

                  <div style={{ fontSize: '14px',color: 'white'}}>{`${lead.profile.firstName[0].toUpperCase()}${lead.profile.lastName[0].toUpperCase()}`}</div>

              </div>
              <div style={[styles.name]}>
                 {`${lead.profile.firstName} ${lead.profile.lastName}`}
              </div>

              <div style={{fontSize: "16px", fontWeight: '700', color: '#D93A32',padding:"10px"}}>
                <Checkbox disabled={this.state.indexChecked == index ? false : this.state.checked ? true : false} onCheck={this.assignManager.bind(this,lead._id,index)}/>
              </div>
            </div>
          )
          })}
        </div>
      </div>
    )
   }
  }
}
export default createContainer(({params}) => {

    let leadsSub =  Meteor.subscribe('leads');
    return {
      subsReady: leadsSub.ready(),
      leads: Meteor.users.findFromPublication('leads',{},{sort: {
        'profile.firstName': 1
      }
      }).fetch(),

    }
  }, UserManager);

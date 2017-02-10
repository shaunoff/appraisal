import React, { Component } from 'react';
import {HOC} from 'formsy-react';

class Comment extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      comment: ''
    }


  }

  render(){

    return (
      <textarea
        style={{resize: 'none',fontFamily: 'quicksand',flex: '1', border: '2px solid #ccc', borderRadius: '4px', margin: '10px'}}
        placeholder={this.props.placeholder}
        value={this.props.getValue()}
        name={this.props.name}
        type="text"
        rows={this.props.rows}
        onFocus={this.props.onFocus}
        onChange={(e) => this.props.setValue(e.target.value)}
      />
  )
  }
}
export default HOC(Comment);

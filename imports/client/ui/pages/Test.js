import React from 'react';
import { spring, TransitionMotion } from 'react-motion'
import Test2 from './Test2.js'


export default class Test extends React.Component {
  constructor(){
    super()
    this.state={
      stage: 1
    }
  }
  click1(){
    this.setState({stage:2})
  }
  click2(){
    this.setState({stage:1})
  }
  render() {
    return (
      <div>
        <button onClick={this.click1.bind(this)}>click1</button>
        <button onClick={this.click2.bind(this)}>click2</button>
      <Test2 element={this.state.stage}>
        {this.state.stage == 1 ? <div>Hello</div> : <div>Goodbye</div>}
      </Test2>
      </div>
    );
  }
}

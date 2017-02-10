import React, { Component } from 'react';
import {HOC} from 'formsy-react';

 class Rating extends React.Component {
  constructor(props){
    super(props);

    this.state ={
      rating: this.props.value ? this.props.value : ''
    }



  }

  ratingChange(data){
    this.setState({rating: data})
    this.props.setValue(data)
  }
  render(){
    const styles={
      normal: {
        marginLeft: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: this.props.size ? this.props.size : '20px',
        height: this.props.size ? this.props.size : '20px',
        borderRadius: this.props.size ? this.props.size : '20px',
        border: '2px solid #ccc',
        background: "#ccc",
        marginRight: '8px',
        zIndex: '3',
        cursor: 'pointer'},
      scored: {
          marginLeft: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: this.props.size ? this.props.size : '20px',
          height: this.props.size ? this.props.size : '20px',
          borderRadius: this.props.size ? this.props.size : '20px',
          border: '2px solid #007681',
          background: "#007681",
          marginRight: '8px',
          zIndex: '3',
          cursor: 'pointer'},

    }

    return (
      <div style={{display: 'flex'}}>
        <div onClick={this.ratingChange.bind(this,1)} style={this.state.rating >= 1 ? styles.scored: styles.normal}>
          <div style={{color: "white",fontSize: '16px',fontWeight: '700'}}>1</div>
        </div>
        <div onClick={this.ratingChange.bind(this,2)} style={this.state.rating >= 2 ? styles.scored: styles.normal}>
          <div style={{color: "white",fontSize: '16px',fontWeight: '700'}}>2</div>
        </div>
        <div onClick={this.ratingChange.bind(this,3)} style={this.state.rating >= 3 ? styles.scored: styles.normal}>
          <div style={{color: "white",fontSize: '16px',fontWeight: '700'}}>3</div>
        </div>
        <div onClick={this.ratingChange.bind(this,4)} style={this.state.rating >= 4 ? styles.scored: styles.normal}>
          <div style={{color: "white",fontSize: '16px',fontWeight: '700'}}>4</div>
        </div>
        <div onClick={this.ratingChange.bind(this,5)} style={this.state.rating >= 5 ? styles.scored: styles.normal}>
          <div style={{color: "white",fontSize: '16px',fontWeight: '700'}}>5</div>
        </div>
    </div>
  )
  }
}
export default HOC(Rating);

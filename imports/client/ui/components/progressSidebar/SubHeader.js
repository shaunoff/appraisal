import React from 'react';
import Radium from 'radium'

@Radium
export default class SubHeader extends React.Component {
  render(){
    const forwardAnimation = Radium.keyframes({
      '50%': { transform: 'translateX(12px) scale(1.2)'}
    })
    const styles = {
      text: {
        fontSize: '14px',
        fontWeight: '500',
        color: '#ccc'
      },
      active: {
        color: '#6bada7'
      },
      complete: {
        color: '#007681',
        fontWeight: '700',
        animation: '0.6s ease',
        animationName: forwardAnimation
      },
    }
    const {stage} =this.props
    return(
      <div style={[styles.text, stage == 'active' ? styles.active: stage == 'complete' ? styles.complete : ""]}>{this.props.text}</div>
    )
  }
}

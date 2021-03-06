import React from 'react';

class DelayedButton extends React.Component {

  delayedFunc = (event) => {
    event.persist()

    setTimeout(()=> {this.props.onDelayedClick(event)}, this.props.delay)
  }

  render(){
    return (
      <button onClick={this.delayedFunc}>click me bitch</button>
    )
  }
}


export default DelayedButton;

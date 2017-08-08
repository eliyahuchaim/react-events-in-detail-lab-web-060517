// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {

  theFuckingXY = (event) => {
    const X = event.clientX;
    const Y = event.clientY;
    let coordinates = [X, Y];
    return this.props.onReceiveCoordinates(coordinates)
  }



  render() {
    return (
      <button onClick={this.theFuckingXY}>Click me</button>
    )
  }

}

export default CoordinatesButton;

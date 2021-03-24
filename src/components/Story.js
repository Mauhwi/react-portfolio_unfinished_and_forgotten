import React, { Component } from "react";
import sprite from '../assets/images/campfire1.png'

export class Story extends Component {
  render() {
    // let sprite;
    // if (!this.props.isLighten) {
    //   sprite = <img src="fp-sprite1.png" alt="sprite"></img>;
    // } else {
    //   sprite = <img src="fp-sprite2.png" alt="sprite"></img>;
    // }

    return (
      <div className="Story">
        <div className="bg">
          <div className="sprite"><img src={sprite} alt="sprite"></img></div>
        </div>
      </div>
    );
  }
}

export default Story;

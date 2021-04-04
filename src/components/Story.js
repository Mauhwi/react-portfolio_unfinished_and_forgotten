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
          <div className={`sprite ${this.props.animationRunning ? 'disabled' : ''}`} onClick={this.props.handleStorySpriteClick}></div>
          <div className="diploma-sprite"></div>
          <div className="cat-sprite"></div>
        </div>
      </div>
    );
  }
}

export default Story;

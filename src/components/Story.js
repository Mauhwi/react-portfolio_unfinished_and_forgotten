import React, { Component } from "react";

export class Story extends Component {
  render() {
    let sprite;
    if (!this.props.isLighten) {
      sprite = <img src="fp-sprite1.png" alt="sprite"></img>;
    } else {
      sprite = <img src="fp-sprite2.png" alt="sprite"></img>;
    }

    return (
      <div className="Story">
        <div className="sides"></div>
        <div className="bg">
          <div className="sprite">{sprite}</div>
        </div>
        <div className="sides"></div>
      </div>
    );
  }
}

export default Story;

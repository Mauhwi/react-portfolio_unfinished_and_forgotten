import React, { Component } from "react";

class AboutMe extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let sprite;
    if (!this.props.isLighten) {
      sprite = <img src="Sprite-0001-dark1.png" alt="sprite"></img>;
    } else {
      sprite = <img src="Sprite-001-light1.png" alt="sprite"></img>;
    }

    return (
      <div className={`AboutMe ${this.props.isLoading ? 'closed' : ''}`}>

        <div className={`bg ${this.props.isLighten ? 'light' : ''}`}>
          <div className={`sprite ${this.props.animationRunning ? 'disabled' : ''}`} onClick={this.props.handleSpriteClick}>
            {sprite}
          </div>
          <div className={`stay-button ${this.props.isLoading || !this.props.isLighten ? 'hidden' : ''} ${this.props.animationRunning ? 'disabled' : ''}`} onClick={this.props.handleStay}>stay</div>
          <div className={`left-button ${this.props.isLoading || !this.props.isLighten ? 'hidden' : ''} ${this.props.animationRunning ? 'disabled' : ''}`}></div>
          <div className={`right-button ${this.props.isLoading || !this.props.isLighten ? 'hidden' : ''} ${this.props.animationRunning ? 'disabled' : ''}`}></div>
        </div>

      </div>
    );
  }
}

export default AboutMe;

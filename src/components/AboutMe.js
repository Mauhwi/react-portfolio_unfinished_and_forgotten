import React, { Component } from "react";
import classnames from 'classnames';

class AboutMe extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const classes = ['light'];
    let sprite;
    if (!this.props.isLighten) {
      sprite = <img src="Sprite-0001-dark1.png" alt="sprite"></img>;
    } else {
      sprite = <img src="Sprite-001-light1.png" alt="sprite"></img>;
    }

    return (
      <div className="AboutMe">

      <div className={`sides ${this.props.storyMode ? 'curtains' : ''}`} onClick={this.props.lightenUp}></div>
        <div className={classnames('bg', this.props.isLighten ? classes.join(' ') : '')}>
          <div className="sprite">
            {sprite}
          </div>
          <div className={`stay-button ${this.props.storyMode || !this.props.isLighten ? 'hidden' : ''}`} onClick={this.props.handleStay}>stay</div>
          <div className={`left-button ${this.props.storyMode || !this.props.isLighten ? 'hidden' : ''}`}></div>
          <div className={`right-button ${this.props.storyMode || !this.props.isLighten ? 'hidden' : ''}`}></div>
        </div>
        <div className={`sides ${this.props.storyMode ? 'curtains' : ''}`}></div>

      </div>
    );
  }
}

export default AboutMe;
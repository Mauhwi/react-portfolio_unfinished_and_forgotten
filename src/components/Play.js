import React, { Component } from "react";
import AboutMe from "./AboutMe";
import Dialog from "./Dialog";
import Story from "./Story";
import textData from "../data/dialog-text.json";

class Play extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isLighten: false,
      storyMode: false,
      isLoading: false,
      currentText: 1,
      dialogText: textData,
      animationRunning: true
    };
    this.setStoryMode = this.setStoryMode.bind(this);
  }

  lightenUp() {
    this.setState((state) => ({
      isLighten: !state.isLighten,
    }));
  }

  setStoryMode() {
    this.setState((state) => ({
      storyMode: !state.storyMode,
    }));
  }

  handleStay() {
    this.setState((state) => ({
      isLoading: true,
    }));

    setTimeout(this.setStoryMode, 2000); 
  }

  handleSpriteClick() {
    if (this.state.currentText < this.state.dialogText.length) {
      this.setState((state) => ({
        currentText: this.state.currentText+1,
      }));
    }
    this.animationLock();
  }

  animationLock() {
    this.setState((state) => ({
      animationRunning: !this.state.animationRunning,
    }));
  }

  render() {
    let scene;
    if (!this.state.storyMode) {
      scene = <AboutMe 
        isLighten={this.state.isLighten}
        lightenUp={this.lightenUp.bind(this)}
        isLoading={this.state.isLoading}
        handleStay={this.handleStay.bind(this)}
        animationRunning={this.state.animationRunning}
        handleSpriteClick={this.handleSpriteClick.bind(this)}/>
    } else {
        scene = <Story />
    }
    return (
      <div>
        <div className="stage">
          <div className={`sides ${this.state.isLoading ? 'curtains' : ''} ${this.state.isLighten ? 'disabled' : ''}`}  onClick={this.lightenUp.bind(this)}></div>
          {scene}
          <div className={`sides ${this.state.isLoading ? 'curtains' : ''}`}></div>
        </div>
        <Dialog
          isLighten={this.state.isLighten}
          lightenUp={this.lightenUp.bind(this)}
          textId={this.state.currentText}
          text={this.state.dialogText}
          animationLock={this.animationLock.bind(this)}
        />
      </div>
    );
  }
}

export default Play;

import React, { Component } from "react";
import AboutMe from "./AboutMe";
import Dialog from "./Dialog";
import Story from "./Story";
import textData from "../data/dialog-text.json";
import storyTextData from '../data/story-text.json';

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
      animationRunning: true,
      storyText: storyTextData
    };
    this.setStoryMode = this.setStoryMode.bind(this);
    this.counterReset = this.counterReset.bind(this);
    this.loadingToggle = this.loadingToggle.bind(this);
  }

  lightenUp() {
    this.setState((state) => ({
      isLighten: !state.isLighten,
    }));
  }

  setStoryMode() {
    this.setState((state) => ({
      currentText: 1,
    }));
    this.setState((state) => ({
      storyMode: !state.storyMode,
    }));
  }

  counterReset() {
    this.setState((state) => ({
      currentText: 1,
    }));
  }

  loadingToggle() {
    this.setState((state) => ({
      isLoading: !state.isLoading,
    }));
  }

  handleStay() {
    this.setState((state) => ({
      isLoading: true,
    }));
    this.setState((state) => ({
      animationRunning: true,
    }));

    setTimeout(this.setStoryMode, 2000);
    setTimeout(this.loadingToggle, 4000) 
  }

  handleSpriteClick() {
    if (this.state.currentText < this.state.dialogText.length) {
      this.setState((state) => ({
        currentText: this.state.currentText+1,
      }));
    }
    this.animationLock();
  }

  handleStorySpriteClick() {
    if (this.state.currentText < this.state.storyText.length) {
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
        scene = <Story 
        handleStorySpriteClick={this.handleStorySpriteClick.bind(this)}
        animationRunning={this.state.animationRunning}
        isLoading={this.state.isLoading}/>
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
          storyMode={this.state.storyMode}
          isLoading={this.state.isLoading}
          textId={this.state.currentText}
          text={this.state.dialogText}
          storyText={this.state.storyText}
          animationLock={this.animationLock.bind(this)}
          counterReset={this.counterReset.bind(this)}
        />
      </div>
    );
  }
}

export default Play;

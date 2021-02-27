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
      currentText: 1,
      dialogText: textData,
      animationRunning: true
    };
  }

  lightenUp() {
    this.setState((state) => ({
      isLighten: !state.isLighten,
    }));
  }

  handleStay() {
    this.setState((state) => ({
      storyMode: true,
    }));
    
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
    console.log(this.state.animationRunning)
    this.setState((state) => ({
      animationRunning: !this.state.animationRunning,
    }));
  }

  render() {
    // let scene;
    // if (!this.state.storyMode) {
    //   scene = <AboutMe />
    // } else {
    //   scene = <Story />
    // }
    return (
      <div>
        <AboutMe
      isLighten={this.state.isLighten}
      lightenUp={this.lightenUp.bind(this)}
      storyMode={this.state.storyMode}
      handleStay={this.handleStay.bind(this)}
      animationRunning={this.state.animationRunning}
      handleSpriteClick={this.handleSpriteClick.bind(this)}
      />
        {/* {scene} */}
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

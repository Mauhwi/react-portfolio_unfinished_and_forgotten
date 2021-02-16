import React, { Component } from "react";
import AboutMe from "./AboutMe";
import Dialog from "./Dialog";
import Story from "./Story";

class Play extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isLighten: false,
      storyMode: false,
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

  render() {
    // let scene;
    // if (!this.state.storyMode) {
    //   scene = <AboutMe
    //   isLighten={this.state.isLighten}
    //   lightenUp={this.lightenUp.bind(this)}
    //   storyMode={this.state.storyMode}
    //   handleStay={this.handleStay.bind(this)}
    //   />
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
      />
        {/* {scene} */}
        <Dialog
          isLighten={this.state.isLighten}
          lightenUp={this.lightenUp.bind(this)}
        />
      </div>
    );
  }
}

export default Play;

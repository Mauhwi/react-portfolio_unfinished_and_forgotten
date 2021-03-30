import React, { Component } from "react";

export class Dialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stringArray: [],
    };
    this.textProvider = this.textProvider.bind(this)
  }

  textProvider(element, index, last) {
    document.querySelector(".text").innerHTML += element;
    if (index == last) {
      this.props.animationLock();
    }
  }

  stringAnimation() {
    document.querySelector(".text").innerHTML = "";
    let last = this.state.stringArray.length - 1;
    this.state.stringArray.forEach((element, index) => {
      setTimeout(this.textProvider, 26 * (index + 1), element, index, last);
    });
  }

  shouldComponentUpdate(nextProps) {
    return (this.props.textId !== nextProps.textId || this.props.isLighten !== nextProps.isLighten 
      || this.props.storyMode !== nextProps.storyMode);
  }

  // stringAnimation() {
  //   document.querySelector(".text").innerHTML = "";
  //   let last = this.state.stringArray.length - 1;
  //   this.state.stringArray.forEach((element, index) => {
  //     setTimeout(function() {
  //       document.querySelector(".text").innerHTML += element;
  //       if (index == last) {
  //         console.log(index)
  //       }
  //     }, 50 * (index + 1));
  //   });
  // }

  render() {
    let avatar;
    let text;

    if (!this.props.isLighten) {
      avatar = <img src="avatar-dark.png" alt="background"></img>;
      text = "...";
    } else if (!this.props.storyMode) {
      avatar = <img src="avatar-dark-bg.png" alt="avatar"></img>;
      text = this.props.text
        .filter((textLine) => textLine.id == this.props.textId)
        .map((textLine) => textLine.engText)
        .toString();
      this.state.stringArray = text.split("");
      this.stringAnimation();
    } else if (this.props.storyMode) {
      avatar = <img src="avatar-story.png" alt="avatar"></img>;
      text = this.props.storyText
        .filter((textLine) => textLine.id == this.props.textId)
        .map((textLine) => textLine.engText)
        .toString();
      this.state.stringArray = text.split("");
      setTimeout(this.stringAnimation(), 2000)
    }

    return (
      <div className="Dialog">
        <div className="content-wrap">
          <div className="image-wrap">{avatar}</div>
          <div className="text"></div>
        </div>
      </div>
    );
  }
}

export default Dialog;

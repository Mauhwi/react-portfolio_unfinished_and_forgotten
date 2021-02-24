import React, { Component } from "react";

export class Dialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stringArray: [],
    };
  }

  stringAnimation() {
    document.querySelector(".text").innerHTML = "";
    this.state.stringArray.forEach((element, index) => {
      setTimeout(function name(params) {
        document.querySelector(".text").innerHTML += element;
      }, 50 * (index + 1));
    });
  }

  render() {
    let avatar;
    let text;
    let stringArray = [];

    if (!this.props.isLighten) {
      avatar = <img src="avatar-dark.png" alt="background"></img>;
      text = "...";
    } else {
      avatar = <img src="avatar-dark-bg.png" alt="background"></img>;
      text = this.props.text
        .filter((textLine) => textLine.id == this.props.textId)
        .map((textLine) => textLine.engText)
        .toString();
      this.state.stringArray = text.split("");
      this.stringAnimation();
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

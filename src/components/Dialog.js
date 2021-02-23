import React, { Component } from "react";

export class Dialog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isLighten: false,
      storyMode: false,
      currentText: 1,
      dialogText: textData
    };
  }

  render() {

    let avatar;
    let text;
    let stringArray =[];

    function stringAnimation() {
      if (stringArray.length > 0) {
        document.querySelector('.text').innerHTML += stringArray.shift();
      } else {
        clearTimeout();
      }
      setTimeout(stringAnimation, 50);
    }

    if (!this.props.isLighten) {
      avatar = <img src="avatar-dark.png" alt="background"></img>;
      text = "...";
    } else {
        avatar = <img src="avatar-dark-bg.png" alt="background"></img>;
        text = this.props.text.filter(textLine => textLine.id == this.props.textId).map(textLine => textLine.engText).toString();
        stringArray = text.split("");
        console.log(text)
        stringAnimation();
    }


    return (
      <div className="Dialog">
        <div className="content-wrap">
          <div className="image-wrap">
            {avatar}
          </div>
          <div className="text"></div>
        </div>
      </div>
    );
  }
}

export default Dialog;

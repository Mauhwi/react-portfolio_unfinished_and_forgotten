import React, { Component } from "react";

export class Dialog extends Component {

  render() {
    let avatar;
    let text;
    if (!this.props.isLighten) {
      avatar = <img src="avatar-dark.png" alt="background"></img>;
      text = "...";
    } else {
        avatar = <img src="avatar-dark-bg.png" alt="background"></img>;
        text = this.props.text.filter(textLine => textLine.id == this.props.textId).map(textLine => textLine.engText);
    }


    return (
      <div className="Dialog">
        <div className="content-wrap">
          <div className="image-wrap">
            {avatar}
          </div>
          <div className="text">{text}</div>
        </div>
      </div>
    );
  }
}

export default Dialog;

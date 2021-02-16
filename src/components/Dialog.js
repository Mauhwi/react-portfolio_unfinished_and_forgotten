import React, { Component } from "react";

export class Dialog extends Component {

  state = {
    text: [
      "Привет, меня зовут Дарья и я начинающий веб-разработчик",
      "О моем образовании, навыках  и контактной информации можно узнать справа",
      "Немного о моих проектах и профиль Github слева",
      "Можно так же остаться здесь, тогда я просто немного про себя расскажу"
    ],
  };

  render() {
    let avatar;
    let text;
    if (!this.props.isLighten) {
      avatar = <img src="avatar-dark.png" alt="background"></img>;
      text = "...";
    } else {
        avatar = <img src="avatar-dark-bg.png" alt="background"></img>;
        text = this.state.text[0];
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

import React, { Component } from "react";
import appScreenshot1 from '../assets/images/app-screenshot1.jpg';
import appScreenshot2 from '../assets/images/app-screenshot2.jpg';
import appArchitecture from '../assets/images/app-architecture.png';
import vid from '../assets/videos/media1.mp4';


export class Story extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diplomaModalState: false,
      portfolioModalState: false
    };
  }

  diplomaModalToggle() {
    this.setState((state) => ({
      diplomaModalState: !this.state.diplomaModalState,
    }));
  }

  render() {
    return (
      <div className="Story">
        <div className="bg">
          <div className={`sprite ${this.props.animationRunning ? 'disabled' : ''}`} onClick={this.props.handleStorySpriteClick}></div>
          <div className={`diploma-sprite diploma-shine ${this.props.isLoading ? 'hidden disabled' : ''}`} onClick={this.diplomaModalToggle.bind(this)}></div>
          <div className={`cat-sprite ${this.props.isLoading ? 'hidden disabled' : ''}`}></div>
          <div className={`portfolio-wrap ${this.props.isLoading ? 'hidden disabled' : 'portfolio-shine'}`}>
            <div className={`portfolio-sprite ${this.props.isLoading ? 'hidden disabled' : ''}`}></div>
          </div>
        </div>

        <div className={`diplomaModal ${this.state.diplomaModalState ? 'open' : 'closed'}`}>
          <div className="diplomaModal-content">
            <div className="close-bookmark" onClick={this.diplomaModalToggle.bind(this)}><p>x</p>
            <div className="bookmark-lower">
              <div className="bookmark-left"></div>
              <div className="bookmark-right"></div>
            </div>
            </div>
            <h1>Development of an accessible activity planning mobile application for people with mild 
              cognitive impairment</h1>
            <p>It was a project that I decided to make because of a person close to me.</p>
            <p>The idea was to use Google and Android accessibility guidelines and my own experience 
              with people like that to make an Android app that would be easy and a little bit fun to use.
            </p>
            <p>For this project I used Java, SQLite and Android Architecture Component libraries to build an app 
              according to MVVM architectural pattern.</p>
            <div className="screenshot-holder diagram"><img src={appArchitecture}/></div>
            <p className="img-desc">Application architecture diagram because I think it looks cool</p>
            <p>It had to offer a way of tracking every day activities, have a specific one 
              for medication routines and also provide some manner of fun positive feedback on completion.</p>
            <p>In the end I decided that integrating a cat into a progress meter was an obvious choise, so this is the result. </p>
            <div className="screenshot-holder">
              <img src={appScreenshot2}/>
              <video width="271" height="482" controls>
              <source src={vid} type="video/mp4" />
              <img src={appScreenshot1}/>
              </video>
            </div>
            <p className="img-desc">Main Application Screens</p>
            <p>I do have a few regrets. Not using custom art for the animation is one of them. 
              I also wanted something happy to replace the list with the active tasks when they're all done for the day as an extra acknowledgment.
              But in the end actually writing a diploma around this whole thing got an obvious priority above my artistic cat drawing struggles.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Story;

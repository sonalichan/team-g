import React, { Component } from 'react';


export class HomePage extends Component {
    componentDidMount() {
      window.scrollTo(0, 0);
    }
  
    render() {
      return (
        <div id="homePage">
          <div className="gerbil-message">
            <p>Hi, I am Gerbil, a social animal who loves human-beings!</p>

            <p>I have travelled to a lot of places and people love me. (except Californians as I ate too of their agriculture... Sorry:P</p>

            <p>I hope I could get to know more about you and your life! Come and say “Hi!” once in a while to update me what you have been or will be doing!! </p>

            <p>See you around!</p>
          </div>
          <div className="gerbil-img">
              <img src="/img/gerbil-image.png" alt="a gerbil's picture"/>
          </div>
        </div>
      );
    }
  }
  
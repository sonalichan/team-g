import React, { Component } from 'react';


export class HomePage extends Component {
    componentDidMount() {
      window.scrollTo(0, 0);
    }
  
    render() {
      return (
        <div id="homePage">
          <div className="gerbil-message">
            <p>Hi! I am Gerbil, a social animal who loves humans!</p>

            <p>I have travelled to a lot of places and people love me!(except Californians, I ate too much of their agriculture... Sorry :P)</p>

            <p>I hope I can get to come and say “Hi!” once in a while, make sure to update me! </p>

            <p>See you around!</p>
          </div>
          <div className="gerbil-img">
              <img src="/img/gerbil-image.png" alt="a gerbil's picture"/>
          </div>
        </div>
      );
    }
  }
  
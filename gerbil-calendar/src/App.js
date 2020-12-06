import './App.css';
import './style.css';

import React, { Component } from 'react';
import './index.css'; // css file
import { Route, Switch, Redirect } from 'react-router-dom';

// Local Components
import { NavigationBar } from './Components/NavigationBar.js';
import { HomePage } from './Components/HomePage.js';
import { CalendarPage } from './Components/CalendarPage.js';
import { GiftGalleryPage } from './Components/GiftGalleryPage.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // error: null,
      // isloaded: false,

      firebaseData: {
        preNotes:[]
      },

      ifLogIn: false, // save users log-in status

      userData: {
        events: [], // calendar events
        tasks: [], // tasks "notes"
        firstDaywithGerbil: "",
        numOfTotalEvents: 0,
        numOfTotalTasks: 0
      },

      user: null, // firebase user
    };
  }

  render() {
    let content = (
      <div>
        <header>
          <NavigationBar
            ifLogIn={this.state.ifLogIn}
            user={this.state.user} />
        </header>
        <main>
          <Switch>
            <Route exact path='/' render={() => (<HomePage />)} />      
            <Route exact path='/calendar' render={() => (<CalendarPage />)} />         
            <Route exact path='/giftGallery' render={() => (<GiftGalleryPage />)} />         
   
            <Redirect to="/" />
          </Switch>
        </main>
      </div >
    );

    return (
      <div>
        {content}
      </div>
    );
  }

}

export default App;

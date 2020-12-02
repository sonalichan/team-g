import './App.css';
import './style.css';

import React, { Component } from 'react';
import './index.css'; // css file
import { Route, Switch, Redirect, Router } from 'react-router-dom';
import { AuthProvider } from "./contexts/AuthContext";
import { Container } from "react-bootstrap";

import firebase from 'firebase/app';

// Local Components
import { NavigationBar } from './Components/NavigationBar.js';
import { HomePage } from './Components/HomePage.js';
import { CalendarPage } from './Components/CalendarPage.js';
import { GiftGalleryPage } from './Components/GiftGalleryPage.js';
import Signup from './Components/SignUp.js';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import PrivateRoute from './Components/PrivateRoute';
import ForgotPassword from './Components/ForgotPassword';
import UpdateProfile from './Components/UpdateProfile'


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
        eventsKey: [],
        // tasks: [], // tasks
        // tasksKey: [],
        giftGallery: {
          event: 0, // events counter
          logIn: 0, // login counter
          giftGallery: [
              {
                  id: 1,
                  giftName: "South Korea",
                  url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-tulips-blooming-in-field-royalty-free-image-1584131616.jpg?crop=1.00xw:0.798xh;0,0.202xh&resize=980:*",
                  requirementText: "add 1 event to calendar",
                  req: "event",
                  reqNum: 1,
                  earned: false
              },
              {
                  id: 2,
                  giftName: "China",
                  url: "https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg?w=600&quality=85",
                  requirementText: "add 5 event to calendar",
                  req: "event",
                  reqNum: 5,
                  earned: false
              },
              {
                  id: 3,
                  giftName: "United States",
                  url: "https://cnet3.cbsistatic.com/img/-qQkzFVyOPEoBRS7K5kKS0GFDvk=/940x0/2020/04/16/7d6d8ed2-e10c-4f91-b2dd-74fae951c6d8/bazaart-edit-app.jpg",
                  requirementText: "add 20 event to calendar",
                  req: "event",
                  reqNum: 20,
                  earned: false
              },
              {
                  id: 4,
                  giftName: "Japan",
                  url: "https://i2.wp.com/www.wintersexpress.com/files/2019/08/IMG_4605.sunflower.jpg?fit=2546%2C3363&ssl=1",
                  requirementText: "add 50 event to calendar",
                  req: "event",
                  reqNum: 50,
                  earned: false
              },
              {
                  id: 5,
                  giftName: "Mexico",
                  url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-tulips-blooming-in-field-royalty-free-image-1584131616.jpg?crop=1.00xw:0.798xh;0,0.202xh&resize=980:*",
                  requirementText: "add 100 event to calendar",
                  req: "event",
                  reqNum: 100,
                  earned: false
              },
              {
                  id: 6,
                  giftName: "Australia",
                  url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-tulips-blooming-in-field-royalty-free-image-1584131616.jpg?crop=1.00xw:0.798xh;0,0.202xh&resize=980:*",
                  requirementText: "log-in 1 time",
                  req: "log-in",
                  reqNum: 1,
                  earned: false
              },
              {
                  id: 7,
                  giftName: "India",
                  url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-tulips-blooming-in-field-royalty-free-image-1584131616.jpg?crop=1.00xw:0.798xh;0,0.202xh&resize=980:*",
                  requirementText: "log-in 5 times",
                  req: "log-in",
                  reqNum: 5,
                  earned: false
              },
              {
                  id: 8,
                  giftName: "Vietnam",
                  url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-tulips-blooming-in-field-royalty-free-image-1584131616.jpg?crop=1.00xw:0.798xh;0,0.202xh&resize=980:*",
                  requirementText: "log-in 10 times",
                  req: "log-in",
                  reqNum: 10,
                  earned: false
              },
              {
                  id: 9,
                  giftName: "New Zealand",
                  url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-tulips-blooming-in-field-royalty-free-image-1584131616.jpg?crop=1.00xw:0.798xh;0,0.202xh&resize=980:*",
                  requirementText: "Log-in 15 times",
                  req: "log-in",
                  reqNum: 15,
                  earned: false
              },
              {
                  id: 10,
                  giftName: "France",
                  url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-tulips-blooming-in-field-royalty-free-image-1584131616.jpg?crop=1.00xw:0.798xh;0,0.202xh&resize=980:*",
                  requirementText: "Log-in 20 times",
                  req: "log-in",
                  reqNum: 20,
                  earned: false
              }
          ]
        }
      },

      user: null, // firebase user
    };
  };

  updateUser = (user) => {
    this.setState({ 
      user: user,
      ifLogIn: true
    });
  };

  componentDidMount() {
    firebase.auth().signOut() // a default setting: if the user refreshes the page, they will need to be re-logged-in

    this.authUnRegFunc = firebase.auth().onAuthStateChanged((firebaseUser) => {
      // if a user signs in

      if (firebaseUser !== null) {
        this.setState({ user: firebaseUser })
        // if a member signs in
        if (this.state.ifLogIn) {
          let userRef = firebase.database().ref('users/' + this.state.user.uid);
          // listen to later changes in member state
          userRef.on("value", snapshot => {
            // if a new member signs in
            if (!snapshot.exists()) {
              userRef.set({ //add a new entry to `members`
                name: this.state.user.displayName,
                email: this.state.user.email,
                uid: this.state.user.uid,
                events: [], // calendar events
                eventsKey: [],
                // tasks: [], // tasks
                // tasksKey: [],
                giftGallery: {
                  event: 0,
                  logIn: 0, 
                  giftGallery: [
                      {
                          id: 1,
                          giftName: "South Korea",
                          url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-tulips-blooming-in-field-royalty-free-image-1584131616.jpg?crop=1.00xw:0.798xh;0,0.202xh&resize=980:*",
                          requirementText: "add 1 event to calendar",
                          req: "event",
                          reqNum: 1,
                          earned: false
                      },
                      {
                          id: 2,
                          giftName: "China",
                          url: "https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg?w=600&quality=85",
                          requirementText: "add 5 event to calendar",
                          req: "event",
                          reqNum: 5,
                          earned: false
                      },
                      {
                          id: 3,
                          giftName: "United States",
                          url: "https://cnet3.cbsistatic.com/img/-qQkzFVyOPEoBRS7K5kKS0GFDvk=/940x0/2020/04/16/7d6d8ed2-e10c-4f91-b2dd-74fae951c6d8/bazaart-edit-app.jpg",
                          requirementText: "add 20 event to calendar",
                          req: "event",
                          reqNum: 20,
                          earned: false
                      },
                      {
                          id: 4,
                          giftName: "Japan",
                          url: "https://i2.wp.com/www.wintersexpress.com/files/2019/08/IMG_4605.sunflower.jpg?fit=2546%2C3363&ssl=1",
                          requirementText: "add 50 event to calendar",
                          req: "event",
                          reqNum: 50,
                          earned: false
                      },
                      {
                          id: 5,
                          giftName: "Mexico",
                          url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-tulips-blooming-in-field-royalty-free-image-1584131616.jpg?crop=1.00xw:0.798xh;0,0.202xh&resize=980:*",
                          requirementText: "add 100 event to calendar",
                          req: "event",
                          reqNum: 100,
                          earned: false
                      },
                      {
                          id: 6,
                          giftName: "Australia",
                          url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-tulips-blooming-in-field-royalty-free-image-1584131616.jpg?crop=1.00xw:0.798xh;0,0.202xh&resize=980:*",
                          requirementText: "log-in 1 time",
                          req: "log-in",
                          reqNum: 1,
                          earned: false
                      },
                      {
                          id: 7,
                          giftName: "India",
                          url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-tulips-blooming-in-field-royalty-free-image-1584131616.jpg?crop=1.00xw:0.798xh;0,0.202xh&resize=980:*",
                          requirementText: "log-in 5 times",
                          req: "log-in",
                          reqNum: 5,
                          earned: false
                      },
                      {
                          id: 8,
                          giftName: "Vietnam",
                          url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-tulips-blooming-in-field-royalty-free-image-1584131616.jpg?crop=1.00xw:0.798xh;0,0.202xh&resize=980:*",
                          requirementText: "log-in 10 times",
                          req: "log-in",
                          reqNum: 10,
                          earned: false
                      },
                      {
                          id: 9,
                          giftName: "New Zealand",
                          url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-tulips-blooming-in-field-royalty-free-image-1584131616.jpg?crop=1.00xw:0.798xh;0,0.202xh&resize=980:*",
                          requirementText: "Log-in 15 times",
                          req: "log-in",
                          reqNum: 15,
                          earned: false
                      },
                      {
                          id: 10,
                          giftName: "France",
                          url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-tulips-blooming-in-field-royalty-free-image-1584131616.jpg?crop=1.00xw:0.798xh;0,0.202xh&resize=980:*",
                          requirementText: "Log-in 20 times",
                          req: "log-in",
                          reqNum: 20,
                          earned: false
                      }
                  ]
                }
              });
            }

            let value = snapshot.val();

            if (value !== null) {
              // if the member had favorited before
              if (value.events !== undefined & value.events !== null) {
                let eventsKey = Object.keys(value.events);
                let dbEvents = eventsKey.map((item) => {
                  return value.events[item];
                })
                // updates saved info from database to state
                this.setState(prevState => ({
                  userData: {
                    ...prevState.firebaseData,
                    events: dbEvents,
                    eventsKey: eventsKey
                    // tasks: dbTasks,
                    // tasksKey: tasksKey
                  }
                }))
              } else {
                this.setState(prevState => ({
                  userData: {
                    ...prevState.firebaseData,
                    events: [],
                    eventsKey: []
                    // tasks: [],
                    // tasksKey: []
                  }
                }))
              }
            }
          })
          // if an organziation signs in
        } else {
          this.setState({ user: null, ifLogIn: false })
        }
      }
    })
  }

  componentWillUnmount() {
    this.authUnRegFunc();
  }
  
  handleSignOut = () => {
    firebase.auth().signOut()
  }

  userSignIn = () => {
    this.setState({ ifLogIn: true });
  }

  uiConfig = {
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    signInFlow: 'popup',
  }

  render() {
    console.log(this.state.user);
    console.log(this.state.ifLogIn);
    if (this.state.user) {
      console.log(this.state.user.uid);
    }


    let content = (
      <div>
        <header>
          <NavigationBar
            ifLogIn={this.state.ifLogIn}
            user={this.state.user} />
        </header>
        <main>
        <AuthProvider>
          <Switch>
            <Route exact path='/calendar' render={() => (<CalendarPage />)} />         
            <Route exact path='/giftGallery' render={() => (<GiftGalleryPage />)} />
            <Container 
              className="d-flex align-items-center justify-content-center"
              style={{ minHeight: "100vn" }}>
              <div className="w-100" style={{ maxWidth: "400px" }}>         
              <Route exact path='/signup' render={() => (<Signup />)} />
              <Route exact path='/login' render={() => (<Login />)} />
              <PrivateRoute exact path='/' component={Dashboard} />
              <PrivateRoute path='/update-profile' component={UpdateProfile} />
              <Route exact path='/forgot-password' render={() => (<ForgotPassword />)} />
              </div>
          </Container>
          <Redirect to="/" />
          </Switch>
          </AuthProvider>
        </main>
      </div >
    );

    // <Container 
      //   className="d-flex align-items-center justify-content-center"
      //   style={{ minHeight: "100vn" }}
      //   >
      //     <div className="w-100" style={{ maxWidth: "400px" }}>
      //       <Router>
      //         <AuthProvider>
      //           <Switch>
      //             <Route path="/signup" component={Signup} />
      //           </Switch>
      //         </AuthProvider>
      //       </Router>
      //       <Signup />
      //     </div>
      // </Container>
    

    return (
      <div>
        {content}
      </div>
    );
  }

}

export default App;

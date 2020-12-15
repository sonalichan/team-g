import './App.css';
import './style.css';

import React, { Component } from 'react';
import './index.css'; // css file
import { Route, Switch, Redirect } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';


import firebase from 'firebase/app';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

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
      giftModal: false,
      giftObtained: {},

      userData: {
        events: [], // calendar events
        eventsKey: [],
        // tasks: [], // tasks
        // tasksKey: [],
        giftGallery: null
      },

      user: null // firebase user
    };

    this.closeGiftModal = this.closeGiftModal.bind(this);

  };

  signInWithGoogle = () => {
    this.setState({ ifLogIn: true });
  }

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
                tasks: [], // tasks
                tasksKey: [],
                giftGallery: {
                  event: 0,
                  task: 0, 
                  giftGallery: [
                      {
                          id: 1,
                          giftName: "South Korea",
                          url: "https://lh3.googleusercontent.com/proxy/lsu2k2ltTzMtMwgpHKhxyhMqITVhItsBf0SeP7I1fygYj-1k7Kr8aUDZXKsY5leP-fCeaJ6zTS2ZFXeTcnFAzU-mg9zZMdKtIu2OrmKZnz9d_FBE_nG5eXomvRpKyacxpmNCNnXArdbWSnlFK70",
                          requirementText: "add 1 event to calendar",
                          req: "event",
                          reqNum: 1,
                          earned: false
                      },
                      {
                          id: 2,
                          giftName: "China",
                          url: "https://www.thesprucepets.com/thmb/P53UqgjYbR9_O7Ua_t2_LbRSYtU=/3456x1944/smart/filters:no_upscale()/GettyImages-151547675-58cecf015f9b581d72491af1.jpg",
                          requirementText: "add 5 event to calendar",
                          req: "event",
                          reqNum: 5,
                          earned: false
                      },
                      {
                          id: 3,
                          giftName: "United States",
                          url: "https://www.brodybrotherspestcontrol.com/wp-content/uploads/2019/12/Common-Mouse-Species-in-North-America.jpg",
                          requirementText: "add 20 event to calendar",
                          req: "event",
                          reqNum: 20,
                          earned: false
                      },
                      {
                          id: 4,
                          giftName: "Japan",
                          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Meriones_unguiculatus_%28wild%29.jpg/1200px-Meriones_unguiculatus_%28wild%29.jpg",
                          requirementText: "add 50 event to calendar",
                          req: "event",
                          reqNum: 50,
                          earned: false
                      },
                      {
                          id: 5,
                          giftName: "Mexico",
                          url: "https://static.boredpanda.com/blog/wp-content/uploads/2020/04/quarantine-gerbil-art-gallery-fb5.png",
                          requirementText: "add 100 event to calendar",
                          req: "event",
                          reqNum: 100,
                          earned: false
                      },
                      {
                          id: 6,
                          giftName: "Australia",
                          url: "https://i.imgur.com/QRmZA35.jpg",
                          requirementText: "Secret",
                          req: "task",
                          reqNum: 1,
                          earned: false
                      },
                      {
                          id: 7,
                          giftName: "India",
                          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Indian_Desert_Jird.jpeg/1200px-Indian_Desert_Jird.jpeg",
                          requirementText: "Secret",
                          req: "task",
                          reqNum: 5,
                          earned: false
                      },
                      {
                          id: 8,
                          giftName: "Vietnam",
                          url: "https://i.ytimg.com/vi/B42dm2sjqmw/maxresdefault.jpg",
                          requirementText: "Secret",
                          req: "task",
                          reqNum: 10,
                          earned: false
                      },
                      {
                          id: 9,
                          giftName: "New Zealand",
                          url: "https://www.mandatory.com/assets/uploads/2018/03/mice1.jpg",
                          requirementText: "Secret",
                          req: "task",
                          reqNum: 15,
                          earned: false
                      },
                      {
                          id: 10,
                          giftName: "France",
                          url: "https://media.npr.org/assets/img/2015/02/24/gerbil_custom-b4f8d31a5693a817ae353b639f9975f8be4fb6e0.jpg",
                          requirementText: "Secret",
                          req: "task",
                          reqNum: 30,
                          earned: false
                      }
                  ]
                }
              });
            }

            let value = snapshot.val();
            console.log(value);

            if (value !== null) {
              // if the member had favorited before
              let dbEvents = [];
              let eventsKey = [];
              if (value.events !== undefined & value.events !== null) {
                console.log(value.events);
                eventsKey = Object.keys(value.events);
                dbEvents = eventsKey.map((item) => {
                  return value.events[item];
                });
              }

              let dbTasks = [];
              let tasksKey = [];
              if (value.tasks !== undefined & value.tasks !== null) {
                tasksKey = Object.keys(value.tasks);
                dbTasks = tasksKey.map((item) => {
                  return value.tasks[item];
                })
              }

              // updates saved info from database to state
              this.setState(prevState => ({
                userData: {
                  ...prevState.firebaseData,
                  events: dbEvents,
                  eventsKey: eventsKey,
                  giftGallery: value.giftGallery,
                  tasks: dbTasks,
                  tasksKey: tasksKey
                }
              }));
            }
          })
        } 
      } else {
        this.setState({ 
          user: null, 
          ifLogIn: false,
          userData: null 
        });
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

  //  close gift modal
  closeGiftModal = () => {
    this.setState({
        giftModal: false
    });
  }
  
  showGiftModal = (gift) => {
    this.setState({
      giftModal: true,
      giftObtained: gift
    })
  }

  render() {
    let content = null;

    if (this.state.user == null && this.state.ifLogIn) {
      content = <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
    } else {

      let renderGiftModal;
      if (this.state.giftModal) {
        renderGiftModal = <RenderGiftModal gift={this.state.giftObtained} closeGiftModal={this.closeGiftModal} giftModal={this.state.giftModal}/>;
      } else {
        renderGiftModal = "";
      }

      content = (
        <div>
          <header>
            <NavigationBar
              ifLogIn={this.state.ifLogIn}
              user={this.state.user}
              signInWithGoogle={this.signInWithGoogle}
              handleSignOut={this.handleSignOut} />
          </header>
          <main>
              <Switch>
                <Route exact path='/' render={() => (<HomePage />)} />      
                <Route exact path='/calendar' render={() => (<CalendarPage 
                  ifLogIn={this.state.ifLogIn} 
                  userData={this.state.userData} 
                  user={this.state.user}
                  showGiftModal={this.showGiftModal}/>)} />     
                <Route exact path='/giftGallery' render={() => (<GiftGalleryPage 
                  ifLogIn={this.state.ifLogIn} 
                  userData={this.state.userData}/>)} />            
                <Redirect to="/" />
              </Switch>
          </main>
          {renderGiftModal}
        </div >
      );
    }

    return (
      <div>
        {content}
      </div>
    );
  }

}


class RenderGiftModal extends Component {
      render() {
          let giftObtained = this.props.gift;
          return (
              <Modal isOpen={this.props.giftModal} toggle={this.props.closeGiftModal}>
                  <ModalHeader toggle={this.props.closeGiftModal} className="gerbil-text-1">Gerbil's secret gift</ModalHeader>
                  <ModalBody>
                      <p className="gerbil-gift-message gerbil-text-1">Thanks for telling me all of your story! Here is a secret gift!!! Hope you like it!</p>
                      <div className="gerbil-gift">
                          <img alt="Gerbil's Gift" src={giftObtained.url} />
                      </div>
                      <div className="gerbil-gift-name gerbil-text-1">{giftObtained.giftName}</div>
                  </ModalBody>
              </Modal>
          );
      }
  }
  

export default App;

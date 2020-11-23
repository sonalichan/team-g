import React, { Component } from 'react';
import firebase from '@firebase/app';
import 'firebase/auth';
import withFirebaseAuth, { WrappedComponentProps } from 'react-with-firebase-auth';

/* Don't need, not being used atm, here for reference
class SimpleForm extends React.Component {
    constructor(props) {
      super(props);
      // create a ref to store the DOM element
      this.nameEl = React.createRef();
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(e) {
      e.preventDefault();
      alert(this.nameEl.current.value);
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>Name:
            <input type="text" ref={this.nameEl} />
          </label>
          <input type="submit" name="Submit" />
        </form>
      )
    }
  }

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        // create a ref to store the DOM element
        this.nameEl = React.createRef();
        this.passwordEl = React.createRef();
        this.rememberMeEl = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.data = {
            username: this.nameEl.current.value,
            password: this.passwordEl.current.value,
            rememberMe: this.rememberMeEl.current.checked
        }
        return (
            this.props.signInWithEmailAndPassword(this.data.username, this.data.password)
        );
    }
    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="username" ref={this.nameEl} />
            <input type="password" placeholder="password" ref={this.passwordEl} />
            <label>
            <input type="checkbox" ref={this.rememberMeEl} />
            Remember me
            </label>
            <button type="submit" className="myButton">Login</button>
        </form>
        );
    }
  }
*/
  // Firebase Key
const firebaseConfig = {
    apiKey: "AIzaSyD6RLknXuvyvCfpnC5YZkUwrwLfVjbSQ_k",
    authDomain: "gerbil-78696.firebaseapp.com",
    databaseURL: "https://gerbil-78696.firebaseio.com",
    projectId: "gerbil-78696",
    storageBucket: "gerbil-78696.appspot.com",
    messagingSenderId: "189617310635",
    appId: "1:189617310635:web:a6e5bc45370d7dff28a0ee",
    measurementId: "G-C9CXPD0SZJ"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const firebaseAppAuth = firebaseApp.auth();
  
  const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(), 
  };
    

class tempSignUp extends Component {
    constructor(props) {
        super(props);
        this.nameEl = React.createRef();
        this.passwordEl = React.createRef();
        this.rememberMeEl = React.createRef();
        this.submit = this.submit.bind(this);
    };

    submit(e) {
       // e.preventDefault();
        this.props.createUserWithEmailAndPassword(this.nameEl.current.value, this.passwordEl.current.value);    
    };

    render() {
      {this.props.updateUser(this.props.user)}
        return (
        <div>
            <React.Fragment>
            {
                this.props.loading && "Loading.."
            }
            {
                this.props.user
                ? <h1>Hello, {this.props.user.displayName} {JSON.stringify(this.props.user.phoneNumber)}</h1>
                : <h1>Log in</h1>
            }
            {
                this.props.user
                ? <button onClick={this.props.signOut}>Sign out</button>
                : <button onClick={this.props.signInWithGoogle}>Sign in with Google</button>
            }
            
            {
                this.props.loading && <h2>Loading..</h2>
            }
            </React.Fragment>
            <form onSubmit={this.submit}>
            <input type="text" placeholder="username" ref={this.props.nameEl} />
            <input type="password" placeholder="password" ref={this.props.passwordEl} />
            <label>
            <input type="checkbox" ref={this.rememberMeEl} />
            Remember me
            </label>
            <button type="submit" className="myButton">Login</button>
            </form>
        </div>
        );
    };
};


  export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
  })(tempSignUp);
  
  
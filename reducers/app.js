import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import LoginForm from './components/Loginform';
import Router from './Router';



class App extends Component {
  componentWillMount(){
    const config = {
      apiKey: "AIzaSyAVg8Wq1X-oW85FJD-orqbhDynY5oHNbno",
      authDomain: "easypark-ba713.firebaseapp.com",
      databaseURL: "https://easypark-ba713.firebaseio.com",
      projectId: "easypark-ba713",
      storageBucket: "easypark-ba713.appspot.com",
      messagingSenderId: "858778652384"
  };
  firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}

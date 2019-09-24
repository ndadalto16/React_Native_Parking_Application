import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { connect, Provider } from 'react-redux';
import * as actions from '../actions';
import store from '../store';

class AuthScreen extends Component {
  static navigationOptions = {
    title: 'Sign In',
  };
  componentDidMount() {
    this.props.facebookLogin();
    this.onAuthComplete(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }

  onAuthComplete(props) {
    if (props.token) {
      this.props.navigation.navigate('map');
    }
  }

  render() {
    return (
      <View />
    );
  }
}

function mapStateToProps({ auth }) {
  return { token: auth.token };
}

export default connect(mapStateToProps, actions )(AuthScreen);

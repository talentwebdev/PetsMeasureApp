import React, {Component} from 'react';
import LoginButton from './LoginButton/LoginButton';
import HomeButton from './HomeButton/HomeButton';
import NormalButton from './NormalButton/NormalButton';
import {View} from 'react-native';

class CustomButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.type,
      style: props.style,
      text: props.text,
      onPress: props.onPress,
    };
  }
  render() {
    switch (this.state.type) {
      case 'LoginButton':
        return (
          <LoginButton
            onPress={this.state.onPress}
            style={this.state.style}
            text={this.state.text}
          />
        );
      case 'HomeButton':
        return (
          <HomeButton
            onPress={this.state.onPress}
            style={this.state.style}
            text={this.state.text}
          />
        );
      case 'NormalButton':
        return (
          <NormalButton
            onPress={this.state.onPress}
            style={this.state.style}
            text={this.state.text}
          />
        );
      default:
        return <View />;
    }
  }
}

export default CustomButton;

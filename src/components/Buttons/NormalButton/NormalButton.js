import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import Colors from './../../../colors/colors';

class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: props.style,
      text: props.text,
    };
  }
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={[styles.button, this.state.style]}>
        <Text style={styles.text}>{this.state.text}</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    backgroundColor: Colors.Red,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.White,
    fontWeight: 'bold',
  },
});
export default LoginButton;

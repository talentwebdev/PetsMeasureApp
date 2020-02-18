import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
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
    borderWidth: 2,
    borderColor: Colors.Red,
    backgroundColor: Colors.White,
    paddingTop: 40,
    paddingBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.Red,
    fontWeight: 'bold',
  },
});
export default LoginButton;

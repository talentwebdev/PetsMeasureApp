import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import Colors from './../../colors/colors';

class TextInputTitleText extends Component {
  render() {
    return (
      <Text style={[this.props.style, styles.text]}>{this.props.text}</Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: Colors.Gray,
    fontSize: 12,
    marginBottom: 5,
    marginTop: 15,
    width: '100%',
  },
});
export default TextInputTitleText;

import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import Colors from './../../colors/colors';

class NormalText extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Text style={[this.props.style, styles.text]}>{this.props.text}</Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: Colors.Gray,
    fontSize: 15,
  },
});
export default NormalText;

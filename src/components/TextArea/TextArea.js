import React, {Component} from 'react';
import {TextInput, StyleSheet} from 'react-native';
import Colors from './../../colors/colors';

class TestArea extends Component {
  render() {
    return (
      <TextInput
        {...this.props}
        style={[this.props.style, styles.textInput]}
        placeholderTextColor={Colors.WhiteBlocak}
        multiline={true}
      />
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: Colors.LightGray,
    borderRadius: 10,
  },
});
export default TestArea;

import React, {Component} from 'react';
import {TextInput, StyleSheet} from 'react-native';
import Colors from './../../colors/colors';

class CustomTextInput extends Component {
  render() {
    return (
      <TextInput
        {...this.props}
        style={[this.props.style, styles.textInput]}
        autoComplete={
          this.props.autoComplete !== undefined ? this.props.autoComplete : ''
        }
        keyboardType={
          this.props.keyboardType !== undefined
            ? this.props.keyboardType
            : 'default'
        }
        value={this.props.value !== undefined ? this.props.value : null}
        onChangeText={this.props.onChangeText}
        secureTextEntry={
          this.props.secureTextEntry !== undefined
            ? this.props.secureTextEntry
            : false
        }
        placeholder={this.props.placeholder}
        placeholderTextColor={Colors.WhiteBlocak}
        placeHolderTextStyle="bold"
      />
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 10,
    backgroundColor: Colors.LightGray,
    padding: 5,
    paddingLeft: 20,
  },
});
export default CustomTextInput;

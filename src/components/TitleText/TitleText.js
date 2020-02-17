import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Colors from './../../colors/colors';

class TitleText extends Component {
  constructor(props) {
    super(props);

    // states
    this.state = {
      first: props.first,
      second: props.second,
      style: props.style,
    };
  }
  render() {
    return (
      <View style={[this.state.style, styles.container]}>
        <Text style={styles.firstText}>{this.state.first}</Text>
        <Text style={styles.secondText}>{this.state.second}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
  },
  firstText: {
    fontSize: 20,
    color: Colors.WhiteBlack,
    fontStyle: 'italic',
  },
  secondText: {
    fontSize: 20,
    color: Colors.WhiteBlocak,
    fontWeight: 'bold',
  },
});
export default TitleText;

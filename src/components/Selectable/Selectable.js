import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Colors from './../../colors/colors';

class Selectable extends Component {
  render() {
    return (
      <TouchableOpacity
        {...this.props}
        style={[
          this.props.style,
          this.props.selected ? styles.selected_container : styles.container,
        ]}>
        {this.props.children}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: Colors.LightGray,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  selected_container: {
    borderRadius: 10,
    backgroundColor: Colors.Red,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default Selectable;

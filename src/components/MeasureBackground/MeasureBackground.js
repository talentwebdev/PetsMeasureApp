import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Colors from './../../colors/colors';

class MeasureBackground extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.leftTopImage}
          source={require('./../../../assets/dog_feet.png')}
        />
        <Image
          style={styles.rightBottomImage}
          source={require('./../../../assets/dog_feet.png')}
        />
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.DarkBlue,
    padding: 10,
  },
  leftTopImage: {
    left: 10,
    top: 10,
    position: 'absolute',
  },
  rightBottomImage: {
    right: 10,
    bottom: 10,
    position: 'absolute',
  },
});

export default MeasureBackground;

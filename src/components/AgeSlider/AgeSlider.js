/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import Slider from '@react-native-community/slider';
import Colors from './../../colors/colors';
import {View, Text, StyleSheet} from 'react-native';

class AgeSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marks: [
        {name: '6 Mon', value: 0},
        {name: '2 Yr', value: 2},
        {name: '4 Yr', value: 4},
        {name: '6 Yr', value: 6},
        {name: '8 Yr', value: 8},
      ],
      current: 0,
      text: '',
    };

    this.displayMarkets = this.displayMarkets.bind(this);
  }
  displayMarkets() {
    return this.state.marks.map(item => {
      return (
        <Text
          key={item.value}
          style={{
            fontSize: 10,
            position: 'absolute',
            left: (item.value / 8.0) * 100.0 - 1 + '%',
          }}>
          {item.name}
        </Text>
      );
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tinkTextContainer}>
          <Text
            style={{
              position: 'absolute',
              fontSize: 10,
              left: (this.state.current / 8.0) * 100 + '%',
            }}>
            {this.state.text}
          </Text>
        </View>
        <Slider
          {...this.props}
          onValueChange={current => {
            this.setState({current});
            this.setState({text: '6Mon - ' + current + ' Yr'});
            if (this.props.onValueChange !== undefined) {
              this.props.onValueChange(current);
            }
          }}
          minimumTrackTintColor={Colors.Red}
          maximumTrackTintColor={Colors.LightGray}
          thumbTintColor={Colors.Red}
          step={1}
          minimumValue={0}
          maximumValue={8}
        />
        <View style={styles.markerContainer}>{this.displayMarkets()}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
  },
  markerContainer: {
    width: '100%',
    paddingRight: 25,
  },
  tinkTextContainer: {
    height: 15,
    paddingRight: 25,
  },
});
export default AgeSlider;

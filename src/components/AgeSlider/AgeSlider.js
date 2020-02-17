import React, {Component} from 'react';
import MarkSlider from 'react-native-mark-slider';

class AgeSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marks: [
        {name: '6 Mon', value: 0},
        {name: '2 Yr', value: 3},
        {name: '4 Yr', value: 7},
        {name: '6 Yr', value: 11},
        {name: '8 Yr', value: 15},
      ],
    };
  }
  render() {
    return (
      <MarkSlider
        {...this.props}
        step={1}
        min={0}
        max={15}
        marks={this.state.marks}
      />
    );
  }
}

export default AgeSlider;

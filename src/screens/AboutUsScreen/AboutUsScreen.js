import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {BottomTab, MenuIcon, TextArea, TitleText} from './../../components';

class AboutUsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MenuIcon />
        <View style={styles.contentConatiner}>
          <TitleText first="About " second="Animal Movers" />
          <TextArea
            style={styles.textarea}
            placeholder="Add text"
            numberOfLines={5}
          />
          <TitleText first="Opening " second="Times" />
          <TextArea
            style={styles.textarea}
            placeholder="Add text"
            numberOfLines={5}
          />
        </View>
        <BottomTab />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentConatiner: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  textarea: {
    marginBottom: 20,
  },
});
export default AboutUsScreen;

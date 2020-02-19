import React, {Component} from 'react';
import {
  MenuIcon,
  TitleText,
  TextInputTitleText,
  TextArea,
  BottomTab,
  CustomButton,
  CustomTextInput,
} from './../../components';
import {View, StyleSheet} from 'react-native';

class ContactUsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MenuIcon navigation={this.props.navigation} />
        <View style={styles.mainContent}>
          <TitleText
            style={styles.titleText}
            first="Contact "
            second="Animal Movers"
          />
          <TextInputTitleText text="Subject" />
          <CustomTextInput
            style={styles.messagesubject}
            placeholder="Message Subject"
          />
          <TextInputTitleText text="Message" />
          <TextArea
            style={styles.messagebox}
            placeholder="Message"
            numberOfLines={7}
          />
          <CustomButton text="Send" type="NormalButton" />
        </View>
        <BottomTab navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    marginBottom: 20,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  messagesubject: {
    marginBottom: 10,
  },
  messagebox: {
    marginBottom: 20,
  },
});
export default ContactUsScreen;

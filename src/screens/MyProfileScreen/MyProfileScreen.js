import React, {Component} from 'react';
import {
  TitleText,
  CustomTextInput,
  TextInputTitleText,
  BottomTab,
  CustomButton,
} from './../../components';
import {View, StyleSheet} from 'react-native';

class MyProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <TitleText style={styles.titleText} first="My " second="Profile" />
          <TextInputTitleText style={styles.normalText} text="Name" />
          <CustomTextInput style={styles.textInput} placeholder="Full Name" />
          <TextInputTitleText style={styles.normalText} text="Address" />
          <CustomTextInput style={styles.textInput} placeholder="Address" />
          <TextInputTitleText style={styles.normalText} text="Contact Number" />
          <CustomTextInput
            style={styles.textInput}
            placeholder="Contact Number"
          />
          <TextInputTitleText style={styles.normalText} text="Password" />
          <CustomTextInput style={styles.textInput} placeholder="Password" />
          <CustomButton
            style={styles.editProfileButton}
            text="Edit Profile"
            type="NormalButton"
          />
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
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  normalText: {
    marginBottom: 10,
  },
  textInput: {
    marginBottom: 10,
  },
  titleText: {
    marginBottom: 40,
    paddingLeft: 10,
  },
  editProfileButton: {
    marginTop: 10,
  },
});

export default MyProfileScreen;

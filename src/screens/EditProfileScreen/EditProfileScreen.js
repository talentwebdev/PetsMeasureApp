import React, {Component} from 'react';
import {
  TitleText,
  TextInputTitleText,
  CustomTextInput,
  CustomButton,
  BottomTab,
} from './../../components';
import {View, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

class EditProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <TitleText style={styles.titleText} first="My " second="Profile" />
          <ScrollView style={styles.textInputContainer}>
            <TextInputTitleText style={styles.normalText} text="Name" />
            <CustomTextInput style={styles.textInput} placeholder="Full Name" />
            <TextInputTitleText style={styles.normalText} text="Address" />
            <CustomTextInput style={styles.textInput} placeholder="Address" />
            <TextInputTitleText
              style={styles.normalText}
              text="Contact Number"
            />
            <CustomTextInput
              style={styles.textInput}
              placeholder="Contact Number"
            />
            <TextInputTitleText style={styles.normalText} text="Email" />
            <CustomTextInput style={styles.textInput} placeholder="Email" />
            <TextInputTitleText style={styles.normalText} text="Password" />
            <CustomTextInput style={styles.textInput} placeholder="Password" />
            <CustomButton
              style={styles.changePasswordButton}
              text="Change Password"
              type="NormalButton"
            />
          </ScrollView>
          <CustomButton
            style={styles.saveChangesButton}
            text="Save Changes"
            type="NormalButton"
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
  mainContainer: {
    flex: 1,
    padding: 10,
  },
  titleText: {
    marginTop: 20,
    marginBottom: 20,
  },
  textInputContainer: {
    padding: 5,
  },
  normalText: {
    marginBottom: 5,
  },
  textInput: {
    marginBottom: 10,
  },
  changePasswordButton: {
    marginBottom: 5,
  },
  saveChangesButton: {
    marginTop: 10,
  },
});
export default EditProfileScreen;

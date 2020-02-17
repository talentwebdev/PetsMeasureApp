import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  TitleText,
  NormalText,
  TextInputTitleText,
  CustomTextInput,
  CustomButton,
} from './../../components';

class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      address: '',
      contactnumber: '',
      email: '',
      password: '',
      confirmpassword: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <View style={styles.titleContainer}>
            <TitleText first="Welcome " second="to Animal Movers" />
            <NormalText text="Register" />
          </View>
          <TextInputTitleText
            style={styles.normalText}
            text="Please enter your full name"
          />
          <CustomTextInput
            style={styles.normalText}
            placeholder="Full Name"
            value={this.state.fullname}
            onChangeText={fullname => {
              this.setState(fullname);
            }}
          />
          <TextInputTitleText
            style={styles.normalText}
            text="Please enter your residential address"
          />
          <CustomTextInput
            style={styles.normalText}
            placeholder="Address"
            value={this.state.address}
            onChangeText={address => {
              this.setState(address);
            }}
          />
          <TextInputTitleText
            style={styles.normalText}
            text="Please enter your contact number"
          />
          <CustomTextInput
            style={styles.normalText}
            placeholder="Contact Number"
            value={this.state.contactnumber}
            onChangeText={contactnumber => {
              this.setState(contactnumber);
            }}
          />
          <TextInputTitleText
            style={styles.normalText}
            text="Please enter your email address"
          />
          <CustomTextInput
            style={styles.normalText}
            placeholder="Email"
            value={this.state.email}
            onChangeText={email => {
              this.setState(email);
            }}
          />
          <TextInputTitleText
            style={styles.normalText}
            text="Please enter a password for your profile"
          />
          <CustomTextInput
            style={styles.normalText}
            placeholder="Password"
            value={this.state.password}
            onChangeText={password => {
              this.setState(password);
            }}
          />
          <TextInputTitleText
            style={styles.normalText}
            text="Please confirm your password"
          />
          <CustomTextInput
            style={styles.normalText}
            placeholder="Confirm Password"
            value={this.state.confirmpassword}
            onChangeText={confirmpassword => {
              this.setState(confirmpassword);
            }}
          />
        </View>
        <CustomButton
          style={styles.registerButton}
          text="Register"
          type="NormalButton"
          onPress={() => {}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    marginBottom: 10,
    width: '100%',
    padding: 10,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  registerButton: {
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  textInput: {
    marginLeft: 10,
  },
  normalText: {
    marginLeft: 10,
    marginRight: 10,
  },
});
export default RegisterScreen;

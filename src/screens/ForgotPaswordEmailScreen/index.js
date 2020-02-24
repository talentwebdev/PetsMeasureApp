import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  TitleText,
  TextInputTitleText,
  CustomTextInput,
  CustomButton,
} from '../../components';
import ValidationComponent from 'react-native-form-validator';
import {API_URL, mode} from '../../common/Common';
import {navigateWithNavigation} from './../../navigator/NavigationService';
import Spinner from 'react-native-loading-spinner-overlay';
import Colors from './../../colors/colors';

class ForgotPasswordEmailScreen extends ValidationComponent {
  constructor(props) {
    super(props);
    console.log(mode);
    this.state = {
      email: mode === 'TEST' ? 'zhuping.kp@gmail.com' : '',
      loading: false,
    };
    this.onSendCode = this.onSendCode.bind(this);
  }
  onSendCode() {
    this.setState({loading: true});
    fetch(API_URL + '/user/requestresetpassword', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.email,
      }),
    })
      .then(response => response.json())
      .then(responsejson => {
        this.setState({loading: false});
        console.log('requestresetpassword result', responsejson);
        if (responsejson.status === true) {
          navigateWithNavigation('ForgotPasswordCodeScreen', false, {
            email: this.state.email,
          });
        } else {
          alert('Can not send code to your Email');
        }
      })
      .catch(err => {
        this.setState({loading: false});
        console.log('requestresetpassword error', err);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <Spinner visible={this.state.loading} color={Colors.Red} />
        <View style={styles.mainContainer}>
          <TitleText
            style={styles.titleText}
            first="Welcome "
            second="to Animal Movers"
          />
          <TextInputTitleText text="Please enter the email for your profile" />
          <CustomTextInput
            value={this.state.email}
            onChangeText={email => {
              this.setState({email});
            }}
            placeholder="Email"
            keyboardType="email-address"
            ref="email"
          />
          <CustomButton
            type="NormalButton"
            text="Send Code"
            style={styles.sendCodeButton}
            onPress={this.onSendCode}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    top: '20%',
    left: 10,
    position: 'absolute',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  sendCodeButton: {
    marginTop: 10,
  },
});

export default ForgotPasswordEmailScreen;

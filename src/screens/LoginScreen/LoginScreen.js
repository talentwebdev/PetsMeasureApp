/* eslint-disable no-alert */
/* eslint-disable react/no-string-refs */
import React, {Component} from 'react';
import {StyleSheet, View, Keyboard} from 'react-native';
import {
  TitleText,
  NormalText,
  TextInputTitleText,
  CustomTextInput,
  CustomButton,
} from '../../components';
import ValidationComponent from 'react-native-form-validator';
import {API_URL, _storeEmail, _storePassword} from './../../common/Common';
import Spinner from 'react-native-loading-spinner-overlay';
import Colors from './../../colors/colors';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateUserData} from './action';
import {navigateWithNavigation} from './../../navigator/NavigationService';

class LoginScreen extends ValidationComponent {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      keyboardshow: false,
      loader: false,
    };
    this.onKeyboardShow = Keyboard.addListener(
      'keyboardDidShow',
      this.handleKeyboardShow,
    );
    this.onKeyboardHide = Keyboard.addListener(
      'keyboardDidHide',
      this.handleKeyboardHide,
    );

    this.onLogin = this.onLogin.bind(this);
  }
  componentWillUnmount() {
    this.onKeyboardShow.remove();
    this.onKeyboardHide.remove();
  }
  handleKeyboardShow = event => {
    this.setState({keyboardshow: true});
  };
  handleKeyboardHide = event => {
    this.setState({keyboardshow: false});
  };
  onLogin(email, password) {
    this.validate({
      email: {email: true},
      password: {minLenth: 5, required: true},
    });

    if (this.isFormValid()) {
      this.setState({loader: true});
      fetch(API_URL + '/user/signin', {
        method: 'POST',
        body: JSON.stringify({
          ...this.state,
        }),
      })
        .then(response => response.json())
        .then(responsejson => {
          this.setState({loader: false});
          if (responsejson.status === false) {
            alert('Can not Sign in');
            return;
          }
          this.props.updateUserData(responsejson.data);
          this.props.navigation.navigate('HomeScreen');
          _storeEmail(this.state.email);
          _storePassword(this.state.password);
        })
        .catch(err => {
          this.setState({loader: false});
          console.log('Signin Error', err);
          alert('Can not Sign in');
        });
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Spinner visible={this.state.loader} color={Colors.Red} />
        {this.state.keyboardshow === false && (
          <View style={styles.titleContainer}>
            <TitleText first="Welcome " second="to Animal Movers" />
            <NormalText text="Login" />
          </View>
        )}
        <View style={styles.loginInputContainer}>
          <TextInputTitleText text="Please enter the email for your profile" />
          <CustomTextInput
            placeholder="Email"
            style={styles.textInput}
            value={this.state.email}
            ref="email"
            keyboardType="email-address"
            onChangeText={email => {
              this.setState({email});
            }}
          />
          <TextInputTitleText text="Please enter the password for your profile" />
          <CustomTextInput
            placeholder="Password"
            ref="password"
            style={styles.textInput}
            value={this.state.password}
            secureTextEntry={true}
            onChangeText={password => {
              this.setState({password});
            }}
          />
          <CustomButton
            style={styles.button}
            text="Forgot Password"
            type="NormalButton"
            onPress={() => {
              navigateWithNavigation('ForgotPasswordEmailScreen');
            }}
          />
        </View>
        <CustomButton
          style={styles.loginButton}
          type="NormalButton"
          text="Login"
          onPress={this.onLogin}
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
    position: 'absolute',
    marginTop: 50,
    padding: 10,
  },
  loginInputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 10,
  },
  loginButton: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 30,
  },
  textInput: {
    width: '100%',
  },
  button: {
    width: '100%',
    marginTop: 20,
  },
});

const mapStatesToProps = (state, props) => {
  return {
    ...props,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUserData: bindActionCreators(updateUserData, dispatch),
  };
};
export default connect(
  mapStatesToProps,
  mapDispatchToProps,
)(LoginScreen);

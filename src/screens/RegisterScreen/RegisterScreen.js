import React, {Component} from 'react';
import {View, StyleSheet, Keyboard} from 'react-native';
import {
  TitleText,
  NormalText,
  TextInputTitleText,
  CustomTextInput,
  CustomButton,
} from './../../components';
import {API_URL} from './../../common/Common';
import ValidationComponent from 'react-native-form-validator';
import Spinner from 'react-native-loading-spinner-overlay';
import Colors from './../../colors/colors';
import {updateUserData} from './action';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class RegisterScreen extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      full_name: 'zhuping jin',
      address: 'shenyang',
      contact_number: '123456',
      email: 'zhuping.kp@gmail.com',
      password: 'password',
      confirmpassword: 'password',
      keyboardshow: false,
      loader: false,
    };

    this.onRegister = this.onRegister.bind(this);

    this.onHandleKeyboardShow = Keyboard.addListener(
      'keyboardDidShow',
      this.onKeyboardShow,
    );
    this.onHandleKeyboardHide = Keyboard.addListener(
      'keyboardDidHide',
      this.onKeyboardHide,
    );
  }
  onKeyboardShow = event => {
    this.setState({keyboardshow: true});
  };
  onKeyboardHide = event => {
    this.setState({keyboardshow: false});
  };
  componentWillUnmount() {
    this.onHandleKeyboardHide.remove();
    this.onHandleKeyboardShow.remove();
  }
  onRegister() {
    this.validate({
      full_name: {minLength: 3, required: true},
      email: {email: true},
      contact_number: {numbers: true},
      password: {minLength: 5, required: true},
      confirm_password: {minLength: 5, required: true},
      address: {required: true},
    });

    if (
      this.isFormValid() &&
      this.state.password === this.state.confirmpassword
    ) {
      this.setState({loader: true});
      fetch(API_URL + '/user/signup', {
        method: 'POST',
        body: JSON.stringify({
          ...this.state,
        }),
      })
        .then(response => response.json())
        .then(responsejson => {
          this.setState({loader: false});
          if (responsejson.status === false) {
            alert('Can not sign up');
            return;
          }
          this.props.updateUserData(responsejson.data);
          this.props.navigation.navigation('HomeScreen');
        })
        .catch(err => {
          this.setState({loader: false});
          console.log('signup error', err, API_URL + '/user/signup');
          alert('Can not sign up');
        });
    } else {
      console.log('error', this.getErrorMessages());
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Spinner visible={this.state.loader} color={Colors.Red} />
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
            ref="full_name"
            value={this.state.full_name}
            onChangeText={full_name => {
              this.setState({full_name});
            }}
          />
          <TextInputTitleText
            style={styles.normalText}
            text="Please enter your residential address"
          />
          <CustomTextInput
            style={styles.normalText}
            placeholder="Address"
            ref="address"
            value={this.state.address}
            onChangeText={address => {
              this.setState({address});
            }}
          />
          <TextInputTitleText
            style={styles.normalText}
            text="Please enter your contact number"
          />
          <CustomTextInput
            style={styles.normalText}
            placeholder="Contact Number"
            ref="contact_number"
            value={this.state.contact_number}
            onChangeText={contact_number => {
              this.setState({contact_number});
            }}
          />
          <TextInputTitleText
            style={styles.normalText}
            text="Please enter your email address"
          />
          <CustomTextInput
            style={styles.normalText}
            placeholder="Email"
            ref="email"
            keyboardType="email-address"
            value={this.state.email}
            onChangeText={email => {
              this.setState({email});
            }}
          />
          <TextInputTitleText
            style={styles.normalText}
            text="Please enter a password for your profile"
          />
          <CustomTextInput
            style={styles.normalText}
            placeholder="Password"
            ref="password"
            value={this.state.password}
            secureTextEntry={true}
            onChangeText={password => {
              this.setState({password});
            }}
          />
          <TextInputTitleText
            style={styles.normalText}
            text="Please confirm your password"
          />
          <CustomTextInput
            style={styles.normalText}
            placeholder="Confirm Password"
            ref="confirm_password"
            value={this.state.confirmpassword}
            secureTextEntry={true}
            onChangeText={confirmpassword => {
              this.setState({confirmpassword});
            }}
          />
        </View>
        {!this.state.keyboardshow && (
          <CustomButton
            style={styles.registerButton}
            text="Register"
            type="NormalButton"
            onPress={this.onRegister}
          />
        )}
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
  registerButton_keyboard: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 0,
  },
  textInput: {
    marginLeft: 10,
  },
  normalText: {
    marginLeft: 10,
    marginRight: 10,
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
)(RegisterScreen);

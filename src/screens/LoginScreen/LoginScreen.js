import React, {Component} from 'react';
import {StyleSheet, View, Keyboard} from 'react-native';
import {
  TitleText,
  NormalText,
  TextInputTitleText,
  CustomTextInput,
  CustomButton,
} from '../../components';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      keyboardshow: false,
    };
    this.onKeyboardShow = Keyboard.addListener(
      'keyboardDidShow',
      this.handleKeyboardShow,
    );
    this.onKeyboardHide = Keyboard.addListener(
      'keyboardDidHide',
      this.handleKeyboardHide,
    );
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
  render() {
    return (
      <View style={styles.container}>
        {this.state.keyboardshow === false && (
          <View style={styles.titleContainer}>
            <TitleText first="Welcome" second="to Animal Movers" />
            <NormalText text="Login" />
          </View>
        )}
        <View style={styles.loginInputContainer}>
          <TextInputTitleText text="Please enter the email for your profile" />
          <CustomTextInput
            placeholder="Username"
            style={styles.textInput}
            value={this.state.username}
            onChangeText={username => {
              this.setState(username);
            }}
          />
          <TextInputTitleText text="Please enter the password for your profile" />
          <CustomTextInput
            placeholder="Password"
            style={styles.textInput}
            value={this.state.password}
            onChangeText={password => {
              this.setState(password);
            }}
          />
          <CustomButton
            style={styles.button}
            text="Forgot Password"
            type="NormalButton"
          />
        </View>
        <CustomButton
          style={styles.loginButton}
          type="NormalButton"
          text="Login"
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
export default LoginScreen;

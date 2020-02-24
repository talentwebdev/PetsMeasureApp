import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  TitleText,
  TextInputTitleText,
  CustomTextInput,
  CustomButton,
} from '../../components';
import {API_URL, mode} from '../../common/Common';
import {navigateWithNavigation} from '../../navigator/NavigationService';
import Spinner from 'react-native-loading-spinner-overlay';
import colors from '../../colors/colors';

class ForgotPasswordResetScreen extends Component {
  constructor(props) {
    super(props);
    const {navigation} = props;
    console.log(navigation.getParam('email'));
    this.state = {
      email: navigation.getParam('email'),
      password: mode === 'TEST' ? 'password' : '',
      confirmpassword: mode === 'TEST' ? 'password' : '',
      loading: false,
    };

    this.onReset = this.onReset.bind(this);
  }
  onReset() {
    if (this.state.password !== this.state.confirmpassword) {
      alert('Please confirm your password');
      return;
    }
    this.setState({loading: true});
    fetch(API_URL + '/user/resetpassword', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then(response => response.json())
      .then(responsejson => {
        this.setState({loading: false});
        console.log('resetpassword response', responsejson);
        if (responsejson.status === true) {
          alert('ResetPassword Success');
          navigateWithNavigation('LoginScreen');
        }
      })
      .catch(err => {
        this.setState({loading: false});
        console.log('resetpassword error', err);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <Spinner visible={this.state.loading} color={colors.Red} />
        <TitleText
          style={styles.titleText}
          first="Welcome "
          second="to Animal Movers"
        />
        <TextInputTitleText text="New Password" />
        <CustomTextInput
          placeholder="New Password"
          value={this.state.password}
          secureTextEntry={true}
          onChangeText={password => {
            this.setState({password});
          }}
        />
        <TextInputTitleText text="Confirm Password" />
        <CustomTextInput
          placeholder="Confirm Password"
          value={this.state.confirmpassword}
          secureTextEntry={true}
          onChangeText={confirmpassword => {
            this.setState({confirmpassword});
          }}
        />
        <CustomButton
          style={styles.resetButton}
          type="NormalButton"
          text="Reset"
          onPress={this.onReset}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  titleText: {
    position: 'absolute',
    top: '20%',
    left: 10,
  },
  resetButton: {
    marginTop: 10,
  },
});
export default ForgotPasswordResetScreen;

import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  TitleText,
  TextInputTitleText,
  CustomTextInput,
  CustomButton,
} from '../../components';
import {API_URL} from './../../common/Common';
import {navigateWithNavigation} from '../../navigator/NavigationService';
import Spinner from 'react-native-loading-spinner-overlay';
import colors from '../../colors/colors';

class ForgotPasswordCodeScreen extends Component {
  constructor(props) {
    super(props);
    const {navigation} = this.props;
    console.log('code screen', navigation.getParam('email'));
    this.state = {
      email: navigation.getParam('email'),
      code: '',
      loading: false,
    };
    console.log('forgotpassword code screen', this.state.email);
    this.onVerifyCode = this.onVerifyCode.bind(this);
  }
  onVerifyCode() {
    this.setState({loading: true});
    fetch(API_URL + '/user/checkcode', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.email,
        code: this.state.code,
      }),
    })
      .then(response => response.json())
      .then(responsejson => {
        this.setState({loading: false});
        console.log('checkcode response', responsejson);
        if (responsejson.status === true) {
          navigateWithNavigation('ForgotPasswordResetScreen', false, {
            email: this.state.email,
          });
        }
      })
      .catch(err => {
        this.setState({loading: false});
        console.log('checkcode error', err);
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
        <TextInputTitleText text="We have sent code. Please check your email" />
        <CustomTextInput
          placeholder="Enter Code"
          value={this.state.code}
          keyboardType="number-pad"
          onChangeText={code => {
            this.setState({code});
          }}
        />
        <CustomButton
          type="NormalButton"
          text="Verify"
          style={styles.verifyButton}
          onPress={this.onVerifyCode}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  titleText: {
    top: '20%',
    left: 10,
    position: 'absolute',
  },
  verifyButton: {
    marginTop: 10,
  },
});
export default ForgotPasswordCodeScreen;

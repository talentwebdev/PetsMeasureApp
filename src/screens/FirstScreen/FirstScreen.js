import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {CustomButton, TitleText} from './../../components/index';
import {PermissionsAndroid} from 'react-native';

async function requestCameraPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Cool Photo App Camera Permission',
        message:
          'Cool Photo App needs access to your camera ' +
          'so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the camera');
    } else {
      console.log('Camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
}

class FirstScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onLoginButton = this.onLoginButton.bind(this);
    this.onRegisterButton = this.onRegisterButton.bind(this);
    requestCameraPermission();
  }
  onLoginButton() {
    this.props.navigation.navigate('LoginScreen');
  }
  onRegisterButton() {
    this.props.navigation.navigate('RegisterScreen');
  }
  render() {
    return (
      <View style={styles.container}>
        <TitleText
          style={styles.titleText}
          first="Welcome "
          second="to Animal Movers"
        />
        <CustomButton
          style={styles.button}
          type="LoginButton"
          text="Register"
          onPress={this.onRegisterButton}
        />
        <CustomButton
          style={styles.button}
          type="LoginButton"
          text="Login"
          onPress={this.onLoginButton}
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
    top: 80,
    position: 'absolute',
    marginLeft: 10,
  },
  button: {
    marginBottom: 10,
  },
});
export default FirstScreen;

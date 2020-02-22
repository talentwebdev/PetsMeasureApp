import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {CustomButton, TitleText} from './../../components/index';
import {PermissionsAndroid} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {API_URL, _fetchEmail, _fetchPassword} from './../../common/Common';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {updateUserData} from './action';
import {
  checkPermission,
  createNotificationListeners,
} from './../../pushnotification/FirebaseService';
import firebase from 'react-native-firebase';
import {Alert} from 'react-native';
import {_storeFCMToken, _fetchFCMToken} from '../../common/Storage';

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
  async componentDidMount() {
    SplashScreen.hide();
    this.login();

    // this.checkPermission();
    //createNotificationListeners(this);
    // this.createNotificationListeners(); //add this line
  }

  login = async () => {
    const email = await _fetchEmail();
    const password = await _fetchPassword();
    console.log('FirstScreen', email, password);

    fetch(API_URL + '/user/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(responsejson => {
        if (responsejson.status === false) {
          return;
        }
        this.props.updateUserData(responsejson.data);
        this.props.navigation.navigate('HomeScreen');
        console.log('FirstScreen login', responsejson, responsejson.status);

        console.log('FirstScreen login', responsejson);
      })
      .catch(err => {
        console.log('FirstScren login error', err);
      });
  };
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
)(FirstScreen);

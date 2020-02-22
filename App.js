import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './src/reducer/root_reducer';
import AppRootContainer from './src/AppRootContainer';
import {
  checkPermission,
  createNotificationListeners,
} from '././src/pushnotification/FirebaseService';
import firebase from 'react-native-firebase';
import {Alert} from 'react-native';
import {_storeFCMToken, _fetchFCMToken} from './src/common/Storage';

const store = createStore(reducer);

class App extends Component {
  ////////////////////// Add these methods //////////////////////

  //Remove listeners allocated in createNotificationListeners()
  componentWillUnmount() {
    console.log('willunmount');
    this.notificationListener();
    this.notificationOpenedListener();
  }

  async componentDidMount() {
    this.checkPermission();
    //createNotificationListeners(this);
    this.createNotificationListeners(); //add this line
  }
  //1
  async checkPermission() {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      this.getToken();
    } else {
      this.requestPermission();
    }
  }

  //3
  async getToken() {
    let fcmToken = await _fetchFCMToken();
    console.log('fcmtoken', fcmToken);
    fcmToken = null;
    if (!fcmToken) {
      fcmToken = await firebase.messaging().getToken();
      console.log('new token', fcmToken);
      if (fcmToken) {
        // user has a device token
        _storeFCMToken(fcmToken);
      }
    }
  }

  //2
  async requestPermission() {
    try {
      await firebase.messaging().requestPermission();
      // User has authorised
      this.getToken();
    } catch (error) {
      // User has rejected permissions
      console.log('permission rejected');
    }
  }

  async createNotificationListeners() {
    console.log('createNotificationListeners');
    /*
    const notification1 = new firebase.notifications.Notification().android
      .setChannelId('default-channel')
      .setNotificationId('1')
      .setTitle('title')
      .setBody('body')
      .setData({
        order_id: 1,
      });
    console.log('notification1', notification1);
    firebase.notifications().displayNotification(notification1);*/

    /*
     * Triggered when a particular notification has been received in foreground
     * */
    this.notificationListener = firebase
      .notifications()
      .onNotification(notification => {
        console.log('foreground');
        const {title, body} = notification;
        this.showAlert(title, body);
      });

    console.log(this.notificationListener);
    /*
     * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
     * */
    this.notificationOpenedListener = firebase
      .notifications()
      .onNotificationOpened(notificationOpen => {
        console.log('background');

        const {title, body} = notificationOpen.notification;
        this.showAlert(title, body);
      });

    /*
     * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
     * */
    const notificationOpen = await firebase
      .notifications()
      .getInitialNotification();
    console.log(notificationOpen);
    if (notificationOpen) {
      console.log('initial');
      const {title, body} = notificationOpen.notification;
      this.showAlert(title, body);
    }
    /*
     * Triggered for data only payload in foreground
     * */
    this.messageListener = firebase.messaging().onMessage(message => {
      //process data message
      console.log('abcd');
      console.log(JSON.stringify(message));
    });
  }

  showAlert(title, body) {
    Alert.alert(
      title,
      body,
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: false},
    );
  }
  render() {
    return (
      <Provider store={store}>
        <AppRootContainer />
      </Provider>
    );
  }
}
export default App;

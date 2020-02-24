import firebase from 'react-native-firebase';
import {Alert} from 'react-native';
import {_fetchFCMToken, _storeFCMToken} from './../common/Storage';
import {navigateWithNavigation} from './../navigator/NavigationService';

export async function getToken() {
  let fcmToken = await _fetchFCMToken();
  if (!fcmToken) {
    fcmToken = await firebase.messaging().getToken();
    console.log('FCMToken: ', fcmToken);
    if (fcmToken) {
      // user has a device token
      await _storeFCMToken(fcmToken);
    }
  }
}

export async function checkPermission() {
  const enabled = await firebase.messaging().hasPermission();
  if (enabled) {
    getToken();
  } else {
    requestPermission();
  }
}

export async function requestPermission() {
  try {
    await firebase.messaging().requestPermission();
    // User has authorised
    getToken();
  } catch (error) {
    // User has rejected permissions
    console.log('permission rejected');
  }
}

export async function createNotificationListeners(component) {
  console.log('hello');
  /*
   * Triggered when a particular notification has been received in foreground
   * */
  component.notificationListener = firebase
    .notifications()
    .onNotification(notification => {
      console.log('notification in foreground');
      console.log('foreground', notification);
      onNotification(notification);
    });

  /*
   * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
   * */
  component.notificationOpenedListener = firebase
    .notifications()
    .onNotificationOpened(notificationOpen => {
      console.log('notification in background');
      const {title, body} = notificationOpen.notification;
      showAlert(title, body);
      onNotification(notificationOpen.notification);
    });

  /*
   * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
   * */
  const notificationOpen = await firebase
    .notifications()
    .getInitialNotification();
  if (notificationOpen) {
    console.log('initial', notificationOpen.notification.data);
    onNotification(notificationOpen.notification.data);
    /*
    const {title, body} = notificationOpen.notification;
    showAlert(title, body);
    */
  }
  /*
   * Triggered for data only payload in foreground
   * */
  component.messageListener = firebase.messaging().onMessage(message => {
    //process data message
    console.log('process data message');
    console.log(JSON.stringify(message));
  });
}

function showAlert(title, body) {
  Alert.alert(
    title,
    body,
    [{text: 'OK', onPress: () => console.log('OK Pressed')}],
    {cancelable: false},
  );
}

function onNotification(notification) {
  console.log('New Notificaiton', notification);
  navigateWithNavigation('NotificationDetailScreen', true, {
    data: notification,
  });
}

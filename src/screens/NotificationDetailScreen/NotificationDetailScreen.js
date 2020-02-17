import React, {Component} from 'react';
import {MenuIcon, TitleText, BottomTab} from './../../components';
import {View, Text, StyleSheet} from 'react-native';
import Colors from './../../colors/colors';

class NotificationDetailScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MenuIcon />
        <View style={styles.mainContainer}>
          <TitleText
            style={styles.titleText}
            first="Your "
            second="Notifications"
          />
          <Text style={styles.notificationTitle}>New Notification</Text>
          <View style={styles.notificationMessageContainer}>
            <Text style={styles.notificationMessage}>Notification message</Text>
          </View>
        </View>
        <BottomTab />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    padding: 10,
  },
  titleText: {
    marginTop: 20,
    marginBottom: 20,
  },
  notificationTitle: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.Red,
    padding: 10,
  },
  notificationMessageContainer: {
    backgroundColor: Colors.LightGray,
    borderRadius: 10,
    flex: 1,
    marginTop: 30,
    padding: 10,
  },
  notificationMessage: {
    color: Colors.WhiteBlocak,
  },
});

export default NotificationDetailScreen;

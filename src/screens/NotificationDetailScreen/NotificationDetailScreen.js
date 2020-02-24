import React, {Component} from 'react';
import {MenuIcon, TitleText, BottomTab} from './../../components';
import {View, Text, StyleSheet} from 'react-native';
import Colors from './../../colors/colors';
import {API_URL} from './../../common/Common';
import {connect} from 'react-redux';

class NotificationDetailScreen extends Component {
  constructor(props) {
    super(props);

    const {navigation} = props;
    const notification = navigation.getParam('data');
    this.state = {
      title: notification.title,
      content: notification.content,
    };

    console.log('notification detail', notification);
    fetch(API_URL + '/notification/read', {
      method: 'POST',
      body: JSON.stringify({
        id: notification.id,
        authorization: this.props.user.token,
      }),
    })
      .then(response => response.json())
      .then(responsejson => {
        console.log('read notification success', responsejson);
      })
      .catch(err => {
        console.log('read notification error', err);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <MenuIcon navigation={this.props.navigation} />
        <View style={styles.mainContainer}>
          <TitleText
            style={styles.titleText}
            first="Your "
            second="Notifications"
          />
          <Text style={styles.notificationTitle}>{this.state.title}</Text>
          <View style={styles.notificationMessageContainer}>
            <Text style={styles.notificationMessage}>{this.state.content}</Text>
          </View>
        </View>
        <BottomTab navigation={this.props.navigation} />
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

const mapStatesToProps = (state, props) => {
  return {
    ...props,
    user: state.user,
  };
};
export default connect(mapStatesToProps)(NotificationDetailScreen);

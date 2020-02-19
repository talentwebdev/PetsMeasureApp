import React, {Component} from 'react';
import {CustomButton, MenuIcon} from './../../components';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {navigateDrawerScreen} from './../../common/Common';

const DrawerContentScreen = props => (
  <SafeAreaView style={styles.container}>
    <MenuIcon type="close" navigation={props.navigation} />
    <View style={styles.mainContainer}>
      <CustomButton
        onPress={() => {
          props.navigation.navigate('HomeScreen');
        }}
        style={styles.button}
        text="Home"
        type="HomeButton"
      />
      <CustomButton
        onPress={() => {
          navigateDrawerScreen('AboutUsScreen', props);
        }}
        style={styles.button}
        text="About Us"
        type="HomeButton"
      />
      <CustomButton
        style={styles.button}
        text="Notifications"
        type="HomeButton"
        onPress={() => {
          navigateDrawerScreen('NotificationsScreen', props);
        }}
      />
      <CustomButton
        style={styles.button}
        text="Contact Us"
        type="HomeButton"
        onPress={() => {
          navigateDrawerScreen('ContactUsScreen', props);
        }}
      />
      <CustomButton
        style={styles.button}
        text="My Profile"
        type="HomeButton"
        onPress={() => {
          props.navigation.navigate('MyProfileScreen');
        }}
      />
      <CustomButton
        style={styles.button}
        text="Logout"
        type="HomeButton"
        onPress={() => {
          props.navigation.navigate('LoginScreen');
        }}
      />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  button: {
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 20,
  },
});

export default DrawerContentScreen;

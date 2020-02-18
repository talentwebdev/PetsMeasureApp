import React, {Component} from 'react';
import {CustomButton, MenuIcon} from './../../components';
import {View, SafeAreaView, StyleSheet} from 'react-native';

const DrawerContentScreen = props => (
  <SafeAreaView style={styles.container}>
    <MenuIcon type="close" navigation={props.navigation} />
    <View style={styles.mainContainer}>
      <CustomButton style={styles.button} text="Home" type="HomeButton" />
      <CustomButton style={styles.button} text="About Us" type="HomeButton" />
      <CustomButton
        style={styles.button}
        text="Notifications"
        type="HomeButton"
      />
      <CustomButton style={styles.button} text="Contact Us" type="HomeButton" />
      <CustomButton style={styles.button} text="My Profile" type="HomeButton" />
      <CustomButton style={styles.button} text="Logout" type="HomeButton" />
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

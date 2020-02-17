import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {CustomButton, TitleText} from './../../components/index';

class FirstScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onLoginButton = this.onLoginButton.bind(this);
    this.onRegisterButton = this.onRegisterButton.bind(this);
  }
  onLoginButton() {}
  onRegisterButton() {}
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
  },
  button: {
    marginBottom: 10,
  },
});
export default FirstScreen;

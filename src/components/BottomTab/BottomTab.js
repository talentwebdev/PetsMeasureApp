import React, {Component} from 'react';
import Colors from './../../colors/colors';
import {
  View,
  Image,
  StyleSheet,
  Keyboard,
  TouchableOpacity,
  Text,
} from 'react-native';

class BottomTab extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyboardshow: false,
    };
    this.onKeyboardShow = Keyboard.addListener(
      'keyboardDidShow',
      this.handleKeyboardShow,
    );
    this.onKyeboardHide = Keyboard.addListener(
      'keyboardDidHide',
      this.handleKeyboardHide,
    );
  }
  handleKeyboardShow = event => {
    this.setState({keyboardshow: true});
  };
  handleKeyboardHide = event => {
    this.setState({keyboardshow: false});
  };
  componentWillUnmount() {
    this.onKyeboardHide.remove();
    this.onKeyboardShow.remove();
  }
  render() {
    return (
      <View style={styles.lastContainer}>
        {this.props.plus === true && !this.state.keyboardshow && (
          <View style={styles.tabMenuContainer}>
            <Text style={styles.plusText}>+</Text>
          </View>
        )}

        {!this.state.keyboardshow && (
          <View style={styles.container}>
            <View style={styles.tabContainer}>
              <View style={styles.imageContainer}>
                <TouchableOpacity>
                  <Image
                    style={styles.leftImage}
                    source={require('./../../../assets/house.png')}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.imageContainer}>
                <TouchableOpacity>
                  <Image
                    style={styles.leftImage}
                    source={require('./../../../assets/info.png')}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.imageContainer}>
                <TouchableOpacity>
                  <Image
                    style={styles.rightImage}
                    source={require('./../../../assets/bell.png')}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.imageContainer}>
                <TouchableOpacity>
                  <Image
                    style={styles.rightImage}
                    source={require('./../../../assets/contact.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.borderTitle} />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    borderRadius: 50,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  tabContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  leftImage: {
    marginLeft: 0,
    marginRight: 'auto',
  },
  rightImage: {
    marginLeft: 'auto',
    marginRight: 0,
  },
  borderTitle: {
    backgroundColor: Colors.LightGray,
    height: 5,
    width: '50%',
    marginTop: 5,
    borderRadius: 5,
  },
  plusText: {
    fontSize: 20,
    color: Colors.White,
  },
  tabMenuContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    backgroundColor: Colors.Red,
    alignItems: 'center',
    borderRadius: 40,
    borderWidth: 4,
    borderColor: Colors.White,
    marginBottom: -25,
    zIndex: 100,
  },
  lastContainer: {
    alignItems: 'center',
  },
});
export default BottomTab;

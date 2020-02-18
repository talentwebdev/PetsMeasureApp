import React, {Component} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

class MenuIcon extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          if (this.props.type === 'close') {
            this.props.navigation.closeDrawer();
            return;
          }
          this.props.navigation.openDrawer();
        }}>
        <Image
          style={styles.menuIcon}
          source={require('./../../../assets/MENU.png')}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  menuIcon: {
    marginLeft: 10,
    marginTop: 20,
  },
});
export default MenuIcon;

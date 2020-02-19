import React, {Component} from 'react';
import {
  CustomButton,
  BottomTab,
  MenuIcon,
  MeasureBackground,
} from './../../components';
import {View, Text, StyleSheet} from 'react-native';
import Colors from './../../colors/colors';
import {StackActions, NavigationActions} from 'react-navigation';

class MeasureStartScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MenuIcon navigation={this.props.navigation} />
        <View style={styles.mainContainer}>
          <MeasureBackground>
            <Text style={styles.descriptionText}>
              {
                'Before measuring your Pet.\n Its important to follow the steps \ncarefully. The more accurate your \n Measurements the better for your\nbeautiful pet'
              }
            </Text>
            <CustomButton
              type="NormalButton"
              text="Next"
              style={styles.nextButtton}
              onPress={() => {
                const reset = StackActions.reset({
                  index: 0,
                  actions: [
                    NavigationActions.navigate({
                      routeName: 'DrawerNavigatorScreen',
                      params: {
                        page: 'MeasureDescriptionScreen',
                      },
                    }),
                  ],
                });
                this.props.navigation.dispatch(reset);
              }}
            />
          </MeasureBackground>
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
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
  },
  descriptionText: {
    width: '80%',
    textAlign: 'center',
    color: Colors.White,
    fontWeight: 'bold',
    fontSize: 18,
  },
  nextButtton: {
    marginTop: 20,
    width: '50%',
  },
});
export default MeasureStartScreen;

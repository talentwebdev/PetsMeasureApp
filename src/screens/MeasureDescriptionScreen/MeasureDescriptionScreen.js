import React, {Component} from 'react';
import {MeasureBackground, BottomTab, MenuIcon} from '../../components';
import {View, Text, Image, StyleSheet} from 'react-native';
import Colors from './../../colors/colors';
import {StackActions, NavigationActions} from 'react-navigation';

class MeasureDescriptionScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MenuIcon navigation={this.props.navigation} />
        <View style={styles.mainContainer}>
          <MeasureBackground>
            <Text style={styles.descriptionText}>
              {'We will be taking 4\nMeasurements (A, B, C, D)'}
            </Text>
            <Image
              source={require('./../../../assets/all.png')}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.descriptionText}>
              {'Select the "+" button below to begin'}
            </Text>
          </MeasureBackground>
        </View>
        <BottomTab
          plus={true}
          absolute={true}
          onPlusPress={() => {
            const resetAction = StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({
                  routeName: 'DrawerNavigatorScreen',
                  params: {
                    step: 0,
                    page: 'MeasureStepsScreen',
                  },
                }),
              ],
            });
            this.props.navigation.dispatch(resetAction);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1},
  descriptionText: {
    width: '80%',
    textAlign: 'center',
    color: Colors.White,
    fontWeight: 'bold',
    fontSize: 18,
  },
  image: {
    width: '90%',
    marginLeft: '5%',
  },
  mainContainer: {
    flex: 1,
    padding: 10,
  },
});
export default MeasureDescriptionScreen;

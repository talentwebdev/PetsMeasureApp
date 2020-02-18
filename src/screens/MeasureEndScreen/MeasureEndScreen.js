import React, {Component} from 'react';
import {
  CustomButton,
  BottomTab,
  MenuIcon,
  MeasureBackground,
} from './../../components';
import {View, Text, StyleSheet} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';
import {API_URL} from './../../common/Common';
import Spinner from 'react-native-loading-spinner-overlay';
import Colors from './../../colors/colors';

class MeasureEndScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: true,
    };

    fetch(API_URL + '/pet/add', {
      method: 'POST',
      body: JSON.stringify({
        ...props.pet,
        authorization: props.user.token,
      }),
    })
      .then(response => response.text())
      .then(responsejson => {
        this.setState({loader: false});
        console.log('add pet successed', responsejson);
      })
      .catch(err => {
        console.log('add pet failed', err);
        this.setState({loader: false});
      });
    console.log(props.pet);
  }
  render() {
    return (
      <View style={styles.container}>
        <Spinner visible={this.state.loader} color={Colors.Red} />
        <MenuIcon navigation={this.props.navigation} />
        <View style={styles.mainContainer}>
          <MeasureBackground>
            <Text style={styles.descriptionText}>
              {'We`ve got it!\nWe will be in contact with you shortly'}
            </Text>
            <CustomButton
              type="NormalButton"
              text="Next Pet?"
              style={styles.nextPetButton}
              onPress={() => {
                const reset = StackActions.reset({
                  index: 0,
                  actions: [
                    NavigationActions.navigate({
                      routeName: 'DrawerNavigatorScreen',
                      params: {
                        page: 'PetsListScreen',
                      },
                    }),
                  ],
                });
                this.props.navigation.dispatch(reset);
              }}
            />
            <CustomButton
              type="NormalButton"
              text="Home"
              style={styles.nextButtton}
              onPress={() => {
                this.props.navigation.navigate('HomeScreen');
              }}
            />
          </MeasureBackground>
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
    marginTop: 10,
    width: '50%',
  },
  nextPetButton: {
    marginTop: 40,
    width: '50%',
  },
});

const mapStatesToProps = (state, props) => {
  return {...props, pet: state.pet, user: state.user};
};
export default connect(mapStatesToProps)(MeasureEndScreen);

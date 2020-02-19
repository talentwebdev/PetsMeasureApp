import React, {Component} from 'react';
import {MeasureBackground, MenuIcon, BottomTab} from './../../components';
import {
  View,
  Text,
  Image,
  StyleSheet,
  NativeModules,
  NativeEventEmitter,
} from 'react-native';
import Colors from './../../colors/colors';
import {StackActions, NavigationActions} from 'react-navigation';
import {MeasureSteps} from './../../common/Common';
import {updatePetData} from './action';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class MeasureStepsScreen extends Component {
  constructor(props) {
    super(props);
    const {navigation} = props;
    console.log(navigation.getParam('step'));
    this.state = {
      step: navigation.getParam('step'),
      data: MeasureSteps[parseInt(navigation.getParam('step'))],
    };
  }
  componentDidMount() {
    const eventEmitter = new NativeEventEmitter(NativeModules.ToastExample);
    this.subscription = eventEmitter.addListener('EndActivity', event => {
      const data = {};
      data[this.state.data.value] = event.distance;
      this.props.updatePetData(data);
      console.log('EndActivity', data);

      if (this.state.step + 1 >= MeasureSteps.length) {
        const resetAction = StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({
              routeName: 'DrawerNavigatorScreen',
              params: {
                page: 'MeasureEndScreen',
              },
            }),
          ],
        });
        this.props.navigation.dispatch(resetAction);
        return;
      }
      const resetAction = StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName: 'DrawerNavigatorScreen',
            params: {
              page: 'MeasureStepsScreen',
              step: this.state.step + 1,
            },
          }),
        ],
      });
      this.props.navigation.dispatch(resetAction);
    });
  }
  componentWillUnmount() {
    console.log('unmount');
    this.subscription.remove();
  }
  render() {
    return (
      <View style={styles.container}>
        <MenuIcon navigation={this.props.navigation} />
        <View style={styles.mainContainer}>
          <MeasureBackground>
            <View style={styles.content}>
              <Text style={styles.descriptionText}>{this.state.data.text}</Text>
              <Image
                resizeMode="contain"
                style={styles.image}
                source={require('./../../../assets/a.png')}
              />
            </View>
          </MeasureBackground>
        </View>
        <BottomTab
          navigation={this.props.navigation}
          plus={true}
          absolute={true}
          onPlusPress={() => {
            NativeModules.AndroidNativeModule.show();
          }}
        />
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
  descriptionText: {
    width: '90%',
    textAlign: 'center',
    color: Colors.White,
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: -50,
  },
  image: {
    width: '80%',
  },
  content: {
    width: '100%',
    alignItems: 'center',
    marginTop: 30,
  },
});
const mapStatesToProps = (state, props) => {
  return {
    ...props,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    updatePetData: bindActionCreators(updatePetData, dispatch),
  };
};
export default connect(
  mapStatesToProps,
  mapDispatchToProps,
)(MeasureStepsScreen);

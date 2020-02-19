import React, {Component} from 'react';
import {
  MenuIcon,
  NormalText,
  TextInputTitleText,
  CustomButton,
  TitleText,
  BottomTab,
  OpenDrawerComponent,
} from './../../components';
import {View, FlatList, StyleSheet} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import Spinner from 'react-native-loading-spinner-overlay';
import Colors from './../../colors/colors';
import {API_URL} from './../../common/Common';
import {connect} from 'react-redux';

class PetsListScreen extends OpenDrawerComponent {
  constructor(props) {
    super(props);
    this.state = {
      pets: [],
      loader: false,
    };
    this.renderItem = this.renderItem.bind(this);
    this.onClickPet = this.onClickPet.bind(this);
    const {navigation} = this.props;
    if (navigation.getParam('page') === 'PetsListScreen') {
      this.state = {
        pets: [],
        loader: true,
      };
      fetch(API_URL + '/pet/fetchall/', {
        method: 'POST',
        body: JSON.stringify({
          authorization: props.user.token,
        }),
      })
        .then(response => response.json())
        .then(responsejson => {
          this.setState({loader: false});
          console.log('fetchall success', responsejson);
          if (responsejson.status === true) {
            this.setState({pets: [...responsejson.data]});
            console.log('state', this.state);
          }
        })
        .catch(err => {
          console.log('fetchall failed', err);
          this.setState({loader: false});
        });
    }
  }
  componentDidMount() {}
  onClickPet(pet) {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: 'DrawerNavigatorScreen',
          params: {page: 'PetDetailScreen', data: pet},
        }),
      ],
    });
    this.props.navigation.dispatch(resetAction);
  }
  renderItem = item => {
    console.log('item', item);
    return (
      <View key={item.item.id} style={styles.listItemContainer}>
        <CustomButton
          onPress={() => {
            this.onClickPet(item.item);
          }}
          type="NormalButton"
          text={item.item.pet_name}
        />
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <Spinner visible={this.state.loader} color={Colors.Red} />
        <MenuIcon navigation={this.props.navigation} />
        <View style={styles.mainContainer}>
          <View style={styles.titleContainer}>
            <NormalText text="Lets Measure Your Pet for Travel" />
            <TitleText first="Welcome " second={this.props.user.full_name} />
          </View>
          <View style={styles.petsListContainer}>
            <TextInputTitleText text="Pets" />
            <FlatList renderItem={this.renderItem} data={this.state.pets} />
          </View>
          <CustomButton
            style={styles.addNewPetButton}
            text="Add New Pet"
            type="NormalButton"
            onPress={() => {
              const resetAction = StackActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({
                    routeName: 'DrawerNavigatorScreen',
                    params: {page: 'MeasureConfigScreen'},
                  }),
                ],
              });
              this.props.navigation.dispatch(resetAction);
            }}
          />
        </View>
        <BottomTab navigation={this.props.navigation} plus={true} />
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
    paddingBottom: 0,
  },
  titleContainer: {
    marginTop: 15,
    marginBottom: 15,
  },
  petsListContainer: {
    flex: 1,
  },
  listItemContainer: {
    width: '100%',
    marginTop: 5,
  },
  addNewPetButton: {},
});
const mapStatesToProps = (state, props) => {
  return {
    ...props,
    user: state.user,
  };
};
export default connect(mapStatesToProps)(PetsListScreen);

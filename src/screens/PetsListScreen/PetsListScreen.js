import React, {Component} from 'react';
import {
  MenuIcon,
  NormalText,
  TextInputTitleText,
  CustomButton,
  TitleText,
  BottomTab,
} from './../../components';
import {View, FlatList, StyleSheet} from 'react-native';

class PetsListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: [{title: 'Name', key: '123'}],
    };
    this.renderItem = this.renderItem.bind(this);
  }
  renderItem = item => {
    console.log('item', item);
    return (
      <View key={item.item.key} style={styles.listItemContainer}>
        <CustomButton type="NormalButton" text={item.item.title} />
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <MenuIcon />
        <View style={styles.mainContainer}>
          <View style={styles.titleContainer}>
            <NormalText text="Lets Measure Your Pet for Travel" />
            <TitleText first="Welcome " second="Jasmin R. Zirkle" />
          </View>
          <View style={styles.petsListContainer}>
            <TextInputTitleText text="Pets" />
            <FlatList renderItem={this.renderItem} data={this.state.pets} />
          </View>
          <CustomButton
            style={styles.addNewPetButton}
            text="Add New Pet"
            type="NormalButton"
          />
        </View>
        <BottomTab plus={true} />
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
export default PetsListScreen;

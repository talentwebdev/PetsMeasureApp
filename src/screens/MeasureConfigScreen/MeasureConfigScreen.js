import React, {Component} from 'react';
import {
  TitleText,
  NormalText,
  TextInputTitleText,
  Selectable,
  AgeSlider,
  CustomTextInput,
  CustomButton,
  BottomTab,
  MenuIcon,
} from './../../components';
import {View, Image, Text, ScrollView, StyleSheet} from 'react-native';

class MeasureConfigScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MenuIcon />
        <ScrollView style={styles.mainContainer}>
          <NormalText text="Lets Measure Your Pet for Travel" />
          <TitleText first="Welcome " second="Jasmin R. Zirkle" />
          <TextInputTitleText text="What is your Pets Name" />
          <CustomTextInput placeholder="Pet Name" />
          <TextInputTitleText text="Which Pet do you want to Measure" />
          <View style={styles.selectableContainer}>
            <Selectable style={styles.selectable}>
              <Image source={require('./../../../assets/dog_original.png')} />
              <Text>Dog</Text>
            </Selectable>
            <Selectable style={styles.selectable}>
              <Image source={require('./../../../assets/cat_original.png')} />
              <Text>Cats</Text>
            </Selectable>
            <Selectable style={styles.selectable}>
              <Image
                source={require('./../../../assets/parrot_original.png')}
              />
              <Text>Parrots</Text>
            </Selectable>
            <Selectable style={styles.selectable}>
              <Image
                source={require('./../../../assets/bunnies_original.png')}
              />
              <Text>Bunnies</Text>
            </Selectable>
          </View>
          <TextInputTitleText text="This Gender" />
          <View style={styles.selectableContainer}>
            <Selectable style={styles.selectable}>
              <Text>Male</Text>
            </Selectable>
            <Selectable style={styles.selectable}>
              <Text>Female</Text>
            </Selectable>
            <Selectable style={styles.selectable}>
              <Text>Both</Text>
            </Selectable>
          </View>
          <TextInputTitleText text="Are you the owner of the Pet?" />
          <View style={styles.selectableContainer}>
            <Selectable style={styles.selectable}>
              <Text>No</Text>
            </Selectable>
            <Selectable style={styles.selectable}>
              <Text>Yes</Text>
            </Selectable>
          </View>
          <TextInputTitleText text="The Size" />
          <View style={styles.selectableContainer}>
            <Selectable style={styles.selectable}>
              <Text>Small</Text>
            </Selectable>
            <Selectable style={styles.selectable}>
              <Text>Medium</Text>
            </Selectable>
            <Selectable style={styles.selectable}>
              <Text>Large</Text>
            </Selectable>
            <Selectable style={styles.selectable}>
              <Text>X Large</Text>
            </Selectable>
          </View>
          <TextInputTitleText text="Age" />
          <AgeSlider />
          <TextInputTitleText text="Can you provide us the breed of pet? (Leave blank if unknown)" />
          <CustomTextInput placeholder="Pet Breed" />
          <TextInputTitleText text="Share your Location with us" />
          <CustomTextInput placeholder="Your Location" />
          <CustomButton
            style={styles.startedButton}
            type="NormalButton"
            text="Get Started"
          />
        </ScrollView>
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
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  selectableContainer: {
    flexDirection: 'row',
  },
  selectable: {
    flex: 1,
    marginRight: 5,
    flexDirection: 'row',
  },
  startedButton: {
    marginTop: 10,
  },
});
export default MeasureConfigScreen;

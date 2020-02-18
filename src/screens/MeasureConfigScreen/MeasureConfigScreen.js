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
  OpenDrawerComponent,
} from './../../components';
import {
  View,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  NativeModules,
} from 'react-native';
import Colors from './../../colors/colors';
import {StackActions, NavigationActions} from 'react-navigation';
import {updatePetData} from './action';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class MeasureConfigScreen extends OpenDrawerComponent {
  constructor(props) {
    super(props);
    this.state = {
      pet_name: '',
      pet_type: '',
      pet_gender: '',
      pet_owner: '',
      pet_size: '',
      pet_age: '',
      pet_breed: '',
      location: '',
    };

    this.onGetStarted = this.onGetStarted.bind(this);
    this.onAgeChange = this.onAgeChange.bind(this);
  }
  onGetStarted() {
    if (
      this.state.pet_name === '' ||
      this.state.pet_type === '' ||
      this.state.pet_gender === '' ||
      this.state.pet_owner === '' ||
      this.state.pet_size === '' ||
      this.state.pet_age === '' ||
      this.state.pet_breed === '' ||
      this.state.location === ''
    ) {
      return;
    }
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: 'DrawerNavigatorScreen',
          params: {page: 'MeasureStartScreen'},
        }),
      ],
    });
    this.props.navigation.dispatch(resetAction);
    this.props.updatePetData({
      ...this.state,
    });
  }
  onAgeChange(pet_age) {
    this.setState({pet_age});
  }
  render() {
    return (
      <View style={styles.container}>
        <MenuIcon navigation={this.props.navigation} />
        <ScrollView style={styles.mainContainer}>
          <NormalText text="Lets Measure Your Pet for Travel" />
          <TitleText first="Welcome " second="Jasmin R. Zirkle" />
          <TextInputTitleText text="What is your Pets Name" />
          <CustomTextInput
            placeholder="Pet Name"
            value={this.state.pet_name}
            onChangeText={pet_name => {
              this.setState({pet_name});
            }}
          />
          <TextInputTitleText text="Which Pet do you want to Measure" />
          <View style={styles.selectableContainer}>
            <Selectable
              selected={this.state.pet_type === 'dog'}
              onPress={() => {
                this.setState({pet_type: 'dog'});
              }}
              style={styles.selectable}>
              {this.state.pet_type !== 'dog' && (
                <Image source={require('./../../../assets/dog_original.png')} />
              )}
              {this.state.pet_type !== 'dog' && <Text>Dog</Text>}
              {this.state.pet_type === 'dog' && (
                <Image source={require('./../../../assets/dog_selected.png')} />
              )}
              {this.state.pet_type === 'dog' && (
                <Text style={{color: Colors.White}}>Dog</Text>
              )}
            </Selectable>
            <Selectable
              selected={this.state.pet_type === 'cat'}
              onPress={() => {
                this.setState({pet_type: 'cat'});
              }}
              style={styles.selectable}>
              {this.state.pet_type !== 'cat' && (
                <Image source={require('./../../../assets/cat_original.png')} />
              )}
              {this.state.pet_type !== 'cat' && <Text>Cats</Text>}
              {this.state.pet_type === 'cat' && (
                <Image source={require('./../../../assets/cat_selected.png')} />
              )}
              {this.state.pet_type === 'cat' && (
                <Text style={{color: Colors.White}}>Cats</Text>
              )}
            </Selectable>
            <Selectable
              selected={this.state.pet_type === 'parrot'}
              onPress={() => {
                this.setState({pet_type: 'parrot'});
              }}
              style={styles.selectable}>
              {this.state.pet_type !== 'parrot' && (
                <Image
                  source={require('./../../../assets/parrot_original.png')}
                />
              )}
              {this.state.pet_type !== 'parrot' && <Text>Parrots</Text>}
              {this.state.pet_type === 'parrot' && (
                <Image
                  source={require('./../../../assets/parrot_selected.png')}
                />
              )}
              {this.state.pet_type === 'parrot' && (
                <Text style={{color: Colors.White}}>Parrots</Text>
              )}
            </Selectable>
            <Selectable
              selected={this.state.pet_type === 'bunnies'}
              onPress={() => {
                this.setState({pet_type: 'bunnies'});
              }}
              style={styles.selectable}>
              {this.state.pet_type !== 'bunnies' && (
                <Image
                  source={require('./../../../assets/bunnies_original.png')}
                />
              )}
              {this.state.pet_type !== 'bunnies' && <Text>Bunnies</Text>}
              {this.state.pet_type === 'bunnies' && (
                <Image
                  source={require('./../../../assets/bunnies_selected.png')}
                />
              )}
              {this.state.pet_type === 'bunnies' && (
                <Text style={{color: Colors.White}}>Bunnies</Text>
              )}
            </Selectable>
          </View>
          <TextInputTitleText text="This Gender" />
          <View style={styles.selectableContainer}>
            <Selectable
              selected={this.state.pet_gender === 'male'}
              onPress={() => {
                this.setState({pet_gender: 'male'});
              }}
              style={styles.selectable}>
              {this.state.pet_gender === 'male' && (
                <Text style={{color: Colors.White}}>Male</Text>
              )}
              {this.state.pet_gender !== 'male' && <Text>Male</Text>}
            </Selectable>
            <Selectable
              selected={this.state.pet_gender === 'female'}
              onPress={() => {
                this.setState({pet_gender: 'female'});
              }}
              style={styles.selectable}>
              {this.state.pet_gender === 'female' && (
                <Text style={{color: Colors.White}}>Female</Text>
              )}
              {this.state.pet_gender !== 'female' && <Text>Female</Text>}
            </Selectable>
            <Selectable
              selected={this.state.pet_gender === 'both'}
              onPress={() => {
                this.setState({pet_gender: 'both'});
              }}
              style={styles.selectable}>
              {this.state.pet_gender === 'both' && (
                <Text style={{color: Colors.White}}>Both</Text>
              )}
              {this.state.pet_gender !== 'both' && <Text>Both</Text>}
            </Selectable>
          </View>
          <TextInputTitleText text="Are you the owner of the Pet?" />
          <View style={styles.selectableContainer}>
            <Selectable
              selected={this.state.pet_owner === 'no'}
              onPress={() => {
                this.setState({pet_owner: 'no'});
              }}
              style={styles.selectable}>
              {this.state.pet_owner !== 'no' && <Text>No</Text>}
              {this.state.pet_owner === 'no' && (
                <Text style={{color: Colors.White}}>No</Text>
              )}
            </Selectable>
            <Selectable
              selected={this.state.pet_owner === 'yes'}
              onPress={() => {
                this.setState({pet_owner: 'yes'});
              }}
              style={styles.selectable}>
              {this.state.pet_owner !== 'yes' && <Text>Yes</Text>}
              {this.state.pet_owner === 'yes' && (
                <Text style={{color: Colors.White}}>Yes</Text>
              )}
            </Selectable>
          </View>
          <TextInputTitleText text="The Size" />
          <View style={styles.selectableContainer}>
            <Selectable
              selected={this.state.pet_size === 'small'}
              onPress={() => {
                this.setState({pet_size: 'small'});
              }}
              style={styles.selectable}>
              {this.state.pet_size !== 'small' && <Text>Small</Text>}
              {this.state.pet_size === 'small' && (
                <Text style={{color: Colors.White}}>Small</Text>
              )}
            </Selectable>
            <Selectable
              selected={this.state.pet_size === 'medium'}
              onPress={() => {
                this.setState({pet_size: 'medium'});
              }}
              style={styles.selectable}>
              {this.state.pet_size !== 'medium' && <Text>Medium</Text>}
              {this.state.pet_size === 'medium' && (
                <Text style={{color: Colors.White}}>Medium</Text>
              )}
            </Selectable>
            <Selectable
              selected={this.state.pet_size === 'large'}
              onPress={() => {
                this.setState({pet_size: 'large'});
              }}
              style={styles.selectable}>
              {this.state.pet_size !== 'large' && <Text>Large</Text>}
              {this.state.pet_size === 'large' && (
                <Text style={{color: Colors.White}}>Large</Text>
              )}
            </Selectable>
            <Selectable
              selected={this.state.pet_size === 'x_large'}
              onPress={() => {
                this.setState({pet_size: 'x_large'});
              }}
              style={styles.selectable}>
              {this.state.pet_size !== 'x_large' && <Text>X Large</Text>}
              {this.state.pet_size === 'x_large' && (
                <Text style={{color: Colors.White}}>X Large</Text>
              )}
            </Selectable>
          </View>
          <TextInputTitleText text="Age" />
          <AgeSlider onValueChange={this.onAgeChange} />
          <TextInputTitleText text="Can you provide us the breed of pet? (Leave blank if unknown)" />
          <CustomTextInput
            value={this.state.pet_breed}
            onChangeText={pet_breed => {
              this.setState({pet_breed});
            }}
            placeholder="Pet Breed"
          />
          <TextInputTitleText text="Share your Location with us" />
          <CustomTextInput
            value={this.state.location}
            onChangeText={location => {
              this.setState({location});
            }}
            placeholder="Your Location"
          />
          <CustomButton
            style={styles.startedButton}
            type="NormalButton"
            text="Get Started"
            onPress={this.onGetStarted}
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
)(MeasureConfigScreen);

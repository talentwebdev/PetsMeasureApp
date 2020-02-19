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
import {connect} from 'react-redux';

class PetDetailScreen extends OpenDrawerComponent {
  constructor(props) {
    super(props);
    const {navigation} = props;
    const data = navigation.getParam('data');
    this.state = {
      pet_name: data.pet_name,
      pet_type: data.pet_type,
      pet_gender: data.pet_gender,
      pet_owner: data.pet_owner,
      pet_size: data.pet_size,
      pet_age: data.pet_age,
      pet_breed: data.pet_breed,
      location: data.location,
      A_measure: data.A_measure,
      B_measure: data.B_measure,
      C_measure: data.C_measure,
      D_measure: data.D_measure,
    };

    this.onGetBack = this.onGetBack.bind(this);
    this.onAgeChange = this.onAgeChange.bind(this);
  }
  onGetBack() {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: 'DrawerNavigatorScreen',
          params: {page: 'PetsListScreen'},
        }),
      ],
    });
    this.props.navigation.dispatch(resetAction);
  }
  onAgeChange(pet_age) {
    //this.setState({pet_age});
  }
  render() {
    return (
      <View style={styles.container}>
        <MenuIcon navigation={this.props.navigation} />
        <ScrollView style={styles.mainContainer}>
          <NormalText text="Lets Measure Your Pet for Travel" />
          <TitleText first="Welcome " second={this.props.user.full_name} />
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
          <AgeSlider
            value={parseInt(this.state.pet_age)}
            onValueChange={this.onAgeChange}
          />
          <TextInputTitleText text="Pet Breed" />
          <CustomTextInput
            value={this.state.pet_breed}
            onChangeText={pet_breed => {
              this.setState({pet_breed});
            }}
            placeholder="Pet Breed"
          />
          <TextInputTitleText text="Location" />
          <CustomTextInput
            value={this.state.location}
            onChangeText={location => {
              this.setState({location});
            }}
            placeholder="Your Location"
          />
          <TextInputTitleText text="A Measure" />
          <CustomTextInput
            value={this.state.A_measure}
            onChangeText={A_measure => {
              this.setState({A_measure});
            }}
            placeholder="A Masure"
          />
          <TextInputTitleText text="B Measure" />
          <CustomTextInput
            value={this.state.B_measure}
            onChangeText={B_measure => {
              this.setState({B_measure});
            }}
            placeholder="B Masure"
          />
          <TextInputTitleText text="C Measure" />
          <CustomTextInput
            value={this.state.C_measure}
            onChangeText={C_measure => {
              this.setState({C_measure});
            }}
            placeholder="C Masure"
          />
          <TextInputTitleText text="D Measure" />
          <CustomTextInput
            value={this.state.D_measure}
            onChangeText={D_measure => {
              this.setState({D_measure});
            }}
            placeholder="D Masure"
          />
          <CustomButton
            style={styles.startedButton}
            type="NormalButton"
            text="Back"
            onPress={this.onGetBack}
          />
        </ScrollView>
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
    user: state.user,
  };
};
export default connect(mapStatesToProps)(PetDetailScreen);

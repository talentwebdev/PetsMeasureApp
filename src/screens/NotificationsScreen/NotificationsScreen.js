import React, {Component} from 'react';
import {MenuIcon, TitleText, BottomTab} from './../../components';
import {View, StyleSheet, ScrollView, FlatList} from 'react-native';
import {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import Colors from './../../colors/colors';
class NotificationsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{title: 'abcd', key: '123'}],
    };

    this.renderItem = this.renderItem.bind(this);
  }
  renderItem = _item => {
    return (
      <View key={_item.item.key} style={styles.listItemContainer}>
        <RadioButton labelHorizontal={true} key={_item.index}>
          <RadioButtonInput
            obj={{label: _item.item.title, value: _item.key}}
            index={_item.index}
            isSelected={true}
            borderWidth={1}
            buttonInnerColor={
              _item.item.read === true ? Colors.Red : 'rgba(0, 0, 0, 0)'
            }
            buttonOuterColor={Colors.Red}
            buttonSize={20}
            buttonOuterSize={20}
            onPress={() => {
              this.onSelect(_item.index);
            }}
            buttonStyle={{}}
            buttonWrapStyle={{marginLeft: 10}}
          />
          <RadioButtonLabel
            obj={{label: _item.item.title, value: _item.key}}
            index={_item.item.index}
            labelHorizontal={true}
            onPress={() => {
              this.onSelect(_item.index);
            }}
            labelStyle={{fontSize: 20, color: Colors.WhiteBlocak}}
            labelWrapStyle={{}}
          />
        </RadioButton>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <MenuIcon navigation={this.props.navigation} />
        <TitleText
          first="Your "
          second="Notifications"
          style={styles.titleText}
        />
        <View style={styles.listContainer}>
          <FlatList data={this.state.items} renderItem={this.renderItem} />
        </View>
        <BottomTab navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  titleText: {
    marginTop: 30,
  },
  listContainer: {
    marginTop: 30,
    flex: 1,
  },
  listItemContainer: {
    borderBottomColor: Colors.Red,
    borderBottomWidth: 3,
    padding: 5,
  },
});
export default NotificationsScreen;

import React, {Component} from 'react';
import {MenuIcon, TitleText, BottomTab} from './../../components';
import {View, StyleSheet, ScrollView, FlatList} from 'react-native';
import {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import Colors from './../../colors/colors';
import {API_URL, navigateDrawerScreen} from '../../common/Common';
import {connect} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';

class NotificationsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: true,
    };

    this.renderItem = this.renderItem.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(index) {
    const items = [...this.state.items];
    items[index].read = true;
    this.setState({items: items});

    navigateDrawerScreen('NotificationDetailScreen', this.props, {
      data: items[index],
    });
  }
  componentDidMount() {
    console.log('hello');
    fetch(API_URL + '/notification/fetch', {
      method: 'POST',
      body: JSON.stringify({
        authorization: this.props.user.token,
      }),
    })
      .then(response => response.json())
      .then(responsejson => {
        console.log('fetch notification success', responsejson);
        this.setState({loading: false});
        if (responsejson.status === true) {
          this.setState({items: responsejson.data});
        }
      })
      .catch(err => {
        this.setState({loading: false});
        console.log('fetch notification error', err);
      });
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
        <Spinner visible={this.state.loading} color={Colors.Red} />
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

const mapStatesToProps = (state, props) => {
  return {
    ...props,
    user: state.user,
  };
};
export default connect(mapStatesToProps)(NotificationsScreen);

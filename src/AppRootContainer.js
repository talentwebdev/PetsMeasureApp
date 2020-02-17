import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import MainNavigator from './navigator/MainNavigator';

class AppRootContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const MainAppContainer = createAppContainer(MainNavigator);
    return <MainAppContainer />;
  }
}

export default AppRootContainer;

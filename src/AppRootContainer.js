import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import MainNavigator from './navigator/MainNavigator';
import {setNavigation} from './navigator/NavigationService';

class AppRootContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const MainAppContainer = createAppContainer(MainNavigator);
    return (
      <MainAppContainer
        ref={navigation => {
          setNavigation(navigation);
        }}
      />
    );
  }
}

export default AppRootContainer;

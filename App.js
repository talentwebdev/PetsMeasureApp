import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './src/reducer/root_reducer';
import AppRootContainer from './src/AppRootContainer';

const store = createStore(reducer);

class App extends Component {
  ////////////////////// Add these methods //////////////////////

  //Remove listeners allocated in createNotificationListeners()

  render() {
    return (
      <Provider store={store}>
        <AppRootContainer />
      </Provider>
    );
  }
}
export default App;

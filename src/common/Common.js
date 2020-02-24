import {StackActions, NavigationActions} from 'react-navigation';
import {
  _storeEmail,
  _fetchEmail,
  _storePassword,
  _fetchPassword,
  _initStorage,
} from './Storage';

export const mode = 'TEST';
//const API_URL = 'http://192.168.1.19/petsmeasure';
const API_URL = 'https://animaltravel.co.za/petsmeasure';
const UPDATE_USERDATA = 'UPDATE_USERDATA';
const UPDATE_PET = 'UPDATE_PET';
const MeasureSteps = [
  {
    value: 'A_measure',
    text:
      'Time to make your first Measurement.\nMeasure from the back to point of the nose of the pet by clicking the "+" icon',
    imagePath: './../../../assets/a.png',
  },
  {
    value: 'B_measure',
    text:
      'The second Image - measure from the bottom\n Of the foot to the top of the leg by clicking "+" button',
    imagePath: './../../../assets/b.png',
  },
  {
    value: 'C_measure',
    text:
      'The third image - measure the width of\nYour pets body by clicking the "+" icon.',
    imagePath: './../../../assets/c.png',
  },
  {
    value: 'D_measure',
    text:
      'The final Image - Measure from the foot\nTo the top of the ears(Only if erect)',
    imagePath: './../../../assets/d.png',
  },
];

function navigateDrawerScreen(screen, props, params = {}) {
  const resetAction = StackActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({
        routeName: 'DrawerNavigatorScreen',
        params: {
          page: screen,
          ...params,
        },
      }),
    ],
  });
  props.navigation.dispatch(resetAction);
}
export {
  API_URL,
  UPDATE_USERDATA,
  UPDATE_PET,
  MeasureSteps,
  navigateDrawerScreen,
  // storage common functions
  _storeEmail,
  _fetchEmail,
  _storePassword,
  _fetchPassword,
  _initStorage,
};

import {combineReducers} from 'redux';
import user_reducer from './user_reducer';
import pet_reducer from './pet_reducer';

export default combineReducers({user: user_reducer, pet: pet_reducer});

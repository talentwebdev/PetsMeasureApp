import {UPDATE_PET} from './../common/Common';

const initState = {};

function user_reducer(state = initState, action) {
  switch (action.type) {
    case UPDATE_PET:
      state = {...state, ...action.payload};
      break;
    default:
      break;
  }
  return state;
}

export default user_reducer;

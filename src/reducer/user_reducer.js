import {UPDATE_USERDATA} from './../common/Common';

const initState = {};

function user_reducer(state = initState, action) {
  switch (action.type) {
    case UPDATE_USERDATA:
      state = {...state, ...action.payload};
      break;
    default:
      break;
  }
  return state;
}

export default user_reducer;

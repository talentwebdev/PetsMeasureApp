import Types from './../common/Common';

const initState = {};

function user_reducer(state = initState, action) {
  switch (action.type) {
    case Types.UPDATE_USERDATA:
      state = {...state, ...action.payload};
      break;
    default:
      break;
  }
  return state;
}

export default user_reducer;

import {UPDATE_USERDATA} from './../../common/Common';

function updateUserData(userdata) {
  console.log('updateUserData', userdata);
  return {
    type: UPDATE_USERDATA,
    payload: {
      ...userdata,
    },
  };
}

export {updateUserData};

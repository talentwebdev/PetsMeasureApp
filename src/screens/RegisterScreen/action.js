import {UPDATE_USERDATA} from './../../common/Common';

function updateUserData(userData) {
  return {
    type: UPDATE_USERDATA,
    payload: {
      ...userData,
    },
  };
}

export {updateUserData};

import {UPDATE_PET} from './../../common/Common';

function updatePetData(petData) {
  return {
    type: UPDATE_PET,
    payload: petData,
  };
}

export {updatePetData};

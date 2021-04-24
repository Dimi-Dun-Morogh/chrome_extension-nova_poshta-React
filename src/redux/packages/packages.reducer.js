import { PackagesActionTypes } from "./packages.types";

const INITIAL_STATE = {
  packageInfo: null,
  currentTrack: null,
  showDetailed: false,
};

const packagesReducer = (state = INITIAL_STATE, action)=> {
 switch (action.type) {
   case PackagesActionTypes.SET_PACKAGE_INFO:
     return {
       ...state,
       packageInfo: action.payload,
     }
   case PackagesActionTypes.SET_CURRENT_TRACK:
     return {
       ...state,
       currentTrack: action.payload,
     }
   case PackagesActionTypes.TOGGLE_DETAILED:
    return {
      ...state,
      showDetailed: action.payload
     }
    default:
    return state
 }
}

export default packagesReducer;
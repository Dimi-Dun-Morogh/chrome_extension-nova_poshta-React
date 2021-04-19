import { PackagesActionTypes } from "./packages.types";

const INITIAL_STATE = {
  packageInfo: null
};

const packagesReducer = (state = INITIAL_STATE, action)=> {
 switch (action.type) {
   case PackagesActionTypes.SET_PACKAGE_INFO:
     return {
       ...state,
       packageInfo: action.payload,
     }
    default:
    return state
 }
}

export default packagesReducer;
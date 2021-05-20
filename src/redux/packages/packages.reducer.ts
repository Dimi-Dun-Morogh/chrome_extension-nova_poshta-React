import { PackagesActionTypes, PackagesActionsTypes, IPackage } from './packages.types';

const INITIAL_STATE = {
  packageInfo: null as IPackage | null,
  currentTrack: '',
  showDetailed: false,
};

export type PackagesStateType = typeof INITIAL_STATE;

const packagesReducer = (state: PackagesStateType = INITIAL_STATE,
  action: PackagesActionsTypes):PackagesStateType => {
  switch (action.type) {
    case PackagesActionTypes.SET_PACKAGE_INFO:
      return {
        ...state,
        packageInfo: action.payload!,
      };
    case PackagesActionTypes.SET_CURRENT_TRACK:
      return {
        ...state,
        currentTrack: action.payload!,
      };
    case PackagesActionTypes.TOGGLE_DETAILED:
      return {
        ...state,
        showDetailed: action.payload!,
      };
    default:
      return state;
  }
};

export default packagesReducer;

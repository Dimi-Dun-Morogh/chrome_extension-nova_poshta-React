import { IPackage } from '../packages/packages.types';
import { HistoryActionTypes, ActionHistoryTypes } from './history.types';
import { updateHistoryPageTracks, updateHistoryTracks } from './history.utils';

const INITIAL_STATE = {
  oldPhoneNumb: '+380',
  historyTracks: [] as string[],
  savedLanguage: 'ua',
  historyPageTracks: [] as IPackage[],
};

export type InitialHistoryStateType = typeof INITIAL_STATE;

const historyReducer = (state:InitialHistoryStateType = INITIAL_STATE,
  action:ActionHistoryTypes): InitialHistoryStateType => {
  switch (action.type) {
    case HistoryActionTypes.SET_CURRENT_PHONE:
      return {
        ...state,
        oldPhoneNumb: action.payload!,
      };
    case HistoryActionTypes.SET_HISTORY_TRACKS:
      return {
        ...state,
        historyTracks: updateHistoryTracks(state.historyTracks, action.payload!),
      };
    case HistoryActionTypes.SET_LANGUAGE_HISTORY:
      return {
        ...state,
        savedLanguage: action.payload!,
      };
    case HistoryActionTypes.SET_HISTORY_PAGE_TRACKS:
      return {
        ...state,
        historyPageTracks: updateHistoryPageTracks(state.historyPageTracks, action.payload!),
      };
    default:
      return state;
  }
};

export default historyReducer;

import { HistoryActionTypes } from './history.types';
import { updateHistoryPageTracks, updateHistoryTracks } from './history.utils';

const INITIAL_STATE = {
  oldPhoneNumb: '+380',
  historyTracks: [],
  savedLanguage: 'ua',
  historyPageTracks: []
};

const historyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HistoryActionTypes.SET_CURRENT_PHONE:
      return {
        ...state,
        oldPhoneNumb: action.payload,
      };
    case HistoryActionTypes.SET_HISTORY_TRACKS:
      return {
        ...state,
        historyTracks: updateHistoryTracks(state.historyTracks, action.payload),
      };
      case HistoryActionTypes.SET_LANGUAGE_HISTORY:
      return {
        ...state,
        savedLanguage: action.payload
      };
      case HistoryActionTypes.SET_HISTORY_PAGE_TRACKS:
      return {
        ...state,
        historyPageTracks: updateHistoryPageTracks(state.historyPageTracks, action.payload)
      };
    default:
      return state;
  }
};

export default historyReducer;

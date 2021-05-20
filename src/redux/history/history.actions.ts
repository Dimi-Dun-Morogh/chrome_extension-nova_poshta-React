import { IPackage } from '../packages/packages.types';
import { HistoryActionTypes } from './history.types';

export const setPhoneHistory = (phone:string) => ({
  type: HistoryActionTypes.SET_CURRENT_PHONE,
  payload: phone,
});

export const setHistoryTracks = (newTrack:string) => ({
  type: HistoryActionTypes.SET_HISTORY_TRACKS,
  payload: newTrack,
});

export const setLanguageHistory = (lang:string) => ({
  type: HistoryActionTypes.SET_LANGUAGE_HISTORY,
  payload: lang,
});

export const addToHistoryPage = (newPackage: IPackage) => ({
  type: HistoryActionTypes.SET_HISTORY_PAGE_TRACKS,
  payload: newPackage,
});

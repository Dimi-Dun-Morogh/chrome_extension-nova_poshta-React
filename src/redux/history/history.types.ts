import { IAction } from '../action_interface';
import { IPackage } from '../packages/packages.types';

export enum HistoryActionTypes {
  SET_CURRENT_PHONE = 'SET_CURRENT_PHONE',
  SET_HISTORY_TRACKS = 'SET_HISTORY_TRACKS',
  SET_LANGUAGE_HISTORY = 'SET_LANGUAGE_HISTORY',
  SET_HISTORY_PAGE_TRACKS = 'SET_HISTORY_PAGE_TRACKS',
}

type SetPhoneHistoryType = IAction<HistoryActionTypes.SET_CURRENT_PHONE, string>;

type SetHistoryTracksType = IAction<HistoryActionTypes.SET_HISTORY_TRACKS, string>;

type SetLanguageHistoryType = IAction<HistoryActionTypes.SET_LANGUAGE_HISTORY, string>;

type SetHistoryPageTracksType = IAction<HistoryActionTypes.SET_HISTORY_PAGE_TRACKS, IPackage>;

export type ActionHistoryTypes =
  | SetPhoneHistoryType
  | SetLanguageHistoryType
  | SetHistoryPageTracksType
  | SetHistoryTracksType;

import { HistoryActionTypes } from "./history.types";

export const setPhoneHistory = (phone) => ({
  type: HistoryActionTypes.SET_CURRENT_PHONE,
  payload: phone,
});

export const setHistoryTracks = (newTrack) => ({
  type: HistoryActionTypes.SET_HISTORY_TRACKS,
  payload: newTrack
})
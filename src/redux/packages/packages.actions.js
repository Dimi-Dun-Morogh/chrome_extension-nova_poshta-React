import { setHistoryTracks, setPhoneHistory } from '../history/history.actions';
import { errorToast } from '../notifications_store/notifications.actions';
import { PackagesActionTypes } from './packages.types';

const toggleShowDetailed = (bool) => ({
  type: PackagesActionTypes.TOGGLE_DETAILED,
  payload: bool,
});

const setCurrentTrack = (trackNum) => ({
  type: PackagesActionTypes.SET_CURRENT_TRACK,
  payload: trackNum,
});

const fetchPackageInfoSuccess = (packageInfo) => ({
  type: PackagesActionTypes.SET_PACKAGE_INFO,
  payload: packageInfo,
});

export const fetchPackageInfo = (id, Phone) => async (dispatch) => {
  try {
    dispatch(toggleShowDetailed(false));
    const response = await fetch('https://api.novaposhta.ua/v2.0/json/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        modelName: 'TrackingDocument',
        calledMethod: 'getStatusDocuments',
        methodProperties: {
          Documents: [
            {
              MarketplacePartnerToken: '005056887b8d-a9f2-11e6-735b-be254fe6',
              DocumentNumber: id,
              Phone,
            },
          ],
        },
        language: 'ru',
      }),
    });
    const data = await response.json();

    dispatch(fetchPackageInfoSuccess(data.data[0]));
    dispatch(setCurrentTrack(id));
    dispatch(setHistoryTracks(id));
    if (Phone) {
      if (!data.warnings[0]) {
        dispatch(setPhoneHistory(Phone));
        dispatch(toggleShowDetailed(true));
      } else {
        dispatch(errorToast('error_phone'));
      }
    }
  } catch (error) {
    console.error(error);
  }
};

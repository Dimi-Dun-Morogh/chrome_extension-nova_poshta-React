import { PackagesActionTypes } from "./packages.types";

const toggleShowDetailed = (bool)=>({
  type: PackagesActionTypes.TOGGLE_DETAILED,
  payload: bool
})

const setCurrentTrack = (trackNum)=>({
  type: PackagesActionTypes.SET_CURRENT_TRACK,
  payload: trackNum
})

const fetchPackageInfoSuccess = (packageInfo) => ({
    type: PackagesActionTypes.SET_PACKAGE_INFO,
    payload: packageInfo
  });

export const fetchPackageInfo = (id, Phone) => async dispatch => {
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
         Documents: [{
           MarketplacePartnerToken: '005056887b8d-a9f2-11e6-735b-be254fe6',
           DocumentNumber: id,
           Phone,
         }],
       },
       language: 'ru',
     }),
   });
   const data = await response.json();
   // if Phone && PhoneError
   dispatch(fetchPackageInfoSuccess(data.data[0]));
   dispatch(setCurrentTrack(id))
   if(Phone && !data.warnings[0]) {
    dispatch(toggleShowDetailed(true))
   }
   } catch (error) {
     console.error(error)
   }
}
import { PackagesActionTypes } from "./packages.types";


const fetchPackageInfoSuccess = (packageInfo) => ({
    type: PackagesActionTypes.SET_PACKAGE_INFO,
    payload: packageInfo
  });

export const fetchPackageInfo = (id, Phone) => async dispatch => {
  try {
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
   dispatch(fetchPackageInfoSuccess(data.data[0]))
   } catch (error) {
     console.error(error)
   }
}
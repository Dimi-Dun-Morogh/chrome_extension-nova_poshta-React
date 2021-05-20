import { NotificationsTypes } from './notifications.types';

export const errorToast = (errorMsg:string) => ({
  type: NotificationsTypes.SET_NEW_NOTIFICATION,
  payload: {
    text: errorMsg,
    header: 'error',
    classBg: 'bg-danger',
  },
});

export const hideErrorToast = () => ({
  type: NotificationsTypes.DELETE_NOTIFICATION,
});

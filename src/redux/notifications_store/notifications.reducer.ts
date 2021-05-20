import { NotificationsTypes, NotificationActionTypes, NotificationType } from './notifications.types';

const INITIAL_STATE = {
  showNotification: false,
  currentNotification: { text: '', header: '', classBg: '' },
  oldNotifications: [] as NotificationType[],
};

export type NotificationsStateType = typeof INITIAL_STATE;

const notificationsReducer = (state: NotificationsStateType = INITIAL_STATE,
  action: NotificationActionTypes) : NotificationsStateType => {
  switch (action.type) {
    case NotificationsTypes.SET_NEW_NOTIFICATION:
      return {
        ...state,
        currentNotification: action.payload!,
        oldNotifications: [...state.oldNotifications!, action.payload!],
        showNotification: true,
      };
    case NotificationsTypes.DELETE_NOTIFICATION:
      return {
        ...state,
        showNotification: false,
        currentNotification: { text: '', header: '', classBg: '' },
      };
    default:
      return state;
  }
};

export default notificationsReducer;

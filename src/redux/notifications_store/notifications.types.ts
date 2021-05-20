import { IAction } from '../action_interface';

export enum NotificationsTypes {
  SET_NEW_NOTIFICATION = 'SET_NEW_NOTIFICATION',
  DELETE_NOTIFICATION = 'DELETE_NOTIFICATION',
  // HIDE_NOTIFICATION: 'HIDE_NOTIFICATION'
}

export type NotificationType = {
  text: string,
  header: string,
  classBg: string
};

type SetNewNotificationType = IAction<NotificationsTypes.SET_NEW_NOTIFICATION, NotificationType>;

type DeleteNotification = IAction<NotificationsTypes.DELETE_NOTIFICATION, null>;

export type NotificationActionTypes =
  | SetNewNotificationType
  | DeleteNotification;

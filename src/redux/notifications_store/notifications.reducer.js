import { NotificationsTypes } from "./notifications.types"


const INITIAL_STATE = {
  showNotification: false,
  currentNotification: {text:'', header:'', classBg:''},
  oldNotifications: []
}

const notificationsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NotificationsTypes.SET_NEW_NOTIFICATION:
      return {
        ...state,
        currentNotification: action.payload,
        oldNotifications: [...state.oldNotifications, action.payload],
        showNotification: true
      }
      case NotificationsTypes.DELETE_NOTIFICATION:
        return {
          ...state,
          showNotification: false,
          currentNotification: {text:'', header:'', classBg:''},
        }
    default:
      return state
  }
}

export default notificationsReducer;
import React from 'react';
import { Toast } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { NotificationType } from '../../redux/notifications_store/notifications.types';
import './notifications.styles.css';

type NotificationPropTypes = {
  showToast: boolean,
  hideToast: ()=>void,
  notification: NotificationType
};

const Notification = ({ showToast, hideToast, notification } : NotificationPropTypes) => {
  const { text, header, classBg } = notification;
  const { t } = useTranslation();
  return (
    <>
      <Toast
        show={showToast}
        onClose={hideToast}
        animation={false}
        className={`${classBg} text-white`}
        delay={5000}
        autohide
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">{header}</strong>
        </Toast.Header>
        <Toast.Body>{t(text)}</Toast.Body>
      </Toast>
    </>
  );
};

export default Notification;

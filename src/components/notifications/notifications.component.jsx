import React from 'react';
import { Toast } from 'react-bootstrap';

import './notifications.styles.css';

const Notification = ({ showToast, hideToast, notification }) => {
  const { text, header, classBg } = notification;
  return (
    <>
      <Toast
        show={showToast}
        onClose={hideToast}
        animation={false}
        className={`${classBg} text-white`}
        delay={5000} autohide
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">{header}</strong>
          {/* <small>11 mins ago</small> */}
        </Toast.Header>
        <Toast.Body>{text}</Toast.Body>
      </Toast>
    </>
  );
};

export default Notification;

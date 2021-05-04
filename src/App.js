import './App.css';
import React from 'react'
import {useSelector, useDispatch} from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/header.component';
import Form from './components/form/form.component';
import PackageInfo from './components/package_info/package_info.component';
import Notification from './components/notifications/notifications.component';
import { hideErrorToast } from './redux/notifications_store/notifications.actions';


function App() {
  const currentNotification = useSelector((state)=>state.notifications.currentNotification)
  const showNotification = useSelector((state)=>state.notifications.showNotification)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Notification showToast={showNotification}
       notification={currentNotification}
       hideToast={()=>dispatch(hideErrorToast())}/>
      <Header />
      <Form />
      <PackageInfo />
    </div>
  );
}

export default App;

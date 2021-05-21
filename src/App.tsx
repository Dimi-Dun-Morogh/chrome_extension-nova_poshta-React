import './App.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, useHistory } from 'react-router-dom';
import Header from './components/header/header.component';
import Notification from './components/notifications/notifications.component';
import { hideErrorToast } from './redux/notifications_store/notifications.actions';
import HomePage from './pages/home-page/home-page';
import HistoryPage from './pages/history-page/history-page';
import { RootStateType } from './redux/root-reducer';

function App() {
  const currentNotification = useSelector(
    (state: RootStateType) => state.notifications.currentNotification,
  );
  const showNotification = useSelector(
    (state: RootStateType) => state.notifications.showNotification,
  );
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    history.push('/');
  }, []);

  return (
    <div className="App">
      <Notification
        showToast={showNotification}
        notification={currentNotification}
        hideToast={() => dispatch(hideErrorToast())}
      />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/history" component={HistoryPage} />
      </Switch>
    </div>
  );
}

export default App;

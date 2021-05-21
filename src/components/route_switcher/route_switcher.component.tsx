import React, { useEffect, useReducer } from 'react';
import { useSelector } from 'react-redux';

import { Nav } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { ImHome3, ImClock } from 'react-icons/im';
import './route_switcher.styles.css';
import { RootStateType } from '../../redux/root-reducer';

const RouteSwitcher = () => {
  const history = useHistory();
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const currentTrack = useSelector((state: RootStateType) => state.packages.currentTrack);

  useEffect(() => {}, [currentTrack]); // ререндер на переход из history-page

  const goHome = () => {
    history.push('/');
    forceUpdate();
  };

  const goHistory = () => {
    forceUpdate();
    history.push('/history');
  };

  return (
    <>
      <Nav variant="pills" className="route-switcher">
        <Nav.Item>
          <Nav.Link href="#" onSelect={goHome} active={window.location.pathname !== '/history'}>
            <ImHome3 style={{ display: 'block' }} />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" onSelect={goHistory} active={window.location.pathname === '/history'}>
            <ImClock style={{ display: 'block' }} />
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default RouteSwitcher;

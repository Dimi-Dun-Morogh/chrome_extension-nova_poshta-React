import React from 'react';
import './footer_with_history.styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { fetchPackageInfo } from '../../redux/packages/packages.actions';

const FooterWithHistory = () => {
  const { t } = useTranslation();
  const oldTracks = useSelector((state) => state.history.historyTracks);
  const dispatch = useDispatch();

  const handleClick = (num) => {
    dispatch(fetchPackageInfo(num));
  };

  if (!oldTracks.length) return null;

  return (
    <div className="footer-wrap">
      <span>{t('previous_tracks')}</span>
      <ul>
        {oldTracks.map((item) => (
          <li onClick={() => handleClick(item)} key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterWithHistory;

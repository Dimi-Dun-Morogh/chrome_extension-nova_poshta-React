import React from 'react';
import './header.styles.css';
import { useTranslation } from 'react-i18next';
import LanguageSelect from '../language_selector/language_selector.component';
import RouteSwitcher from '../route_switcher/route_switcher.component';

const Header = () => {
  const { t } = useTranslation();
  return (
    <div className="header-wrap">
      <RouteSwitcher />
      <h3>
        {t('title')} <b>Nova Poshta</b>
      </h3>
      <LanguageSelect />
    </div>
  );
};

export default Header;

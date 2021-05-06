import React from 'react';
import './header.styles.css';
import { useTranslation } from 'react-i18next';
import LanguageSelect from '../language_selector/language_selector.component';

const Header = () => {
  const { t } = useTranslation();
  return (
    <div className="header-wrap">
      <h3>
        {t('title')} <b>Nova Poshta</b>
      </h3>
      <LanguageSelect />
    </div>
  );
};

export default Header;

import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Form } from 'react-bootstrap';
import { setLanguageHistory } from '../../redux/history/history.actions';
import './language_selector.styles.css';

const LanguageSelect = () => {
  const savedLang = useSelector((state) => state.history.savedLanguage);
  const dispatch = useDispatch();
  const handleLanguage = (lang) => {
    dispatch(setLanguageHistory(lang));
  };

  const {  i18n } = useTranslation();

  useEffect(()=>{
    i18n.changeLanguage(savedLang);
  },[savedLang])

  return (
    <Form className="select_language">
      <Form.Group controlId="exampleForm.SelectCustom">
        <Form.Control
          as="select"
          custom
          size="sm"
          onChange={(e) => handleLanguage(e.target.value)}
          defaultValue={savedLang}
        >
          <option value="ru">RU</option>
          <option value="ua">UA</option>
          <option value="en">EN</option>
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

export default LanguageSelect;

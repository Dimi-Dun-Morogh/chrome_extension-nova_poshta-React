import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, InputGroup, FormControl, Form } from 'react-bootstrap';
import { useTranslation  } from 'react-i18next';
import { ImPhone } from 'react-icons/im';
import Validator from '../../helpers/validator';
import { fetchPackageInfo } from '../../redux/packages/packages.actions';
import './phone_form.styles.css';

const PhoneForm = ({oldPhone}) => {
  const [phoneNum, setPhoneNum] = useState(oldPhone);
  const { t } = useTranslation();
  const currentTrack = useSelector((state) => state.packages.currentTrack);
  const [validationState, setValidationState] = useState({
    errors: {
      phoneNumb: [],
    },
    isValid: false,
    success: {
      phoneNumb: false,
    },
  });

  const handleInputValidation = ({ name, value }) => {
    const num = value[0] === '+' ? value.slice(1) : value;
    const isValid = Validator(name, num.trim());
    const { errors, success } = validationState;
    success[name] = !isValid.length;
    errors[name] = isValid;
    setValidationState({ ...validationState, errors, success });
  };

  const dispatch = useDispatch();

  const handleSubmit = () => {
    handleInputValidation({ name: 'phoneNumb', value: phoneNum });
    const { phoneNumb } = validationState.errors;
    if (!phoneNumb.length) {
      setValidationState({ ...validationState, isValid: true });
      dispatch(fetchPackageInfo(currentTrack, phoneNum));
    }
  };

  const handleInput = (e) => {
    setPhoneNum(e.target.value);
    const { errors } = validationState;
    errors.phoneNumb = [];
    setValidationState({ ...validationState, errors });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="phone-form-wrap">
      <InputGroup className="mb-1 phone-form" size="sm">
        <FormControl
          value={phoneNum}
          placeholder={t('placeholders.phone_form')}
          onChange={(e) => handleInput(e)}
          onKeyUp={handleKeyPress}
          isInvalid={validationState.errors.phoneNumb.length}
        />
        <InputGroup.Prepend>
          <Button variant="danger" className="form-button" onClick={handleSubmit}>
            {' '}
            <ImPhone style={{ display: 'block' }} />
          </Button>
        </InputGroup.Prepend>
        {validationState.errors.phoneNumb.length
          ? validationState.errors.phoneNumb.map(({ error }) => (
              <Form.Control.Feedback type="invalid" key={error}>
                {t(error)}
              </Form.Control.Feedback>
            ))
          : null}
      </InputGroup>
      <span>{t('phone_form_description')}</span>
    </div>
  );
};

export default PhoneForm;

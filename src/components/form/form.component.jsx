import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, InputGroup, FormControl, Form } from 'react-bootstrap';
import { ImSearch } from 'react-icons/im';
import Validator from '../../helpers/validator';

import { fetchPackageInfo } from '../../redux/packages/packages.actions';
import './form.styles.css';

const FormMain = () => {
  const [trackNumber, setTrackNumber] = useState('');
  const [validationState, setValidationState] = useState({
    errors: {
      trackNumb: [],
    },
    isValid: false,
    success: {
      trackNumb: false,
    },
  });

  const dispatch = useDispatch();

  const handleInputeValidation = ({ name, value }) => {
    const isValid = Validator(name, value.trim());
    const { errors, success } = validationState;
    success[name] = !isValid.length;
    errors[name] = isValid;
    setValidationState({ ...validationState, errors, success });
  };

  const handleSubmit = () => {
    handleInputeValidation({ name: 'trackNumb', value: trackNumber });
    const { trackNumb } = validationState.errors;
    if (!trackNumb.length) {
      setValidationState({ ...validationState, isValid: true });
      dispatch(fetchPackageInfo(trackNumber));
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleInput = (e) => {
    setTrackNumber(e.target.value);
    const { errors } = validationState;
    errors.trackNumb = [];
    setValidationState({ ...validationState, errors });
  };

  return (
    <div className="form-wrap">
      <Form.Group>
        <InputGroup className="mb-3" size="sm">
          <FormControl
            placeholder="введите номер ттн"
            onChange={(e) => handleInput(e)}
            onKeyUp={handleKeyPress}
            name="trackNumb"
            isInvalid={validationState.errors.trackNumb.length}
          />
          <InputGroup.Prepend>
            <Button variant="danger" className="form-button" onClick={handleSubmit}>
              {' '}
              <ImSearch style={{ display: 'block' }} />
            </Button>
          </InputGroup.Prepend>
          {validationState.errors.trackNumb.length
            ? validationState.errors.trackNumb.map(({ error }) => (
                <Form.Control.Feedback type="invalid" key={error}>
                  {error}
                </Form.Control.Feedback>
              ))
            : null}
        </InputGroup>
      </Form.Group>
    </div>
  );
};

export default FormMain;

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button, InputGroup, FormControl, Form,
} from 'react-bootstrap';
import { ImSearch } from 'react-icons/im';
import { useTranslation } from 'react-i18next';
import Validator, { ValidationStateType } from '../../helpers/validator';
import { fetchPackageInfo } from '../../redux/packages/packages.actions';
import './form.styles.css';
import { RootStateType } from '../../redux/root-reducer';

export type InputNameVal = {
  name:string,
  value:string,
};

const FormMain = () => {
  const currentTrack = useSelector((state: RootStateType) => state.packages.currentTrack);
  const { t } = useTranslation();

  const [trackNumber, setTrackNumber] = useState(currentTrack);
  const [validationState, setValidationState] = useState({
    errors: {
      trackNumb: [],
    },
    isValid: false,
    success: {
      trackNumb: false,
    },
  } as ValidationStateType);

  const dispatch = useDispatch();

  const handleInputeValidation = ({ name, value } : InputNameVal) => {
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

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };
  const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    setTrackNumber(e.target.value);
    const { errors } = validationState;
    //! e.target.name
    errors.trackNumb = [];
    setValidationState({ ...validationState, errors });
  };

  useEffect(() => {
    setTrackNumber(currentTrack);
  }, [currentTrack]);

  return (
    <div className="form-wrap">
      <Form.Group>
        <InputGroup className="mb-3" size="sm">
          <FormControl
            placeholder={t('placeholders.main_form')}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInput(e)}
            onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => handleKeyPress(e)}
            name="trackNumb"
            isInvalid={Boolean(validationState.errors.trackNumb.length)}
            value={trackNumber}
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
                  {t(error)}
                </Form.Control.Feedback>
            ))
            : null}
        </InputGroup>
      </Form.Group>
    </div>
  );
};

export default FormMain;

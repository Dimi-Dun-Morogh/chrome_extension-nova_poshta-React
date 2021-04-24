import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { ImPhone } from 'react-icons/im';
import { fetchPackageInfo } from '../../redux/packages/packages.actions';
import './phone_form.styles.css';

const PhoneForm = () => {
  const [phoneNum, setPhoneNum] = useState(null);
  const currentTrack = useSelector((state) => state.packages.currentTrack);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    console.log(phoneNum);
    dispatch(fetchPackageInfo(currentTrack, phoneNum))
  };

  return (
    <div className="phone-form-wrap">
      <InputGroup className="mb-1 phone-form" size="sm">
        <FormControl
          placeholder="номер телефона +380..."
          onChange={(e) => setPhoneNum(e.target.value)}
        />
        <InputGroup.Prepend>
          <Button variant="danger" className="form-button" onClick={handleSubmit}>
            {' '}
            <ImPhone style={{ display: 'block' }} />
          </Button>
        </InputGroup.Prepend>
      </InputGroup>
      <span>укажите телефон получателя или отправителя для доп. информации</span>
    </div>
  );
};

export default PhoneForm;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { fetchPackageInfo } from '../../redux/packages/packages.actions';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { ImSearch } from 'react-icons/im';
import './form.styles.css';

const Form = () => {
  const [trackNumber, setTrackNumber] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    //! сделать проверку на длину
    console.log(trackNumber);
    dispatch(fetchPackageInfo(trackNumber))
  };

  return (
    <div className='form-wrap'>
      <InputGroup className='mb-3' size='sm'>
        <FormControl
          placeholder='введите номер ттн'
          onChange={(e) => setTrackNumber(e.target.value)}
        />
        <InputGroup.Prepend>
          <Button variant='danger' className='test' onClick={handleSubmit}>
            {' '}
            <ImSearch style={{ display: 'block' }} />
          </Button>
        </InputGroup.Prepend>
      </InputGroup>
    </div>
  );
};

export default Form;

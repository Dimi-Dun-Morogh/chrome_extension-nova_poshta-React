import React, { useState } from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { ImSearch } from 'react-icons/im';
import './form.styles.css';

const Form = () => {
  const [trackNumber, setTrackNumber] = useState('');
  return (
    <div className='form-wrap'>
      <InputGroup className='mb-3' size='sm'>
        <FormControl
          placeholder='введите номер ттн'
          onChange={(e) => {setTrackNumber(e.target.value)
          console.log(trackNumber)}}
        />
        <InputGroup.Prepend>
          <Button variant='danger'>
            {' '}
            <ImSearch style={{ display: 'block' }} />
          </Button>
        </InputGroup.Prepend>
      </InputGroup>
    </div>
  );
};

export default Form;

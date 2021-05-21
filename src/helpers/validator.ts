const numbers = /^[0-9]+$/;

export type IValidationError = {
  label: string,
  error: string,
};

export type ValidationStateType = {
  errors: {
    [key:string]: IValidationError[]
  },
  isValid: boolean,
  success: {
    [key:string]: boolean
  }
};

export default function Validate(label:string, value:string) {
  const errors: IValidationError[] = [];
  switch (label) {
    case 'trackNumb': {
      if (!value) errors.push({ label, error: 'errors.trackNumb_required' });
      if (value.length < 14 || value.length > 14) { errors.push({ label, error: 'errors.trackNumb_length' }); }
      if (!value.match(numbers)) errors.push({ label, error: 'errors.only_numbers_allowed' });
      return errors;
    }
    case 'phoneNumb': {
      if (!value) errors.push({ label, error: 'errors.phoneNumb_required' });
      if (value.length < 12 || value.length > 12) { errors.push({ label, error: 'errors.phoneNumb_length' }); }
      if (!value.match(numbers)) errors.push({ label, error: 'errors.only_numbers_allowed' });
      return errors;
    }
    default: {
      return errors;
    }
  }
}

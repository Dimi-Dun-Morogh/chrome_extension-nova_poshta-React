const numbers = /^[0-9]+$/;

export default function Validate(label, value) {
  const errors = [];
  switch (label) {
    case 'trackNumb': {
      if (!value) errors.push({ label, error: 'number is required' });
      if (value.length < 14 || value.length > 14)
        errors.push({ label, error: 'Should contain 14 characters, no more no less' });
      if (!value.match(numbers)) errors.push({ label, error: 'Only numbers allowed' });
      return errors;
    }
    case 'phoneNumb': {
      console.log(value)
      if (!value) errors.push({ label, error: 'number is required' });
      if (value.length < 12 || value.length > 12)
        errors.push({ label, error: 'Should contain 12 characters, no more no less' });
      if (!value.match(numbers)) errors.push({ label, error: 'Only numbers allowed' });
      return errors;
    }
    default: {
      return errors;
    }
  }
}
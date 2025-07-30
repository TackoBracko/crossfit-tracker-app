import classes from './Input.module.css';

import { forwardRef } from 'react';

const InputField = forwardRef(function InputRef({ name, label, placeholder, type, onBlur, onChange, value, error, disable, variation }, ref) {
  let variationStylaInput = '';

  if (variation === 'inputForModal') {
    variationStylaInput = classes.inputForModal;
  }

  return (
    <div>
      {label && <label htmlFor="input"> {label}</label>}
      {error && <p className={classes.errorText}>{error}</p>}
      <input
        ref={ref}
        type={type}
        name={name}
        label={label}
        placeholder={placeholder}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        disabled={disable}
        className={`${classes.inputBase} ${variationStylaInput}`}
      />
    </div>
  );
});

export default InputField;

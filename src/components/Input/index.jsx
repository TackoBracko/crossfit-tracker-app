import classes from './Input.module.css';

import { forwardRef } from 'react';

const InputField = forwardRef(function InputRef({ name, placeholder, type, onBlur, onChange, value, disable }, ref) {
  return (
    <input
      ref={ref}
      type={type}
      name={name}
      placeholder={placeholder}
      onBlur={onBlur}
      onChange={onChange}
      value={value}
      disabled={disable}
      className={classes.inputBase}
    />
  );
});

export default InputField;

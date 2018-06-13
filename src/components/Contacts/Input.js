import React from 'react';

const Input = ( {className, name, type, onChangeField, onBlurField } ) => {
  return (
    <input
      className={className}
      name={name}
      autoComplete={name}
      type={type}
      placeholder="Your text here"
      onChange={onChangeField}
      onBlur={onBlurField}
    />
  )
}

export default Input;

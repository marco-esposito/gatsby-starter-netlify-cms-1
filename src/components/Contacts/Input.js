import React, { Fragment } from 'react';

const Input = ( {className, name, type, onChangeField, onBlurField, isHiddenClass, isDangerClass } ) => {
  return (
    <Fragment>
      <input
        className={className}
        name={name}
        autoComplete={name}
        type={type}
        placeholder="Your text here"
        onChange={onChangeField}
        onBlur={onBlurField}
      />
      {name === 'email'
      ?
      <p className={`help ${isHiddenClass.email} ${isDangerClass.email}`}>The email format is not correct</p>
      :
      <p className={`help ${isDangerClass[name]} ${isHiddenClass[name]}`}>This is a compulsory field</p>}
    </Fragment>
  )
}

export default Input;

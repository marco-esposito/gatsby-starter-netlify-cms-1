import React, { Fragment } from 'react';

const TextArea = ( { className, name, onChangeField, onBlurField, isHiddenClass, isDangerClass } ) => (
  <Fragment>
    <textarea
      className={className}
      name={name}
      placeholder="Your text here"
      rows="10"
      onChange={onChangeField}
      onBlur={onBlurField}
    />
    <p className={`help ${isDangerClass[name]} ${isHiddenClass[name]}`}>This is a compulsory field</p>
  </Fragment>
)
//
export default TextArea;

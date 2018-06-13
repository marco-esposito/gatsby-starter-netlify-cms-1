import React from 'react';

const TextArea = ( { className, name, onChangeField, onBlurField } ) => (
  <textarea
    className={className}
    name={name}
    placeholder="Your text here"
    rows="10"
    onChange={onChangeField}
    onBlur={onBlurField}
  />
)

export default TextArea;

import React from 'react';

import './Input.scss';
import concatClsx from '../../helpers/classname.helper';

const Input = ({ className, value, onChange, type, placeholder }) => {
  return (
    <div className={concatClsx('custom-input w-100', className)}>
      <input value={value} onChange={onChange} type={type} placeholder={placeholder}></input>
    </div>
  );
};

export default Input;
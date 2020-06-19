import React from 'react';
import concatClsx from '../../../helpers/classname.helper';
import './Checkbox.scss';

const Checkbox = ({ title, value, onChange, className }) => {
  return (
    <div className={concatClsx('custom-checkbox', className)} >
      <input className="custom-checkbox__input" type="checkbox" checked={value} onChange={onChange}></input>
      <span className="custom-checkbox__label">{title}</span>
    </div>
  );
};

export default Checkbox;

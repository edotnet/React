import React from 'react';
import concatClsx from '../../helpers/classname.helper';
import Icon from '../icon/Icon';
import './Button.scss';

const Button = ({ title, onClick, color, className, icon }) => {
  if (color) {
    color = `btn-${color}`
  }

  return (
    <button className={concatClsx('btn', color, className)} onClick={onClick}>
      {icon && <Icon className="pr-sm btn-icon" name={icon}></Icon>}
      <span>{title}</span>
    </button>
  );
};

export default Button;
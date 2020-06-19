import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import './Link.scss';
import concatClsx from '../../helpers/classname.helper';

const Link = ({ to, children, className }) => {
  return (
    <RouterLink className={concatClsx('custom-link', className)} to={to}>{children}</RouterLink>
  );
};

export default Link;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import concatClsx from '../../helpers/classname.helper';

const Icon = ({ name, className }) => {
  return (
    <FontAwesomeIcon className={concatClsx(className)} icon={name} />
  );
};

export default Icon;

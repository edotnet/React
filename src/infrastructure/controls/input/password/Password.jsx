import React, { useState } from 'react';
import Input from '../Input';

import './Password.scss';

const Password = ({ className, value, onChange, placeholder }) => {
  const [isShowEnabled, toggleShow] = useState(false);
  
  return (
    <div className="password">
      <Input className={className} value={value} onChange={onChange} placeholder={placeholder} type={isShowEnabled ? 'text' : 'password'}></Input>
      <button className="show-password" onClick={() => toggleShow(!isShowEnabled)}>
        Show
      </button>
    </div>
  );
};

export default Password;

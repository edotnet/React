import React from 'react';
import './Divider.scss';

const Divider = ({ title }) => {
  return (
    <div className="custom-divider">
      {/* <hr /> */}
      <span>{title}</span>
      {/* <hr /> */}
    </div>
  );
};

export default Divider;

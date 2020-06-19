import React from 'react';

import './Card.scss';

const Card = ({ children, title, footer }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-content__header">
          {title}
        </div>

        <div className="card-content__body">
          {children}
        </div>

        <div className="card-content__footer">
          {footer}
        </div>
      </div>
    </div>
  );
};

export default Card;

import React from 'react';

const Button = ({ content, className, style }) => {
  return (
    <div className={`btn ${className}`} style={style}>
      {content}
    </div>
  )
}

export default Button;

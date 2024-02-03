import React from 'react';

interface PropTypes {
    buttonTitle: string;
    handleClick: () => void;
    className?: string;
}

const Button = ({ buttonTitle, handleClick, className }: PropTypes) => {
  return (
    <button 
        className={className}
        onClick={handleClick}
      >
        {buttonTitle}
    </button>
  )
}

export default Button

import React from 'react';

interface PropTypes {
    buttonTitle: string;
    bgColor: string;
    handleClick: () => void;
}

const Button = ({ buttonTitle, bgColor, handleClick }: PropTypes) => {
  return (
    <button
        onClick={handleClick}
        style={{ backgroundColor: bgColor}}
      >
        {buttonTitle}
    </button>
  )
}

export default Button

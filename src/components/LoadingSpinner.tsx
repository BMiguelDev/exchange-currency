import React from 'react';
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface PropTypes {
    className?: string;
}

const LoadingSpinner = ({ className }: PropTypes) => {
  return (
    <FontAwesomeIcon className={className} icon={faSpinner} spin aria-label="loading_icon"/>
  )
}

export default LoadingSpinner
import React from 'react';
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoadingSpinner = () => {
  return (
    <FontAwesomeIcon icon={faSpinner} spin aria-label="loading_icon"/>
  )
}

export default LoadingSpinner

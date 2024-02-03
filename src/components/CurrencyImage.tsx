import React, { useState } from "react";

interface PropTypes {
    imageTitle: string;
}

const ERROR_IMAGE_TITLE = "question-circle";

// Component that loads the image of a currency from the local source if present, otherwise loads generic error image
// It would be better to load currency images from an API to reduce static resources on the app, but no such API was found
const CurrencyImage = ({ imageTitle }: PropTypes) => {
    const [imgSrc, setImageSrc] = useState<string>(imageTitle);
    const [isImageError, setIsImageError] = useState<boolean>(false);

    // Try to require currency logo from the "src/assets/images"; if it doens't exist, require static error logo and flip error flag (to stop looping)
    const attemptRequire = (imgSrc: string) => {
        try {
            return require(`../assets/images/${imgSrc}.png`);
        } catch (err) {
            if (!isImageError) {
                setImageSrc(ERROR_IMAGE_TITLE);
                setIsImageError(true);
            }
        }
    };

    return (
        <img
            src={attemptRequire(imgSrc)}
            aria-label="currency_image"
            alt={isImageError ? "Not Available" : "Currency"}
            style={{ width: "26px", height: "26px" }}
        />
    );
};

export default CurrencyImage;

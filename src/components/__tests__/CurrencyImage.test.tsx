import * as React from "react";
import { cleanup, render, screen } from "@testing-library/react";

import CurrencyImage from "../CurrencyImage";

afterEach(() => {
    cleanup();
});


test("If project source contains an image corresponding to the supplied <imageTitle>, display that image", () => {
    const imageTitle = "USD";   // Image title corresponding to an image that exists in the project's local source
    render(<CurrencyImage imageTitle={imageTitle} />);

    const imageElement = screen.getByLabelText("currency_image");
 
    expect(imageElement).toHaveProperty("alt", "Currency"); // When an image is successfully loaded, it should have the "alt" value equal to "Currency"
});
 
test("If project source doesn't contain an image corresponding to the supplied <imageTitle>, display a static error image", () => {
    const imageTitle = "DUMMYCURRENCY";   // Image title corresponding to an image that doesn't exist in the project's local source
    render(<CurrencyImage imageTitle={imageTitle} />);

    const imageElement = screen.getByLabelText("currency_image");

    expect(imageElement).toHaveProperty("alt", "Not Available"); // When an image doesn't load successfully, a static error image is loaded which should have the "alt" value equal to "Not Available"
});

import * as React from "react";
import { cleanup, render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import CurrencyConverter from '../CurrencyConverter';

beforeEach(() => {
    window.localStorage.clear();
});

afterEach(() => {
    cleanup();
});

// Future improvements - useful tests using a mock server:
// - "The select input should have as many options as the currencies retrieved from the API"
// - "The list should show as many rows as the number of exchanged currency pairs retrieved from the API"
// - "When changing the input value, new values and rates should be shown in the exchanged currency list (integration test)"
// - "When there's an input value and the selected currency is changed, new values and rates should be shown in the exchanged currency list (integration test)"

test("Page should show a text input and a select input", async () => {
    render(<CurrencyConverter />);

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();

    const loadingElement = screen.getByLabelText("loading_icon");
    await waitForElementToBeRemoved(loadingElement);

    const selectElement = await screen.findByRole('combobox');
    expect(selectElement).toBeInTheDocument();
});

test("On first component mount, input value should be empty", async () => {
    render(<CurrencyConverter />);
 
    const inputElement = screen.getByRole('textbox');
    
    expect(inputElement).toHaveValue("");
});

test('On first component mount, the selected currency value should be "USD"', async () => {
    render(<CurrencyConverter />);

    const loadingElement = screen.getByLabelText("loading_icon");
    await waitForElementToBeRemoved(loadingElement);

    const selectElement = await screen.findByText('USD');
    expect(selectElement).toBeVisible();
});

test('User should be able to input a value and see it change on screen', async () => {
    render(<CurrencyConverter />);

    const inputElement = screen.getByRole('textbox');

    userEvent.type(inputElement, "12345");

    expect(inputElement).toHaveValue("12345");
});

test('Text input should only allow digit characters and "." in a coherent way', async () => {
    render(<CurrencyConverter />);

    const inputElement = screen.getByRole('textbox');

    userEvent.type(inputElement, "12ab34cd..12ab");

    expect(inputElement).toHaveValue("1234.12");
});

// Previous unit test for regular select element (not working with custom "react-select" component)
// test('User should be able to select a currency and see it selected on screen', async () => {
//     render(<CurrencyConverter />);

//     const loadingElement = screen.getByLabelText("loading_icon");
//     await waitForElementToBeRemoved(loadingElement);

//     const selectElement = await screen.findByRole('combobox');
//     const optionElements = await screen.findAllByRole('option');

//     expect(optionElements[1]).toHaveValue("EUR");

//     userEvent.selectOptions(selectElement, optionElements[1]);

//     expect(selectElement).toHaveValue("EUR");
// });

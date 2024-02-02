import * as React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import CurrencyConverter from '../CurrencyConverter/CurrencyConverter';

beforeEach(() => {
    window.localStorage.clear();
});

afterEach(() => {
    cleanup();
});

test("Page should show a text input and a select input", async () => {
    render(<CurrencyConverter />);

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();

    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();
});

test("On first component mount, input value should be empty", async () => {
    render(<CurrencyConverter />);
 
    const inputElement = screen.getByRole('textbox');
    
    expect(inputElement).toHaveValue("");
});

test('On first component mount, the selected currency value should be "USD"', async () => {
    render(<CurrencyConverter />);

    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toHaveValue("USD");
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

test('User should be able to select a currency and see it selected on screen', async () => {
    render(<CurrencyConverter />);

    const selectElement = screen.getByRole('combobox');
    const optionElements = screen.getAllByRole('option');

    expect(optionElements[1]).toHaveValue("EUR");

    userEvent.selectOptions(selectElement, optionElements[1]);

    expect(selectElement).toHaveValue("EUR");
});

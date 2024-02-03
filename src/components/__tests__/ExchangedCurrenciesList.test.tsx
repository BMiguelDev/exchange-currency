import * as React from "react";
import { cleanup, render, screen } from "@testing-library/react";

import ExchangedCurrenciesList from "../ExchangedCurrenciesList";
import { CurrencyRatePair } from "../../models/model";

afterEach(() => {
    cleanup();
});

const testExhangeRatesList: CurrencyRatePair[] = [
    {
        currencyFrom: "USD",
        currencyTo: "EUR",
        rate: "0.922117",
    },
    {
        currencyFrom: "USD",
        currencyTo: "GBP",
        rate: "0.789475",
    },
    {
        currencyFrom: "USD",
        currencyTo: "CNY",
        rate: "7.18664",
    },
    {
        currencyFrom: "USD",
        currencyTo: "JPY",
        rate: "146.216",
    },
];

test("When no exchange rates have been supplied, the list should be empty (only displaying an informative paragraph)", () => {
    render(<ExchangedCurrenciesList exchangeRatesList={[]} inputValue="123" />);

    const listElement = screen.queryByRole('list');  // Using the <queryBy> method because we're expecting this component to not be present in the document
    expect(listElement).not.toBeInTheDocument();

    const paragraphElement = screen.getByText(/Enter an amount to check the rates/i);
    expect(paragraphElement).toBeInTheDocument();
});

test("When no input value has been typed, the list should be empty (only displaying an informative paragraph)", () => {
    render(<ExchangedCurrenciesList exchangeRatesList={testExhangeRatesList} inputValue="" />);

    const listElement = screen.queryByRole('list');
    expect(listElement).not.toBeInTheDocument();

    const paragraphElement = screen.getByText(/Enter an amount to check the rates/i);
    expect(paragraphElement).toBeInTheDocument();
});

test("When there's an input value and exchange rates, the list should show as many rows as the number of currency exchange rates", () => {
    render(<ExchangedCurrenciesList exchangeRatesList={testExhangeRatesList} inputValue="123" />);

    const paragraphElement = screen.queryByText(/Enter an amount to check the rates/i);
    expect(paragraphElement).not.toBeInTheDocument();

    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();

    const listRows = screen.getAllByRole('listitem');
    expect(listRows.length).toEqual(4);
});

test("Each list row should contain a total value, a rate, and a currency identifier", () => {
    render(<ExchangedCurrenciesList exchangeRatesList={testExhangeRatesList} inputValue="123" />);

    const valueElements = screen.getAllByLabelText("currency_value");
    const rateElements = screen.getAllByLabelText("currency_rate");
    const currencyIdentifierElements = screen.getAllByLabelText("currency_info");

    expect(valueElements.length).toEqual(testExhangeRatesList.length);
    expect(rateElements.length).toEqual(testExhangeRatesList.length);
    expect(currencyIdentifierElements.length).toEqual(testExhangeRatesList.length);
});

test("Value shown for each row should have only 8 characters", () => {
    render(<ExchangedCurrenciesList exchangeRatesList={testExhangeRatesList} inputValue="123" />);

    const valueElements = screen.getAllByLabelText("currency_value");
    valueElements.forEach(value => expect(value.textContent?.length).toBeLessThanOrEqual(8));
});

test('Rate shown for each row should have only 8 characters', () => {
    render(<ExchangedCurrenciesList exchangeRatesList={testExhangeRatesList} inputValue="123" />);

    const rateElements = screen.getAllByLabelText("currency_rate_number");
    rateElements.forEach(rate => expect(rate.textContent?.length).toBeLessThanOrEqual(8))
});

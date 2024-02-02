import React from "react";

import { CurrencyRatePair } from "../../models/model";

interface PropTypes {
    exchangeRatesList: CurrencyRatePair[];
    inputValue: string;
    className?: string;
}

const ExchangedCurrenciesList = ({ exchangeRatesList, inputValue, className }: PropTypes) => {

    // Function to compute value result, differentiating between numbers with and without exponential notation 
    const parseValueResult = (exchangeRate: string) => {
        const grossResult = Number((Number(exchangeRate) * Number(inputValue)));
        if(grossResult.toString().indexOf("e") !== -1) return grossResult.toPrecision(3);
        else return Number(grossResult.toString().slice(0, 8));
    }

    return (
        <section className={className}>
            {
                // If any exchange rates have been fetched, show them, otherwise show nothing
                (exchangeRatesList.length > 0 && inputValue !== "") ? (
                    <ul className="exchanged_currencies_list">
                        {exchangeRatesList.map((exchangeRate: CurrencyRatePair) => (
                            <li key={exchangeRate.currencyTo} className="exchanged_currency_item">
                                <span className="exchanged_currency_value" aria-label="currency_value">
                                    {parseValueResult(exchangeRate.rate)}
                                </span>
                                <div className="exchanged_currency_rate" aria-label="currency_rate">
                                    <b>Rate: </b> <span aria-label="currency_rate_number">{Number(exchangeRate.rate.slice(0, 8))}</span>
                                </div>
                                <figure className="exchanged_currency_info" aria-label="currency_info">
                                    {/* Get img element here */}
                                    <figcaption>{exchangeRate.currencyTo}</figcaption>
                                </figure>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Enter an amount to check the rates</p>
                )
            }
        </section>
    );
};

export default ExchangedCurrenciesList;

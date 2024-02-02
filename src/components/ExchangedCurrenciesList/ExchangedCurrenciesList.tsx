import React from "react";
import { CurrencyRatePair } from "../../models/model";

interface PropTypes {
    exchangeRatesList: CurrencyRatePair[];
    inputValue: string;
}

const ExchangedCurrenciesList = ({ exchangeRatesList, inputValue }: PropTypes) => {
    return (
        <section>
            Exchanged Currencies List
            {exchangeRatesList.map((dataItem) => (
                <div key={dataItem.currencyTo}>
                    <p>{dataItem.currencyFrom}</p>
                    <p>{dataItem.currencyTo}</p>
                    <p>{dataItem.rate}</p>
                </div>
            ))}
        </section>
    );
};

export default ExchangedCurrenciesList;

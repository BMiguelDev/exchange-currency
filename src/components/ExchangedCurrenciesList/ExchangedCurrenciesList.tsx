import React from "react";
import { CurrencyRatePair } from "../../models/model";

interface PropTypes {
    data: CurrencyRatePair[];
}

const ExchangedCurrenciesList = ({ data }: PropTypes) => {
    return (
        <section>
            Exchanged Currencies List
            {data.map((dataItem) => (
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

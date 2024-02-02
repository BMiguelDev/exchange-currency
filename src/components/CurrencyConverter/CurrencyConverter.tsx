import React, { useEffect, useState } from "react";
import SDK from "@uphold/uphold-sdk-javascript";

import { APICurrencyRatePair } from "../../models/model";

// Initialize Uphold's SDK
const sdk = new SDK({
    baseUrl: "http://api-sandbox.uphold.com",
    clientId: "foo",
    clientSecret: "bar",
});

const CurrencyConverter = () => {
    const [inputValue, setInputValue] = useState<string>("");
    const [data, setData] = useState<APICurrencyRatePair[]>([]);

    useEffect(() => {
        const getCurrencyList = async () => {
            try {
                const data: APICurrencyRatePair[] = await sdk.getTicker();
                setData(data);
            } catch (err) {
                console.log("Error retrieving currencies from Uphold API");
                console.error(err);
                alert("Server unreachable, try again later"); // If initial API call is unsuccessful, it most likely means the user has no internet connection or the server is unreachable
            }
        };

        getCurrencyList();
    }, []);

    // Function to only allow changing the input using digits or "."
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const validInputRegex = /^\d*\.?\d*$/; // Regex that represents numbers with possible decimal digits as well
        if (event.target.value.match(validInputRegex)) setInputValue(event.target.value);
    };

    return (
        <main className="main_container">
            <h2>Currency Converter</h2>
            <p>Receive competitive and transparent pricing with no hidden spreads. See how we compare.</p>
            <div className="inputs_container">
                <input type="text" value={inputValue} onChange={handleInputChange} maxLength={24} placeholder="0.00" />
                <div>Select</div>
            </div>
            <section>
                Exchanged Currencies List
                {
                    data.map(dataItem=> (
                        <div key={dataItem.pair}>
                            <p>{dataItem.currency}</p>
                            <p>{dataItem.pair}</p>
                            <p>{dataItem.bid}</p>
                        </div>
                    ))
                }
            </section>
        </main>
    );
};

export default CurrencyConverter;

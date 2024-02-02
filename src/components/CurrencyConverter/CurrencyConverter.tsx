import React, { useEffect } from "react";
import SDK from "@uphold/uphold-sdk-javascript";

// Initialize Uphold's SDK
const sdk = new SDK({
    baseUrl: "http://api-sandbox.uphold.com",
    clientId: "foo",
    clientSecret: "bar",
});

const CurrencyConverter = () => {
    // Set state and functions here that will be shared/needed by the children components

    useEffect(() => {
        sdk.getTicker().then((data: any) => {
            console.log(data);
        });
    }, []);

    return (
        <main className="main_container">
            <h2>Currency Converter</h2>
            <p>Receive competitive and transparent pricing with no hidden spreads. See how we compare.</p>
            <div className="inputs_container">
                <div>Input</div>
                <div>Select</div>
            </div>
            <section>Exchanged Currencies List</section>
        </main>
    );
};

export default CurrencyConverter;

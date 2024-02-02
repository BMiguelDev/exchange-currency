import React from "react";


const CurrencyConverter = () => {

    // Set state and functions here that will be shared/needed by the children components

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

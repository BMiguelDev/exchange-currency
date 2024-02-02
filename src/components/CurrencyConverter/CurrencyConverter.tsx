import React, { useEffect, useState } from "react";
import SDK from "@uphold/uphold-sdk-javascript";

import { APICurrencyRatePair, CurrencyRatePair } from "../../models/model";
import useLocalStorage from "../../hooks/useLocalStorage";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import ExchangedCurrenciesList from "../ExchangedCurrenciesList/ExchangedCurrenciesList";

const LOCAL_STORAGE_INPUT_VALUE_KEY = "ExchangeCurreny.inputValue";
const LOCAL_STORAGE_CURRENCY_KEY = "ExchangeCurreny.currency";
const LOCAL_STORAGE_CURRENCY_LIST_KEY = "ExchangeCurreny.currencyList";
const LOCAL_STORAGE_EXCHANGE_RATES_LIST_KEY = "ExchangeCurreny.exchangeRatesList";
const DEBOUNCE_TIME = 500;
const COMMON_CURRENCIES = ["USD", "EUR", "BAT", "BTC", "BCH", "CNY", "ETH", "GBP"];

// Initialize Uphold's SDK
const sdk = new SDK({
    baseUrl: "http://api-sandbox.uphold.com",
    clientId: "foo",
    clientSecret: "bar",
});

const CurrencyConverter = () => {
    // Create a state variable that is stored (and always updated) in localStorage and is initialized with the cached value if it exists
    const [inputValue, setInputValue] = useLocalStorage<string>(LOCAL_STORAGE_INPUT_VALUE_KEY, "");

    const [currency, setCurrency] = useLocalStorage<string>(LOCAL_STORAGE_CURRENCY_KEY, COMMON_CURRENCIES[0]); // Initialize <currency> array with "USD" currency (to follow the mock-up given)

    // Initialize <currencyList> array with common currencies (so that they appear on top, to follow the mock-up given)
    const [currencyList, setCurrencyList] = useLocalStorage<string[]>(
        LOCAL_STORAGE_CURRENCY_LIST_KEY,
        COMMON_CURRENCIES
    );

    // Loading flag for the retrieval of the currency list
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // Loading flag for the retrieval of the exchange rates list
    const [isLoadingList, setIsLoadingList] = useState<boolean>(false);

    // const [data, setData] = useLocalStorage<APICurrencyRatePair[]>(LOCAL_STORAGE_EXCHANGE_RATES_LIST_KEY, []);
    const [exchangeRatesList, setExchangeRatesList] = useLocalStorage<CurrencyRatePair[]>(LOCAL_STORAGE_EXCHANGE_RATES_LIST_KEY, []);

    // As soon as component mounts, dynamically get all possible currencies from Uphold's API
    useEffect(() => {
        const getCurrencyList = async () => {
            try {
                const data: APICurrencyRatePair[] = await sdk.getTicker();
                data.forEach((currencyPair: APICurrencyRatePair) => {
                    setCurrencyList((prevCurrencyList) => {
                        // Add all distinct currencies to <currencyList>
                        if (!prevCurrencyList.includes(currencyPair.currency))
                            return [...prevCurrencyList, currencyPair.currency];
                        else return prevCurrencyList;
                    });
                });
            } catch (err) {
                console.log("Error retrieving currencies from Uphold API");
                console.error(err);
                alert("Server unreachable, try again later"); // If initial API call is unsuccessful, it most likely means the user has no internet connection or the server is unreachable
            } finally {
                setIsLoading(false);
            }
        };

        getCurrencyList();
    }, []);

    // Whenever <currency> changes, get exchange rate values from Uphold's API using a debounce mechanism (only triggers .5 second later)
    useEffect(() => {
        if (inputValue === "") return;

        const getData = setTimeout(async () => {
            setIsLoadingList(true);
            try {
                const data: APICurrencyRatePair[] = await sdk.getTicker(currency);
                setExchangeRatesList(
                    data
                        .filter((APIExchangeRate: APICurrencyRatePair) => APIExchangeRate.currency !== currency) // Remove all pair duplicates; only the ones with the correct "ask" rate remain
                        .map((APIExchangeRate: APICurrencyRatePair) => ({
                            currencyFrom: currency,
                            currencyTo: APIExchangeRate.currency,
                            rate: APIExchangeRate.ask, // The <ask> property is the "price" of the <currencyFrom> currency when paying in <currencyTo> currency, so that is what's shown as the exchange rate
                        }))
                        .sort((a, b) => reOrderExchangeCurrencies(a, b)) // Sort the obtained array so that the common currencies appear at the top (to follow the mock-up given)
                );
            } catch (err) {
                console.log("Error retrieving currencies from Uphold API");
                console.error(err);
                alert("Server unreachable, try again later");
            } finally {
                setIsLoadingList(false);
            }
        }, DEBOUNCE_TIME);

        // When this "useEffect" call finishes, clear the timeout so that the API request is cancelled
        return () => clearTimeout(getData);
    }, [inputValue, currency]);

    // Sort an array of type <CurrencyRatePair> to make common currencies appear at the top, and the remaining ones appear alphabetically
    const reOrderExchangeCurrencies = (a: CurrencyRatePair, b: CurrencyRatePair) => {
        if (COMMON_CURRENCIES.includes(a.currencyTo)) return -1;
        else return a.currencyTo < b.currencyTo ? -1 : a.currencyTo > b.currencyTo ? 1 : 0;
    };

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
                <div className="select_container">
                    {isLoading ? (
                        <LoadingSpinner />
                    ) : (
                        <select onChange={(event) => setCurrency(event.target.value)} name="currency" value={currency}>
                            {
                                // Display all possible currencies (obtained from initial API request) as selectable options
                                currencyList.map((currency) => (
                                    <option key={currency} value={currency}>
                                        {currency}
                                    </option>
                                ))
                            }
                        </select>
                    )}
                </div>
            </div>

            {isLoadingList ? <LoadingSpinner /> : <ExchangedCurrenciesList exchangeRatesList={exchangeRatesList} inputValue={inputValue} />}
        </main>
    );
};

export default CurrencyConverter;

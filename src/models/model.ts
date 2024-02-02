// Typing definition for each currency exchange rate retrieved from Uphold's API call
export interface APICurrencyRatePair {
    ask: string;
    bid: string;
    currency: string;
    pair: string;
}

// Typing definition for each currency exchange rate (after parsing data returning from API call)
export interface CurrencyRatePair {
    currencyFrom: string;
    currencyTo: string;
    rate: string;
}

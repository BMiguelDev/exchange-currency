// Typing definition for each currency exchange rate retrieved from Uphold's API call
export interface APICurrencyRatePair {
    ask: string;
    bid: string;
    currency: string;
    pair: string;
}

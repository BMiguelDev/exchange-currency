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

// Type definition for the theme used in styled components
export interface ThemeType {
    appBgColor: string;
    appPrimaryColor: string;
    appSecondaryColor: string;
    appSecondaryColorVariant1: string;
    appSecondaryColorVariant2: string;
    appSecondaryColorVariant3: string;
    appSecondaryColorVariant4: string;
    appSecondaryColorVariant5: string;
}

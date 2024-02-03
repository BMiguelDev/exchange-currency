import styled from "styled-components";

import ExchangedCurrenciesList from "../ExchangedCurrenciesList";

export const StyledExchangedCurrenciesList = styled(ExchangedCurrenciesList)`
    // Exchanged Currencies container
    overflow: auto;
    width: 100%;

    .exchanged_currencies_list {
        list-style: none;
        margin: 0;
        padding: 0.5rem 1rem 0.5rem 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .exchanged_currency_item {
            display: flex;
            align-items: center;
            justify-content: center;

            .exchanged_currency_value {
                flex: 1;
                /* width: 33%; */
            }

            .exchanged_currency_rate {
                flex: 1;
                display: flex;
                gap: 0.25rem;
                justify-content: center;
                text-align: center;
            }

            .exchanged_currency_info {
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                margin: 0;
            }
        }
    }
`;

import styled from "styled-components";

import ExchangedCurrenciesList from "../ExchangedCurrenciesList";

export const StyledExchangedCurrenciesList = styled(ExchangedCurrenciesList)`
    // Exchanged Currencies container
    overflow: auto;
    width: 100%;
    margin-bottom: 1rem;

    .exchanged_currencies_list {
        list-style: none;
        margin: 0;
        padding: 0.65rem 1rem 0.5rem 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .exchanged_currency_item {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: .6rem 0;

            .exchanged_currency_value {
                flex: 1;
                /* width: 33%; */
                font-size: .9rem;
            }

            .exchanged_currency_rate {
                flex: 1;
                display: flex;
                gap: 0.25rem;
                justify-content: center;
                text-align: center;
                font-size: .9rem;

                span {
                    font-weight: bold;
                }
            }

            .exchanged_currency_info {
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                margin: 0;
                gap: .2rem;
                font-size: .75rem;
                padding-right: .75rem;
                color: ${(props) => props.theme.appSecondaryColorVariant1};
                font-weight: bold;

                // On mobile devices align currency info with selected option, by adding padding to account for the lack of a scrollbar
                @media (any-pointer: coarse) {
                    padding-right: 1.65rem;
                }
            }
        }
    }

    &>p {
        font-size: .7rem;
        color: ${(props) => props.theme.appSecondaryColorVariant2};
        margin: 1rem 0;
        text-align: center;
    }
`;

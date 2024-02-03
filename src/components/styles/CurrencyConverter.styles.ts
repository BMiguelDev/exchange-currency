import styled from "styled-components";

import CurrencyConverter from "../CurrencyConverter";

export const StyledCurrencyConverter = styled(CurrencyConverter)`
    // Currency Converter main content
    height: 55%;
    margin: 1% 25%;
    /* padding: 1rem; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    h2 {
        margin: 0;
        padding-bottom: 1rem;
        font-weight: bold;
        font-size: 1.75rem;
        color: ${(props) => props.theme.appSecondaryColorVariant1};
    }

    &>p {
        margin: 0;
        padding-bottom: 1.75rem;
        font-size: .9rem;
        text-align: center;
        line-height: 1.15rem;
        color: ${(props) => props.theme.appSecondaryColorVariant2};
    }

    .inputs_container {
        width: 100%;
        position: relative;

        input {
            font-family: "Lato", sans-serif;
            width: 100%;
            // height: 100%;
            padding: .4rem .75rem;
            font-size: 1.6rem;
            background-color: ${(props) => props.theme.appSecondaryColorVariant5};
            color: ${(props) => props.theme.appSecondaryColorVariant1};;
            border: none;
            border-radius: .25rem;
            letter-spacing: .035rem;
            z-index: 1;
            transition: all .1s ease-in-out;

            &:focus {
                outline: none;
                box-shadow: 0 0 .5rem .075rem ${(props) => props.theme.appSecondaryColorVariant3};
            }
        }

        .select_container {
            position: absolute;
            top: 10%;
            right: 0%;
            /* width: 20%; */
            width: 105px;
            height: 80%;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: inset 0 0 0rem 1rem ${(props) => props.theme.appSecondaryColorVariant5};

            & > div {
                height: 90%;
                padding-right: .75rem;
                /* width: 90%; */

                & > div:nth-of-type(1) {
                    background-color: ${(props) => props.theme.appBgColor};
                    padding: 0 0.2rem 0 0.1rem;
                    font-size: 0.85rem;
                    font-weight: bold;
                    letter-spacing: 0.01rem;
                    color: ${(props) => props.theme.appSecondaryColorVariant2};
                    border-radius: 2rem;
                    border: none;
                    height: 100%;
                    min-height: unset;

                    & > div:nth-of-type(1) {
                        cursor: pointer;
                        height: 100%;
                        min-height: unset;
                        /* display: flex; */
                        align-items: center;
                        justify-content: center;
                        padding: 0;

                        & > div {
                            min-height: unset;
                            height: 100%;
                            display: flex;
                            align-items: center;
                            padding: 0 0 .65rem .5rem;

                            & > div {
                                display: flex;
                                flex-direction: row;
                                align-items: center;
                                justify-content: center;
                                gap: 0.25rem;
                                font-size: .75rem;
                                color: ${(props) => props.theme.appSecondaryColorVariant2};
                            }
                        }
                    }

                    & > div:nth-of-type(2) {
                        cursor: pointer;
                        padding-top: 0.2rem;

                        span {
                            display: none;
                        }

                        div {
                            padding: 0 0.25rem;
                        }
                    }
                }

                & > div:nth-of-type(2) {
                    margin-top: 0.15rem;
                    /* padding-top: 0.05rem; */
                    background-color: ${(props) => props.theme.appBgColor};
                    box-shadow: 0 0.15rem 0.8rem 0.15rem ${(props) => props.theme.appSecondaryColorVariant3};
                    border-radius: 0.25rem;
                    width: 92px;

                    .currency_option {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        gap: 0.25rem;
                    }

                    & > div {
                        max-height: 15vh;
                        padding: 0 0 .1rem 0;
                        border-radius: 0.25rem;

                        & > div {
                            cursor: pointer;
                            padding: 0.35rem 0.15rem 0.35rem 0;
                            font-size: .75rem;
                            font-weight: bold;
                            letter-spacing: 0.01rem;
                            background-color: transparent;
                            color: ${(props) => props.theme.appSecondaryColorVariant2};
                            display: flex;
                            justify-content: center;

                            // On mobile devices align options with selected option, by adding padding to account for the lack of a scrollbar
                            @media (any-pointer: coarse) {
                                padding: 0.325rem 1rem 0.325rem 0;
                            }

                            // If option is hovered, give appropriate background color
                            &:hover {
                                background-color: ${(props) => props.theme.appSecondaryColorVariant4};
                            }
                        }
                    }
                }
            }
        }
    }

    // Media query for mobile portrait content
    @media screen and (max-width: 600px) {
        // Currency Converter main content
        margin: 1% 7.5%;
    }

    // Media query for very wide screens
    @media screen and (min-width: 1500px) {
        // Currency Converter main content
        margin: 1% 30%;
    }
`;

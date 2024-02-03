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
    /* gap: .8rem; */

    h2 {
        margin: 0;
        padding-bottom: 1rem;
        font-weight: bold;
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
            font-size: 1.3rem;
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
            padding-right: .5rem;
            /* width: 20%; */
            height: 80%;
            display: flex;
            justify-content: center;
            align-items: center;

            select {
                font-family: "Lato", sans-serif;
                font-size: .775rem !important;
                border: none;
                border-radius: 2rem;
                height: 80%;
                cursor: pointer;
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

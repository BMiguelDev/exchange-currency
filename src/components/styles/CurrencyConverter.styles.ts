import styled from "styled-components";

import CurrencyConverter from "../CurrencyConverter";

export const StyledCurrencyConverter = styled(CurrencyConverter)`
    // Currency Converter main content
    height: 60%;
    margin: 1% 25%;
    /* padding: 1rem; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    // gap: 1rem;

    .inputs_container {
        width: 100%;
        position: relative;

        input {
            font-family: "Lato", sans-serif;
            width: 100%;
            // height: 100%;
            padding: .325rem .75rem;
            font-size: 1.1rem;
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
            left: 77.5%;
            width: 20%;
            height: 80%;
            display: flex;
            justify-content: center;
            font-size: 1.3rem;

            select {
                font-family: "Lato", sans-serif;
            }

            svg {
                /* font-size: 2rem; */
            }
        }
    }

    // Media query for mobile portrait content
    @media screen and (max-width: 600px) {
        // Currency Converter main content
        margin: 1% 15%;
    }
`;

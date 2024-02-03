import { createGlobalStyle } from "styled-components";

import { ThemeType } from "../../models/model";

const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`

    // General page content
    * {
        box-sizing: border-box;
    }

    html,
    body {
        margin: 0;
        padding: 0;
        font-family: 'Lato', sans-serif;    // This font is being imported in public/index.html
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        scroll-behavior: smooth;
    }

    // Remove blue highlight of several elements when clicked on mobile screens
    input,
    textarea,
    button,
    select,
    a,
    span,
    svg {
        -webkit-tap-highlight-color: transparent;
    }

    // App content
    .app_container {
        // width: 100vw;
        display: flex;
        flex-direction: column;
        // align-items: center;
        justify-content: flex-start;
        gap: 2rem;
        /* background-color: var(--app-bg-color); */
        background-color: ${(props) => props.theme.appBgColor};
        

        // Media query for unsuitable screens (mobile extremelly small)
        @media screen and (max-width: 300px), screen and (max-height: 250px) {
            
            // App content
            visibility: hidden;
            overflow: hidden;

            &::before {
                position: fixed;
                visibility: visible;
                background: ${(props) => props.theme.appBgColor};
                color: ${(props) => props.theme.appSecondaryColor};
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                content: "Your screen is too small to display this App :(";
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                z-index: 10;
            }
        }
    }
`;

export default GlobalStyles;

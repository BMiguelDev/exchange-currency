import styled from "styled-components";

import Navbar from "../Navbar";

export const StyledNavbar = styled(Navbar)`
    // Navbar content
    width: 100%;
    height: 10%;

    nav.navbar_container {
        color: ${(props) => props.theme.appSecondaryColorVariant2};
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 2rem 2rem;

        .navbar_links {
            display: flex;
            flex: 1;
            gap: 1rem;
            gap: 7.5%;

            h6 {
                margin: 0;
                font-size: 0.725rem;
            }
        }

        .logo_wrapper {
            flex: 1;
            display: flex;
            justify-content: center;

            svg {
                width: 94px;
            }
        }

        .button_wrapper {
            flex: 1;
            display: flex;
            justify-content: flex-end;
        }
    }

    // Media query for mobile portrait content
    @media screen and (max-width: 500px) {
        // Navbar content
        nav.navbar_container {
            padding: 2rem 1rem;

            .navbar_links {
                display: flex;
                flex-direction: column;
            }
        }
    }
`;

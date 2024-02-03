import styled from "styled-components";

import Navbar from "../Navbar";

export const StyledNavbar = styled(Navbar)`
    // Navbar content
    nav.navbar_container {
        color: ${(props) => props.theme.appSecondaryColorVariant2};
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 1rem 1.5rem;
        height: 10%;

        h4 {
            font-size: 1.5rem;
            margin: 0;
        }
    }
`;

import styled from "styled-components";

import Footer from "../Footer";

export const StyledFooter = styled(Footer)`
    /// Footer container
    /* margin-top: auto;
    width: 100%; */
    margin: auto 10%;
    display: flex;
    /* justify-content: flex-end; */
    // height: min(4.5%, 30px);
    height: 30%;
    background-color: ${(props) => props.theme.footerBgColor};
    color: ${(props) => props.theme.footerColor};
    border-top: .01rem solid ${(props) => props.theme.appSecondaryColorVariant3};
    padding: 1rem 0rem;
    /* margin: auto 1rem; */
    /* padding: 1rem 2rem; */
    display: flex;
    align-items: center;
    z-index: 1;

    p {
        font-size: 0.8rem;
        margin: 0;
    }
`;

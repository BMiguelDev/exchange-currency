import styled from "styled-components";

import Footer from "../Footer";

export const StyledFooter = styled(Footer)`
    // Footer container
    /* width: 100%; */
    margin: auto 12.5%;
    display: flex;
    height: 35%;
    background-color: ${(props) => props.theme.footerBgColor};
    color: ${(props) => props.theme.footerColor};
    border-top: .01rem solid ${(props) => props.theme.appSecondaryColorVariant3};
    padding: 1.5rem 0rem;
    display: flex;
    flex-direction: column;
    gap: .2rem;
    justify-content: space-around;
    align-items: center;
    z-index: 1;

    .footer_top_row {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;

        .small_logo_wrapper {
            display: flex;
            justify-content: center;

            svg {
                width: 64px;
            }
        }

        .links_list_container {
            display: flex;
            flex-direction: column;
            gap: .15rem;

            h5 {
                margin: 0;
                font-size: .675rem;
                padding-bottom: .65rem;
                color: ${(props) => props.theme.appSecondary};
            }
            
            h6 {
                margin: 0;
                font-size: .625rem;
                color: ${(props) => props.theme.appSecondaryColorVariant2};
            }
        }

        .utils_column {
            display: flex;
            flex-direction: column;
            gap: .6rem;

            .logos_container {
                display: flex;
                flex-direction: row;
                justify-content: space-around;

                svg {
                    width: 15px;
                }
            }

            select {
                align-self: center;
                width: 64px;
                font-size: .6rem;
            }

            p {
                margin: 0;
                font-size: .775rem;
                align-self: flex-end;
                text-align: end;
                color: ${(props) => props.theme.appSecondaryColorVariant2};
            }
        }
    }

    .footer_bottom_row {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;

        .paragraphs_container {
            display: flex;
            flex-direction: column;
            gap: .25rem;

            p {
                margin: 0;
                font-size: .5rem;
                color: ${(props) => props.theme.appSecondaryColorVariant3};
            }
        }

        .qr_logo_wrapper {
            display: flex;
            justify-content: center;

            svg {
                width: 22px;
                height: 22px;
            }
        }
    }

    // Media query for mobile portrait content
    @media screen and (max-width: 500px) {
         // Footer container
        margin: auto 2.5%;

        .footer_top_row {

            .small_logo_wrapper {

                svg {
                    width: 50px;
                }
            }

            .utils_column {

                select {
                    width: 40px;
                    font-size: .5rem;
                }

            }
        }
    }
`;

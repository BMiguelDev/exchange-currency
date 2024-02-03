import styled from "styled-components";

import Button from "../Button";

interface PropTypes {
    className?: string;
    bgColor: string;
}

export const StyledButton = styled(Button)<PropTypes>`
    display: flex;
    width: fit-content;
    text-decoration: none;
    margin: 0;
    /* padding: 0.35rem 0.9rem; */
    padding: 0.5rem 1.3rem;
    font-size: 0.75rem;
    border-radius: 2rem;
    border: none;
    color: ${(props) => props.theme.appBgColor};
    background-color: ${(props) => props.bgColor};
    letter-spacing: 0.02rem;
    cursor: pointer;
`;

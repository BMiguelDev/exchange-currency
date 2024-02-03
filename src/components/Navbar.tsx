import React from "react";

import { ReactComponent as UpholdLogo } from '../assets/icons/logo.svg';
import { StyledButton } from "./styles/Button.styles";

interface PropTypes {
    className?: string;
}

function Navbar({ className }: PropTypes) {
    return (
        <header className={className}>
            <nav className="navbar_container">
                <h4>Uphold</h4>
                <UpholdLogo />
                <StyledButton bgColor="rgb(73, 204, 104)" buttonTitle="Log In" handleClick={() => null} />
            </nav>
        </header>
    );
}

export default Navbar;


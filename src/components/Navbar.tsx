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
                <div className="navbar_links">
                    <h6>Personal</h6>
                    <h6>Business</h6>
                    <h6>Partners</h6>
                </div>
                <div className="logo_wrapper">
                    <UpholdLogo />
                </div>
                <div className="button_wrapper">
                    <StyledButton bgColor="rgb(73, 204, 104)" buttonTitle="Log In" handleClick={() => null} />
                </div>
            </nav>
        </header>
    );
}

export default Navbar;


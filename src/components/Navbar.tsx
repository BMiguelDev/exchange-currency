import React from "react";

import { ReactComponent as UpholdLogo } from '../assets/icons/logo.svg';
import Button from "./Button";

function Navbar() {
    return (
        <header >
            <nav className="navbar_container">
                <h4>Uphold</h4>
                <UpholdLogo />
                <Button bgColor="rgb(73, 204, 104)" buttonTitle="Log In" handleClick={() => null} />
            </nav>
        </header>
    );
}

export default Navbar;

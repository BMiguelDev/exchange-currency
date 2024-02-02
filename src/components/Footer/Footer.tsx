import React from "react";

import { ReactComponent as UpholdSmalllLogo } from "../../assets/icons/small-logo.svg";
import { ReactComponent as AppStoreLogo } from "../../assets/icons/appstore.svg";
import { ReactComponent as PlayStoreLogo } from "../../assets/icons/playstore.svg";
import { ReactComponent as QRCodeLogo } from "../../assets/icons/qr-code.svg";

const Footer = () => {
    return (
        <footer className="footer_container">
            <UpholdSmalllLogo />
            <select name="currency" style={{ opacity: ".5" }} aria-readonly={true}>
                <option value={"English"}>English</option>
                <option value={"Portuguese"}>Portuguese</option>
            </select>
            <AppStoreLogo />
            <PlayStoreLogo />
            <QRCodeLogo />
            <p>Bruno Miguel</p>
        </footer>
    );
};

export default Footer;

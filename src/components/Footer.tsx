import React from "react";

import { ReactComponent as UpholdSmallLogo } from "../assets/icons/small-logo.svg";
import { ReactComponent as AppStoreLogo } from "../assets/icons/appstore.svg";
import { ReactComponent as PlayStoreLogo } from "../assets/icons/playstore.svg";
import { ReactComponent as QRCodeLogo } from "../assets/icons/qr-code.svg";

interface PropTypes {
    className?: string;
}

const Footer = ({ className }: PropTypes) => {
    return (
        <footer className={className}>
            <div className="footer_top_row">
                <div className="small_logo_wrapper">
                    <UpholdSmallLogo />
                </div>
                <div className="links_list_container">
                    <h5>Products</h5>
                    <h6>Consumers</h6>
                    <h6>Business</h6>
                    <h6>Partners</h6>
                </div>
                <div className="links_list_container">
                    <h5>Company</h5>
                    <h6>About</h6>
                    <h6>Careers</h6>
                    <h6>Press</h6>
                    <h6>Blog</h6>
                </div>
                <div className="links_list_container">
                    <h5>Help</h5>
                    <h6>FAQ & Support</h6>
                    <h6>Platform Status</h6>
                    <h6>Criptionary</h6>
                    <h6>Pricing</h6>
                    <h6>Legal</h6>
                </div>
                <div className="links_list_container">
                    <h5>Social</h5>
                    <h6>Facebook</h6>
                    <h6>Twitter</h6>
                    <h6>Instagram</h6>
                    <h6>LinkedIn</h6>
                </div>
                <div className="utils_column">
                    <div className="logos_container">
                        <AppStoreLogo />
                        <PlayStoreLogo />
                    </div>
                    <select name="currency" style={{ opacity: ".5" }} aria-readonly={true}>
                        <option value={"English"}>English</option>
                        <option value={"Portuguese"}>Portuguese</option>
                    </select>
                    <p>Bruno Miguel</p>
                </div>
            </div>
            <div className="footer_bottom_row">
                <div className="paragraphs_container">
                    <p>Uphold Europe Limited, Reg No. 09281410, Registered Office: Interchange Triangle, Chalk Farm Road, Londom, Englad, NW1 8AB</p>
                    <p>© Uphold, Inc. 2018. All Rights Reserved.<span>Agreements</span> <span>Privacy & Data Policy</span><span>Cookie Policy</span></p>
                </div>
                <div className="qr_logo_wrapper">
                    <QRCodeLogo />
                </div>
            </div>
        </footer>
    );
};

export default Footer;

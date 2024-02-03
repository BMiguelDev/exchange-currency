import React, { useEffect, useRef } from "react";
import { ThemeProvider } from "styled-components";

import { ThemeType } from "./models/model";
import GlobalStyles from "./components/styles/Global";
import { StyledNavbar } from "./components/styles/Navbar.styles";
import { StyledFooter } from "./components/styles/Footer.styles";
import CurrencyConverter from "./components/CurrencyConverter";

// Uphold's color pallete
const colorTheme: ThemeType = {
    appBgColor: "rgb(255, 255, 255)",
    appPrimaryColor: "rgb(73, 204, 104)",
    appSecondaryColor: "rgb(60, 74, 91)",
    appSecondaryColorVariant1: "rgb(27, 33, 47)",
    appSecondaryColorVariant2: "rgb(104, 119, 141)",
    appSecondaryColorVariant3: "rgb(188, 202, 216)",
    appSecondaryColorVariant4: "rgb(228, 234, 242)",
    appSecondaryColorVariant5: "rgb(245, 249, 252)",
};

const App = () => {
    const appContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Function to lock height at window's inner height
        const handleResize = () => {
            if (appContainerRef.current) appContainerRef.current.style.height = `${window.innerHeight}px`;
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <ThemeProvider theme={colorTheme}>
            <div ref={appContainerRef} className="app_container">
                <GlobalStyles theme={colorTheme} />
                <StyledNavbar />
                <CurrencyConverter />
                <StyledFooter />
            </div>
        </ThemeProvider>
    );
};

export default App;

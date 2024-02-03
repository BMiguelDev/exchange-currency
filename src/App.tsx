import React, { useEffect, useRef } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CurrencyConverter from "./components/CurrencyConverter";

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
        <div ref={appContainerRef} className="app_container">
            <Navbar />
            <CurrencyConverter />
            <Footer />
        </div>
    );
};

export default App;

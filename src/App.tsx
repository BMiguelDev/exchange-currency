import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import MainAppComponent from "./components/MainAppComponent/MainAppComponent";

const App = () => {
    return (
        <div className="app_container">
            <Navbar />
            <MainAppComponent />
            <Footer />
        </div>
    );
};

export default App;

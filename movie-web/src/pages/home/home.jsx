import React from "react";
import heroBanner from "./heroBanner/heroBanner";
import "./home.scss";

const home = () => {
    return (
        <div className="homePage">
            <heroBanner />
        </div>
    );
};

export default home;

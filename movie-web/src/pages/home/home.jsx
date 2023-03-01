import React from "react";
import HeroBanner from "./heroBanner/HeroBanner";
import "./Home.scss";

const Home = () => {
    return (
        <div className="homePage">
            <HeroBanner />
            <div style={{ height: "500px" }}></div>
        </div>
    );
};

export default Home;

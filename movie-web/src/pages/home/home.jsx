import React from "react";
import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import "./Home.scss";

const Home = () => {
    return (
        <div className="homePage">
            <HeroBanner />
            <Trending />
            <div style={{ height: "500px" }}></div>
        </div>
    );
};

export default Home;

import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";
import "./Trending.scss";

const Trending = () => {
    const [timeData, setTimeData] = useState("day");
    const { data, loading } = useFetch(`/trending/all/${timeData}`);

    const onTabChange = (tab) => {
        setTimeData(tab === "Ngày" ? "day" : "week");
    };

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Mới nhất</span>
                <SwitchTabs data={["Ngày", "Tuần"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <ContentWrapper>
                <Carousel data={data?.results} loading={loading} />
            </ContentWrapper>
        </div>
    );
};

export default Trending;

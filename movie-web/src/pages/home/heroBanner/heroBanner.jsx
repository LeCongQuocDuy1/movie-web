import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./HeroBanner.scss";
import useFetch from "../../../hooks/useFetch";
import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
    const [background, setBackGround] = useState("");
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const { url } = useSelector((state) => state.home);
    const { data, loading } = useFetch("/movie/upcoming");

    useEffect(() => {
        const bg =
            url.backdrop +
            data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
        setBackGround(bg);
    }, [data]);

    const handleSearchQuery = (e) => {
        if (e.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`);
        }
    };

    return (
        <div className="heroBanner">
            {!loading && (
                <div className="backdrop-img">
                    <Img src={background} />
                </div>
            )}

            <div className="opacity-layer"></div>

            <ContentWrapper>
                <div className="heroBannerContent">
                    <span className="title">Chào mừng bạn.</span>
                    <span className="subtitle">
                        Hàng triệu bộ phim, chương trình truyền hình và mọi
                        người để khám phá. Khám phá ngay.
                    </span>
                    <div className="searchInput">
                        <input
                            type="text"
                            placeholder="Tìm kiếm phim và chương trình truyền hình bạn yêu thích..."
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyUp={handleSearchQuery}
                        />
                        <button>Tìm kiếm</button>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    );
};

export default HeroBanner;

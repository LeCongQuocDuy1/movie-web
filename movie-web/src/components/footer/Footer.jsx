import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Điều khoản sử dụng</li>
                    <li className="menuItem">Chính Sách Bảo Mật</li>
                    <li className="menuItem">Về chúng tôi</li>
                    <li className="menuItem">Blogs</li>
                    <li className="menuItem">Câu Hỏi Thường Gặp</li>
                </ul>
                <div className="infoText">
                    <p>CÔNG TY TNHH CJ CGV VIETNAM</p>
                    Giấy CNĐKDN: 0303675393, đăng ký lần đầu ngày 31/7/2008,
                    đăng ký thay đổi lần thứ 5 ngày 14/10/2015, cấp bởi Sở KHĐT
                    thành phố Hồ Chí Minh.Địa Chỉ: Tầng 2, Rivera Park Saigon -
                    Số 7/28 Thành Thái, P.14, Q.10, TPHCM.Hotline: 1900
                    6017COPYRIGHT 2017 CJ CGV. All RIGHTS RESERVED .
                </div>
                <div className="socialIcons">
                    <a href="/">
                        <span className="icon">
                            <FaFacebookF />
                        </span>
                    </a>
                    <a href="/">
                        <span className="icon">
                            <FaInstagram />
                        </span>
                    </a>
                    <a href="/">
                        <span className="icon">
                            <FaTwitter />
                        </span>
                    </a>
                    <a href="/">
                        <span className="icon">
                            <FaLinkedin />
                        </span>
                    </a>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;

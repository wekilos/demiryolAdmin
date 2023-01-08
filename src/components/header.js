import React, { useContext, useEffect, useState } from "react";
import "./header.css";
import "antd/dist/antd.css";
import { Layout, Menu, Input, Dropdown, Badge, Popover, message } from "antd";

import { UserOutlined, BellOutlined, LogoutOutlined } from "@ant-design/icons";
import { logout } from "../utils/index";
import { axiosInstance } from "../utils/axiosIntance";
import { useHistory } from "react-router-dom";
// import sound from "../img/sound.wav";
import { SebedimContext } from "../context/sebedim";
import logo from "../img/logo.png";
const { Search } = Input;

const { Header } = Layout;

const Headers = () => {
    const { dil, ChangeDil } = useContext(SebedimContext);
    const [lang, setLang] = useState(false);
    const history = useHistory();
    const Logout = () => {
        logout();
        history.push({ pathname: "/" });
    };
    const profile_menu = (
        <Menu>
            <Menu.Item onClick={Logout}>
                <LogoutOutlined /> Logout
            </Menu.Item>
        </Menu>
    );
    return (
        <Header
            className="site-layout-background header bg-blue"
            style={{ position: "fixed" }}
        >
            <div className="flex justify-start pl-[50px]">
                <div className="bg-blue h-[60px] mr-[200px]" align="center">
                    <img
                        className="object-contain h-[50px] pt-2"
                        src={logo}
                        alt="logo"
                    />
                </div>
                <div>“Türkmen Demirýol Ekspress” HJ</div>
            </div>
            <div className="profile">
                <Dropdown overlay={profile_menu}>
                    <div className="ant-dropdown-link" onClick={Logout}>
                        <UserOutlined />
                    </div>
                </Dropdown>
            </div>

            <div
                onMouseEnter={() => setLang(true)}
                onMouseOut={() => setLang(false)}
                className="absolute top-0 right-[60px] cursor-pointer h-[50px]"
            >
                {dil === "tm" ? "TM" : dil === "ru" ? "RU" : "EN"}
            </div>
            <div
                onMouseEnter={() => setLang(true)}
                onMouseLeave={() => setLang(false)}
                className={
                    (lang === true ? "flex " : " hidden ") +
                    "fixed justify-between top-[50px] z-10 border-t-[1px] rounded-[4px] border-t-[#efefef] right-[5px] h-[50px] leading-[50px] cursor-pointer bg-blue w-[150px] pl-2 pr-2 pt-0 pb-0"
                }
            >
                <div
                    onClick={() => ChangeDil("tm")}
                    className="hover:text-black"
                >
                    TM
                </div>
                <div
                    onClick={() => ChangeDil("ru")}
                    className="hover:text-black"
                >
                    RU
                </div>
                <div
                    onClick={() => ChangeDil("en")}
                    className="hover:text-black"
                >
                    EN
                </div>
            </div>
        </Header>
    );
};
export default Headers;

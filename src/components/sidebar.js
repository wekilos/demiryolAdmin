import React, { useContext } from "react";
import "./sidebar.css";
import { logout } from "../utils";
// import logo_ from "../../img/logo_.svg";
// import logo from "../../img/logo.svg";
import { Layout, Menu, Tooltip } from "antd";
import { Link } from "react-router-dom";
import {
    NotificationOutlined,
    RiseOutlined,
    SettingOutlined,
    DashboardOutlined,
    LogoutOutlined,
    HeartFilled,
    ScheduleOutlined,
    CarOutlined,
    ToolOutlined,
    FileTextOutlined,
    CalculatorOutlined,
    HomeOutlined,
} from "@ant-design/icons";

import logo from "../img/logo.png";
import { SebedimContext } from "../context/sebedim";

const { SubMenu } = Menu;
const { Sider } = Layout;

const SiderDemo = (props) => {
    const { dil } = useContext(SebedimContext);
    return (
        // <div>
        <Sider
            style={{
                overflow: "auto",
                minHeight: "100vh",
                position: "sticky",
                top: "60px",
                left: 0,
            }}
            className="Sider  "
            width={220}
            trigger={null}
        >
            <Menu
                mode="inline"
                defaultOpenKeys={["sub1"]}
                className="sidebar-left mt-[60px]"
            >
                <SubMenu
                    key="sub1"
                    title={
                        <span>
                            <span className="menuitem ">
                                {dil === "tm"
                                    ? "Zakazlar"
                                    : dil === "ru"
                                    ? "Заказы"
                                    : "Orders"}
                            </span>
                        </span>
                    }
                >
                    <Menu.Item className="menuitem menuitem2" key="63">
                        <Link to="/requests">
                            {dil === "tm"
                                ? "Zayawkalar"
                                : dil === "ru"
                                ? "Заявка"
                                : "Request"}
                        </Link>
                    </Menu.Item>
                    <Menu.Item className="menuitem menuitem2" key="1">
                        <Link to="/orders">
                            {dil === "tm"
                                ? "Zakazlar"
                                : dil === "ru"
                                ? "Заказы"
                                : "Orders"}
                        </Link>
                    </Menu.Item>
                    <Menu.Item className="menuitem menuitem2" key="2">
                        <Link to="/canceledRequests">
                            {dil === "tm"
                                ? "Yatyrylan Zakazlar"
                                : dil === "ru"
                                ? "Отмененные заказы"
                                : "Canceled orders"}
                        </Link>
                    </Menu.Item>
                    <Menu.Item className="menuitem menuitem2" key="3">
                        <Link to="/archive">
                            {dil === "tm"
                                ? "Arhiw"
                                : dil === "ru"
                                ? "Архив"
                                : "Archive"}
                        </Link>
                    </Menu.Item>
                </SubMenu>

                <SubMenu
                    key="sub8"
                    title={
                        <span className="menuitem">
                            {/* <FileTextOutlined /> */}
                            <span>
                                {dil === "tm"
                                    ? "Tazelikler"
                                    : dil === "ru"
                                    ? "Новости"
                                    : "News"}
                            </span>
                        </span>
                    }
                >
                    <Menu.Item className="menuitem menuitem2" key="117">
                        <Link to="/ActiveNews">
                            {dil === "tm"
                                ? "Active Tazelik"
                                : dil === "ru"
                                ? "Активные новости"
                                : "Active news"}
                        </Link>
                    </Menu.Item>
                    <Menu.Item className="menuitem menuitem2" key="217">
                        <Link to="/disActiveNews">
                            {dil === "tm"
                                ? "Disactive Tazelik"
                                : dil === "ru"
                                ? "Неактивные новости"
                                : "Disactive news"}
                        </Link>
                    </Menu.Item>
                </SubMenu>

                <SubMenu
                    key="sub9"
                    title={
                        <span className="menuitem">
                            {/* <HomeOutlined /> */}
                            <span>
                                {dil === "tm"
                                    ? "Habarlar"
                                    : dil === "ru"
                                    ? "Сообщения"
                                    : "Messages"}
                            </span>
                        </span>
                    }
                >
                    <Menu.Item className="menuitem menuitem2" key="19">
                        <Link to="/posts">
                            {dil === "tm"
                                ? "Gelen Habarlar"
                                : dil === "ru"
                                ? "Полученные сообщения"
                                : "Recived messages"}
                        </Link>
                    </Menu.Item>
                    <Menu.Item className="menuitem menuitem2" key="20">
                        <Link to="/sendPost">
                            {dil === "tm"
                                ? "Ugradylan Habarlar"
                                : dil === "ru"
                                ? "Отправка сообщений"
                                : "Send messages"}
                        </Link>
                    </Menu.Item>
                </SubMenu>

                <SubMenu
                    key="sub7"
                    title={
                        <span>
                            {/* <SettingOutlined /> */}
                            <span className="menuitem">
                                {dil === "tm"
                                    ? "Ulanyjylar"
                                    : dil === "ru"
                                    ? "Пользователи"
                                    : "Users"}
                            </span>
                        </span>
                    }
                >
                    <Menu.Item className="menuitem menuitem2" key="13">
                        <Link to="/ActiveUsers">
                            {dil === "tm"
                                ? "Ulanyjylar"
                                : dil === "ru"
                                ? "Пользователи"
                                : "Users"}
                        </Link>
                    </Menu.Item>
                    <Menu.Item className="menuitem menuitem2" key="14">
                        <Link to="/DisActiveUsers">
                            {dil === "tm"
                                ? "Aktiw dal ulanyjylar"
                                : dil === "ru"
                                ? "Неактивные Пользователи"
                                : "Disactive Users"}
                        </Link>
                    </Menu.Item>
                </SubMenu>
            </Menu>

            <div className="admin-footer">
                <center
                    style={{
                        fontSize: 12,
                        color: "#C0C0C0",
                        fontWeight: 600,
                    }}
                >
                    Developed by: <br />a programmer WB
                </center>
            </div>
        </Sider>
    );
};

export default SiderDemo;

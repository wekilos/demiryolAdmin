import { Popconfirm, Table, Button, message, Drawer } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { axiosInstance, BASE_URL } from "../../utils/axiosIntance";
import file from "../../img/file.png";
import { useHistory } from "react-router-dom";
import { SebedimContext } from "../../context/sebedim";

const handleReject = () => {
    message.success("Request Rejected!");
};

const Orders = () => {
    const { dil } = useContext(SebedimContext);
    const history = useHistory();
    const [data, setData] = useState([]);
    const [openChange, setOpenChange] = useState(false);
    const [order, setOrder] = useState({});
    const [files, setFiles] = useState([]);
    const [active, setActive] = useState(false);
    const [payBefore, setPayBefore] = useState("");
    const [payBeforeType, setPayBeforeType] = useState("");
    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axiosInstance
            .get("/api/order/all?status=3&active=true")
            .then((data) => {
                console.log(data.data);
                setData(data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const columns = [
        {
            title: dil === "tm" ? "No" : dil === "ru" ? "Но" : "No",
            dataIndex: "surname",

            render: (text, record) => <div>{record?.lname}</div>,
        },
        {
            title:
                dil === "tm"
                    ? "Edara ady"
                    : dil === "ru"
                    ? "Название компании"
                    : "Company name",
            dataIndex: "name",
            render: (text, record) => <div>{record?.User?.companyName}</div>,
        },
        {
            title:
                dil === "tm"
                    ? "Ulanyjy"
                    : dil === "ru"
                    ? "Пользователь"
                    : "User",
            dataIndex: "uploaded",
            render: (text, record) => <div>{record?.User?.fname}</div>,
        },
        {
            title:
                dil === "tm" ? "Bellik" : dil === "ru" ? "Примечание" : "Note",
            dataIndex: "message",
        },

        {
            title:
                dil === "tm" ? "Hereket" : dil === "ru" ? "Действие" : "Action",
            render: (text, record) => (
                <div className="flex">
                    <Button
                        onClick={() => {
                            setOpenChange(true);
                            setOrder(record);
                        }}
                        type="primary"
                        style={{ borderRadius: "7px" }}
                    >
                        {dil === "tm"
                            ? "Maglumat"
                            : dil === "ru"
                            ? "Информация"
                            : "Information"}
                    </Button>
                    {/* </Popconfirm> */}
                    {/* <Popconfirm placement="top" title={"Are you sure"} onConfirm={handleReject} okText="Yes" cancelText="No"> 
                        <Button type="danger" style={{borderRadius: "7px", marginLeft: "10px"}}>Delete</Button>
                    </Popconfirm> */}
                </div>
            ),
        },
    ];

    return (
        <>
            <Drawer
                width={500}
                placement="right"
                closable={true}
                mask={true}
                maskClosable={true}
                onClose={() => setOpenChange(false)}
                visible={openChange}
            >
                <div>
                    <h2 className="mb-0 font-[700]">
                        {dil === "tm"
                            ? "Maglumat"
                            : dil === "ru"
                            ? "Информация"
                            : "Information"}
                        :
                    </h2>
                    <p className="mb-0 mt-0">
                        {dil === "tm"
                            ? "Kod No"
                            : dil === "ru"
                            ? "Код №"
                            : "Code No"}
                        : {order?.code}
                    </p>
                    <p className="mt-0 mb-0">
                        {dil === "tm"
                            ? "öň töleg"
                            : dil === "ru"
                            ? "передоплата"
                            : "prepayment"}
                        : {order?.payBefore} {order?.payBeforeType}
                    </p>
                    <p className="mt-0 mb-0">
                        {dil === "tm"
                            ? "Töleg"
                            : dil === "ru"
                            ? "Oплата"
                            : "Payment"}
                        : {order?.payment} {order?.peymentType}
                    </p>
                    <p
                        className={`${
                            order?.payment - order?.payBefore > 0
                                ? "text-[#ff2a2a]"
                                : "text-[#27AE60] "
                        } `}
                    >
                        {dil === "tm"
                            ? "Balans"
                            : dil === "ru"
                            ? "Остаток"
                            : "Balance"}
                        : {order?.payment - order?.payBefore}{" "}
                        {order?.peymentType}
                    </p>
                    <h2 className="font-[700]">
                        {dil === "tm"
                            ? "Faýllar"
                            : dil === "ru"
                            ? "Файлы"
                            : "Files"}
                        :
                    </h2>
                    {order?.OrderDocs?.map((item) => {
                        console.log(BASE_URL + item.fileName);
                        return (
                            <div style={{ width: "100%", display: "flex" }}>
                                <a
                                    href={BASE_URL + "/" + item.fileName}
                                    target="_blank"
                                >
                                    {" "}
                                    <img
                                        style={{
                                            marginRight: "10px",
                                            objectFit: "contain",
                                            height: "50px",
                                        }}
                                        src={file}
                                        alt="file"
                                    />
                                </a>
                                <p style={{ lineHeight: "50px" }}>
                                    {item.title}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </Drawer>
            <Table
                columns={columns}
                dataSource={data}
                pagination={{
                    pageSize: 50,
                }}
                scroll={{
                    y: "72vh",
                }}
            />
        </>
    );
};

export default Orders;

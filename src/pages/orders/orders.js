import { Popconfirm, Table, Button, message, Drawer } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { axiosInstance, BASE_URL } from "../../utils/axiosIntance";
import file from "../../img/file.png";
import DropFileInput from "./dropFile";
import { useHistory } from "react-router-dom";
import { SebedimContext } from "../../context/sebedim";

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
            .get("/api/order/all?status=2&active=true")
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
                    {/* <Popconfirm placement="top" title={"Are you sure"} onConfirm={handleConfirm} okText="Yes" cancelText="No">  */}
                    <Button
                        onClick={() => {
                            setOpenChange(true);
                            setOrder(record);
                        }}
                        type="primary"
                        style={{ borderRadius: "7px" }}
                    >
                        {dil === "tm"
                            ? "Kabul et"
                            : dil === "ru"
                            ? "Принимать"
                            : "Accept"}
                    </Button>
                    {/* </Popconfirm> */}
                    <Popconfirm
                        placement="top"
                        title={"Are you sure"}
                        onConfirm={() => Reject(record.id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button
                            type="danger"
                            style={{ borderRadius: "7px", marginLeft: "10px" }}
                        >
                            {dil === "tm"
                                ? "Ret et"
                                : dil === "ru"
                                ? "Отклонять"
                                : "Reject"}
                        </Button>
                    </Popconfirm>
                </div>
            ),
        },
    ];

    const onFileChange = (files) => {
        console.log(files);
        files.length > 0 && setActive(true);
        files.length === 0 && setActive(true);
        setFiles(files);
    };

    const makeOrder = () => {
        if (payBefore.length > 0 && payBeforeType.length > 0) {
            const formData = new FormData();
            console.log("order", order);
            formData.append("id", order?.id);
            formData.append("payment", payBefore);
            formData.append("peymentType", payBeforeType);
            files?.map((item) => {
                formData.append("files", item);
            });
            axiosInstance
                .post("/api/order/payment", formData)
                .then((data) => {
                    console.log(data.data);
                    message.success("Ustunlikli!");
                    getData();
                    setOpenChange(false);
                    setPayBefore("");
                    setPayBeforeType("");
                    setFiles([]);
                    history.push({
                        pathname: "/archive",
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            message.warn("Maglumatlary doly dolduryn!");
        }
    };

    const Reject = (id) => {
        axiosInstance
            .patch("/api/order/cancel/" + id)
            .then((data) => {
                message.success("Yatyryldy!");
                getData();
            })
            .catch((err) => {
                console.log(err);
                message.warn("Gaytadan Barlan!");
            });
    };

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
                    <p className="mt-0">
                        {dil === "tm"
                            ? "öň töleg"
                            : dil === "ru"
                            ? "передоплата"
                            : "prepayment"}
                        : {order?.payBefore} {order?.payBeforeType}
                    </p>
                    <h2 className="font-[700]">
                        {dil === "tm"
                            ? "Faýllar"
                            : dil === "ru"
                            ? "Файлы"
                            : "Files"}
                        :
                    </h2>
                    {order?.OrderDocs?.map((item, i) => {
                        console.log(BASE_URL + item.fileName);
                        return (
                            <div
                                key={"keygfile" + i}
                                style={{ width: "100%", display: "flex" }}
                            >
                                <a href={BASE_URL + "/" + item.fileName}>
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
                    <div style={{ width: "100%" }}>
                        <input
                            value={payBefore}
                            onChange={(e) => setPayBefore(e.target.value)}
                            className="h-[50px] rounded-[6px] bg-[#FFFFFF] w-[100%] border-[1px] border-[#E3E7EE] text-[#999999] pl-[12px] text-[16px] font-sans mb-4"
                            type="text"
                            placeholder={
                                dil === "tm"
                                    ? "Töleg"
                                    : dil === "ru"
                                    ? "Oплата"
                                    : "Payment"
                            }
                        />
                        <input
                            value={payBeforeType}
                            onChange={(e) => setPayBeforeType(e.target.value)}
                            className="h-[50px] rounded-[6px] bg-[#FFFFFF] w-[100%] border-[1px] border-[#E3E7EE] text-[#999999] pl-[12px] text-[16px] font-sans mb-4"
                            type="text"
                            placeholder={
                                (dil === "tm"
                                    ? "Walýuta"
                                    : dil === "ru"
                                    ? "Валюта"
                                    : "Currency") + "(USD)"
                            }
                        />
                        <DropFileInput
                            onFileChange={(files) => onFileChange(files)}
                        />
                        <button
                            onClick={() => {
                                active && makeOrder();
                            }}
                            className={`${
                                active && "!bg-blue !text-white "
                            } bg-[#DEE6F9] h-[50px] rounded-[5px] w-full mt-4 text-[18px] font-sans text-blue`}
                        >
                            {dil === "tm"
                                ? "Ugrat"
                                : dil === "ru"
                                ? "Отправлять"
                                : "Send"}
                        </button>
                    </div>
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

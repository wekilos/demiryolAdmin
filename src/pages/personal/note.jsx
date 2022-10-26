import { Drawer } from "antd";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { axiosInstance, BASE_URL } from "../../utils/axiosIntance"; 
import defaultFile from "../../img/defaultFile.png";


const Note = () =>{

    const [data,setData] = useState([]);
    const [openFiles,setOpenFiles] = useState(false);
    const [orderData,setOrderData] = useState(); 
    useEffect(()=>{
        getAllOrders()
    },[]);

    const getAllOrders = ()=>{
       let userData = JSON.parse(localStorage.getItem("userData"))
        userData &&  axiosInstance.get("/api/order/all/"+userData.id).then((data)=>{
            console.log(data.data);
            setData(data.data);
        }).catch((err)=>{
            console.log(err);
        });
    }
    return ( 
        <div className="w-full min-h-[70vh] mt-[100px]">
                {/* <div className="h-[72px] w-full pl-[30px] mb-[20px] bg-[#F7F7FA] rounded-[10px] font-sans font-[600] text-[20px] text-black leading-[72px] text-left">
                Note
                </div> */}

                <Drawer
                 width={340}
                 placement="right"
                 closable={true}
                 mask={true}
                 maskClosable={true}
                 onClose={()=>setOpenFiles(false)}
                 visible={openFiles}>
                
               { orderData?.OrderDocs &&  <div>
                            <h1 className="font-sans text-black font-bold ml-2 mb-2">Code: {orderData?.code}</h1>
                            <h1 className="font-sans text-black font-bold ml-2 mb-2">Message: {orderData?.message}</h1>
                            <h1 className="font-sans text-black font-bold ml-2 mb-2">Pay before: {orderData?.payBefore}{orderData?.payBeforeType}</h1>
                            <h1 className="font-sans text-black font-bold ml-2 mb-2">Payment: {orderData?.payment}{orderData?.paymentType}</h1>
                            <h1 className={`${orderData?.payment-orderData?.payBefore>0? "text-[#ff2a2a]":"text-[#27AE60] "} " font-sans text-black font-bold ml-2 mb-2"`}>Balance: {orderData?.payment-orderData?.payBefore} {orderData?.peymentType}</h1>
                            {
                                orderData?.OrderDocs  && orderData?.OrderDocs?.map((item)=>{
                                    return <a href={BASE_URL+item.fileName} target="_blank" className="flex mb-2 leading-[50px]">
                                                {<img className="h-[50px] mr-2" src={defaultFile}></img>}
                                                {item.title}
                                        </a>
                                })
                            }
                        </div>}
      
                </Drawer>
                <div className="flex justify-between min-h-[72px] w-full lg:pl-[30px] pl-[15px] lg:pr-[30px] pr-[15px] mb-[20px] bg-[#F7F7FA] rounded-[10px] font-sans font-[600] lg:text-[16px] text-[14px] text-black leading-[72px] text-left">
                
                    {/* <div className="w-[20%] text-left">Code</div> */}
                    <div className="lg:w-[16%] w-[38%] text-left">No & Time</div>
                    <div className="lg:w-[14%] w-[30%] text-left">Status</div>
                    <div className="lg:block hidden  w-[14%] text-left">Pay before</div>
                    <div className="lg:block hidden  w-[16%] text-left">Payment</div>
                    <div className="lg:block hidden  w-[14%] text-left">Balance</div>
                    <div className="lg:w-[16%]  w-[28%] whitespace-nowrap text-left">Files & Code</div>
                </div>
                
                {
                    data?.map((item)=>{
                        return <div className="flex justify-between min-h-[72px] w-full lg:pl-[30px] pl-[15px] lg:pr-[30px] pr-[15px] mb-[20px] bg-[#F7F7FA] rounded-[10px] font-sans font-[600] lg:text-[16px] text-[14px] text-black leading-[72px] text-left">
                
                             {/* <div className="w-[20%] text-left  ">{item.code}</div> */}
                             <div className="lg:w-[16%] w-[38%] whitespace-nowrap text-left">{item.lname} / {JSON.stringify(item.createdAt).slice(1,11)}</div>
                             <div className="lg:w-[14%] w-[30%] text-left ">{item.status_tm}</div>
                             <div className="lg:block hidden  w-[14%] text-left ">{item.payBefore} {item.payBeforeType}</div>
                             <div className="lg:block hidden  w-[16%] text-left ">{item.payment} {item.peymentType}</div>
                             <div className={`${item.payment-item.payBefore>0? "text-[#ff2a2a]":"text-[#27AE60] "} lg:block hidden  w-[14%] !text-left`}>{item.payment-item.payBefore} {item.peymentType}</div>
                             <div onClick={()=>{setOpenFiles(true);setOrderData(item);}} className="lg:w-[16%]  w-[28%] whitespace-nowrap text-left cursor-pointer">Files & Code</div>
                             </div>
                    })
                }
                   
                
               
        </div>
    )
}

export default Note;
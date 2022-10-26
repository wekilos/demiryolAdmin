import React, { useState } from "react";

import { FileFilled, CheckCircleFilled, UserOutlined, CheckCircleOutlined, FileOutlined  } from '@ant-design/icons';
import { useHistory, useLocation } from "react-router-dom";

const SideBar = ()=>{

    const history = useHistory();
    const location = useLocation();
    console.log(location.pathname)
    const [ active, setActive ] = useState(1);
    return (
        <div className="w-full pt-[20px]">
                <h1 className="font-sans text-[36px] text-black font-[700] text-left">Private room</h1>
                <div className="w-full flex flex-wrap justify-start">
                    <button onClick={()=>{history.push({pathname:"/personal"})}} className={`${location.pathname.includes("personal") && "!bg-blue !text-white " }  w-[100%] bg-[#F7F7FA] text-[blue    hover:bg-blue hover:text-[#F7F7FA] min-h-[45px] rounded-[10px]  text-[18px] font-sans font-[600] mb-[20px] text-left pl-[50px] relative `} > <span className="h-full absolute left-[20px] top-[5px]"><FileOutlined /> </span> My personal document</button>
                    <button onClick={()=>{history.push({pathname:"/note"})}} className={`${location.pathname.includes("note") && "!bg-blue !text-white " }  w-[100%] bg-[#F7F7FA] min-h-[45px] text-blue hover:bg-blue hover:text-[#F7F7FA] rounded-[10px]  text-[18px] font-sans font-[600] mb-[20px] text-left pl-[50px] relative`}><span className="h-full absolute left-[20px] top-[5px]"><CheckCircleOutlined /> </span> Order</button>
                    <button onClick={()=>{history.push({pathname:"/profile"})}} className={`${location.pathname.includes("profile") && "!bg-blue !text-white " } w-[100%] bg-[#F7F7FA] text-blue hover:bg-blue hover:text-[#F7F7FA] min-h-[45px] rounded-[10px]  text-[18px] font-sans font-[600] mb-[20px] text-left pl-[50px] relative`}><span className="h-full absolute left-[20px] top-[5px]"><UserOutlined /></span>  My profile</button>

                </div>
        </div>
    )
}

export default SideBar;
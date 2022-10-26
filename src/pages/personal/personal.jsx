import { message } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosInstance } from "../../utils/axiosIntance";
import DropFileInput from "./dropFile";

const Personal = ()=>{

    const [ active, setActive] = useState(false);
    const [ files,setFiles] = useState();
    const [ data, setData] = useState({lname:"",fname:"",message:""});

    const history = useHistory();

    const onFileChange = (files) => {
        console.log(files);
        setFiles(files);
        files.length > 0 && setActive(true);
        files.length == 0 && setActive(false);
      };


      const makeOrder = ()=>{
        let userData = JSON.parse(localStorage.getItem("userData"))
        let formData = new FormData(); 
        console.log("filesssss",typeof(files));
        files.map((item)=>{
            formData.append('files', item); 
        })
        formData.append("userId",userData.id);
        // formData.append("fname",data.fname);
        formData.append("lname",data.lname);
        formData.append("message",data.message);


        axiosInstance.post("/api/order/create",formData).then((data)=>{
            // console.log(data.data);
            message.success("Ustunlikli!");
            setData({fname:"",lname:"",message:""});
            setFiles([]);
            history.push({
                pathname:"/note"
            })
        }).catch((err)=>{
            console.log(err);
            message.warn("Gaytadan barlan!")
        });
      

      }
    return (
        <div className="w-full min-h-[70vh] mt-[100px]">
                <div className="h-[72px] w-full pl-[30px] mb-[20px] bg-[#F7F7FA] rounded-[10px] font-sans font-[600] text-[20px] text-black leading-[72px] text-left">
                My personal document
                </div>

                <div className="w-full bg-[#F7F7FA] rounded-[10px] md:p-[30px] p-[10px] flex flex-wrap justify-between">
                    
                        <input value={data.lname} onChange={(e)=>setData({...data,lname:e.target.value})} type="text" className="h-[50px] rounded-[6px] bg-[#FFFFFF] w-[100%] border-[1px] border-[#E3E7EE] text-[#999999] pl-[12px] text-[16px] font-sans mb-[30px]" placeholder="CodeNo"/>
                        {/* <input value={data.lname} onChange={(e)=>setData({...data,lname:e.target.value})} type="text" className="h-[50px] rounded-[6px] bg-[#FFFFFF] w-[45%] border-[1px] border-[#E3E7EE] text-[#999999] pl-[12px] text-[16px] font-sans mb-[30px]" placeholder="Last name"/> */}
                        <textarea value={data.message} onChange={(e)=>setData({...data,message:e.target.value})} type="text" className="h-[141px] rounded-[6px] bg-[#FFFFFF] w-[100%] self-center border-[1px] border-[#E3E7EE] text-[#999999] pl-[12px] pt-[12px] text-[16px] font-sans mb-[30px]" placeholder="Message"/>
                        <div className="w-full mb-[30px]">
                            <DropFileInput onFileChange={(files) => onFileChange(files)} />
                        </div>
                        <button onClick={()=>{active && makeOrder()}} className={`${ active && "!bg-blue !text-white "} bg-[#DEE6F9] h-[50px] rounded-[5px] w-full text-[18px] font-sans text-blue`}>Send</button>
                </div>
        </div>
    )
}

export default Personal;
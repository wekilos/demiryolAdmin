import React, { useState } from "react";

import { Button, Drawer, message, Modal } from 'antd';

import trash from "../../img/trash.png";
import { axiosInstance } from "../../utils/axiosIntance";
import { useEffect } from "react";
import { logout } from "../../utils";
import { useHistory } from "react-router-dom";

const Profile = () =>{
    
  const [open,setOpen] = useState(false);
  const [openChange,setOpenChange] = useState(false);
  const [userData,setUserData] = useState();

  const history = useHistory();

  useEffect(()=>{
    getData();
  },[]);

  const changeUser = ()=>{
    
    let user = JSON.parse(localStorage.getItem("userData"));
    axiosInstance.patch("/api/user/update",{
        id:user.id,
        fname:userData?.fname,
        phoneNumber:userData?.phoneNumber,
        companyName:userData?.companyName
    }).then((data)=>{
        message.success("Ustunlikli!");
        setOpenChange(false);
    }).catch((err)=>{
        console.log(err);
        message.warn("Gaytadan Barlan!")
    })
  }

  const getData = ()=>{
    let userData = JSON.parse(localStorage.getItem("userData"));
    axiosInstance.get("/api/user/one/"+userData.id).then((data)=>{
        setUserData(data.data);
    }).catch((err)=>{
        console.log(err);
    })
  }

  const AccountDelete = ()=>{
    let user = JSON.parse(localStorage.getItem("userData"));
    axiosInstance.patch("/api/user/disActive/"+user.id).then((data)=>{
        message.success("Ustunlikli!");
        setOpen(false);
        logout();
        history.push({pathname:"/home"});
    }).catch((err)=>{
        console.log(err);
        message.warn("Gaytadan Barlan!");
    })
  }
    return ( 
        <div className="w-full min-h-[70vh] mt-[100px]">
            <Drawer
                 width={340}
                 placement="right"
                 closable={true}
                 mask={true}
                 maskClosable={true}
                 onClose={()=>setOpenChange(false)}
                 visible={openChange}>
                          <div className="w-full text-[#161616] text-left text-[16px] font-sans font-[400]">
                                <h3 className=" font-sans">Ady familiýasy:</h3>
                                <input onChange={(e)=>setUserData({...userData,fname:e.target.value})} value={userData?.fname} type="text" className="w-full rounded-[4px] outline-none border-[1px] p-1 border-blue mb-[18px] font-sans" />
                                <h3 className="  font-sans">Telefon nomer:</h3>
                                <input onChange={(e)=>setUserData({...userData,phoneNumber:e.target.value})} value={userData?.phoneNumber} type="text" className="w-full rounded-[4px] outline-none border-[1px] p-1 border-blue mb-[18px] font-sans" />
                                <h3 className="  font-sans">Edara ady:</h3>
                                <input onChange={(e)=>setUserData({...userData,companyName:e.target.value})} value={userData?.companyName} type="text" className="w-full rounded-[4px] outline-none border-[1px] p-1 border-blue mb-[18px] font-sans" />
                                <h3  className="  font-sans">E-mail:</h3>
                                <input disabled  value={userData?.email}  type="text" className="cursor-not-allowed w-full rounded-[4px] outline-none border-[1px] p-1 border-blue mb-[18px] font-sans" />
                                <h3 className="mb-[28px] font-[600] font-sans">
                                    <span onClick={()=>setOpenChange(false)} className="text-[#D33333] underline font-sans cursor-pointer">Cancel</span> 
                                    <span onClick={()=>changeUser()} className="text-[#27AE60] underline font-sans ml-[30px] cursor-pointer">Change</span></h3>
                        
                            </div>
                 </Drawer>
                <div className="h-[72px] w-full pl-[30px] mb-[20px] bg-[#F7F7FA] rounded-[10px] font-sans font-[600] text-[20px] text-black leading-[72px] text-left">
                My profile
                </div>

               <div className="w-full bg-[#F7F7FA] rounded-[10px] p-[30px] flex justify-start flex-wrap">
                    <div className="w-[250px] text-[#161616] text-left text-[16px] font-sans font-[400]">
                        <h3 className="md:mb-[28px] mb-0 font-sans">Ady familiýasy:</h3>
                        <h3 className=" md:hidden block  mb-[28px] font-[600]">{userData?.fname}</h3>
                        <h3 className="md:mb-[28px] mb-0 font-sans">Telefon nomer:</h3>
                        <h3 className=" md:hidden block mb-[28px] font-[600] font-sans">+{userData?.phoneNumber}</h3>
                        <h3 className="md:mb-[28px] mb-0 font-sans">Edara ady:</h3>
                        <h3 className=" md:hidden block mb-[28px] font-[600] font-sans">{userData?.companyName}</h3>
                        <h3 className="md:mb-[28px] mb-0 font-sans">E-mail:</h3>
                        <h3 className="md:hidden block mb-[28px] font-[600] font-sans">{userData?.email}</h3>
                        <h3 className="md:mb-[28px] mb-0 font-sans">Accaunt</h3>
                        <h3 className="md:hidden block mb-[28px] font-[600] font-sans">
                            <span onClick={()=>setOpen(true)} className="text-[#D33333] underline font-sans cursor-pointer">Accaunt delete</span> 
                            <span onClick={()=>setOpenChange(true)} className="text-[#27AE60] underline font-sans ml-[30px] cursor-pointer">Change</span></h3>
                    </div>
                    <div className="md:block hidden w-auto text-[#161616] text-left text-[16px] font-sans font-[600]">
                        <h3 className="mb-[28px] font-[600]">{userData?.fname}</h3>
                        <h3 className="mb-[28px] font-[600] font-sans">+{userData?.phoneNumber}</h3>
                        <h3 className="mb-[28px] font-[600] font-sans">{userData?.companyName}</h3>
                        <h3 className="mb-[28px] font-[600] font-sans">{userData?.email}</h3>
                        <h3 className="mb-[28px] font-[600] font-sans">
                            <span onClick={()=>setOpen(true)} className="text-[#D33333] underline font-sans cursor-pointer">Accaunt delete</span> 
                            <span onClick={()=>setOpenChange(true)} className="text-[#27AE60] underline font-sans ml-[30px] cursor-pointer">Change</span></h3>
                    </div>
               </div>

               <Modal 
                visible={open}  
                onCancel={()=>setOpen(false)}
                backdrop={true}
                footer={false} 
                className="!rounded-[10px] !min-w-[320px] !ml-auto !mr-auto" >
               <div className="w-full">
                        <div className="w-full flex justify-center mt-[10px]">
                            <img className="object-contain h-[113px]" src={trash} alt="icon" />
                        </div>
                        <h1 className="w-full text-[28px] font-[700] text-black font-sans  text-center">Are you sure?</h1>
                        <p className="w-full text-[16px] font-[400] text-black font-sans  text-center">Are you sure to delete account, you <br /> will not able to recover it</p>

                        <div className="w-full flex justify-evenly mt-[20px] mb-[10px] ">
                            <button onClick={()=>setOpen(false)} className="  h-[50px] w-[201px] border-[1px] border-[#6D757D] hover:bg-blue hover:text-white font-sans text-[#6D757D] rounded-[8px] text-[18px] font-[600]">Cancel</button>
                            <button onClick={()=>AccountDelete()} className="bg-[#D33333] hover:bg-[#ac2b2b] h-[50px] w-[201px] font-sans text-white rounded-[8px] text-[18px] font-[600]">Delete account</button>
                        </div>
                    </div>
                </Modal>
              
        </div>
    )
}

export default Profile;
import React, { useContext, useEffect, useState }  from "react";

import {Link,useHistory} from "react-router-dom";
import {  Drawer, Modal } from 'antd';
import { SebedimContext } from "../context/Sebedim";
import { DownOutlined, UpOutlined,CheckOutlined } from '@ant-design/icons';
import { axiosInstance } from "../utils/axiosIntance";
import { message } from "antd";
import  user  from "../img/user.svg";
import  userIcon  from "../img/user.png";
import lock from "../img/lock-closed.png";
import document from "../img/document.png";
import key from "../img/key.png";
import logo from "../img/logo.png";
import userCircle from "../img/user-circle.png";
import notes from "../img/notes.png"

import { isLogin,logout } from "../utils/index";


const Header = ()=>{

  const history = useHistory();
  const {dil,ChangeDil} = useContext(SebedimContext)
  const [open,setOpen] = useState(false);
  const [openMenu,setOpenMenu] = useState(false);

  const [lang,setLang] = useState(false);

  const [SignUpCheck,setSignUpCheck] = useState(false);
  const [SignUpMail,setSignUpMail] = useState("");
  const [SignUpCode,setSignUpCode] = useState(false);
  const [SignUp,setSignUp] = useState(true);
  const [timer,setTimer] = useState(60);
  const [reSend,setResend] = useState(false);

  const [Code,SetCode] = useState("");

  const [SignUpData,setSignUpData] = useState(false);

  const [UserData,setUserData] = useState({name:"",companyName:"",phoneNumber:"",password:"",conpassword:""});

  const [login,setLogin] = useState(false);
  const [loginData,setLoginData] = useState({email:"",password:""})
  const [loginCheck,setLoginCheck] = useState(false)
  const [forgot,setForgot] = useState(false);
  const [forgotEmail,setForgotEmail] = useState("");
  const [forgotCheck,setForgotCheck] = useState(false);
  const [forgotCode,setForgotCode] = useState("");
  const [forgotData,setForgotData] = useState(false);
  const [forgotPass,setForgotPass] = useState("");
  const [forgotPass2,setForgotPass2] = useState("");
  const EnterMail = ()=>{
    if(SignUpMail.length>0 && SignUpMail.includes("@")){
        
        axiosInstance.post("/api/send/code",{
            email:SignUpMail
        }).then((data)=>{
            if(data.data==="Successfully!"){
                setSignUpCode(true);
                setSignUp(false);
            }
        }).catch((err)=>{
            console.log(err);
        })
    }else{
        message.warn("Must be email!")
    }
  }
  const DidNorArriv = (email)=>{
    setResend(true);
    axiosInstance.post("/api/send/code",{
        email:email
    }).then((data)=>{
        if(data.data==="Successfully!"){
           
        }
    }).catch((err)=>{
        console.log(err);
    })
  }
    
  useEffect(()=>{
    if(reSend){
        const time = setTimeout(()=>{
            setTimer(timer-1);
        },1000);
    
        if(timer==0){
            clearTimeout(time);
            setResend(false);
        }
    }
  },[timer,reSend])
 

  const checkCode = ()=>{
    axiosInstance.post("/api/check/code",{
        code:Code,
        email:SignUpMail
    }).then((data)=>{
        if(data.data==true){
            setSignUpData(true);
            setSignUpCode(false);
        }else{
            message.warn("Tassyklayjy kodynyz yalnysh!")
        }
    }).catch((err)=>{

    })
  }

  const CreateUser = async()=>{
    if(UserData.password===UserData.conpassword){
        axiosInstance.post("/api/user/create",{
            fname:UserData.name,
            lastname:"",
            phoneNumber:UserData.phoneNumber,
            email:SignUpMail,
            password:UserData.password,
            companyName:UserData.companyName
        }).then((data)=>{
            if(data.data.msg=="Suссessfully"){
                localStorage.setItem("userData",JSON.stringify(data.data));
                message.success("Ustunlikli!");
                history.push({
                    pathname:"/personal"
                })
            }else{
                if(data.data.msg=="Bu emailde ulanyjy onden bar."){
                    message.warn("Bu emailde ulanyjy onden bar.")
                }else{
                    message.warn("Gaytadan Barlan!")
                }
            }
        }).catch((err)=>{
            console.log(err);
        })
    }else{
        message.warn("Confirm password wrong!")
    }
  }

  const LoginUser = async()=>{
    axiosInstance.post("/api/user/login",{
        email:loginData.email,
        password:loginData.password
    }).then((data)=>{
        console.log(data.data)
        if(data.data.login==true){
            localStorage.setItem("userData",JSON.stringify(data.data));
            message.success("Ustunlikli!");
            history.push({
                pathname:"/personal"
            })
        }else{
            if(data.data.msg=="Siz DisActive edilen!"){
                message.warn("Siz DisActive edilen!")
            }else if(data.data.msg=="Siziň ulanyjy adyňyz ýa-da açar sözüňiz nädogry!" || data.data.login==false){
                message.warn("Siziň ulanyjy adyňyz ýa-da açar sözüňiz nädogry!");
            }else if(data.data.msg=="Hasaba alynmadyk ulanyjy!"){
                message.warn("Hasaba alynmadyk ulanyjy!");
            }else{
                message.warn("Gaytadan Barlan!")
            }
        }
    }).catch((err)=>{
        console.log(err);
    })
  }

  const forgotMail = async()=>{
    axiosInstance.post("/api/send/code",{
        email:forgotEmail
    }).then((data)=>{
        if(data.data==="Successfully!"){
            setForgotCheck(true);
            setForgot(false);
        }
    }).catch((err)=>{
        console.log(err);
    })
  }

  const checkCodeForgot = ()=>{
    axiosInstance.post("/api/check/code",{
        code:forgotCode,
        email:forgotEmail
    }).then((data)=>{
        console.log(data)
        if(data.data==true){
            setForgotData(true);
            setForgotCheck(false);
        }else{
            message.warn("Tassyklayjy kodynyz yalnysh!")
        }
    }).catch((err)=>{

    })
  }

  const UpdatePassword = async()=>{
    axiosInstance.patch("/api/user/forgot",{
        password:forgotPass,
        email:forgotEmail
    }).then((data)=>{
        console.log(data.data)
        if(data.data.msg="Suссessfully"){
            localStorage.setItem("userData",JSON.stringify(data.data));
            message.success("Ustunlikli!");
            history.push({
                pathname:"/personal"
            })
        }else{
            message.warn("Gaytadan Barlan!")
        }
    }).catch((err)=>{
        console.log(err);
    })
  }

    return(
        <header className="font-sans sticky top-0 h-[75px] z-50 bg-blue">
            <Drawer
                 width={320}
                 placement="right"
                 closable={true}
                 mask={true}
                 maskClosable={true}
                 onClose={()=>setOpenMenu(false)}
                 visible={openMenu}
                 headerStyle={{display:"none"}}
                 bodyStyle={{padding:"0px"}}
                 >

                    <div className=" bg-blue w-full h-full p-[25px]">
                        <div className="w-full flex justify-between">
                            <img src={logo} className="object-contain h-[45px]" alt="" />
                            <h1 onClick={()=>setOpenMenu(false)} className="cursor-pointer leading-[45px] font-sans font-bold text-white text-[30px]">X</h1>
                        </div>
                        <div className=" h-auto w-full justify-between  items-center leading-[45px] select-none">
                            <h3 className="font-sans  text-[16px]   h-auto pl-3 pr-3 border rounded-[2px] border-none font-medium   text-white hover:bg-blueHover  hover:font-semibold pointer " onClick={()=>history.push({pathname:"/home"})}> Main page</h3>
                            <h3 className="font-sans  text-[16px]  h-auto pl-3 pr-3 border rounded-[2px] border-none font-medium   text-white hover:bg-blueHover  hover:font-semibold  pointer" onClick={()=>history.push({pathname:"/about"})}>About us</h3>
                            <h3 className="font-sans  text-[16px]   h-auto pl-3 pr-3 border rounded-[2px] border-none font-medium   text-white hover:bg-blueHover  hover:font-semibold  pointer"onClick={()=>history.push({pathname:"/services"})}>Services</h3>
                            <h3 className="font-sans  text-[16px]   h-auto pl-3 pr-6 border rounded-[2px] border-none font-medium   text-white hover:bg-blueHover  hover:font-semibold  pointer relative ">Corridors <span className="absolute top-0 ml-2 mr-2 text-[14px]"><DownOutlined /></span> </h3>
                            <h3 className="font-sans  text-[16px]   h-auto pl-3 pr-3 border rounded-[2px] border-none font-medium   text-white hover:bg-blueHover  hover:font-semibold pointer " onClick={()=>history.push({pathname:"/news"})}>New</h3>
                            <h3 className="font-sans  text-[16px]   h-auto pl-3 pr-3 border rounded-[2px] border-none font-medium   text-white hover:bg-blueHover  hover:font-semibold  pointer" onClick={()=>history.push({pathname:"/contacts"})}>Contact us</h3>
                            {   isLogin() &&    <h3 onClick={()=>{logout();history.push({pathname:"/home"})}} className="font-sans  text-[16px]   h-auto pl-3 pr-3 border rounded-[2px] border-none font-medium   text-white hover:bg-blueHover  hover:font-semibold  pointer">Logout</h3>}  

                            <div className="w-full flex justify-end mt-10">
                                <h3 className="font-sans  text-[16px]   h-auto pl-3 pr-3 border rounded-[2px] border-none font-medium   text-white hover:bg-blueHover  hover:font-semibold pointer " > TM </h3>
                                <h3 className="font-sans  text-[16px]  h-auto pl-3 pr-3 border rounded-[2px] border-none font-medium   text-white hover:bg-blueHover  hover:font-semibold  pointer"  > RU </h3>
                                <h3 className="font-sans  text-[16px]   h-auto pl-3 pr-3 border rounded-[2px] border-none font-medium   text-white hover:bg-blueHover  hover:font-semibold  pointer" > EN </h3>
                                
                            </div>
                        </div>
                    </div>
                 </Drawer>
            <div className="inline-flex justify-between xl:w-[90%] lg:w-[95%]   sm:w-[90%] cursor-pointer">
                <img onClick={()=>history.push({pathname:"/"})} className="object-contain select-none" src={logo} alt="logo"/>
                <div className="md:hidden sm:hidden lg:inline-flex h-auto  xl:w-[50%] lg:w-[60%] justify-between  items-center leading-[45px] select-none">
                    <h3 className="font-sans xl:text-[16px] lg:text-[15px] h-auto pl-3 pr-3 border rounded-[2px] border-none font-medium   text-white hover:bg-blueHover  hover:font-semibold pointer " onClick={()=>history.push({pathname:"/home"})}> Main page</h3>
                    <h3 className="font-sans xl:text-[16px] lg:text-[15px] h-auto pl-3 pr-3 border rounded-[2px] border-none font-medium   text-white hover:bg-blueHover  hover:font-semibold  pointer" onClick={()=>history.push({pathname:"/about"})}>About us</h3>
                    <h3 className="font-sans xl:text-[16px] lg:text-[15px] h-auto pl-3 pr-3 border rounded-[2px] border-none font-medium   text-white hover:bg-blueHover  hover:font-semibold  pointer"onClick={()=>history.push({pathname:"/services"})}>Services</h3>
                    <h3 className="font-sans xl:text-[16px] lg:text-[15px] h-auto pl-3 pr-6 border rounded-[2px] border-none font-medium   text-white hover:bg-blueHover  hover:font-semibold  pointer ">Corridors <span className="absolute top-3.5 ml-1 mr-2 text-[14px]"><DownOutlined /></span> </h3>
                    <h3 className="font-sans xl:text-[16px] lg:text-[15px] h-auto pl-3 pr-3 border rounded-[2px] border-none font-medium   text-white hover:bg-blueHover  hover:font-semibold pointer " onClick={()=>history.push({pathname:"/news"})}>New</h3>
                    <h3 className="font-sans xl:text-[16px] lg:text-[15px] h-auto pl-3 pr-3 border rounded-[2px] border-none font-medium   text-white hover:bg-blueHover  hover:font-semibold  pointer" onClick={()=>history.push({pathname:"/contacts"})}>Contact us</h3>
                </div>
                <div className="md:hidden sm:hidden lg:inline-flex w-auto h-auto items-center ">
                    <h3 onClick={()=>setLang(!lang)} className="font-sans xl:text-[16px] xl:mr-[30px] lg:text-[15px] lg:mr-[25px] sm:mr-[10px] pr-[30px] h-auto leading-[45px] text-white border-r-2 select-none">English <span className="absolute top-3.5 ml-1 mr-2 text-[14px]">{!lang &&<DownOutlined /> }{lang && <UpOutlined />}</span></h3>
  { !isLogin() &&   <img onClick={()=>setOpen(true)} className="  xl:mr-[20px] lg:mr-[15px] md:mr-[10px] mt-[-10px] select-none  " src={user} alt="user" />}
 {isLogin() &&      <img onClick={()=>history.push({pathname:"/personal"})} className=" xl:mr-[20px] lg:mr-[15px] md:mr-[10px] mt-[-10px] select-none  " src={user} alt="user" />}
{   !isLogin() &&   <h3 onClick={()=>setOpen(true)} className="font-sans xl:text-[16px] md:text-[15px] xl:mr-[50px] leading-[75px] text-white select-none">Sign up</h3>}   
{   isLogin() &&    <h3 onClick={()=>{logout();history.push({pathname:"/home"})}} className="font-sans xl:text-[16px] lg:text-[15px] xl:mr-[50px] lg:mr-[40px] md:mr-[30px] leading-[75px] text-white select-none">Logout</h3>}                 
  {lang && <div className="absolute rounded-[6px] bg-[#fffc] w-[160px] h-[140px] top-[60px] p-[10px]">
                            <div className="w-full h-[36px] bg-blue rounded-[4px] p-[8px] font-sans text-[14px] text-white mb-[6px] "> <span className="absolute top-4 ml-1 mr-2 left-5 text-[12px]">{<CheckOutlined />} </span>Русский</div>
                            <div className="w-full h-[36px]  rounded-[4px] p-[8px] font-sans text-[14px] mb-[6px] text-black bg-[#fff] hover:bg-[#c0bebec1] ">Русский</div>
                            <div className="w-full h-[36px]  rounded-[4px] p-[8px] font-sans text-[14px] text-black bg-[#fff] hover:bg-[#c0bebec1]">Русский</div>
                    </div>}
                </div>
               
                <div className=" w-auto sm:inline-flex md:inline-flex lg:hidden h-auto items-center leading-[75px]">
                  <h3   className="font-sans   leading-[75px] text-blue select-none">  s </h3>
                  { !isLogin() &&    <img onClick={()=>setOpen(true)} className="  select-none  mr-4 " src={userCircle} alt="user" />}
                  { isLogin() &&    <img onClick={()=>history.push({pathname:"/personal"})} className="  select-none  mr-4 " src={userCircle} alt="user" />}
                 
                <img onClick={()=>setOpenMenu(true)} className="  select-none   " src={notes} alt="user" />
                 
                </div>
            </div>
            <Modal  
                visible={open}  
                onCancel={()=>setOpen(false)}
                backdrop={true}
                footer={false} 
                className="!rounded-[10px]" >
                   {SignUp && <div className="w-full">
                        <div className="w-full flex justify-center mt-[10px]">
                            <img className="object-contain h-[113px]" src={userIcon} alt="icon" />
                        </div>
                        <h1 className="w-full text-[28px] font-[700] text-black font-sans  text-center">Become a member</h1>
                        <p className="w-full text-[16px] font-[400] text-black font-sans  text-center">Enter your email address <br /> to become a member</p>

                        <input onChange={(e)=>setSignUpMail(e.target.value)} value={SignUpMail} className="font-sans border-[1px] border-[#E3E7EE] text-[16px] text-[#999999] pl-[15px] bg-[#F2F6FF] rounded-[6px] h-[50px] w-full text-left" type="text" name="email" placeholder="Email address" />
                        
                        <div className="w-full flex justify-center mt-[22px] ">
                            <input onClick={()=>setSignUpCheck(!SignUpCheck)} checked={SignUpCheck} className="h-[24px] w-[24px] border-[1px] border-[#E3E7EE] rounded-[4px] cursor-pointer" type="checkbox" name="check" id="check"/>
                            <label htmlFor="check" className="select-none cursor-pointer ml-[15px] font-sans text-[16px] text-black font-[400]">I accept terms and conditions</label>
                        </div>
                        <div className="w-full flex justify-center mt-[30px] mb-[10px] ">
                            <button onClick={()=>EnterMail()} disabled={!SignUpCheck} className={`${!SignUpCheck && "bg-[#d7e4f6] cursor-not-allowed"} `+"bg-blue h-[50px] w-[201px] font-sans text-white rounded-[10px] text-[18px] font-[600]"}>Next</button>
                        </div>
                        <div className="mt-[22px] w-full flex justify-center">
                            <h3 className="text-[16px] font-[700] font-sans text-black  text-center">Do you have an account?</h3>
                            <h3 onClick={()=>{setSignUp(false);setLogin(true)}} className="text-[16px] ml-[30px] font-[700] font-sans text-blue  text-center ">Login</h3>
                        </div>
                    </div>}
                   {SignUpCode && <div className="w-full">
                        <div className="w-full flex justify-center mt-[10px]">
                            <img className="object-contain h-[113px]" src={lock} alt="icon" />
                        </div>
                        <h1 className="w-full text-[28px] font-[700] text-black font-sans  text-center">Verification code</h1>
                        <p className="w-full text-[16px] font-[400] text-black font-sans  text-center">Enter the code that came <br /> to your email address <br /> {SignUpMail}</p>

                        <input onChange={(e)=>{e.target.value.length<=6 && SetCode(e.target.value)}} value={Code} className="font-sans border-[1px] border-[#E3E7EE] text-[16px] text-[#999999] pl-[15px] bg-[#F2F6FF] rounded-[6px] h-[50px] w-full text-left" type="number"  placeholder="Code" />
                        
                        <div className="w-full flex justify-center mt-[22px] "> 
                            <h3 onClick={()=>{!reSend && DidNorArriv(SignUpMail)}}   className="select-none cursor-pointer ml-[15px] font-sans text-[16px] text-blue underline font-[400]">{reSend ? timer : "The code did not arrive"}</h3>
                        </div>
                        <div className="w-full flex justify-center mt-[30px] mb-[10px] ">
                            <button disabled={Code.length<6} onClick={()=>Code.length==6 &&checkCode()} className={`${Code.length<6 && "bg-[#d7e4f6] cursor-not-allowed"} `+"bg-blue h-[50px] w-[201px] font-sans text-white rounded-[10px] text-[18px] font-[600]"}>Next</button>
                        </div>
                        
                    </div>}
                  { SignUpData && <div className="w-full">
                        <div className="w-full flex justify-center">
                            <img className="object-contain h-[113px]" src={document} alt="icon" />
                        </div>
                        <h1 className="w-full text-[28px] font-[700] text-black font-sans  text-center">Personal information</h1>
                        <p className="w-full text-[16px] font-[400] text-black font-sans  text-center">Enter your information <br /> to subscribe</p>

                        <input value={UserData.name} onChange={(e)=>setUserData({...UserData,name:e.target.value})} className="mb-[15px] font-sans border-[1px] border-[#E3E7EE] text-[16px] text-[#999999] pl-[15px] bg-[#F2F6FF] rounded-[6px] h-[50px] w-full text-left" type="text"  placeholder="First name and last name" />
                        <input value={UserData.companyName} onChange={(e)=>setUserData({...UserData,companyName:e.target.value})} className="mb-[15px] font-sans border-[1px] border-[#E3E7EE] text-[16px] text-[#999999] pl-[15px] bg-[#F2F6FF] rounded-[6px] h-[50px] w-full text-left" type="text"  placeholder="Company name" />
                        <input value={UserData.phoneNumber} onChange={(e)=>setUserData({...UserData,phoneNumber:e.target.value})} className="mb-[15px] font-sans border-[1px] border-[#E3E7EE] text-[16px] text-[#999999] pl-[15px] bg-[#F2F6FF] rounded-[6px] h-[50px] w-full text-left" type="text"  placeholder="Phone number" />
                       <input value={UserData.password} onChange={(e)=>setUserData({...UserData,password:e.target.value})} className="mb-[15px] font-sans border-[1px] border-[#E3E7EE] text-[16px] text-[#999999] pl-[15px] bg-[#F2F6FF] rounded-[6px] h-[50px] w-full text-left" type="password"  placeholder="Password" />
                        <input value={UserData.conpassword} onChange={(e)=>setUserData({...UserData,conpassword:e.target.value})} className="font-sans border-[1px] border-[#E3E7EE] text-[16px] text-[#999999] pl-[15px] bg-[#F2F6FF] rounded-[6px] h-[50px] w-full text-left" type="password"  placeholder="Password replay" />
                        
                        <div className="w-full flex justify-center mt-[30px] ">
                            <button onClick={()=>CreateUser()} disabled={UserData.name.length==0 || UserData.companyName.length==0  || (UserData.password.length<8 || UserData.password!=UserData.conpassword)} className={`${(UserData.name.length==0 || UserData.companyName.length==0  || (UserData.password.length<8 || UserData.password!=UserData.conpassword))&& "bg-[#d7e4f6] cursor-not-allowed"} `+" bg-blue h-[50px] w-[201px] font-sans text-white rounded-[10px] text-[18px] font-[600]"}>Next</button>
                        </div>
                    </div>}


                    { login && <div className="w-full">
                        <div className="w-full flex justify-center">
                            <img className="object-contain h-[113px]" src={userIcon} alt="icon" />
                        </div>
                        <h1 className="w-full text-[28px] font-[700] text-black font-sans  text-center">Log in</h1>
                        <p className="w-full text-[16px] font-[400] text-black font-sans  text-center">Enter your email address <br /> and password to log in</p>

                        <input value={loginData.email} onChange={(e)=>setLoginData({...loginData,email:e.target.value})} className="mb-[15px] font-sans border-[1px] border-[#E3E7EE] text-[16px] text-[#999999] pl-[15px] bg-[#F2F6FF] rounded-[6px] h-[50px] w-full text-left" type="email" name="email"  placeholder="Email address" />
                        <input value={loginData.password} onChange={(e)=>setLoginData({...loginData,password:e.target.value})}  className="font-sans border-[1px] border-[#E3E7EE] text-[16px] text-[#999999] pl-[15px] bg-[#F2F6FF] rounded-[6px] h-[50px] w-full text-left" type="password"  placeholder="Password" />
                        
                        <div className="w-full flex justify-center mt-[12px] "> 
                            <h3 onClick={()=>{setForgot(true);setLogin(false)}} className="select-none cursor-pointer ml-[15px] font-sans text-[16px] text-blue underline font-[400]">Forgot password</h3>
                        </div>
                        <div className="w-full flex justify-center mt-[2px] ">
                            <input checked={loginCheck} onClick={()=>setLoginCheck(!loginCheck)} className="h-[24px] w-[24px] border-[1px] border-[#E3E7EE] rounded-[4px] cursor-pointer" type="checkbox" name="check" id="check"/>
                            <label htmlFor="check" className="select-none cursor-pointer ml-[15px] font-sans text-[16px] text-black font-[400]">I accept terms and conditions</label>
                        </div>
                        <div className="w-full flex justify-center mt-[20px] ">
                            <button onClick={()=>LoginUser()} disabled={(!loginCheck || loginData.email.length==0 || loginData.password.length==0)} className={`${(!loginCheck || loginData.email.length==0 || loginData.password.length==0) && "bg-[#d7e4f6] cursor-not-allowed"} `+"bg-blue h-[50px] w-[201px] font-sans text-white rounded-[10px] text-[18px] font-[600]"}>Login</button>
                        </div>
                        <div className="mt-[12px] w-full flex justify-center">
                            <h3 className="text-[16px] font-[700] font-sans text-black  text-center">Not a member yet?</h3>
                            <h3 onClick={()=>{setSignUp(true);setLogin(false)}} className="text-[16px] ml-[30px] font-[700] font-sans text-blue  text-center ">Sign up</h3>
                        </div>
                    </div>}
                    {forgot && <div className="w-full">
                        <div className="w-full flex justify-center mt-[10px]">
                            <img className="object-contain h-[113px]" src={key} alt="icon" />
                        </div>
                        <h1 className="w-full text-[28px] font-[700] text-black font-sans  text-center">Update password</h1>
                        <p className="w-full text-[16px] font-[400] text-black font-sans  text-center">Enter your email address if you <br /> want to update your password</p>

                        <input value={forgotEmail} onChange={(e)=>setForgotEmail(e.target.value)} className="font-sans border-[1px] border-[#E3E7EE] text-[16px] text-[#999999] pl-[15px] bg-[#F2F6FF] rounded-[6px] h-[50px] w-full text-left" type="text" name="email" placeholder="Email address" />
                        <div className="w-full flex justify-center mt-[12px] "> 
                            <h3 onClick={()=>{setForgot(false);setLogin(true)}} className="select-none cursor-pointer ml-[15px] font-sans text-[16px] text-blue underline font-[400]">Login</h3>
                        </div>
                        <div className="w-full flex justify-center mt-[30px] mb-[10px] ">
                            <button onClick={()=>forgotMail()} disabled={(forgotEmail.length==0 || !forgotEmail.includes("@"))} className={`${(forgotEmail.length==0 || !forgotEmail.includes("@"))&& "bg-[#d7e4f6] cursor-not-allowed"} `+"bg-blue h-[50px] w-[201px] font-sans text-white rounded-[10px] text-[18px] font-[600]"}>Next</button>
                        </div>
                    </div>}
                    {forgotCheck && <div className="w-full">
                        <div className="w-full flex justify-center mt-[10px]">
                            <img className="object-contain h-[113px]" src={lock} alt="icon" />
                        </div>
                        <h1 className="w-full text-[28px] font-[700] text-black font-sans  text-center">Verification code</h1>
                        <p className="w-full text-[16px] font-[400] text-black font-sans  text-center">Enter the code that came <br /> to your email address <br /> {forgotEmail}</p>

                        <input value={forgotCode} onChange={(e)=>{e.target.value.length<=6 && setForgotCode(e.target.value)}} className="font-sans border-[1px] border-[#E3E7EE] text-[16px] text-[#999999] pl-[15px] bg-[#F2F6FF] rounded-[6px] h-[50px] w-full text-left" type="number" name="email" placeholder="Code" />
                    
                        <div className="w-full flex justify-center mt-[22px] "> 
                            <h3 onClick={()=>{!reSend && DidNorArriv(forgotEmail)}}   className="select-none cursor-pointer ml-[15px] font-sans text-[16px] text-blue underline font-[400]">{reSend ? timer : "The code did not arrive"}</h3>
                        </div>
                        <div className="w-full flex justify-center mt-[20px] mb-[10px] ">
                            <button disabled={forgotCode.length<6} onClick={()=>{forgotCode.length==6 && checkCodeForgot()}} className={`${forgotCode.length<6 && "bg-[#d7e4f6] cursor-not-allowed"} ` + "bg-blue h-[50px] w-[201px] font-sans text-white rounded-[10px] text-[18px] font-[600]"}>Next</button>
                        </div>
                    </div>}
                    {forgotData && <div className="w-full">
                        <div className="w-full flex justify-center mt-[10px]">
                            <img className="object-contain h-[113px]" src={lock} alt="icon" />
                        </div>
                        <h1 className="w-full text-[28px] font-[700] text-black font-sans  text-center">Update password</h1>
                        <p className="w-full text-[16px] font-[400] text-black font-sans  text-center">Enter a new password</p>

                        <input value={forgotPass} onChange={(e)=>setForgotPass(e.target.value)} className="mb-[15px] font-sans border-[1px] border-[#E3E7EE] text-[16px] text-[#999999] pl-[15px] bg-[#F2F6FF] rounded-[6px] h-[50px] w-full text-left" type="password"  placeholder="New password" />
                        <input value={forgotPass2} onChange={(e)=>setForgotPass2(e.target.value)} className="font-sans border-[1px] border-[#E3E7EE] text-[16px] text-[#999999] pl-[15px] bg-[#F2F6FF] rounded-[6px] h-[50px] w-full text-left" type="password"  placeholder="New password replay" />
                    
                        <div className="w-full flex justify-center mt-[20px] mb-[10px] ">
                            <button onClick={()=>UpdatePassword()} disabled={(forgotPass.length<8 || forgotPass!=forgotPass2)} className={`${(forgotPass.length<8 || forgotPass!=forgotPass2) && "bg-[#d7e4f6] cursor-not-allowed "} `+"bg-blue h-[50px] w-[201px] font-sans text-white rounded-[10px] text-[18px] font-[600]"}>Next</button>
                        </div>
                    </div>}
            </Modal>
      </header>
    )
}

export default Header;
import React, { useEffect, useState } from 'react'
import {ArrowRightOutlined} from '@ant-design/icons';
import HomeFirst from "../../img/homeFirst.png";
import Lottie from "react-lottie";
import animationData from "../../lotti/Otly.json";
import { useSizeComponents } from "../../components/sizeComponent";

const FirstSection = ()=>{
    const [width,height] = useSizeComponents();
    const [ initialWidth, setInitialWidth] = useState("100%")
    const defaultOptions = {
        loop:true,
        autoplay:true,
        animationData:animationData,
        resizeMode :'cover',
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      }

      useEffect(()=>{
        // if(width>879){
        //   setInitialWidth("30%")
        // }else if(width>450){
        //   setInitialWidth("450px")
        // }else if(width>400){
        //   setInitialWidth("350px")
        // }else{
        //   setInitialWidth("320px")
        // }
  },[width])

     return (
        <div className="w-full inline-flex  flex-wrap-reverse min-h-[90vh] justify-between md:mt-[7rem] mt-[3rem]">
            <div className="md:w-[40%] w-full ">
                <h2 className="font-sans md:text-[36px] text-[24px] text-left font-bold leading-[50px] text-black">Order from anywhere in Turkmenistan and we will deliver it to you in a convenient way.</h2>
                <p className="font-sans md:mt-[50px] mt-[30px] text-left md:text-[18px] text-[16px] text-[#10181F]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className="w-full flex justify-start md:mt-[150px] mt-[50px]">
                    <button  className="font-sans ml-0 bg-blue p-0 h-[60px] w-[225px] rounded-[10px] md:text-[18px] text-[16px] text-white leading-[60px]" > Continue <span className=" h-full   flex justify-end mr-[50px] align-center !-mt-[38px] "><ArrowRightOutlined  /> </span></button>
                </div>
            </div> 
            <div className='md:w-[60%] w-full md:mb-0 mb-6'>
            <div className="w-[100%]  mt-[50px]">
                {/* <img className="" src={HomeFirst} alt="surat" /> */}
                <Lottie
                    options={defaultOptions}
                    // height={500}
                    width={initialWidth}
                    resizeMode = 'cover'
                    >

                </Lottie>
            </div>
            </div>
       </div>
     )
}

export default FirstSection;
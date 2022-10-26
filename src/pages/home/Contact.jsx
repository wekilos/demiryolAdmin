import React from "react";

import turkmenistan from "../../img/turkmenistan.png"
const ContactUs = ()=>{
    return(
        <div className="w-full min-h-[100vh] ">
            <h1 className="md:text-right text-left w-full font-sans font-bold md:text-[36px] text-[24px] text-black mt-[100px]">Contact us</h1>
            <div className="flex w-full flex-wrap-reverse">
                <div className="md:w-1/2 w-full bg-contactUs bg-no-repeat bg-left-top bg-contain lg:min-h-[100vh] min-h-full md:pl-[100px]">
                <h3 className="text-[24px] font-sans font-bold text-[#10181F] text-left">To contact</h3>

                <dl className="text-left">
                    <dt className="text-[16px] font-sans text-[#999999]">Address:</dt>
                    <dd className="text-[16px] font-sans text-[#10181F]">Saparmyrat Turkmenbashy the Great Avenue. 7,<br /> Ashgabat, Turkmenistan, 744007.</dd>
                </dl>
                <dl className="text-left">
                    <dt className="text-[16px] font-sans text-[#999999]">Phones:</dt>
                    <dd className="text-[16px] font-sans text-[#10181F] mb-0">+993 12 383423</dd>
                    <dd className="text-[16px] font-sans text-[#10181F] mt-0">+993 12 383138</dd> 
                </dl>
                <dl className="text-left">
                    <dt className="text-[16px] font-sans text-[#999999]">Fax:</dt>
                    <dd className="text-[16px] font-sans text-[#10181F]">+993 12 383423</dd>
                </dl>
                <dl className="text-left">
                    <dt className="text-[16px] font-sans text-[#999999]">Email:</dt>
                    <dd className="text-[16px] font-sans text-[#10181F]">tdy.ekspress@gmail.com</dd>
                </dl>
                </div>
                <div className="md:w-1/2 w-full">
                        <p className="text-[18px] text-black font-sans md:text-right text-left ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <img src={turkmenistan} className="object-contain mt-[50px]" alt="" />
                </div>
            </div>
        </div>
    )
}

export default ContactUs;
import React from "react";

import service1 from "../../img/service1.png";
import service2 from "../../img/service2.png";
import service3 from "../../img/service3.png";

import ser1 from "../../img/ser1.png";
import ser2 from "../../img/ser2.png";
import ser3 from "../../img/ser3.png";
import ser4 from "../../img/ser4.png";

const OurServices = ()=>{
    return (
        <div className="w-full min-h-[100vh] lg:mt-[50px] mt-[40px]">
            <h3 className="w-full lg:text-right text-left font-sans text-[24px] text-black">Our services</h3>
            <div className="flex flex-wrap-reverse">
                <div className="lg:w-1/2 w-full">
                    <div className="w-full flex mt-[30px]">
                        <img className="object-contain lg:w-auto w-[45%] lg:mr-[50px] mr-[5%]" src={ser1} alt="service" />
                        <img className="object-contain lg:w-auto w-[45%] " src={ser2} alt="service" />
                    </div>
                    <div className="w-full flex lg:ml-[50px] ml-[20px] lg:mt-[50px] mt-[20px]">
                        <img className="object-contain lg:w-auto w-[45%] lg:mr-[50px] mr-[5%]" src={ser3} alt="service" />
                        <img className="object-contain lg:w-auto w-[45%] " src={ser4} alt="service" />
                    </div>
                </div>
                <div className="lg:w-1/2 w-full">
                    <h1 className="font-sans font-bold md:text-[36px] text-[24px] text-black lg:text-right text-left">Our main activities on the basis of cargo and transportation</h1>
                    <p className="font-sans text-[18px] text-black lg:text-right text-left lg:mt-[50px] mt-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div className="lg:flex hidden w-full justify-end mt-[50px]">
                        <img className="object-contain mr-[100px]" src={service1} alt="service" />
                    </div>
                    <div className="w-full lg:flex hidden -ml-[200px]">
                        <img src={service2} alt="service" />
                        <img src={service3} alt="service" />
                    </div>
                </div>
            </div>
            <div className="w-full ">
                    <div className="lg:hidden flex w-full justify-end mt-[50px]">
                        <img className="object-contain mr-[100px]" src={service1} alt="service" />
                    </div>
                    <div className="w-full lg:hidden flex ">
                        <img src={service2} className="object-contain w-1/2" alt="service" />
                        <img src={service3} className="object-contain w-1/2" alt="service" />
                    </div>
            </div>
        </div>
    )
}

export default OurServices;
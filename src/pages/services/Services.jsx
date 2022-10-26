import React from "react";

import ser1 from "../../img/ourser1.png";
import ser2 from "../../img/ourser2.png";
import download from "../../img/download.png";
import file from "../../img/file.png";
const Services = ()=>{
    return (
        <div className="w-[90%] ml-auto mr-auto lg:flex block md:pt-[100px] pt-[50px]">
            <div className="lg:w-1/2 w-full">
                <h1 className="font-sans md:text-[36px] text-[24px] text-black font-black text-left">Order from anywhere in Turkmenistan and we will deliver it to you in a convenient way.</h1>
                <p className="font-sans text-black md:text-[18px] text-[16px] text-left md:mt-[50px] mt-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <h1 className="font-sans md:text-[36px] text-[24px] text-black font-black text-left md:mt-[50px] mt-[30px]">Our services</h1>
                <p className="font-sans md:text-[18px] text-[16px] text-left text-[#000] md:mt-[50px] mt-[30px]">Free access to all available loads Haul dry van, reefer, and power only  loads Automated and Suggested Reloads reduce your  empty miles “They keep me on lanes I prefer to run, and get me home when I want. By combining loads from different shippers</p>
                <h1 className="font-sans md:text-[36px] text-[24px] text-black font-black text-left md:mt-[50px] mt-[30px]">Our mission</h1>
                <p className="font-sans md:text-[18px] text-[16px] text-left text-[#000] md:mt-[50px] mt-[30px]">They keep me on lanes I prefer to run, and get me home when I want. By combining loads from different shippers</p>
                <h1 className="font-sans md:text-[36px] text-[24px] text-black font-black text-left md:mt-[50px] mt-[30px]">Пустой заявка</h1>
                <p className="font-sans md:text-[18px] text-[16px] text-left text-[#000] md:mt-[50px] mt-[30px]"> Вы можете получить пустую копию анкеты здесь! </p>
                <div className="w-full md:flex block justify-evenly">
                    <div className="flex">
                        <img className="mr-4 object-contain" src={file} alt="file" />
                        <p className="mr-4 mt-4 text-left font-sans text-blue text-[16px] font-[600]"> образец письма обр <br /> <span className="text-[#999999] text-[14px]"> DOCX, 16 кб</span></p>
                        <a className="!pt-4"  href="/docs/образец письма обр..docx"> <img className="object-contain rounded-[4px] cursor-pointer " src={download} alt="download" /></a>
                    </div>
                    <div className="flex">
                        <img className="mr-4 object-contain" src={file} alt="file" />
                        <p className="mr-4 mt-4 text-left font-sans text-blue text-[16px] font-[600]"> образец ЗАЯВКИ <br /> <span className="text-[#999999] text-[14px]"> DOCX, 16 кб</span></p>
                        <a className="!pt-4" href="/docs/образец ЗАЯВКИ.docx" target="_blank"><img className="object-contain rounded-[4px] cursor-pointer" src={download} alt="download" /></a>
                    </div>
                </div>
            </div>
            <div>
                <img src={ser1} className="object-contain w-[70%] ml-auto mr-0" alt="" />
                <img src={ser2} className="object-contain w-[70%] ml-0 mr-auto mt-[50px]" alt="" />
            </div>
        </div>
    )
}

export default Services;
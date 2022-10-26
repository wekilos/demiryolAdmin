import React from "react";

import turkmenistan from "../../img/turkmenistan.png";

const About = ()=>{
    return (
        <div className="w-[90%] ml-auto mr-auto">
            <div className="w-full flex md:mt-[4rem] mt-[2rem] md:flex-nowrap flex-wrap-reverse">
                <div className="md:w-1/2 w-full md:mt-0 mt-4">
                    <img className="object-contain" src={turkmenistan} alt="carta" />
                </div>
                <div className="md:w-1/2 full">
                    <h1 className="font-sans md:text-[36px] text-[24px] text-black text-right font-bold">
                    About us - Our company will meet 
                    your requirements and meet all 
                    your requirements
                    </h1>
                    <p className="font-sans md:text-[18px] text-[16px] text-black text-right">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
            <div className="w-full mt-[4rem]">
                <h1 className="font-sans md:text-[36px] text-[24px] font-bold text-[#10181F]">Lorem ipsum</h1>
                <p className="font-sans md:text-[18px] text-[16px] text-[#272D3E] w-[90%] ml-auto mr-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <div className=" md:w-[60%] w-[90%] mt-[60px]   ml-auto mr-auto md:flex hidden justify-center  pt-[30px] pb-[30px] rounded-[5px] bg-aboutBack shadow-about backdrop-sepia-[2px] ">
                    <div className="border-r-[2px] border-blue pr-[50px]">
                        <h1 className="font-sans text-[30px] text-[#272D3E] font-[700] m-0 ">15+</h1>
                        <p className="font-sans text-[14px] text-[#272D3E] m-0">Closed <br /> projects</p>
                    </div>
                    <div className="border-r-[2px] border-blue pr-[50px] pl-[50px]">
                        <h1 className="font-sans text-[30px] text-[#272D3E] font-[700] m-0 ">20+</h1>
                        <p className="font-sans text-[14px] text-[#272D3E] m-0">Satisfied <br /> clients</p>
                    </div>
                    <div className="pl-[50px]">
                        <h1 className="font-sans text-[30px] text-[#272D3E] font-[700] m-0 ">100%</h1>
                        <p className="font-sans text-[14px] text-[#272D3E] m-0">Quality and <br /> reliability</p>
                    </div>
            </div>
            <div className=" md:w-[60%] w-[80%] mt-[60px]   ml-auto mr-auto md:hidden block justify-center  pt-[30px] pb-[30px] rounded-[5px] bg-aboutBack shadow-about backdrop-sepia-[2px] ">
                    <div className="pt-[20px] pb-[20px]">
                        <h1 className="font-sans text-[30px] text-[#272D3E] font-[700] m-0 ">15+</h1>
                        <p className="font-sans text-[14px] text-[#272D3E] m-0">Closed projects</p>
                    </div>
                    <hr style={{borderWidth:"1px"}} className="ml-auto mr-auto w-[70px] border-blue" />
                    <div className="pb-[20px] pt-[20px]">
                        <h1 className="font-sans text-[30px] text-[#272D3E] font-[700] m-0 ">20+</h1>
                        <p className="font-sans text-[14px] text-[#272D3E] m-0">Satisfied  clients</p>
                    </div>
                    <hr style={{borderWidth:"1px"}} className="ml-auto mr-auto w-[70px] border-blue" />
                    <div className="pb-[20px] pt-[10px]">
                        <h1 className="font-sans text-[30px] text-[#272D3E] font-[700] m-0 ">100%</h1>
                        <p className="font-sans text-[14px] text-[#272D3E] m-0">Quality and  reliability</p>
                    </div>
            </div>
        </div>
    )
}

export default About;
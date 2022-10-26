import React from "react"
import StepCard from "./stepCard";
import train2 from "../../img/train2.png"
import { CheckCircleOutlined} from '@ant-design/icons';
import check from "../../img/check.png";

const StepByStep = ()=>{
    return(
        <div className="w-full min-h-[100vh] md:mt-[8rem] mt-[4rem]">
            <h1 className="font-sans text-black md:text-[36px] text-[24px] font-bold text-left md:w-1/2 w-full">Step-by-step handling of cargo transportation</h1>
            <div className="w-full flex flex-wrap justify-between">
                <div className="md:w-1/2 w-full md:mt-[60px] mt-[30px]">
                    <StepCard dash={true} number={1} text={"Our expert will contact you shortly after analyzing your business requirements."}/>
                    <StepCard dash={true} number={2} text={"At your request, we sign a non-disclosure agreement to ensure the highest level of confidentiality."}/>
                    <StepCard dash={true} number={3} text={"Our pre-sales manager presents a comprehensive project proposal. It may include estimates, deadlines, resume lists, etc. for a specific situation."}/>
                    <StepCard dash={false} number={4} text={"The team assembled for your IT project can start implementation within ten working days."}/>

                    <div>
                        <p className="text-left text-black md:text-[18px] text-[16px] font-sans mt-[30px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
                <div className="md:w-1/2 w-full md:mt-[40px] mt-[20px]">
                    <div className="flex w-full justify-between flex-wrap">
                        <div className="flex md:w-1/2 w-full mt-[18px]">
                            <span className="text-blue text-[16px] leading-[30px]"><img src={check} className="object-contain" alt="" /></span>
                        <h3 className="font-sans ml-[10px] text-[#272D3E] text-[16px] leading-[30px]"> Modern high quality services </h3>
                        </div>
                        <div className="flex md:w-1/2 w-full mt-[18px]">
                            <span className="text-blue text-[16px] leading-[30px]"><img src={check} className="object-contain" alt="" /></span>
                        <h3 className="font-sans ml-[10px] text-[#272D3E] text-[16px] leading-[30px]"> Modern high quality services </h3>
                        </div>
                        <div className="flex md:w-1/2 w-full mt-[18px]">
                            <span className="text-blue text-[16px] leading-[30px]"><img src={check} className="object-contain" alt="" /></span>
                        <h3 className="font-sans ml-[10px] text-[#272D3E] text-[16px] leading-[30px]"> Modern high quality services </h3>
                        </div>
                        <div className="flex md:w-1/2 w-full mt-[18px]">
                            <span className="text-blue text-[16px] leading-[30px]"><img src={check} className="object-contain" alt="" /></span>
                        <h3 className="font-sans ml-[10px] text-[#272D3E] text-[16px] leading-[30px]"> Modern high quality services </h3>
                        </div>
                    </div>
                    <img className="object-contain w-[60%] mt-[40px] ml-auto mr-auto" src={train2} alt="train" />
                </div>

            </div>
        </div>
    )
}

export default StepByStep;
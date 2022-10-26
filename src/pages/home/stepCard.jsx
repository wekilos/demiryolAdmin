import React from "react"

const StepCard = (props)=>{
    return(
        <div className="h-auto flex align-center md:mb-[40px] mb-[20px] relative">
            <div className=" bg-blue rounded-[100%] !min-w-[49px] !h-[49px] leading-[49px] text-[#fff] text-[21px] font-sans font-bold p-0">
                {props.number}
            </div>
            {props.dash && <div className="border-l-2 border-dashed border-blue absolute h-[90px] left-[25px] top-[40px]">

            </div>}
            <div className="ml-[50px] text-left font-sans text[#10181F] text-[14px] leading-[22px]">
                {props.text}
                {/* Our expert will contact you shortly after analyzing your business requirements. */}
            </div>
        </div>
    )
}

export default StepCard;
import React from "react"
import { useHistory } from "react-router-dom";

import train from "../../img/train.png";
const NewsCard = ()=>{
    const history = useHistory();
    const goToNews = ()=>{
        history.push({
            pathname:"/news/3"
        })
    }
    return (
        // w-[420px]
        <div onClick={()=>goToNews()} className="lg:w-[31%] md:w-[47%] w-full">
                <div className="relative">
                    <img className="rounded-[4px] w-full object-contain" src={train} alt="train" />
                    <div className='w-full h-full z-10 absolute rounded-[4px] top-0 hover:bg-[#00000086]'></div>
                    
                </div>
                <div className='w-full flex'>
                            <h3 className='text-blue font-bold font-sans text-[14px] mr-6'>News</h3>
                            <ul><li className='text-[#999999] font-sans text-[14px] list-disc'>27 august 2022</li></ul>
                    </div>
                <div>
                    <p className="font-sans text-[16px] text-black text-left mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                    
                </div>
        </div>
    )
}

export default NewsCard;
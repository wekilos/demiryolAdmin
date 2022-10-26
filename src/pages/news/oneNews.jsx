import React from "react";
import { useParams,useHistory,Link } from "react-router-dom";
import news1 from "../../img/news1.png";


const OneNews = ()=>{
    const history = useHistory();
    const { id } = useParams();
    const goToBack = ()=>{
        history.push({
            pathname:"/news"
        });
    }
    return (
        <div className="w-[90%] ml-auto mr-auto mb-[50px] relative cursor-pointer">
            <h1 className="w-full text-left text-[36px] font-sans text-black font-bold mt-[30px]"></h1>
        <div className="relative w-full xl:h-[570px] lg:h-[450px] md:h-[285px] h-[200px]">
            <img className="object-cover w-full xl:h-[570px] lg:h-[550px] md:h-[285px] h-[200px] rounded-[4px]" src={news1} alt="" />
            <div className="w-full hover:bg-[#02020277] rounded-[4px] xl:h-[570px] lg:h-[550px] md:h-[285px] h-[200px] z-10 absolute top-0"></div>
        </div>
        <h1 className="font-sans md:text-[24px] text-[16px] text-black font-[600] text-left mt-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </h1>
        <div className='w-full flex '>
            <h3 className='text-blue font-bold font-sans md:text-[14px] text-[12px] mr-6'>News</h3>
            <ul><li className='text-[#999999] font-sans md:text-[14px] text-[12px] list-disc'>27 august 2022</li></ul>
        </div>
        <p className="text-sans md:text-[16px] text-[14px] text-black text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute... </p>
        <div className="w-full flex justify-start">
            <button onClick={()=>goToBack()}  className="w-[147px] h-[49px] font-sans text-[#fff] bg-blue rounded-[10px] md:text-[18px] text-[16px] font-[600]">Back</button>
        </div>
</div>
    )
}

export default OneNews;
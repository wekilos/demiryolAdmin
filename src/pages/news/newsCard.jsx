import React from "react";
import { useHistory,Link } from "react-router-dom"


const NewsCard = (props)=>{
    const history = useHistory()
    const goToNews = (id)=>{
        history.push({
            pathname:"/news/"+id
        })
    }
    return (
        <div className="md:w-[47%] w-full md:bg-transparent bg-[#FAFAFA] rounded-[4px] mb-[50px] cursor-pointer relative z-1 "> 

                    <img onClick={()=>goToNews(props.id)} className="object-cover w-full lg:h-[250px] md:h-[200px] h-[200px] rounded-[4px] z-1" src={props.img} alt="" />
                    <div className="w-full hover:bg-[#02020277] rounded-[4px] lg:h-[250px] md:h-[200px] h-[200px] z-10 absolute top-0"></div>
                
                <h1 className="md:w-full w-[90%] ml-auto mr-auto font-sans md:text-[24px] text-[16px] text-black font-[600] text-left mt-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </h1>
                <div className='md:w-full w-[90%] ml-auto mr-auto flex '>
                    <h3 className='text-blue font-bold font-sans md:text-[14px] text-[12px] mr-6'>News</h3>
                    <ul><li className='text-[#999999] font-sans md:text-[14px] text-[12px] list-disc'>27 august 2022</li></ul>
                </div>
                <p className=" md:w-full w-[90%] ml-auto mr-auto text-sans md:text-[16px] text-[14px] text-black text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute... </p>
                <div className="md:w-full w-[90%] ml-auto mr-auto md:mb-0 mb-4  flex justify-start">
                     <button onClick={()=>goToNews(props.id)} className="w-[147px] h-[49px] font-sans text-[#fff] bg-blue  hover:bg-white hover:text-blue rounded-[10px] md:text-[18px] text-[16px] font-[600]">Read more</button>
                </div>
        </div>
    )
}

export default NewsCard;
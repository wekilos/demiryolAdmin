import React from 'react'
import { useHistory } from "react-router-dom";
import {ArrowRightOutlined} from '@ant-design/icons';
import HomeFirst from "../../img/container.png";
import NewsCard from './newsCard';

const DailyNews = ()=>{
    const history = useHistory()
    const goToNews = ()=>{
        history.push({
            pathname:"/news/3"
        })
    }
     return (
        <div className="w-full min-h-[100vh]    mt-[4rem]">
            <div className='flex justify-start md:mb-[40px] mb-[20px]'>
                <h1 className='font-sans text-black font-bold md:text-[36px] text-[24px]'>Daily news</h1>
            </div>
                <div onClick={()=>goToNews()} className='w-full min-h-[480px] lg:inline-flex block justify-between flex-wrap'>
                    <div className="lg:w-[66%] w-full lg:h-[480px] relative">
                        <img className="object-cover w-full lg:h-[480px] md:h-[480px] h-[335px]" src={HomeFirst} alt="surat" />
                        <div className='lg:h-[480px] md:h-[480px] h-[335px] w-full  z-10 absolute rounded-[4px] top-0 hover:bg-[#00000086]'></div>
                    </div>
                    <div className='lg:hidden  w-full mt-1 flex'>
                            <h3 className='text-blue font-bold font-sans text-[14px] mr-6'>News</h3>
                            <ul><li className='text-[#999999] font-sans text-[14px] list-disc'>27 august 2022</li></ul>
                        </div>
                    <div className="lg:w-[32%] w-full min-w-[200px] mt-0 lg:min-h-[480px] md:min-h-[400px] p-0 relative ">
                        <h2 className="font-sans md:text-[24px] text-[16px] text-left font-bold md:leading-[50px] leading-[22px] text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h2>
                        <p className="font-sans mb-10 md:mt-[50px] mt-[20px] text-left md:text-[16px] text-[14px] text-[#10181F]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>
                        
                        <div className='w-full mt-1 lg:flex hidden absolute bottom-0'>
                            <h3 className='text-blue font-bold font-sans text-[14px] mr-6'>News</h3>
                            <ul><li className='text-[#999999] font-sans text-[14px] list-disc'>27 august 2022</li></ul>
                        </div>
                    </div> 

                </div>

            <div className='w-full min-h-[400px] md:mt-4 mt-0 flex justify-between flex-wrap'>
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </div>
       </div>
     )
}

export default DailyNews;
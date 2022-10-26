import React from "react";
import NewsCard from "./newsCard";

import news1 from "../../img/news1.png";
import news2 from "../../img/news2.png";
import news3 from "../../img/news3.png";
import news4 from "../../img/news4.png";

const News = ()=>{
    return (
        <div className="w-[90%] ml-auto mr-auto md:pt-[100px] pt-[30px]">
            <h1 className="font-sans text-black md:text-[36px] text-[24px] text-left w-wull font-bold">Daily news</h1>
            <div className="w-full flex justify-between flex-wrap">
                <NewsCard id={1} img={news1}/>
                <NewsCard id={2} img={news2}/>
                <NewsCard id={3} img={news3}/>
                <NewsCard id={4} img={news4}/>
                <NewsCard id={5} img={news1}/>
                <NewsCard id={6} img={news2}/>
            </div>
        </div>
    )
}

export default News;
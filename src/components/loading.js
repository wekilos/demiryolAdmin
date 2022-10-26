import React, { useContext, useEffect, useMemo, useState } from "react"; 
import NProgress from "nprogress";
import Lottie from "react-lottie"; 
// import animationData from "../css/map_Reveal.json";


import "./loading.css";
import { SebedimContext } from "../context/Sebedim";
import { useSizeComponents } from "./sizeComponent";
export const Loading = () => {
  const {dil} = useContext(SebedimContext);
  const [width,height] = useSizeComponents();
  const [ initialWidth, setInitialWidth] = useState("30%")
  useEffect(() => {
    NProgress.start();
    NProgress.configure({ showSpinner: false });
    NProgress.set(0.6);
    return () => {
      NProgress.done();
    };
  }, []);
  useEffect(()=>{
        if(width>879){
          setInitialWidth("30%")
        }else if(width>450){
          setInitialWidth("450px")
        }else if(width>400){
          setInitialWidth("350px")
        }else{
          setInitialWidth("320px")
        }
  },[width])

  const defaultOptions = {
    loop:true,
    autoplay:true,
    // animationData:animationData,

    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }
  
  

  return <div style={{height:"100vh",margin:"0 auto",backgroundColor:"#19345F"}}> 
  {/* <Lottie
              options={defaultOptions}
              // height={500}
              width={initialWidth}
              >

  </Lottie> */}
  </div>
  // <img src={Loader} alt={dil==="TM"?"Ýüklenýär":"Загружено"} className="main-loading" />;
};

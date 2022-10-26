import React, { useEffect } from "react";
import { useState } from "react";
import ContactUs from "./Contact";
import DailyNews from "./DailyNews";
import FirstSection from "./firstSection";
import OurServices from "./OurServices";
import StepByStep from "./StepByStep";
import moment from "moment";
import Myclock from "../../components/clock";
const Home = ()=>{
    const [state, setState] = useState({
        time: moment().format("LTS"),
        rawTime: moment()
          .format("LTS")
          .replace(" PM", "")
          .replace(" AM", "")
      });
    useEffect(() => {
        const intervalID = setInterval(() => tick(), 1000);
      
        // returned function will be called on component unmount 
        return () => {
            clearInterval(intervalID);
        }
      }, [])

      const tick = ()=>{
        setState({
          time: moment().format("LTS"),
          rawTime: moment()
            .format("LTS")
            .replace(" PM", "")
            .replace(" AM", "")
        });
      }

    return(
        <div className="w-[90%]   mr-auto ml-auto">
           <Myclock time={state.time} rawTime={state.rawTime} />
           <FirstSection/>
           <DailyNews/>
           <StepByStep/>
           <ContactUs/>
           <OurServices/>
        </div>
    )
}

export default Home;
import React from "react"; 

import foot1 from "../img/foot1.png";
import foot2 from "../img/foot2.png";
import foot3 from "../img/foot3.png";
import footerLogo from "../img/footerLogo.png";

const Footer = ()=>{
  

  
    return(
      <footer className="w-full bg-footerBack mt-[100px]">
      <div className="w-[90%] ml-auto mr-auto  flex  justify-between pt-[20px] pb-[20px]">
          <div> 
            <img className="object-contain " src={footerLogo} alt="Footerlogo" /> 
          </div>
          
          <div className="md:block hidden">
            <h1 className="text-[24px] text-black font-sans font-bold text-left">Menu</h1>
            <p className="text-[16px] text-black font-sans text-left">Main page</p>
            <p className="text-[16px] text-black font-sans text-left">About us</p>
            <p className="text-[16px] text-black font-sans text-left">Services</p>
            <p className="text-[16px] text-black font-sans text-left">News</p>
            {/* <p className="text-[16px] text-black font-sans text-left">Contact us</p> */}
          </div>
          <div className="md:block hidden">
              <h1 className="md:text-[24px] text-[18px] text-black font-sans font-bold text-left">Contact Us</h1>
              {/* <p className="text-[16px] text-black font-sans text-left">A. Niyazov Ave. 174, Ashgabat Turkmenistan.</p> */}
              <p className="md:text-[16px] text-[14px] text-black font-sans text-left">+993 12212344 <br></br> +993 12212345</p>
              <p className="md:text-[16px] text-[14px] text-black font-sans text-left">info@railway.gov.tm</p> 
              <p className="md:block hidden text-[16px] text-black font-sans text-left">Contact us</p>
            </div>
            <div className="md:block hidden">
              <h1 className="md:text-[24px] text-[18px] text-black font-sans font-bold text-left">Address</h1>
              <p className="md:text-[16px] text-[14px] text-black font-sans text-left">A.Niyazov Ave. 174, Ashgabat <br /> Ashgabat, Turkmenistan, 744007.</p>
              {/* <p className="text-[16px] text-black font-sans text-left">+993 12212344 <br></br> +993 12212345</p>
              <p className="text-[16px] text-black font-sans text-left">info@railway.gov.tm</p>  */}
            </div>
         <div className="md:hidden  flex justify-evenly w-full">
            <div className="w-[80%]">
              {/* <h1 className="md:text-[24px] text-[18px] text-black font-sans font-bold text-left">Contact Us</h1> */}
              {/* <p className="text-[16px] text-black font-sans text-left">A. Niyazov Ave. 174, Ashgabat Turkmenistan.</p> */}
              
              <p className="md:text-[16px] text-[14px] text-black font-sans text-left">A.Niyazov Ave. 174, Ashgabat <br /> Ashgabat, Turkmenistan, 744007.</p>
              <div className="flex justify-between w-full flex-wrap">
              <p className="md:text-[16px] text-[14px] text-black font-sans text-left">+993 12 383423 <br></br> +993 12 383138</p>
              <p className="md:text-[16px] text-[14px] text-black font-sans text-left">tdy.ekspress@gmail.com</p> 
              </div>
            </div>
            
          </div>
          {/* <div>
            <h1 className="text-[24px] text-black font-sans font-bold text-left">Subscribe</h1>
            <div>
              <input type="email" className="bg-[#F2F6FF] rounded-[8px] font-sans h-[42px] w-[189px] text-[16px] text-[#6D757D] pl-[15px]" placeholder="Your e-mail" />
              <button className="font-sans w-[97px] h-[42px] rounded-[10px] bg-blue text-[18px] text-[#fff] font-bold ml-[16px]">Send</button>
            </div>
          </div> */}
          {/* <div>
            <h1 className="text-[24px] text-black font-sans font-bold text-left">Follow us</h1>
            <div className="flex">
              <img className="object-contain mr-1" src={foot1} alt="facebook" />
              <img className="object-contain mr-1" src={foot2} alt="instagram" />
              <img className="object-contain mr-1" src={foot3} alt="telegram" />
              <img className="object-contain " src={foot4} alt="linkedin" />
            </div>
          </div> */}
      </div>





      <div className="w-full md:h-[50px] h-[40px] bg-footerBack">
        <p className="md:leading-[50px] leading-[40px] md:text-[16px] text-[12px]  font-sans font-bold">POWERED BY WB - © 2022. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
    )
}

export default Footer;
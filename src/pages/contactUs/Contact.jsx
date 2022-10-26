import React from "react";

const ContactUs = ()=>{
    return (
        <div className="w-[90%] ml-auto mr-auto md:flex block justify-between md:mt-[50px] mt-[30px] pb-10">
            <div className="md:w-[47%] w-full">
                <h1 className="font-sans font-[900] md:text-[36px] text-[24px] text-black text-left">Contacts</h1>
                <p className="font-sans md:text-[18px] text-[16px] text-black text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className="w-full md:mt-[100px] mt-[50px]">
                    <div className="flex justify-start flex-wrap mt-[20px]">
                        <span className="font-sans md:text-[16px] text-[14px] font-bold mb-[10px] text-[#272D3E] w-full text-left"  >Name</span> <br />
                        <input className="font-sans border-[1px] border-[#E3E7EE] text-[16px] text-[#999999] pl-[15px] bg-[#F2F6FF] rounded-[6px] h-[50px] md:w-[90%] w-full text-left" type="text" name="name" placeholder="Name" />
                    </div> 
                    <div className="flex justify-start flex-wrap mt-[20px]">
                        <span className="font-sans md:text-[16px] text-[14px] font-bold mb-[10px] text-[#272D3E] w-full text-left"  >E-mail address</span> <br />
                        <input className="font-sans border-[1px] border-[#E3E7EE] text-[16px] text-[#999999] pl-[15px] bg-[#F2F6FF] rounded-[6px] h-[50px] md:w-[90%] w-full text-left" type="text" name="name" placeholder="Gmail" />
                    </div> 
                    <div className="flex justify-start flex-wrap mt-[20px]">
                        <span className="font-sans md:text-[16px] text-[14px] font-bold mb-[10px] text-[#272D3E] w-full text-left"  >Your Message</span> <br />
                        <textarea rows={10} cols={50} className="font-sans border-[1px] border-[#E3E7EE] text-[16px] text-[#999999] pl-[15px] bg-[#F2F6FF] rounded-[6px] pt-[10px] h-[150px] md:w-[90%] w-full text-left" type="text" name="name" placeholder="Message" />
                    </div> 
                    <div className="flex justify-start   mt-[20px]">
                        <button className="font-sans md:text-[18px] text-[16px] h-[50px] md:w-[90%] w-full bg-blue text-[#fff] rounded-[5px]">Send</button>
                    </div>
                </div>
            </div>
            <div className="md:w-[47%] w-full md:pt-0 pt-10">
                 <h1 className="font-sans font-bold md:text-[36px] text-[24px] text-black text-left">Our Office</h1>
                 <h3 className="font-sans md:text-[16px] text-[14px] text-black text-left font-bold">Location address </h3>
                 <p className="font-sans md:text-[16px] text-[14px] text-black text-left mt-[15px]"> A. Niyazov Ave. 174, Ashgabat, Turkmenistan.</p>
                 <div className="w-full flex justify-between mt-[30px]">
                     <div className="">
                        <h3 className="font-sans md:text-[16px] text-[14px] text-black text-left font-bold">Email: </h3>
                        <p className="font-sans md:text-[16px] text-[14px] text-black text-left mt-[15px]"> info@railway.gov.tm</p>
                     </div>
                     <div className="w-1/2">
                        <h3 className="font-sans md:text-[16px] text-[14px] text-black text-left font-bold">Contacts: </h3>
                        <p className="font-sans md:text-[16px] text-[14px] text-black text-left mt-[15px]"> +993 12 754673  +993 64 086153</p>
                     </div>
                 </div>
                 <div className="w-full md:h-[500px] h-[300px] mt-[50px]">
                 <iframe src="https://www.google.com/maps/d/embed?mid=1BbsgvJHKRMETWWlod8dW1HQpO45n0m4&ehbc=2E312F" className=" md:h-[480px] w-full h-[400px]" ></iframe>                 </div>
            </div>
        </div>
    )
}

export default ContactUs;
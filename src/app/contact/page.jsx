import React from "react";
import Navbar from "../components/Navbar";
import { Clash } from "../../../public/fonts/fonts";
import Footer from "../components/Footer";

const page = () => {
  return (
    <div className="w-full h-full">
      <div className="absolute w-full top-0 z-50">
        <Navbar />
      </div>
      <div className="bg-[--blue3]  h-full md:px-[2vw] lg:px-[4vw] px-4 pt-[45vw] sm:pt-[30vw] md:pt-[12vw]">
        <div className="flex flex-col gap-[10vw] sm:gap-[6vw] md:gap-[4vw]">
          <div
            className={` ${Clash.className} text-white text-[10vw] lg:text-[6vw] md:text-[8vw] h-auto md:h-[50%] uppercase`}
          >
            Let's Connect
          </div>
          <div className="flex justify-between md:flex-row flex-col gap-[8vw] md:gap-0 ">
            <div className="md:w-[38%] flex flex-col gap-[6vw] md:gap-[3vw] lg:gap-[2vw]">
              <div
                className={`${Clash.className} text-white xl:text-[1.5vw] md:text-[2.4vw] lg:text-[2vw] text-[5vw] tracking-wide   leading-[1.2]`}
              >
                Seeking personalized support?
                <br /> Request a call from our team
              </div>
              <div className="flex flex-col gap-[5vw] md:gap-[2vw] lg:gap-[1.5vw]">
                <div className="bg-transparent border text-[4vw] md:text-[2vw] lg:text-[1.2vw]  border-[#515b73] rounded-xl w-full h-[15vw] md:h-[6.5vw] lg:h-[4.2vw] flex flex-col justify-center">
                  <div
                    className={`${Clash.className}  text-[#677189] uppercase px-2 pt-2`}
                  >
                    your Name
                  </div>
                  <input
                    className={`bg-transparent text-white w-full h-full rounded-xl border-none focus:outline-none px-2 py-2 ${Clash.className}`}
                    type="text"
                  />
                </div>
                <div className="bg-transparent border text-[4vw] md:text-[2vw] lg:text-[1.2vw] border-[#515b73] rounded-xl w-full h-[15vw] md:h-[6.5vw] lg:h-[4vw] flex flex-col justify-center">
                  <div
                    className={`${Clash.className}  text-[#677189] uppercase px-2`}
                  >
                    company name
                  </div>
                  <input
                    className={`bg-transparent text-white w-full h-full rounded-xl border-none focus:outline-none px-2 ${Clash.className}`}
                    type="text"
                  />
                </div>
                <div className="bg-transparent border text-[4vw] md:text-[2vw] lg:text-[1.2vw] border-[#515b73] rounded-xl w-full h-[15vw] md:h-[6.5vw] lg:h-[4vw] flex flex-col justify-center">
                  <div
                    className={`${Clash.className}  text-[#677189] uppercase px-2`}
                  >
                    phone number
                  </div>
                  <input
                    className={`bg-transparent text-white w-full h-full rounded-xl border-none focus:outline-none px-2 ${Clash.className}`}
                    type="text"
                  />
                </div>
                <div className="bg-transparent border text-[4vw] md:text-[2vw] lg:text-[1.2vw] border-[#515b73] rounded-xl w-full h-[15vw] md:h-[6.5vw] lg:h-[4vw] flex flex-col justify-center">
                  <div
                    className={`${Clash.className}  text-[#677189] uppercase px-2`}
                  >
                    email
                  </div>
                  <input
                    className={`bg-transparent text-white w-full h-full rounded-xl border-none focus:outline-none px-2 ${Clash.className}`}
                    type="text"
                  />
                </div>
                <div className="bg-transparent border text-[4vw] md:text-[2vw] lg:text-[1.2vw] border-[#515b73] rounded-xl w-full h-[25vw] md:h-[9.5vw] lg:h-[7vw] flex flex-col justify-center">
                  <div
                    className={`${Clash.className}  text-[#677189] uppercase px-2`}
                  >
                    message
                  </div>
                  <input
                    className={`bg-transparent text-white w-full h-full rounded-xl border-none focus:outline-none px-2 ${Clash.className}`}
                    type="text"
                  />
                </div>
              </div>
              <div
                className={`${Clash.className} bg-white w-fit px-4 py-1 rounded-full capitalize text-sm`}
              >
                submit
              </div>
            </div>
            <div className="md:w-[55%] h-[80vw] md:h-auto ">
              <iframe
                class="rounded-2xl w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.022602733516!2d72.85537882480719!3d19.106664332104216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c83605b4603d%3A0xec999ea1e4bbb3f2!2sAdarsh%20Industrial%20Estate%2C%20Navpada%2C%20Vile%20Parle%20East%2C%20Vile%20Parle%2C%20Mumbai%2C%20Maharashtra%20400099!5e0!3m2!1sen!2sin!4v1734611709028!5m2!1sen!2sin"
                width="600"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="py-[32vw] sm:py-[20vw] md:py-[16vw] lg:py-[9vw] ">
          <div
            className={`${Clash.className} text-center text-[#ffffff] text-[8vw] md:text-[5vw] lg:text-[4vw] `}
          >
            Our Offices
          </div>
          <div className="flex flex-col gap-8 md:gap-[3vw] lg:pt-[4vw] pt-[10vw]  md:pt-[6vw]">
            <div className="flex flex-row  justify-between flex-nowrap overflow-x-auto gap-8 md:gap-0 ">
              <div
                className={`flex flex-col flex-shrink-0 text-white bg-[#1a284c] w-full md:w-[30%] rounded-xl border border-[#263355] items-start justify-center gap-4 p-4 ${Clash.className}`}
              >
                <div className="text-2xl">Head Office</div>
                <div className="text-lg">
                  112 A, Adarsh Industrial Estate, Chakala, Sahar Road, Andheri
                  (E), Mumbai 400 099, Maharashtra, India. 
                </div>
                <div className="text-lg">Tel: 022- 42148000</div>
              </div>
              <div
                className={`flex flex-col flex-shrink-0 text-white bg-[#1a284c] w-full md:w-[30%] rounded-xl border border-[#263355] items-start justify-center gap-4 p-4 ${Clash.className}`}
              >
                <div className="text-2xl">Head Office</div>
                <div className="text-lg">
                  112 A, Adarsh Industrial Estate, Chakala, Sahar Road, Andheri
                  (E), Mumbai 400 099, Maharashtra, India. 
                </div>
                <div className="text-lg">Tel: 022- 42148000</div>
              </div>
              <div
                className={`flex flex-col flex-shrink-0 text-white bg-[#1a284c] w-full md:w-[30%] rounded-xl border border-[#263355] items-start justify-center gap-4 p-4 ${Clash.className}`}
              >
                <div className="text-2xl">Head Office</div>
                <div className="text-lg">
                  112 A, Adarsh Industrial Estate, Chakala, Sahar Road, Andheri
                  (E), Mumbai 400 099, Maharashtra, India. 
                </div>
                <div className="text-lg">Tel: 022- 42148000</div>
              </div>
            </div>
            <div className="flex flex-row  justify-between flex-nowrap overflow-x-auto ">
              <div
                className={`flex flex-col flex-shrink-0 text-white bg-[#1a284c] w-full md:w-[30%] rounded-xl border border-[#263355] items-start justify-center gap-4 p-4 ${Clash.className}`}
              >
                <div className="text-2xl">Head Office</div>
                <div className="text-lg">
                  112 A, Adarsh Industrial Estate, Chakala, Sahar Road, Andheri
                  (E), Mumbai 400 099, Maharashtra, India. 
                </div>
                <div className="text-lg">Tel: 022- 42148000</div>
              </div>
              <div
                className={`flex flex-col flex-shrink-0 text-white bg-[#1a284c] w-full md:w-[30%] rounded-xl border border-[#263355] items-start justify-center gap-4 p-4 ${Clash.className}`}
              >
                <div className="text-2xl">Head Office</div>
                <div className="text-lg">
                  112 A, Adarsh Industrial Estate, Chakala, Sahar Road, Andheri
                  (E), Mumbai 400 099, Maharashtra, India. 
                </div>
                <div className="text-lg">Tel: 022- 42148000</div>
              </div>
              <div
                className={`flex flex-col flex-shrink-0 text-white bg-[#1a284c] w-full md:w-[30%] rounded-xl border border-[#263355] items-start justify-center gap-4 p-4 ${Clash.className}`}
              >
                <div className="text-2xl">Head Office</div>
                <div className="text-lg">
                  112 A, Adarsh Industrial Estate, Chakala, Sahar Road, Andheri
                  (E), Mumbai 400 099, Maharashtra, India. 
                </div>
                <div className="text-lg">Tel: 022- 42148000</div>
              </div>
            </div>
            <div className="flex flex-row  justify-between flex-nowrap overflow-x-auto ">
              <div
                className={`flex flex-col flex-shrink-0 text-white bg-[#1a284c] w-full md:w-[30%] rounded-xl border border-[#263355] items-start justify-center gap-4 p-4 ${Clash.className}`}
              >
                <div className="text-2xl">Head Office</div>
                <div className="text-lg">
                  112 A, Adarsh Industrial Estate, Chakala, Sahar Road, Andheri
                  (E), Mumbai 400 099, Maharashtra, India. 
                </div>
                <div className="text-lg">Tel: 022- 42148000</div>
              </div>
              <div
                className={`flex flex-col flex-shrink-0 text-white bg-[#1a284c] w-full md:w-[30%] rounded-xl border border-[#263355] items-start justify-center gap-4 p-4 ${Clash.className}`}
              >
                <div className="text-2xl">Head Office</div>
                <div className="text-lg">
                  112 A, Adarsh Industrial Estate, Chakala, Sahar Road, Andheri
                  (E), Mumbai 400 099, Maharashtra, India. 
                </div>
                <div className="text-lg">Tel: 022- 42148000</div>
              </div>
              <div
                className={`flex flex-col flex-shrink-0 text-white bg-[#1a284c] w-full md:w-[30%] rounded-xl border border-[#263355] items-start justify-center gap-4 p-4 ${Clash.className}`}
              >
                <div className="text-2xl">Head Office</div>
                <div className="text-lg">
                  112 A, Adarsh Industrial Estate, Chakala, Sahar Road, Andheri
                  (E), Mumbai 400 099, Maharashtra, India. 
                </div>
                <div className="text-lg">Tel: 022- 42148000</div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <Footer/>  
    </div>
  );
};

export default page;

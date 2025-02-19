"use client"
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Clash, ClashM } from "../../../public/fonts/fonts";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { CaretRight } from "@phosphor-icons/react/dist/ssr";
import ContactForm from "../components/ContactForm";

const page = () => {
  const inputContainerClasses = "bg-transparent border border-[#515b73] rounded-xl w-full flex flex-col justify-center group";
  const inputClasses = "bg-transparent text-white w-full rounded-xl border-none focus:outline-none px-2 pb-2  ";
  const labelClasses = "text-[#677189] uppercase px-2 pt-2";

  // Add focus state management
  const [focusedField, setFocusedField] = useState('');

  const getContainerClass = (fieldName) => {
    const baseClasses = inputContainerClasses;
    return `${baseClasses} ${
      focusedField === fieldName ? 'border-white' : 'border-[#515b73]'
    }`;
  };
  return (
    <div className="w-full h-full">
      <div className="absolute w-full top-0 z-50">
        <Navbar />
      </div>
      <div className="bg-[#02123b] -mb-1 h-full md:px-[2vw] lg:px-[4vw] px-4 pt-[45vw] sm:pt-[30vw] md:pt-[12vw]">
        <div className="flex flex-col gap-[10vw] sm:gap-[6vw] md:gap-[4vw]">
          <div
            className={` ${Clash.className} text-white text-[10vw] lg:text-[6vw] md:text-[8vw] h-auto md:h-[50%] uppercase`}
          >
            Let's Connect
          </div>
          <div className="flex justify-between md:flex-row flex-col gap-[8vw] md:gap-0 ">
           
             {/* <div className={`${Clash.className} md:w-[38%] flex flex-col gap-[6vw] md:gap-[3vw] lg:gap-[2vw] `}>
      <div className="text-white xl:text-[1.5vw] md:text-[2.4vw] lg:text-[2vw] text-[5vw] tracking-wide leading-[1.2]">
        Seeking personalized support?
        <br /> Request a call from our team
      </div>
      
      <div className="flex flex-col gap-[5vw] md:gap-[2vw] lg:gap-[1.5vw]">
        <div className={`${getContainerClass('name')} h-[15vw] md:h-[6.5vw] lg:h-[4.2vw] text-[4vw] md:text-[2vw] lg:text-[1.2vw]`}>
          <div className={labelClasses}>Your Name</div>
          <input
            className={inputClasses}
            type="text"
            onFocus={() => setFocusedField('name')}
            onBlur={() => setFocusedField('')}
          />
        </div>

        <div className={`${getContainerClass('company')} h-[15vw] md:h-[6.5vw] lg:h-[4vw] text-[4vw] md:text-[2vw] lg:text-[1.2vw]`}>
          <div className={labelClasses}>Company Name</div>
          <input
            className={inputClasses}
            type="text"
            onFocus={() => setFocusedField('company')}
            onBlur={() => setFocusedField('')}
          />
        </div>

        <div className={`${getContainerClass('phone')} h-[15vw] md:h-[6.5vw] lg:h-[4vw] text-[4vw] md:text-[2vw] lg:text-[1.2vw]`}>
          <div className={labelClasses}>Phone Number</div>
          <input
            className={inputClasses}
            type="tel"
            onFocus={() => setFocusedField('phone')}
            onBlur={() => setFocusedField('')}
          />
        </div>

        <div className={`${getContainerClass('email')} h-[15vw] md:h-[6.5vw] lg:h-[4vw] text-[4vw] md:text-[2vw] lg:text-[1.2vw]`}>
          <div className={labelClasses}>Email</div>
          <input
            className={inputClasses}
            type="email"
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField('')}
          />
        </div>

        <div className={`${getContainerClass('message')} h-[25vw] md:h-[9.5vw] lg:h-[7vw] text-[4vw] md:text-[2vw] lg:text-[1.2vw]`}>
          <div className={labelClasses}>Message</div>
          <textarea
            className={`${inputClasses} resize-none`}
            onFocus={() => setFocusedField('message')}
            onBlur={() => setFocusedField('')}
          />
        </div>
      </div>

      <div  style={
        {
            backgroundColor: '#ffffff',
            color: '#02123B'
        }
    } className={`${ClashM.className} cursor-pointer flex xl:text-[1vw] md:text-[1.3vw] text-[4vw] sm:text-[3.5vw] w-fit   px-4 py-2 rounded-full items-center justify-center`}>
        Submit <CaretRight className='w-[4vw] h-[4vw] md:w-[1.5vw] md:h-[1.5vw] xl:w-[1.2vw] xl:h-[1.2vw] sm:w-[3.5vw] sm:h-[3.5vw]' />
    </div>
    </div> */}
    <ContactForm />
            <div className="md:w-[55%] h-[80vw] md:h-auto ">
              <iframe
                className="rounded-2xl w-full h-full"
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
        <div className="pb-[32vw] pt-[18vw] sm:py-[20vw] md:py-[16vw] lg:py-[9vw] ">
          <div
            className={`${Clash.className} text-center text-[#ffffff] text-[8vw] md:text-[5vw] lg:text-[4vw] `}
          >
            Our Offices
          </div>
          {/* <div className="flex flex-col gap-8 md:gap-[3vw] lg:pt-[4vw] pt-[10vw]  md:pt-[6vw]">
            <div className="flex md:flex-row flex-col justify-between flex-nowrap overflow-x-auto gap-8 md:gap-0 ">
              <div
                className={`flex flex-col flex-shrink-0 text-white bg-[#1a284c] w-full md:w-[30%] rounded-xl border border-[#263355] items-start justify-center gap-4 p-4 ${Clash.className}`}
              >
                <div className="text-2xl">Head Office</div>
                <div className="text-lg">
                  112 A, Adarsh Industrial Estate, Chakala, Sahar Road, Andheri
                  (E), Mumbai 400 099, Maharashtra, India. 
                </div>
                <div className="text-lg">
                  Tel: <a href="tel:02242148000">+91 022-42148000</a>
                </div>
              </div>
              <div
                className={`flex flex-col flex-shrink-0 text-white bg-[#1a284c] w-full md:w-[30%] rounded-xl border border-[#263355] items-start justify-center gap-4 p-4 ${Clash.className}`}
              >
                <div className="text-2xl">Mumbai Office</div>
                <div className="text-lg">
                306, 313 - B Wing, 119, Business Point, Opp. Intl Air Cargo Complex, Sahar Road, Andheri (E), Mumbai - 400 099, India
                </div>
                <div className="text-lg">
                  Tel: <a href="tel:+9102242149500">+91 022-42149500</a>
                </div>
              </div>
              <div
                className={`flex flex-col flex-shrink-0 text-white bg-[#1a284c] w-full md:w-[30%] rounded-xl border border-[#263355] items-start justify-center gap-4 p-4 ${Clash.className}`}
              >
                <div className="text-2xl">Pune Office</div>
                <div className="text-lg">
                S. No. 198. H. No. 2/1 & 2/2, Office No. 816, ‘’A’’ Wing,Nyatiempress, Viman Nagar, Pune - 411 014. Maharashtra, India
                </div>
                <div className="text-lg">
                  Tel: <a href="tel:+9102069069600">+91 020-69069600</a>
                </div>
              </div>
            </div>
            <div className="flex md:flex-row flex-col justify-between flex-nowrap overflow-x-auto gap-8 md:gap-0 ">
              <div
                className={`flex flex-col flex-shrink-0 text-white bg-[#1a284c] w-full md:w-[30%] rounded-xl border border-[#263355] items-start justify-center gap-4 p-4 ${Clash.className}`}
              >
                <div className="text-2xl">Delhi Office</div>
                <div className="text-lg">
                Khasra No. 836, Block K2, Near E2 Block, Mahipalpur Extension, New Delhi - 110 037, India
                </div>
                <div className="text-lg">
                  Tel: <a href="tel:+9101142641240">+91 011-42641240</a>
                </div>
              </div>
              <div
                className={`flex flex-col flex-shrink-0 text-white bg-[#1a284c] w-full md:w-[30%] rounded-xl border border-[#263355] items-start justify-center gap-4 p-4 ${Clash.className}`}
              >
                <div className="text-2xl">Ahmedabad Office</div>
                <div className="text-lg">
                603. Sixth Floor, Lilamani Corporate Heights, Opp. Ramapir No Tekro, Near BRTS Bus Stop New Vadaj,Ahmedabad - 380 013, India
                </div>
                <div className="text-lg">
                  Tel: <a href="tel:+9107929600603">+91 079-29600603</a>
                </div>
              </div>
              <div
                className={`flex flex-col flex-shrink-0 text-white bg-[#1a284c] w-full md:w-[30%] rounded-xl border border-[#263355] items-start justify-center gap-4 p-4 ${Clash.className}`}
              >
                <div className="text-2xl">Chennai Office</div>
                <div className="text-lg">
                New No. 5, Old No.69, Southern Side, 1st Floor, Kalajmagal Nagar, Chennai - 600 032, India
                </div>
                <div className="text-lg">
                  Tel: <a href="tel:+910444804595">+91 044-4804595</a>
                </div>
                <div className="text-lg">
                  Cell: <a href="tel:+918095761028">+91 80957 61028</a>
                </div>
              </div>
            </div>
            <div className="flex md:flex-row flex-col justify-between flex-nowrap overflow-x-auto gap-8 md:gap-0">
              <div
                className={`flex flex-col flex-shrink-0 text-white bg-[#1a284c] w-full md:w-[30%] rounded-xl border border-[#263355] items-start justify-center gap-4 p-4 ${Clash.className}`}
              >
                <div className="text-2xl">Belgaum Office</div>
                <div className="text-lg">
                Block No. 5, Next To Jamia Masjid Chowk, Mathpai Nagar, Angol, Belgaum - 590 006, India
                </div>
                <div className="text-lg">
                  Tel: <a href="tel:+918691003166">+91 86910 03166</a>
                </div>
              </div>
              <div
                className={`flex flex-col flex-shrink-0 text-white bg-[#1a284c] w-full md:w-[30%] rounded-xl border border-[#263355] items-start justify-center gap-4 p-4 ${Clash.className}`}
              >
                <div className="text-2xl">Goa Office</div>
                <div className="text-lg">
                Office No. 4, Nile’s Residency, Opp. Bharat Petrol Pump, Near Kira Paulo Hotel, Verma - 403 722, Goa, India
                </div>
                <div className="text-lg">
                  Tel: <a href="tel:+918879670022">+91 88796 70022</a>
                </div>
              </div>
              <div
                className={`flex flex-col flex-shrink-0 text-white bg-[#1a284c] w-full md:w-[30%] rounded-xl border border-[#263355] items-start justify-center gap-4 p-4 ${Clash.className}`}
              >
                <div className="text-2xl">Vadodara Office</div>
                <div className="text-lg">
                709, 7th Floor, Siddharth Complex R.C, Dutt Road, Alkapuri, Vadodara - 390 007, India
                </div>
                <div className="text-lg">
                  Tel: <a href="tel:+9102652321256">+91 0265-2321256</a>
                </div>
              </div>
            </div>
            <div className="flex md:flex-row flex-col justify-between flex-nowrap overflow-x-auto gap-8 md:gap-0">
              <div
                className={`flex flex-col flex-shrink-0 text-white bg-[#1a284c] w-full md:w-[30%] rounded-xl border border-[#263355] items-start justify-center gap-4 p-4 ${Clash.className}`}
              >
                <div className="text-2xl">Bangalore Office</div>
                <div className="text-lg">
                Building No. 4-598/16/2/4, 2nd Floor, Above Axis Bank, Amruthahalli Main Road, Amurathahalli, Bangalore - 560 092, India
                </div>
                <div className="text-lg">
                  Tel: <a href="tel:+9108049020700">+91 080-49020700</a>
                </div>
              </div>
              <div
                className={`flex flex-col flex-shrink-0 text-white bg-[#1a284c] w-full md:w-[30%] rounded-xl border border-[#263355] items-start justify-center gap-4 p-4 ${Clash.className}`}
              >
                <div className="text-2xl">Hyderabad Office</div>
                <div className="text-lg">
                10-3-273/8/A First Floor, Humayun Nagar,Mehdipatnam, Hyderabad - 500 028Telangana, India
                </div>
                <div className="text-lg">
                  Mob: <a href="tel:+919618051042">+91 96180 51042</a>
                </div>
              </div>
              <div
                className={`flex flex-col flex-shrink-0 text-white bg-[#1a284c] w-full md:w-[30%] rounded-xl border border-[#263355] items-start justify-center gap-4 p-4 ${Clash.className}`}
              >
                <div className="text-2xl">Surat Office</div>
                <div className="text-lg">
                B-504 Shakuntal Apartment, Near Shangvi Tower, Gujarat Gas Circle, Adajan, Surat - 395 009, India
                </div>
                <div className="text-lg">
                  Tel: <a href="tel:+918660406787">+91 86604 06787</a>
                </div>
              </div>
            
          </div>
        </div> */}
          <div className="flex flex-col gap-8 md:gap-[3vw] lg:pt-[4vw] pt-[10vw]  md:pt-[6vw]">
                    <div className="flex md:flex-row flex-col justify-between flex-nowrap overflow-x-auto gap-8 md:gap-0 ">
                      <div
                        className={`flex flex-col flex-shrink-0 text-white bg-[#1a284c] w-full md:w-[30%] rounded-xl border border-[#263355] items-start justify-center gap-4 p-4 ${Clash.className}`}
                      >
                        <div className="text-2xl">Head Office</div>
                        <div className="text-lg">
                          112 A, Adarsh Industrial Estate, Chakala, Sahar Road, Andheri
                          (E), Mumbai 400 099, Maharashtra, India. 
                        </div>
                        <div className="text-lg">
                          Tel: <a href="tel:02242148000">+91 022-42148000</a>
                        </div>
                      </div>
                      <div
                        className={`flex flex-col flex-shrink-0 text-white bg-[#1a284c] w-full md:w-[30%] rounded-xl border border-[#263355] items-start justify-center gap-4 p-4 ${Clash.className}`}
                      >
                        <div className="text-2xl">Mumbai Office</div>
                        <div className="text-lg">
                        306, 313 - B Wing, 119, Business Point, Opp. Intl Air Cargo Complex, Sahar Road, Andheri (E), Mumbai - 400 099, India
                        </div>
                        <div className="text-lg">
                          Tel: <a href="tel:+9102242149500">+91 022-42149500</a>
                        </div>
                      </div>
                      <div
                        className={`flex flex-col flex-shrink-0 text-white bg-[#1a284c] w-full md:w-[30%] rounded-xl border border-[#263355] items-start justify-center gap-4 p-4 ${Clash.className}`}
                      >
                        <div className="text-2xl">Delhi Office</div>
                        <div className="text-lg">
                        Khasra No. 836, Block K2, Near E2 Block, Mahipalpur Extension, New Delhi - 110 037, India
                        </div>
                        <div className="text-lg">
                          Tel: <a href="tel:+9101142641240">+91 011-42641240</a>
                        </div>
                      </div>
                     
                    </div>
                    <div className="flex md:flex-row flex-col justify-between flex-nowrap overflow-x-auto gap-8 md:gap-0">
                    <div
                        className={`flex flex-col flex-shrink-0 text-white bg-[#1a284c] w-full md:w-[30%] rounded-xl border border-[#263355] items-start justify-center gap-4 p-4 ${Clash.className}`}
                      >
                        <div className="text-2xl">Chennai Office</div>
                        <div className="text-lg">
                        New No. 5, Old No.69, Southern Side, 1st Floor, Kalajmagal Nagar, Chennai - 600 032, India
                        </div>
                        <div className="text-lg">
                          Tel: <a href="tel:+910444804595">+91 044-4804595</a>
                        </div>
                        <div className="text-lg">
                          Cell: <a href="tel:+918095761028">+91 80957 61028</a>
                        </div>
                      </div>
                      <div
                        className={`flex flex-col flex-shrink-0 text-white bg-[#1a284c] w-full md:w-[30%] rounded-xl border border-[#263355] items-start justify-center gap-4 p-4 ${Clash.className}`}
                      >
                        <div className="text-2xl">Bangalore Office</div>
                        <div className="text-lg">
                        Building No. 4-598/16/2/4, 2nd Floor, Above Axis Bank, Amruthahalli Main Road, Amurathahalli, Bangalore - 560 092, India
                        </div>
                        <div className="text-lg">
                          Tel: <a href="tel:+9108049020700">+91 080-49020700</a>
                        </div>
                      </div>
                      <div
                        className={`flex flex-col flex-shrink-0 text-white bg-[#1a284c] w-full md:w-[30%] rounded-xl border border-[#263355] items-start justify-center gap-4 p-4 ${Clash.className}`}
                      >
                        <div className="text-2xl">Hyderabad Office</div>
                        <div className="text-lg">
                        10-3-273/8/A First Floor, Humayun Nagar,Mehdipatnam, Hyderabad - 500 028Telangana, India
                        </div>
                        <div className="text-lg">
                          Mob: <a href="tel:+919618051042">+91 96180 51042</a>
                        </div>
                      </div>
                     
                    
                  </div>
                    <div className="flex md:flex-row flex-col justify-between flex-nowrap overflow-x-auto gap-8 md:gap-0 ">
                    <div
                        className={`flex flex-col flex-shrink-0 text-white bg-[#1a284c] w-full md:w-[30%] rounded-xl border border-[#263355] items-start justify-center gap-4 p-4 ${Clash.className}`}
                      >
                        <div className="text-2xl">Pune Office</div>
                        <div className="text-lg">
                        198. H. No. 2/1 & 2/2, Office No. 816, ‘’A’’ Wing,Nyatiempress, Viman Nagar, Pune - 411 014. Maharashtra, India
                        </div>
                        <div className="text-lg">
                          Tel: <a href="tel:+9102069069600">+91 020-69069600</a>
                        </div>
                      </div>
                      <div
                        className={`flex flex-col flex-shrink-0 text-white bg-[#1a284c] w-full md:w-[30%] rounded-xl border border-[#263355] items-start justify-center gap-4 p-4 ${Clash.className}`}
                      >
                        <div className="text-2xl">Ahmedabad Office</div>
                        <div className="text-lg">
                        603. Sixth Floor, Lilamani Corporate Heights, Opp. Ramapir No Tekro, Near BRTS Bus Stop New Vadaj,Ahmedabad - 380 013, India
                        </div>
                        <div className="text-lg">
                          Tel: <a href="tel:+9107929600603">+91 079-29600603</a>
                        </div>
                      </div>
                      <div
                        className={`flex flex-col flex-shrink-0 text-white bg-[#1a284c] w-full md:w-[30%] rounded-xl border border-[#263355] items-start justify-center gap-4 p-4 ${Clash.className}`}
                      >
                        <div className="text-2xl">Surat Office</div>
                        <div className="text-lg">
                        B-504 Shakuntal Apartment, Near Shangvi Tower, Gujarat Gas Circle, Adajan, Surat - 395 009, India
                        </div>
                        <div className="text-lg">
                          Tel: <a href="tel:+918660406787">+91 86604 06787</a>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-row flex-col justify-between flex-nowrap overflow-x-auto gap-8 md:gap-0">
                      <div
                        className={`flex flex-col flex-shrink-0 text-white bg-[#1a284c] w-full md:w-[30%] rounded-xl border border-[#263355] items-start justify-center gap-4 p-4 ${Clash.className}`}
                      >
                        <div className="text-2xl">Belgaum Office</div>
                        <div className="text-lg">
                        Block No. 5, Next To Jamia Masjid Chowk, Mathpai Nagar, Angol, Belgaum - 590 006, India
                        </div>
                        <div className="text-lg">
                          Tel: <a href="tel:+918691003166">+91 86910 03166</a>
                        </div>
                      </div>
                      <div
                        className={`flex flex-col flex-shrink-0 text-white bg-[#1a284c] w-full md:w-[30%] rounded-xl border border-[#263355] items-start justify-center gap-4 p-4 ${Clash.className}`}
                      >
                        <div className="text-2xl">Goa Office</div>
                        <div className="text-lg">
                        Office No. 4, Nile’s Residency, Opp. Bharat Petrol Pump, Near Kira Paulo Hotel, Verma - 403 722, Goa, India
                        </div>
                        <div className="text-lg">
                          Tel: <a href="tel:+918879670022">+91 88796 70022</a>
                        </div>
                      </div>
                      <div
                        className={`flex flex-col flex-shrink-0 text-white bg-[#1a284c] w-full md:w-[30%] rounded-xl border border-[#263355] items-start justify-center gap-4 p-4 ${Clash.className}`}
                      >
                        <div className="text-2xl">Vadodara Office</div>
                        <div className="text-lg">
                        709, 7th Floor, Siddharth Complex R.C, Dutt Road, Alkapuri, Vadodara - 390 007, India
                        </div>
                        <div className="text-lg">
                          Tel: <a href="tel:+9102652321256">+91 0265-2321256</a>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-row flex-col justify-between flex-nowrap overflow-x-auto gap-8 md:gap-0">
                      <div
                        className={`flex flex-col flex-shrink-0 text-white bg-[#1a284c] w-full md:w-[30%] rounded-xl border border-[#263355] items-start justify-center gap-4 p-4 ${Clash.className}`}
                      >
                        <div className="text-2xl">Mangalore Office</div>
                        <div className="text-lg">
                        Suite No.1, Vruddhi Complex,  Adyar Garden, NH 75, Adyar, Mangaluru, Dakshina Kannada Karnataka, 57- 5007
                        </div>
                        <div className="text-lg">
                          Tel: <a href="tel:+919448548859">+91 9448548859</a>
                        </div>
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

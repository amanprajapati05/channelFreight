"use client"
import { useState } from 'react'
import React from 'react'
import Navbar from '../components/Navbar'
import { Clash, ClashM } from '../../../public/fonts/fonts'
import Footer from '../components/Footer'
import { CaretRight, UploadSimple } from '@phosphor-icons/react/dist/ssr'
import Button from '../components/Button'
import CareerForm from '../components/CareerForm'

const page = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    resume: null
  });

  const [fileName, setFileName] = useState('');
  
  // Validation state
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
    resume: ''
  });

  // Loading state
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Success/Error message state
  const [submitStatus, setSubmitStatus] = useState({
    message: '',
    isError: false
  });
  const ALLOWED_FILE_TYPES = [
    // Documents
    'application/pdf',                                                   // PDF
    'application/msword',                                               // DOC
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // DOCX
    'application/vnd.oasis.opendocument.text',                         // ODT
    'text/plain',                                                      // TXT
    // Images
    'image/jpeg',                                                      // JPG, JPEG
    'image/png',                                                       // PNG
    'image/webp',                                                      // WebP
    'image/heic',                                                      // HEIC
    'image/heif'                                                       // HEIF
  ];

  const MAX_FILE_SIZE = 5 * 1024 * 1024;
  const [imagePreview, setImagePreview] = useState(null);

  // Focus state
  const [focusedField, setFocusedField] = useState('');

  const inputContainerClasses = "bg-transparent border border-[#515b73] rounded-xl w-full flex flex-col justify-center relative";
  const inputClasses = "bg-transparent pb-2 text-[#02123b] w-full h-full rounded-xl border-none focus:outline-none px-2";
  const labelClasses = "text-[#677189] uppercase px-2 pt-2";
  const errorClasses = "text-red-500 text-[2.5vw] md:text-[1vw] lg:text-[0.8vw] absolute -bottom-[20px] left-2";

  const getContainerClass = (fieldName) => {
    return `${inputContainerClasses} ${
      focusedField === fieldName ? 'border-[#02123b]' : 
      errors[fieldName] ? 'border-red-500' : 'border-[#515b73]'
    }`;
  };

  // Validation functions
  const validateField = (name, value) => {
    switch(name) {
      case 'name':
        return !value.trim() ? "Name is required" : "";
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) return "Email is required";
        if (!emailRegex.test(value)) return "Please enter a valid email address";
        return "";
      case 'phone':
        const phoneRegex = /^(\+\d{1,3}\s?)?\d{10}$|^\d{3}[-.]?\d{3}[-.]?\d{4}$/;
        if (!value) return "Phone number is required";
        if (!phoneRegex.test(value.replace(/[- .]/g, ''))) return "Please enter a valid phone number";
        return "";
      case 'resume':
        return !value ? "Resume is required" : "";
      default:
        return "";
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when typing
    setErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  };


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    
    if (file) {
      // Check file type
      if (!ALLOWED_FILE_TYPES.includes(file.type)) {
        setErrors(prev => ({
          ...prev,
          resume: "Please upload a supported file format"
        }));
        return;
      }
  
      // Check file size
      if (file.size > MAX_FILE_SIZE) {
        setErrors(prev => ({
          ...prev,
          resume: "File size must be less than 5MB"
        }));
        return;
      }
  
      // Preview for images
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setImagePreview(e.target.result);
        };
        reader.readAsDataURL(file);
      } else {
        setImagePreview(null);
      }
  
      setFileName(file.name);
      setFormData(prev => ({
        ...prev,
        resume: file
      }));
      setErrors(prev => ({
        ...prev,
        resume: ''
      }));
    }
  };
  

  // Handle blur events
  const handleBlur = (field) => {
    setFocusedField('');
    setErrors(prev => ({
      ...prev,
      [field]: validateField(field, formData[field])
    }));
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    Object.keys(formData).forEach(field => {
      const error = validateField(field, formData[field]);
      newErrors[field] = error;
      if (error) isValid = false;
    });

    setErrors(newErrors);
    return isValid;
  };




const handleSubmit = async () => {
  if (!validateForm()) {
    return;
  }

  setIsSubmitting(true);
  setSubmitStatus({ message: '', isError: false });

  try {
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('resume', formData.resume);

    const response = await fetch('http://localhost:3000/api/careers', {
      method: 'POST',
      mode: 'cors',
      body: formDataToSend
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Something went wrong');
    }

    const data = await response.json();

    setSubmitStatus({
      message: 'Application submitted successfully!',
      isError: false
    });
    
    // Clear form
    setFormData({ name: '', phone: '', email: '', resume: null });
    setFileName('');
    setErrors({ name: '', phone: '', email: '', resume: '' });

  } catch (error) {
    setSubmitStatus({
      message: error.message || 'Failed to submit application. Please try again.',
      isError: true
    });
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <>
    <div className='absolute w-full'>
    <Navbar/>
    </div>
 
    <div className='w-full '>
         
         <div className='md:h-screen w-full h-[50vh]  z-['>
             <div className=' h-[100%] md:h-[100%] pb-4 md:pb-0  bg-[#02123b]'>
                 <div className={`md:pl-[2vw] lg:pl-[4vw] px-4 md:px-0 flex flex-col md:flex-row h-[100%] gap-6 md:gap-0 justify-end md:justify-between md:items-center text-white ${Clash.className}  `}>
                     <div className=' text-[10vw] lg:text-[6vw] md:text-[8vw] h-auto md:h-[50%] uppercase'>CAreers</div>
                     <div className='text-base pr-[8vw]  md:w-[48%] xl:text-[1.5vw] md:text-[1.9vw] lg:text-[1.7vw] h-auto md:h-[50%] md:leading-[2.4vw] lg:leading-[1.7vw]  flex items-end'>By joining our team, you'll be part of a company that values innovation, integrity, and collaboration. We are committed to providing an environment where talent thrives, and individuals grow both personally and professionally.</div>
                 </div>
             </div>
         </div>

         <div className='-mt-1'>
         <div className='w-full overflow-hidden hidden md:block'>
            <img src="/images/image61.png" alt="" className='md:w-screen  z-[-1] object-cover'/>
        </div>
        <div className='w-full overflow-hidden md:hidden block'>
            <img src="/images/image62.png" alt="" className='w-full z-[-1] object-cover'/>
        </div>
        </div>

        <div className={`bg-bla flex  md:px-[2vw] lg:px-[4vw] px-4 ${Clash.className} h-auto lg:h-[40vw] xl:h-[30vw] md:h-[60vw]  md:items-center`}>
            <div className='flex md:justify-between w-full md:flex-row flex-col  pt-6 md:pt-0 md:gap-14 gap-6'>
            <div className='  md:w-[30%] w-full text-[#02123b] capitalize l:text-[4vw] md:text-[4.9vw] lg:text-[4.5vw] text-[10vw]'>
            Why Work With Us?
            </div>
            <div className='flex flex-col md:w-[45%]  text-base  lg:text-lg gap-6 text-[#02123b]' >
                <div>
                At Channel Freight Services, we believe our people are our greatest strength. We are committed to providing an environment where talent thrives, and individuals grow both personally and professionally.
                </div>
                <div>
                If you’re passionate about making a difference in the logistics industry, we’d love to hear from you. 
                </div>
                <div>
                Apply now and take the first step toward a rewarding career with Channel Freight Services.
                </div>
            </div>
            </div>
        
        </div>

        <div className={` flex  md:px-[2vw] lg:px-[4vw] py-[8vw] md:pt-0 overflow-hidden  px-4 ${Clash.className}  w-full items-center`}>
        <div className="flex justify-between md:flex-row flex-col gap-[14vw] md:gap-0 w-full ">
            <div className="md:w-[38%] flex flex-col gap-[6vw] md:gap-[3vw] lg:gap-[2vw] order-2 md:order-2">
              <div
                className={`${Clash.className} text-[#02123b] xl:text-[4vw] md:text-[4.9vw] lg:text-[4.5vw] text-[10vw] tracking-wide   leading-[1.2]`}
              >
                Join Our Team
              </div>
              <div
                className={`${Clash.className} text-[#02123b] text-base  lg:text-lg tracking-wide   leading-[1.2]`}
              >
              Apply now and take the first step towards an exciting career with us.
              </div>
             
    <CareerForm/>

            </div>
            <div className="md:w-[55%] h-[80vw] md:h-auto order-1 md:order-1">
              <img src="/images/img42.jpg" className="rounded-2xl w-full h-full" alt="" />
            </div>
          </div>
        </div>


         </div>
         <Footer/>
         </>
  )
}

export default page

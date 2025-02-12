"use client"
import { useState } from 'react';
import { CaretRight, UploadSimple } from '@phosphor-icons/react/dist/ssr';
import { Clash, ClashM } from '../../../public/fonts/fonts';

const CareerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    resume: null
  });

  const [fileName, setFileName] = useState('');
  
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
    resume: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [submitStatus, setSubmitStatus] = useState({
    message: '',
    isError: false
  });

  const ALLOWED_FILE_TYPES = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.oasis.opendocument.text',
    'text/plain',
    'image/jpeg',
    'image/png',
    'image/webp',
    'image/heic',
    'image/heif'
  ];

  const MAX_FILE_SIZE = 5 * 1024 * 1024;
  const [imagePreview, setImagePreview] = useState(null);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    
    if (file) {
      if (!ALLOWED_FILE_TYPES.includes(file.type)) {
        setErrors(prev => ({
          ...prev,
          resume: "Please upload a supported file format"
        }));
        return;
      }
  
      if (file.size > MAX_FILE_SIZE) {
        setErrors(prev => ({
          ...prev,
          resume: "File size must be less than 5MB"
        }));
        return;
      }
  
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

  const handleBlur = (field) => {
    setFocusedField('');
    setErrors(prev => ({
      ...prev,
      [field]: validateField(field, formData[field])
    }));
  };

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

      const response = await fetch('https://email-eight-sigma.vercel.app/api/career', {
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

// const handleSubmit = async () => {
//     if (!validateForm()) {
//       return;
//     }
  
//     setIsSubmitting(true);
//     setSubmitStatus({ message: '', isError: false });
  
//     try {
//       const response = await fetch('http://localhost:3000/api/career', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name: formData.name,
//           email: formData.email,
//           phone: formData.phone
//         })
//       });
  
//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Something went wrong');
//       }
  
//       const data = await response.json();
  
//       setSubmitStatus({
//         message: 'Application submitted successfully!',
//         isError: false
//       });
      
//       // Clear form
//       setFormData({ name: '', phone: '', email: '', resume: null });
//       setFileName('');
//       setErrors({ name: '', phone: '', email: '', resume: '' });
  
//     } catch (error) {
//       setSubmitStatus({
//         message: error.message || 'Failed to submit application. Please try again.',
//         isError: true
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

  return (
    <div className="flex flex-col gap-[5vw] md:gap-[2vw] lg:gap-[1.8vw]">
      <div className={`${getContainerClass('name')} text-[4vw] md:text-[2vw] lg:text-[1.2vw] h-[15vw] md:h-[6.5vw] lg:h-[4.2vw]`}>
        <div className={`${Clash.className} ${labelClasses}`}>
          Your Name
        </div>
        <input
          className={`${inputClasses} ${Clash.className}`}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onFocus={() => setFocusedField('name')}
          onBlur={() => handleBlur('name')}
        />
        {errors.name && <div className={errorClasses}>{errors.name}</div>}
      </div>

      <div className={`${getContainerClass('phone')} text-[4vw] md:text-[2vw] lg:text-[1.2vw] h-[15vw] md:h-[6.5vw] lg:h-[4vw]`}>
        <div className={`${Clash.className} ${labelClasses}`}>
          Phone Number
        </div>
        <input
          className={`${inputClasses} ${Clash.className}`}
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          onFocus={() => setFocusedField('phone')}
          onBlur={() => handleBlur('phone')}
        />
        {errors.phone && <div className={errorClasses}>{errors.phone}</div>}
      </div>

      <div className={`${getContainerClass('email')} text-[4vw] md:text-[2vw] lg:text-[1.2vw] h-[15vw] md:h-[6.5vw] lg:h-[4vw]`}>
        <div className={`${Clash.className} ${labelClasses}`}>
          Email
        </div>
        <input
          className={`${inputClasses} ${Clash.className}`}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onFocus={() => setFocusedField('email')}
          onBlur={() => handleBlur('email')}
        />
        {errors.email && <div className={errorClasses}>{errors.email}</div>}
      </div>

      <div className={`max-w-xl w-full`}>
        <label 
          htmlFor="resume-upload" 
          className={`${getContainerClass('resume')} ${Clash.className} text-[4vw] md:text-[2vw] lg:text-[1.2vw] h-[15vw] md:h-[6.5vw] lg:h-[4vw] px-2`}
        >
          <input
            id="resume-upload"
            type="file"
            accept=".pdf,.doc,.docx"
            className="hidden"
            onChange={handleFileChange}
          />
          
          <div className="flex items-center justify-between text-[#677189]">
            <span className="text-[4vw] md:text-[2vw] lg:text-[1.2vw]">
              {fileName || 'CLICK HERE TO UPLOAD RESUME'}
            </span>
            <UploadSimple size={32} />
          </div>
          {errors.resume && <div className={errorClasses}>{errors.resume}</div>}
        </label>
      </div>

      {submitStatus.message && (
        <div className={`text-sm mt-4 ${submitStatus.isError ? 'text-red-500' : 'text-green-500'}`}>
          {submitStatus.message}
        </div>
      )}

      <div
        onClick={!isSubmitting ? handleSubmit : undefined}
        style={{
          backgroundColor: isSubmitting ? '#cccccc' : '#02123B',
          color: '#ffffff',
          cursor: isSubmitting ? 'not-allowed' : 'pointer'
        }}
        className={`${ClashM.className} flex xl:text-[1vw] md:text-[1.3vw] text-[4vw] sm:text-[3.5vw] w-fit px-4 py-2 rounded-full items-center justify-center mt-6`}
      >
        {isSubmitting ? 'Submitting...' : 'Submit'} 
        {!isSubmitting && <CaretRight className='w-[4vw] h-[4vw] md:w-[1.5vw] md:h-[1.5vw] xl:w-[1.2vw] xl:h-[1.2vw] sm:w-[3.5vw] sm:h-[3.5vw]' />}
      </div>
    </div>
  );
};

export default CareerForm;
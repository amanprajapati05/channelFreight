// // "use client"
// // import React, { useState } from "react";
// // import { Clash, ClashM } from "../../../public/fonts/fonts";
// // import { CaretRight } from "@phosphor-icons/react/dist/ssr";

// // const ContactForm = () => {
// //   // Form state
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     company: '',
// //     phone: '',
// //     email: '',
// //     message: ''
// //   });

// //   // Loading state
// //   const [isSubmitting, setIsSubmitting] = useState(false);
  
// //   // Success/Error message state
// //   const [submitStatus, setSubmitStatus] = useState({
// //     message: '',
// //     isError: false
// //   });

// //   // Focus state management
// //   const [focusedField, setFocusedField] = useState('');

// //   const inputContainerClasses = "bg-transparent border border-[#515b73] rounded-xl w-full flex flex-col justify-center group";
// //   const inputClasses = "bg-transparent text-white w-full rounded-xl border-none focus:outline-none px-2 pb-2";
// //   const labelClasses = "text-[#677189] uppercase px-2 pt-2";

// //   const getContainerClass = (fieldName) => {
// //     const baseClasses = inputContainerClasses;
// //     return `${baseClasses} ${
// //       focusedField === fieldName ? 'border-white' : 'border-[#515b73]'
// //     }`;
// //   };

// //   // Handle input changes
// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData(prev => ({
// //       ...prev,
// //       [name]: value
// //     }));
// //   };

// //   // Handle form submission
// //   const handleSubmit = async () => {
// //     setIsSubmitting(true);
// //     setSubmitStatus({ message: '', isError: false });

// //     try {
// //       const response = await fetch('/api/contact', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({
// //           name: formData.name,
// //           email: formData.email,
// //           subject: `New inquiry from ${formData.company}`,
// //           message: `
// //             Name: ${formData.name}
// //             Company: ${formData.company}
// //             Phone: ${formData.phone}
// //             Email: ${formData.email}
// //             Message: ${formData.message}
// //           `
// //         }),
// //       });

// //       const data = await response.json();

// //       if (!response.ok) {
// //         throw new Error(data.message || 'Something went wrong');
// //       }

// //       // Success
// //       setSubmitStatus({
// //         message: 'Message sent successfully! We\'ll get back to you soon.',
// //         isError: false
// //       });
      
// //       // Clear form
// //       setFormData({
// //         name: '',
// //         company: '',
// //         phone: '',
// //         email: '',
// //         message: ''
// //       });

// //     } catch (error) {
// //       setSubmitStatus({
// //         message: error.message || 'Failed to send message. Please try again.',
// //         isError: true
// //       });
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   return (
// //     <div className={`${Clash.className} md:w-[38%] flex flex-col gap-[6vw] md:gap-[3vw] lg:gap-[2vw]`}>
// //       <div className="text-white xl:text-[1.5vw] md:text-[2.4vw] lg:text-[2vw] text-[5vw] tracking-wide leading-[1.2]">
// //         Seeking personalized support?
// //         <br /> Request a call from our team
// //       </div>
      
// //       <div className="flex flex-col gap-[5vw] md:gap-[2vw] lg:gap-[1.5vw]">
// //         <div className={`${getContainerClass('name')} h-[15vw] md:h-[6.5vw] lg:h-[4.2vw] text-[4vw] md:text-[2vw] lg:text-[1.2vw]`}>
// //           <div className={labelClasses}>Your Name</div>
// //           <input
// //             className={inputClasses}
// //             type="text"
// //             name="name"
// //             value={formData.name}
// //             onChange={handleChange}
// //             onFocus={() => setFocusedField('name')}
// //             onBlur={() => setFocusedField('')}
// //           />
// //         </div>

// //         <div className={`${getContainerClass('company')} h-[15vw] md:h-[6.5vw] lg:h-[4vw] text-[4vw] md:text-[2vw] lg:text-[1.2vw]`}>
// //           <div className={labelClasses}>Company Name</div>
// //           <input
// //             className={inputClasses}
// //             type="text"
// //             name="company"
// //             value={formData.company}
// //             onChange={handleChange}
// //             onFocus={() => setFocusedField('company')}
// //             onBlur={() => setFocusedField('')}
// //           />
// //         </div>

// //         <div className={`${getContainerClass('phone')} h-[15vw] md:h-[6.5vw] lg:h-[4vw] text-[4vw] md:text-[2vw] lg:text-[1.2vw]`}>
// //           <div className={labelClasses}>Phone Number</div>
// //           <input
// //             className={inputClasses}
// //             type="tel"
// //             name="phone"
// //             value={formData.phone}
// //             onChange={handleChange}
// //             onFocus={() => setFocusedField('phone')}
// //             onBlur={() => setFocusedField('')}
// //           />
// //         </div>

// //         <div className={`${getContainerClass('email')} h-[15vw] md:h-[6.5vw] lg:h-[4vw] text-[4vw] md:text-[2vw] lg:text-[1.2vw]`}>
// //           <div className={labelClasses}>Email</div>
// //           <input
// //             className={inputClasses}
// //             type="email"
// //             name="email"
// //             value={formData.email}
// //             onChange={handleChange}
// //             onFocus={() => setFocusedField('email')}
// //             onBlur={() => setFocusedField('')}
// //           />
// //         </div>

// //         <div className={`${getContainerClass('message')} h-[25vw] md:h-[9.5vw] lg:h-[7vw] text-[4vw] md:text-[2vw] lg:text-[1.2vw]`}>
// //           <div className={labelClasses}>Message</div>
// //           <textarea
// //             className={`${inputClasses} resize-none`}
// //             name="message"
// //             value={formData.message}
// //             onChange={handleChange}
// //             onFocus={() => setFocusedField('message')}
// //             onBlur={() => setFocusedField('')}
// //           />
// //         </div>
// //       </div>

// //       {submitStatus.message && (
// //         <div className={`text-sm ${submitStatus.isError ? 'text-red-500' : 'text-green-500'}`}>
// //           {submitStatus.message}
// //         </div>
// //       )}

// //       <div
// //         onClick={!isSubmitting ? handleSubmit : undefined}
// //         style={{
// //           backgroundColor: isSubmitting ? '#cccccc' : '#ffffff',
// //           color: '#02123B',
// //           cursor: isSubmitting ? 'not-allowed' : 'pointer'
// //         }}
// //         className={`${ClashM.className} flex xl:text-[1vw] md:text-[1.3vw] text-[4vw] sm:text-[3.5vw] w-fit px-4 py-2 rounded-full items-center justify-center`}
// //       >
// //         {isSubmitting ? 'Submitting...' : 'Submit'} 
// //         {!isSubmitting && <CaretRight className='w-[4vw] h-[4vw] md:w-[1.5vw] md:h-[1.5vw] xl:w-[1.2vw] xl:h-[1.2vw] sm:w-[3.5vw] sm:h-[3.5vw]' />}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ContactForm;
// "use client"
// import React, { useState } from "react";
// import { Clash, ClashM } from "../../../public/fonts/fonts";
// import { CaretRight } from "@phosphor-icons/react/dist/ssr";

// const ContactForm = () => {
//   // Form state
//   const [formData, setFormData] = useState({
//     name: '',
//     company: '',
//     phone: '',
//     email: '',
//     message: ''
//   });

//   // Validation state
//   const [errors, setErrors] = useState({
//     email: '',
//     phone: ''
//   });

//   // Loading state
//   const [isSubmitting, setIsSubmitting] = useState(false);
  
//   // Success/Error message state
//   const [submitStatus, setSubmitStatus] = useState({
//     message: '',
//     isError: false
//   });

//   // Focus state management
//   const [focusedField, setFocusedField] = useState('');

//   const inputContainerClasses = "bg-transparent border border-[#515b73] rounded-xl w-full flex flex-col justify-center group";
//   const inputClasses = "bg-transparent text-white w-full rounded-xl border-none focus:outline-none px-2 pb-2";
//   const labelClasses = "text-[#677189] uppercase px-2 pt-2";
//   const errorClasses = "text-red-500 text-xs mt-1 px-2";

//   const getContainerClass = (fieldName) => {
//     const baseClasses = inputContainerClasses;
//     return `${baseClasses} ${
//       focusedField === fieldName ? 'border-white' : 
//       errors[fieldName] ? 'border-red-500' : 'border-[#515b73]'
//     }`;
//   };

//   // Validation functions
//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!email) return "Email is required";
//     if (!emailRegex.test(email)) return "Please enter a valid email address";
//     return "";
//   };

//   const validatePhone = (phone) => {
//     // Allows formats like: +91 1234567890, 1234567890, 123-456-7890
//     const phoneRegex = /^(\+\d{1,3}\s?)?\d{10}$|^\d{3}[-.]?\d{3}[-.]?\d{4}$/;
//     if (!phone) return "Phone number is required";
//     if (!phoneRegex.test(phone.replace(/[- .]/g, ''))) return "Please enter a valid phone number";
//     return "";
//   };

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));

//     // Clear errors when user starts typing
//     if (errors[name]) {
//       setErrors(prev => ({
//         ...prev,
//         [name]: ''
//       }));
//     }
//   };

//   // Validate form
//   const validateForm = () => {
//     const emailError = validateEmail(formData.email);
//     const phoneError = validatePhone(formData.phone);

//     setErrors({
//       email: emailError,
//       phone: phoneError
//     });

//     return !emailError && !phoneError;
//   };

//   // Handle form submission
//   const handleSubmit = async () => {
//     // First validate the form
//     if (!validateForm()) {
//       return;
//     }

//     setIsSubmitting(true);
//     setSubmitStatus({ message: '', isError: false });

//     try {
//       const response = await fetch('/api/contact', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name: formData.name,
//           email: formData.email,
//           subject: `New inquiry from ${formData.company}`,
//           message: `
//             Name: ${formData.name}
//             Company: ${formData.company}
//             Phone: ${formData.phone}
//             Email: ${formData.email}
//             Message: ${formData.message}
//           `
//         }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || 'Something went wrong');
//       }

//       // Success
//       setSubmitStatus({
//         message: 'Message sent successfully! We\'ll get back to you soon.',
//         isError: false
//       });
      
//       // Clear form
//       setFormData({
//         name: '',
//         company: '',
//         phone: '',
//         email: '',
//         message: ''
//       });
//       setErrors({ email: '', phone: '' });

//     } catch (error) {
//       setSubmitStatus({
//         message: error.message || 'Failed to send message. Please try again.',
//         isError: true
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Handle blur events for validation
//   const handleBlur = (field) => {
//     setFocusedField('');
//     if (field === 'email') {
//       setErrors(prev => ({
//         ...prev,
//         email: validateEmail(formData.email)
//       }));
//     }
//     if (field === 'phone') {
//       setErrors(prev => ({
//         ...prev,
//         phone: validatePhone(formData.phone)
//       }));
//     }
//   };

//   return (
//     <div className={`${Clash.className} md:w-[38%] flex flex-col gap-[6vw] md:gap-[3vw] lg:gap-[2vw]`}>
//       <div className="text-white xl:text-[1.5vw] md:text-[2.4vw] lg:text-[2vw] text-[5vw] tracking-wide leading-[1.2]">
//         Seeking personalized support?
//         <br /> Request a call from our team
//       </div>
      
//       <div className="flex flex-col gap-[5vw] md:gap-[2vw] lg:gap-[1.5vw]">
//         <div className={`${getContainerClass('name')} h-[15vw] md:h-[6.5vw] lg:h-[4.2vw] text-[4vw] md:text-[2vw] lg:text-[1.2vw]`}>
//           <div className={labelClasses}>Your Name</div>
//           <input
//             className={inputClasses}
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             onFocus={() => setFocusedField('name')}
//             onBlur={() => setFocusedField('')}
//           />
//         </div>

//         <div className={`${getContainerClass('company')} h-[15vw] md:h-[6.5vw] lg:h-[4vw] text-[4vw] md:text-[2vw] lg:text-[1.2vw]`}>
//           <div className={labelClasses}>Company Name</div>
//           <input
//             className={inputClasses}
//             type="text"
//             name="company"
//             value={formData.company}
//             onChange={handleChange}
//             onFocus={() => setFocusedField('company')}
//             onBlur={() => setFocusedField('')}
//           />
//         </div>

//         <div className={`${getContainerClass('phone')} h-[15vw] md:h-[6.5vw] lg:h-[4vw] text-[4vw] md:text-[2vw] lg:text-[1.2vw]`}>
//           <div className={labelClasses}>Phone Number</div>
//           <input
//             className={inputClasses}
//             type="tel"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             onFocus={() => setFocusedField('phone')}
//             onBlur={() => handleBlur('phone')}
//           />
//           {errors.phone && <div className={errorClasses}>{errors.phone}</div>}
//         </div>

//         <div className={`${getContainerClass('email')} h-[15vw] md:h-[6.5vw] lg:h-[4vw] text-[4vw] md:text-[2vw] lg:text-[1.2vw]`}>
//           <div className={labelClasses}>Email</div>
//           <input
//             className={inputClasses}
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             onFocus={() => setFocusedField('email')}
//             onBlur={() => handleBlur('email')}
//           />
//           {errors.email && <div className={errorClasses}>{errors.email}</div>}
//         </div>

//         <div className={`${getContainerClass('message')} h-[25vw] md:h-[9.5vw] lg:h-[7vw] text-[4vw] md:text-[2vw] lg:text-[1.2vw]`}>
//           <div className={labelClasses}>Message</div>
//           <textarea
//             className={`${inputClasses} resize-none`}
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             onFocus={() => setFocusedField('message')}
//             onBlur={() => setFocusedField('')}
//           />
//         </div>
//       </div>

//       {submitStatus.message && (
//         <div className={`text-sm ${submitStatus.isError ? 'text-red-500' : 'text-green-500'}`}>
//           {submitStatus.message}
//         </div>
//       )}

//       <div
//         onClick={!isSubmitting ? handleSubmit : undefined}
//         style={{
//           backgroundColor: isSubmitting ? '#cccccc' : '#ffffff',
//           color: '#02123B',
//           cursor: isSubmitting ? 'not-allowed' : 'pointer'
//         }}
//         className={`${ClashM.className} flex xl:text-[1vw] md:text-[1.3vw] text-[4vw] sm:text-[3.5vw] w-fit px-4 py-2 rounded-full items-center justify-center`}
//       >
//         {isSubmitting ? 'Submitting...' : 'Submit'} 
//         {!isSubmitting && <CaretRight className='w-[4vw] h-[4vw] md:w-[1.5vw] md:h-[1.5vw] xl:w-[1.2vw] xl:h-[1.2vw] sm:w-[3.5vw] sm:h-[3.5vw]' />}
//       </div>
//     </div>
//   );
// };

// export default ContactForm;
"use client"
import React, { useState } from "react";
import { Clash, ClashM } from "../../../public/fonts/fonts";
import { CaretRight } from "@phosphor-icons/react/dist/ssr";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: ''
  });

  // Expand errors state to include all fields
  const [errors, setErrors] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    message: '',
    isError: false
  });
  const [focusedField, setFocusedField] = useState('');

  const inputContainerClasses = "bg-transparent border border-[#515b73] rounded-xl w-full flex flex-col justify-center group relative"; // Added relative
  const inputClasses = "bg-transparent text-white w-full rounded-xl border-none focus:outline-none px-2 pb-2";
  const labelClasses = "text-[#677189] uppercase px-2 pt-2";
  const errorClasses = "text-red-500 text-[2.5vw] md:text-[1vw] lg:text-[0.8vw] absolute -bottom-[20px] left-2"; // Updated error styling

  const getContainerClass = (fieldName) => {
    return `${inputContainerClasses} ${
      focusedField === fieldName ? 'border-white' : 
      errors[fieldName] ? 'border-red-500' : 'border-[#515b73]'
    }`;
  };

  // Validation functions for all fields
  const validateField = (name, value) => {
    switch(name) {
      case 'name':
        return !value.trim() ? "Name is required" : "";
      case 'company':
        return !value.trim() ? "Company name is required" : "";
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
      case 'message':
        return !value.trim() ? "Message is required" : "";
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
    // Clear error when typing
    setErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Validate all fields
    Object.keys(formData).forEach(field => {
      const error = validateField(field, formData[field]);
      newErrors[field] = error;
      if (error) isValid = false;
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleBlur = (field) => {
    setFocusedField('');
    setErrors(prev => ({
      ...prev,
      [field]: validateField(field, formData[field])
    }));
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ message: '', isError: false });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: `New inquiry from ${formData.company}`,
          message: `
            Name: ${formData.name}
            Company: ${formData.company}
            Phone: ${formData.phone}
            Email: ${formData.email}
            Message: ${formData.message}
          `
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setSubmitStatus({
        message: 'Message sent successfully! We\'ll get back to you soon.',
        isError: false
      });
      
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        message: ''
      });
      setErrors({
        name: '',
        company: '',
        phone: '',
        email: '',
        message: ''
      });

    } catch (error) {
      setSubmitStatus({
        message: error.message || 'Failed to send message. Please try again.',
        isError: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`${Clash.className} md:w-[38%] flex flex-col gap-[8vw] md:gap-[4vw] lg:gap-[3vw]`}> {/* Increased gap to accommodate errors */}
      <div className="text-white xl:text-[1.5vw] md:text-[2.4vw] lg:text-[2vw] text-[5vw] tracking-wide leading-[1.2]">
        Seeking personalized support?
        <br /> Request a call from our team
      </div>
      
      <div className="flex flex-col gap-[7vw] md:gap-[3vw] lg:gap-[1vw]"> {/* Increased gap for error messages */}
        {/* Name Field */}
        <div className={`${getContainerClass('name')} h-[15vw] md:h-[6.5vw] lg:h-[4.2vw] text-[4vw] md:text-[2vw] lg:text-[1.2vw] mb-[1vw]`}>
          <div className={labelClasses}>Your Name</div>
          <input
            className={inputClasses}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onFocus={() => setFocusedField('name')}
            onBlur={() => handleBlur('name')}
          />
          {errors.name && <div className={errorClasses}>{errors.name}</div>}
        </div>

        {/* Company Field */}
        <div className={`${getContainerClass('company')} h-[15vw] md:h-[6.5vw] lg:h-[4vw] text-[4vw] md:text-[2vw] lg:text-[1.2vw] mb-[1vw]`}>
          <div className={labelClasses}>Company Name</div>
          <input
            className={inputClasses}
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            onFocus={() => setFocusedField('company')}
            onBlur={() => handleBlur('company')}
          />
          {errors.company && <div className={errorClasses}>{errors.company}</div>}
        </div>

        {/* Phone Field */}
        <div className={`${getContainerClass('phone')} h-[15vw] md:h-[6.5vw] lg:h-[4vw] text-[4vw] md:text-[2vw] lg:text-[1.2vw] mb-[1vw]`}>
          <div className={labelClasses}>Phone Number</div>
          <input
            className={inputClasses}
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onFocus={() => setFocusedField('phone')}
            onBlur={() => handleBlur('phone')}
          />
          {errors.phone && <div className={errorClasses}>{errors.phone}</div>}
        </div>

        {/* Email Field */}
        <div className={`${getContainerClass('email')} h-[15vw] md:h-[6.5vw] lg:h-[4vw] text-[4vw] md:text-[2vw] lg:text-[1.2vw] mb-[1vw]`}>
          <div className={labelClasses}>Email</div>
          <input
            className={inputClasses}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => setFocusedField('email')}
            onBlur={() => handleBlur('email')}
          />
          {errors.email && <div className={errorClasses}>{errors.email}</div>}
        </div>

        {/* Message Field */}
        <div className={`${getContainerClass('message')} h-[25vw] md:h-[9.5vw] lg:h-[7vw] text-[4vw] md:text-[2vw] lg:text-[1.2vw] mb-[1vw]`}>
          <div className={labelClasses}>Message</div>
          <textarea
            className={`${inputClasses} resize-none`}
            name="message"
            value={formData.message}
            onChange={handleChange}
            onFocus={() => setFocusedField('message')}
            onBlur={() => handleBlur('message')}
          />
          {errors.message && <div className={errorClasses}>{errors.message}</div>}
        </div>
      </div>

      {submitStatus.message && (
        <div className={`text-sm ${submitStatus.isError ? 'text-red-500' : 'text-green-500'}`}>
          {submitStatus.message}
        </div>
      )}

      <div
        onClick={!isSubmitting ? handleSubmit : undefined}
        style={{
          backgroundColor: isSubmitting ? '#cccccc' : '#ffffff',
          color: '#02123B',
          cursor: isSubmitting ? 'not-allowed' : 'pointer'
        }}
        className={`${ClashM.className} flex xl:text-[1vw] md:text-[1.3vw] text-[4vw] sm:text-[3.5vw] w-fit px-4 py-2 rounded-full items-center justify-center`}
      >
        {isSubmitting ? 'Submitting...' : 'Submit'} 
        {!isSubmitting && <CaretRight className='w-[4vw] h-[4vw] md:w-[1.5vw] md:h-[1.5vw] xl:w-[1.2vw] xl:h-[1.2vw] sm:w-[3.5vw] sm:h-[3.5vw]' />}
      </div>
    </div>
  );
};

export default ContactForm;
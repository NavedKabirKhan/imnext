import { useState } from "react";
import AWS from 'aws-sdk';
import Image from "next/legacy/image";
import crossIcon from "@/app/assets/career/cross-icon.svg";
import careerStyles from "@/app/styles/Career.module.css";

const MultiStepForm = ({ formName, closeFormModule, formVisible }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    resume: null,
    portfolioLink: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validateStep = () => {
    let newErrors = {};

    if (step === 1 && !formData.fullName) {
      newErrors.fullName = "Please enter your full name";
    }
    if (step === 2) {
      if (!formData.email) {
        newErrors.email = "Please enter your email address";
      } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }
    if (step === 3 && !/^\d{10}$/.test(formData.contact)) {
      newErrors.contact = "Please enter a valid 10-digit mobile number";
    }
    if (step === 4 && !formData.resume) {
      newErrors.resume = "Please upload your resume";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
  
    if (name === "resume" && files) {
      console.log("File selected:", files[0]);
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  
  const fileuplode = async () => {
    try {
      console.log('Preparing file upload...');
      const uploadData = new FormData();
      uploadData.append('resume', formData.resume); // Ensure 'resume' matches the backend key
  
      const response = await fetch('/api/uploadResume', {
        method: 'POST',
        body: uploadData, // FormData automatically sets the correct Content-Type
      });
  
      console.log('Response received, status:', response.status);
  
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || 'File upload failed');
      }
  
      console.log('Upload successful:', result);
      return result.filePath;
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    }
  };
  


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const isValid = validateStep();
    if (isValid) {
      setIsSubmitting(true);
      setSubmitError('');
  
      try {
        // Step 1: Upload Resume
        console.log('Uploading resume...');
        const uploadData = new FormData();
        uploadData.append('resume', formData.resume);
  
        const uploadResponse = await fetch('/api/uploadResume', {
          method: 'POST',
          body: uploadData,
        });
  
        if (!uploadResponse.ok) {
          const uploadError = await uploadResponse.json();
          throw new Error(uploadError.error || 'Failed to upload resume');
        }
  
        const uploadResult = await uploadResponse.json();
        console.log('Resume uploaded to:', uploadResult.fileUrl);
  
        // Step 2: Submit Form Data
        console.log('Submitting form...');
        const formDataToSend = {
          fullName: formData.fullName,
          email: formData.email,
          contact: formData.contact,
          resumeLink: uploadResult.fileUrl, // Use the uploaded file URL
          portfolioLink: formData.portfolioLink || 'Not provided',
          position: formName,
        };
  
        const formResponse = await fetch('/api/submitCareerForm', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formDataToSend),
        });
  
        if (!formResponse.ok) {
          const formError = await formResponse.json();
          throw new Error(formError.message || 'Failed to submit form');
        }
  
        console.log('Form submitted successfully');
        setStep(6); // Move to the success step
      } catch (error) {
        console.error('Error during submission:', error);
        setSubmitError(error.message || 'An error occurred. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  

  
  return (
    <section className={careerStyles.popupform_s_c} onClick={closeFormModule}>
      <div
        className={careerStyles.form_container}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={careerStyles.form_close_button_c}>
          <button
            type="button"
            className={careerStyles.form_close_button}
            onClick={closeFormModule}
          >
            <Image src={crossIcon} alt="Close" />
          </button>
        </div>

        <div className={careerStyles.popupform_heading_s}>
          <div className={careerStyles.h_page_progress_number_c}>
            <h3 className={careerStyles.p_f_h_designation}>{formName}</h3>
            <div className={careerStyles.form_progress_counter}>{step}/6</div>
          </div>
          <p className={careerStyles.form_faq}>
            Please complete all sections of this application form. Ensure your contact information is accurate as this will be our primary means of communication with you.
          </p>
        </div>

        {submitError && (
          <div className={careerStyles.form_error}>
            {submitError}
          </div>
        )}

        <form className={careerStyles.form_holder} onSubmit={handleSubmit}>
          {step === 1 && (
            <fieldset className={careerStyles.form_field_set}>
              <div className={careerStyles.lable_input_container}>
                <label htmlFor="fullName">Your full name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className={careerStyles.input_field}
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && (
                  <div className={careerStyles.form_error}>
                    {errors.fullName}
                  </div>
                )}
              </div>

              <div className={careerStyles.nex_prev_button_c}>
                <button
                  type="button"
                  className={careerStyles.action_button}
                  onClick={handleNext}
                >
                  Next
                </button>
              </div>
            </fieldset>
          )}

          {step === 2 && (
            <fieldset className={careerStyles.form_field_set}>
              <div className={careerStyles.lable_input_container}>
                <label htmlFor="email">Your email address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={careerStyles.input_field}
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <div className={careerStyles.form_error}>{errors.email}</div>
                )}
              </div>

              <div className={careerStyles.nex_prev_button_c}>
                <button
                  type="button"
                  className={careerStyles.action_button}
                  onClick={handlePrevious}
                >
                  Previous
                </button>
                <button
                  type="button"
                  className={careerStyles.action_button}
                  onClick={handleNext}
                >
                  Next
                </button>
              </div>
            </fieldset>
          )}

          {step === 3 && (
            <fieldset className={careerStyles.form_field_set}>
              <div className={careerStyles.lable_input_container}>
                <label htmlFor="contact">Your mobile number</label>
                <input
                  type="tel"
                  id="contact"
                  name="contact"
                  className={careerStyles.input_field}
                  value={formData.contact}
                  onChange={handleChange}
                />
                {errors.contact && (
                  <div className={careerStyles.form_error}>
                    {errors.contact}
                  </div>
                )}
              </div>

              <div className={careerStyles.nex_prev_button_c}>
                <button
                  type="button"
                  className={careerStyles.action_button}
                  onClick={handlePrevious}
                >
                  Previous
                </button>
                <button
                  type="button"
                  className={careerStyles.action_button}
                  onClick={handleNext}
                >
                  Next
                </button>
              </div>
            </fieldset>
          )}

          {step === 4 && (
            <fieldset className={careerStyles.form_field_set}>
              <div className={careerStyles.lable_input_container}>
                <label htmlFor="resume">Upload your resume</label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  className={careerStyles.input_field}
                  onChange={handleChange}
                  accept=".pdf,.doc,.docx"
                />
                {errors.resume && (
                  <div className={careerStyles.form_error}>{errors.resume}</div>
                )}
              </div>

              <div className={careerStyles.nex_prev_button_c}>
                <button
                  type="button"
                  className={careerStyles.action_button}
                  onClick={handlePrevious}
                >
                  Previous
                </button>
                <button
                  type="button"
                  className={careerStyles.action_button}
                  onClick={handleNext}
                >
                  Next
                </button>
              </div>
            </fieldset>
          )}

          {step === 5 && (
            <fieldset className={careerStyles.form_field_set}>
              <div className={careerStyles.lable_input_container}>
                <label htmlFor="portfolioLink">
                  Share your portfolio (optional)
                </label>
                <input
                  type="url"
                  id="portfolioLink"
                  name="portfolioLink"
                  className={careerStyles.input_field}
                  value={formData.portfolioLink}
                  onChange={handleChange}
                />
              </div>

              <div className={careerStyles.nex_prev_button_c}>
                <button
                  type="button"
                  className={careerStyles.action_button}
                  onClick={handlePrevious}
                >
                  Previous
                </button>
                <button
                  type="submit"
                  className={careerStyles.action_button}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </fieldset>
          )}

          {step === 6 && (
            <fieldset className={careerStyles.form_field_set}>
              <h5>Thank You for Your Application!</h5>
              <p>
                We appreciate your interest in Integra Magna. Our team will
                review your application and contact you if we need further
                information or to schedule an interview. Good luck!
              </p>
            </fieldset>
          )}
        </form>
      </div>
    </section>
  );
};

export default MultiStepForm;
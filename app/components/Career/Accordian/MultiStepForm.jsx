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
    resume: null, // File object for resume
    portfolioLink: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation functions for each step
  const validateStep = () => {
    let newErrors = {};

    if (step === 1 && !formData.fullName) {
      newErrors.fullName = "Please enter your full name";
    }
    if (step === 2 && !formData.email) {
      newErrors.email = "Please enter your email address";
    } else if (
      step === 2 &&
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address";
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
    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle file upload to S3
  const fileuplode = () => {
    // Configure the AWS SDK
    AWS.config.region = 'ap-south-1'; // Ensure this matches your region
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'ap-south-1:1576cd6a-2ffc-46db-a911-c98c9659bb56', // Replace with your Identity Pool ID
    });

    const s3 = new AWS.S3();
    const file = formData.resume;
    if (!file) {
      alert('Please select a file to upload.');
      return null;
    }

    const name = formData.fullName.replace(/\s+/g, '_');
    const design = formName.replace(/\s+/g, '_');
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const newFileName = `${name}_${design}_${timestamp}_${file.name.replace(/\s+/g, '_')}`;
    const cvUrl = `https://formsubmission.s3.ap-south-1.amazonaws.com/${newFileName}`;

    const params = {
      Bucket: 'formsubmission', // Ensure this bucket exists and you have write permissions
      Key: newFileName,
      Body: file,
    };

    return new Promise((resolve, reject) => {
      s3.putObject(params, (err, data) => {
        if (err) {
          console.error('Error uploading file:', err);
          reject('File upload failed');
        } else {
          console.log('File uploaded successfully:', data);
          resolve(cvUrl); // Return the uploaded file URL
        }
      });
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateStep();
    if (isValid) {
      setIsSubmitting(true);
      try {
        // First, upload the resume to S3
        const uploadedResumeUrl = await fileuplode();

        if (!uploadedResumeUrl) {
          alert('Resume upload failed. Please try again.');
          setIsSubmitting(false);
          return;
        }

        // Prepare the form data to send via email
        const formDataToSend = {
          fullName: formData.fullName,
          email: formData.email,
          contact: formData.contact,
          resume: uploadedResumeUrl, // Uploaded resume URL
          portfolioLink: formData.portfolioLink || 'Not provided',
        };

        const response = await fetch('/api/submitCareerForm', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formDataToSend),
        });

        if (response.ok) {
          setStep(6); // Show the Thank You message
        } else {
          alert('Failed to submit the form. Please try again.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('An error occurred during form submission.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section className={careerStyles.popupform_s_c} onClick={closeFormModule}>
      <div
        className={careerStyles.form_container}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the form
      >
        <div className={careerStyles.form_close_button_c}>
          <button
            type="button"
            className={careerStyles.form_close_button}
            id="close-form-button"
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
          Please complete all sections of this application form. Ensure your contact information is accurate as this will be our primary means of communication with you.          </p>
        </div>

        <form className={careerStyles.form_holder} onSubmit={handleSubmit}>
          {step === 1 && (
            <fieldset className={careerStyles.form_field_set}>
              <div className={careerStyles.lable_input_container}>
                <label htmlFor="fullName">Your full name</label>
                <input
                  type="text"
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
                <input
                  type="button"
                  name="next"
                  className={careerStyles.action_button}
                  value="Next"
                  onClick={handleNext}
                />
              </div>
            </fieldset>
          )}

          {step === 2 && (
            <fieldset className={careerStyles.form_field_set}>
              <div className={careerStyles.lable_input_container}>
                <label htmlFor="email">Your email address</label>
                <input
                  type="email"
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
                <input
                  type="button"
                  name="previous"
                  className={careerStyles.action_button}
                  value="Previous"
                  onClick={handlePrevious}
                />
                <input
                  type="button"
                  name="next"
                  className={careerStyles.action_button}
                  value="Next"
                  onClick={handleNext}
                />
              </div>
            </fieldset>
          )}

          {step === 3 && (
            <fieldset className={careerStyles.form_field_set}>
              <div className={careerStyles.lable_input_container}>
                <label htmlFor="contact">Your mobile number</label>
                <input
                  type="tel"
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
                <input
                  type="button"
                  name="previous"
                  className={careerStyles.action_button}
                  value="Previous"
                  onClick={handlePrevious}
                />
                <input
                  type="button"
                  name="next"
                  className={careerStyles.action_button}
                  value="Next"
                  onClick={handleNext}
                />
              </div>
            </fieldset>
          )}

          {step === 4 && (
            <fieldset className={careerStyles.form_field_set}>
              <div className={careerStyles.lable_input_container}>
                <label htmlFor="resume">Upload your resume</label>
                <input
                  type="file"
                  name="resume"
                  id="resume"
                  className={careerStyles.input_field}
                  onChange={handleChange}
                />
                {errors.resume && (
                  <div className={careerStyles.form_error}>{errors.resume}</div>
                )}
              </div>

              <div className={careerStyles.nex_prev_button_c}>
                <input
                  type="button"
                  name="previous"
                  className={careerStyles.action_button}
                  value="Previous"
                />
                <input
                  type="button"
                  name="next"
                  className={careerStyles.action_button}
                  value="Next"
                  onClick={handleNext}
                />
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
                  name="portfolioLink"
                  className={careerStyles.input_field}
                  value={formData.portfolioLink}
                  onChange={handleChange}
                />
              </div>

              <div className={careerStyles.nex_prev_button_c}>
                <input
                  type="button"
                  name="previous"
                  className={careerStyles.action_button}
                  value="Previous"
                />
             <button
                  type="submit"
                  className={careerStyles.action_button}
                  disabled={isSubmitting} // Disable button when submitting
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
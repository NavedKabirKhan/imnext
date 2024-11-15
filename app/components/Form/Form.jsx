import { useState } from "react";
import Image from "next/legacy/image";

const Form = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    text: "",
  });
  const [buttonState, setButtonState] = useState(true);
  const [alertVisible, setAlertVisible] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (buttonState) {
      setButtonState(false);
      document.getElementById("btn_submit").disabled = true;

      const { name, email, text } = formState;

      if (validateEmail(email)) {
        try {
          const response = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, text }),
          });

          const result = await response.json();

          if (result.success) {
            showAlert(); // This will display the popup
          } else {
            alert("Failed to send email. Please try again.");
          }
        } catch (error) {
          console.error("Failed to send email:", error);
        }
      } else {
        alert("Please enter a valid email address.");
        setButtonState(true);
        document.getElementById("btn_submit").disabled = false;
      }
    }
  };

  // Function to show the popup
  const showAlert = () => {
    setAlertVisible(true);
    document.body.classList.add("no_scroll");
    setFormState({ name: "", email: "", text: "" });
    setButtonState(true);
    document.getElementById("btn_submit").disabled = false;
  };

  // Function to close the popup
  const closePopup = () => {
    setAlertVisible(false);
    document.body.classList.remove("no_scroll");
  };

  return (
    <>
      <section className="form_container_section">
        <div className="footer_form_section">
          <div className="footer_upperline">
            <p>Drop us a line or come grab a coffee, it&apos;s on us, and let&apos;s design the extraordinary together</p>
          </div>
          <div id="footer_container">
            <div className="footer">
              <form id="my_form" onSubmit={handleSubmit}>
                <p className="footer_p">
                  Hey, I’m
                  <span>
                    <input
                      type="text"
                      placeholder="your name"
                      id="name_user"
                      name="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      required={false}
                      autoComplete="off"
                      className="name_box"
                    />
                  </span>
                  
                  Let&apos;s grab a virtual coffee and chat things out. Reach me back at
                  <span>
                    <input
                      type="email"
                      placeholder="your email address"
                      id="gmail_user"
                      name="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      required
                      autoComplete="off"
                      className="gmail_box"
                    />
                  </span>Here’s what I’m thinking:
                  <span>
                    <textarea
                      placeholder="Spill the ink of your mind right here..."
                      id="text_user"
                      name="text"
                      value={formState.text}
                      onChange={handleInputChange}
                      rows="3"
                      className="text_area"
                    />
                  </span>
                </p>
                <div className="footer_bt">
                  <div className="social_media_icon">
                    <p>
                      <span><a href="https://www.instagram.com/integra.magna/" target="_blank" rel="noopener noreferrer">Ig</a></span>
                      <span><a href="https://www.linkedin.com/company/integramagna/" target="_blank" rel="noopener noreferrer">In</a></span>
                      <span><a href="https://twitter.com/Integra_Magna/" target="_blank" rel="noopener noreferrer">X</a></span>
                      <span><a href="https://www.behance.net/integra_magna/" target="_blank" rel="noopener noreferrer">Be</a></span>
                    </p>
                  </div>
                  <button type="submit" id="btn_submit">Submit</button>
                </div>
              </form>

              {alertVisible && (
                <section className="footer_form_pop" id="footer_form_pop">
                  <div className="pop_form_container" id="pop_form_container">
                    <div className="footer_form_close_button_c">
                      <button type="button" className="footer_form_close_button"onClick={closePopup}>
                       <svg role="presentation" class="t-popup__close-icon" width="23px" height="23px" viewBox="0 0 23 23" version="1.1" >
                          <g stroke="none" stroke-width="1" fill="#101820" fill-rule="evenodd">
                            <rect transform="translate(11.313708, 11.313708) rotate(-45.000000) translate(-11.313708, -11.313708) " x="10.3137085" y="-3.6862915" width="2" height="30"></rect>
                            <rect transform="translate(11.313708, 11.313708) rotate(-315.000000) translate(-11.313708, -11.313708) " x="10.3137085" y="-3.6862915" width="2" height="30"></rect>
                          </g>
                        </svg>
                      </button>
                    </div>
                    <div className="pop_form_content">
                      <div className="pop_text">
                      <h1 className="pop_form_head">Thank You!</h1>
                      <p className="pop_form_para">
                        We&apos;ve received your message and will respond within 24 hours.
                        <br /><br />
                        In the meantime, make sure to follow us on social!
                      </p>
                      </div>
                    <div className="social_media_icon">
                      <p>
                        <span><a href="https://www.instagram.com/integra.magna/" target="_blank" rel="noopener noreferrer">Ig</a></span>
                        <span><a href="https://www.linkedin.com/company/integramagna/" target="_blank" rel="noopener noreferrer">In</a></span>
                        <span><a href="https://twitter.com/Integra_Magna/" target="_blank" rel="noopener noreferrer">X</a></span>
                        <span><a href="https://www.behance.net/integra_magna/" target="_blank" rel="noopener noreferrer">Be</a></span>
                      </p>
                    </div>
                    </div>

                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;

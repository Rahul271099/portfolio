// import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./contact.scss";

const ContactComponent = () => {
  return (
    <div>
      <section className="main_contact" id="ContactComponent">
        <div className="contact_head">
          <h2>Conatct Me</h2>
        </div>
        <div className="contact_middle">
          <div className="contact_email">
            <MdEmail />
            <a href="mailto:rahulmunj16@gmail.com">rahulmunj16@gmail.com</a>
          </div>
          <div className="contact_phone">
            <FaPhoneAlt />
            <p>+91-9619049959</p>
          </div>
          <div className="contact_linkedin">
            <FaLinkedin />
            <a
              href="https://www.linkedin.com/in/rahul-munj-553881194/"
              target="blank"
            >
              linkdin Profile
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
{
  /* <form className="contact_form">
<input type="text" className="name" placeholder="Enter Your Name" />
<input
  type="text"
  className="name"
  placeholder="Enter Your Email Address"
/>
<textarea
  name="message"
  id="msg"
  rows="5"
  className="message"
  placeholder="Enter message"
></textarea>
<button type="submit" className="submitButton">
  Submit Form
</button>
</form> */
}
export default ContactComponent;

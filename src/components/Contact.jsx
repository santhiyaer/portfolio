import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

export default function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ily3bjm",   // 👈 Replace with your EmailJS Service ID
        "template_ylguael",  // 👈 Replace with your Template ID
        formRef.current,
        "ADx8FuYyX7Fo-t3BB"    // 👈 Replace with your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("✅ Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("❌ Failed to send message. Try again!");
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>
      <div className="con-container">
        <form ref={formRef} onSubmit={sendEmail}>
          <div className="split right">
            <input type="text" name="user_name" placeholder="Name*" required />
            <input type="email" name="user_email" placeholder="Email*" required />
          </div>
          <input type="text" name="subject" placeholder="Subject" />
          <textarea name="message" placeholder="Message" rows="6"></textarea>
          <button type="submit">Submit</button>
        </form>

        <div className="split left">
          <h4>Santhiya K</h4>
          <h4>Phone</h4>
          <p>936-318-7749</p>
          <h4>Email</h4>
          <p>santhiyakanniyappan2004@gmail.com</p>
          <br />
          <h1>
            <a href="https://www.linkedin.com/in/santhiya-kanniyappan-b18077286/"><FaLinkedin /></a>&ensp;&ensp;
            <a href="https://github.com/santhiyaer"><FaGithub /></a>
          </h1>
        </div>
      </div>
    </section>
  );
}

import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import ResumeImg from '../../assets/resume.png';
import CertificateImg from '../../assets/certificate.png';
import Resume from '../../assets/Petrus_resume.pdf';
import Certificate from '../../assets/certificate.png';



function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jd5b754', 'template_9dsj2ug', form.current, 'ecpIGOMW3vYl8u7gP')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent!');
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className="contactPage">
      <div id="documents">
        <h1 className="contactPageTitle">Documents</h1>
        <p className="documentDesc">
          These are my resume and JavaScript course completion certificate from General Assemby
        </p>
        <div className="documentImgs">
          <a href={Resume} target="_blank"><img src={ResumeImg} alt="Resume" className="documentImg" /></a>         
          <a href={Certificate} target="_blank"><img src={CertificateImg} alt="Certificate" className="documentImg" /></a>
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
        <form className="contactFrom" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name" name="from_name" />
          <input type="text" className="email" placeholder="Your Email" name="from_email" />
          <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
          <button type="submit" value="send" className="submitBtn">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
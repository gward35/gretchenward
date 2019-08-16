import React from 'react';
import RetroButton from './retroButton';

const Contact = () => {
  return (
    <form className="contact" id="contactForm">
      <div className="control">
        <input type="text" className="form-control" 
        placeholder="Full Name" aria-label="Name" required
        data-validation-required-message="Please enter your name" />
      </div>   
      <div className="control">
        <input type="email" className="form-control" placeholder="Email" aria-label="Email" required data-validation-required-message="Please enter your email" />
      </div>  
      <div className="control">
        <textarea rows="10" cols="100" className="form-control" 
        placeholder="Message" aria-label="Message" required
        data-validation-required-message="Please enter your message" minLength="5" data-validation-minlength-message="Min 5 characters" maxLength="250"></textarea>
      </div>      
      <div className="success"></div>
      <RetroButton text="Send" />
    </form>
  )
}

export default Contact;
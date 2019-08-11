import React from 'react';

const Contact = () => {
  return (
    <form name="sentMessage" className="contact" id="contactForm" noValidate>
      <div className="control-group">
        <div className="controls">
          <input type="text" className="form-control" 
          placeholder="Full Name" id="name" required
          data-validation-required-message="Please enter your name" />
        </div>
      </div>   
      <div className="control-group">
        <div className="controls">
          <input type="email" className="form-control" placeholder="Email" id="email" required data-validation-required-message="Please enter your email" />
        </div>
      </div>  
      <div className="control-group">
        <div className="controls">
          <textarea rows="10" cols="100" className="form-control" 
          placeholder="Message" id="message" required
          data-validation-required-message="Please enter your message" minLength="5" data-validation-minlength-message="Min 5 characters" maxLength="250"></textarea>
        </div>
      </div>      
      <div className="success"></div>
      <button>Send</button>
    </form>
  )
}

export default Contact;
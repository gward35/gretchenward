import React, { useState } from 'react';
import RetroButton from './retroButton';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitting Name ${name}`);
  }

  return (
    <form className="contact" onSubmit={handleSubmit} id="contactForm">
      <div className="control">
        <input type="text" name="name" className="form-control" 
        placeholder="Full Name" aria-label="Name" value={name} onChange={e => setName(e.target.value)} required
        data-validation-required-message="Please enter your name" />
      </div>
      <div className="control">
        <input type="email" name="email" className="form-control" placeholder="Email" aria-label="Email" 
        value={email} onChange={e => setEmail(e.target.value)}
        required data-validation-required-message="Please enter your email" />
      </div>
      <div className="control">
        <textarea rows="10" name="message" className="form-control" 
        placeholder="Message" aria-label="Message" required
        value={message} onChange={e => setMessage(e.target.value)}
        data-validation-required-message="Please enter your message" minLength="5" data-validation-minlength-message="Min 5 characters" maxLength="250"></textarea>
      </div>
      <div className="success"></div>
      <RetroButton type="submit" text="Send" />
    </form>
  )
}

export default Contact;
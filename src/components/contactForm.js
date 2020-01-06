import React, { useState } from 'react';
import RetroButton from './retroButton';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateId = 'template_Y3ZLajIp';
    sendFeedback(templateId, {message_html: message, from_name: name, reply_to: email})
  }

  const sendFeedback = (templateId, variables) => {
    window.emailjs.send('gmail', templateId, variables)
    .then(res => { console.log('email sent!')})
    .catch(err => { console.log('uh-oh something when wrong on my end sorry about that', err)})
  }

  return (
    <form className="contact" id="contactForm">
      <div className="control">
        <input type="text" name="name" className="form-control" 
        placeholder="Full Name" aria-label="Name" value={name} onChange={e => setName(e.target.value)} required />
      </div>
      <div className="control">
        <input type="email" name="email" className="form-control" placeholder="Email" aria-label="Email" 
        value={email} onChange={e => setEmail(e.target.value)} required />
      </div>
      <div className="control">
        <textarea name="message" className="form-control" 
        placeholder="Message" aria-label="Message" required
        value={message} onChange={e => setMessage(e.target.value)} minLength="5" maxLength="250"></textarea>
      </div>
      <RetroButton type="submit" text="Send" onClick={handleSubmit} />
    </form>
  )
}

export default Contact;
import React, { useState } from 'react'
import RetroButtonSubmit from './retroButtonSubmit'
import useToast from './Toast/useToast'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const toast = useToast()
  const showSuccess = () => {
    toast.add('Message sent successfully!')
  }
  const showError = () => {
    return toast.add('Uh oh, something went wrong :(')
  }

  const handleSubmit = e => {
    e.preventDefault()
    const templateId = 'template_Y3ZLajIp'
    sendFeedback(templateId, {
      message_html: message,
      from_name: name,
      reply_to: email,
    })

    //clear fields after submit
    setName('')
    setEmail('')
    setMessage('')
  }

  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send('gmail', templateId, variables)
      .then(res => {
        showSuccess()
        console.log('Message Sent Successfully!')
      })
      .catch(err => {
        showError()
        console.log(
          'uh-oh something when wrong on my end sorry about that',
          err
        )
      })
  }

  return (
    <form className="contact" id="contactForm" onSubmit={handleSubmit}>
      <div className="control">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Full Name"
          aria-label="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </div>
      <div className="control">
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Email"
          aria-label="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="control">
        <textarea
          name="message"
          className="form-control"
          placeholder="Message"
          aria-label="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          minLength="5"
          maxLength="250"
          required
        ></textarea>
      </div>
      <RetroButtonSubmit type="submit" text="Send" />
    </form>
  )
}

export default Contact

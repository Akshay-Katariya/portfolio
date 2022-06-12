import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './email.css'

export const Email = () => {
	const emailRegex = `([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$`

	const form = useRef()
	const sendEmail = (e) => {
		e.preventDefault()
		emailjs
			.sendForm(
				process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
				process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
				form.current,
				process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY
			)
			.then(
				(result) => {
					e.target.reset()
					console.log(result.text)
				},
				(error) => {
					console.log(error.text)
				}
			)
	}

	return (
		<form className='email-form' ref={form} onSubmit={sendEmail}>
			<div className='email-row'>
				<label for='fname'>Name</label>
				<input type='text' name='name' required placeholder='Enter your name' />
			</div>
			<div className='email-row'>
				<label for='fname'>Email</label>
				<input type='email' pattern={emailRegex} name='email' required placeholder='Enter your email' />
			</div>
			<div className='email-row'>
				<label for='fname'>Message</label>
				<textarea name='message' required placeholder='Enter your message' />
			</div>
			<button type='submit' className='form-button'>
				<i class='fi fi-rr-paper-plane' />
				Send Message
			</button>
		</form>
	)
}

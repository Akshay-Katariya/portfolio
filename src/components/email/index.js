import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './email.css'
import { trackEvent } from '../../analytics/tracking'
import { CATEGORY_EMAIL_JS, EVENT_MAIL_SENT } from '../../analytics/events'
import { GoogleIcons, Icons } from '../../icons'

const emailRegex = `([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$`

export const Email = () => {
	const form = useRef()

	const makeToast = ()=>{
		const id = toast.loading('Sending email', {
			position: 'bottom-center',
			autoClose: 5000,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			icon: false,
			closeButton: true,
		})
		return id
	}

	const sendEmail = (e) => {
		let toastId = makeToast()

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
					trackEvent(CATEGORY_EMAIL_JS, EVENT_MAIL_SENT)
					e.target.reset()
					toast.update(toastId, {
						render: 'Thank you for contacting me 🙏',
						type: 'success',
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						isLoading: false,
					})
				},
				(error) => {
					console.log(error.text)
					toast.update(toastId, {
						render: 'Oops! Something went wrong with Email-JS',
						type: 'error',
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						isLoading: false,
					})
				}
			)
	}

	return (
		<>
			<form action='/' className='email-form' ref={form} onSubmit={sendEmail}>
				<div className='email-row'>
					<label htmlFor='fname'>Name</label>
					<input type='text' name='name' required placeholder='Enter your name' />
				</div>
				<div className='email-row'>
					<label htmlFor='fname'>Email</label>
					<input type='email' pattern={emailRegex} name='email' required placeholder='Enter your email' />
				</div>
				<div className='email-row'>
					<label htmlFor='fname'>Message</label>
					<textarea name='message' required placeholder='Enter your message' />
				</div>
				<button type='submit' className='form-button'>
					<GoogleIcons name={Icons.Email} margin />
					Send Email
				</button>
			</form>
			<ToastContainer
				position='bottom-center'
				closeButton
				autoClose={5000}
				hideProgressBar={false}
				closeOnClick
				pauseOnFocusLoss
				pauseOnHover
			/>
		</>
	)
}

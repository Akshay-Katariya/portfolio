import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './email.css'

export const Email = () => {
	const emailRegex = `([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$`
	const form = useRef()

	const sendEmail = (e) => {
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
					toast.update(id, {
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
					console.log(result.text)
				},
				(error) => {
					console.log(error.text)
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
					<i class='fi fi-rr-paper-plane' />
					Send Message
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

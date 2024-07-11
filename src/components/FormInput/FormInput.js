import { useState } from 'react';
import './FormInput.scss';
import Header from '../Header/Header';
import PopUp from './../PopUp/PopUp';

function FormInput() {
	const initialFormData = {
		Firstname: '',
		Lastname: '',
		email: '',
		queryType: '',
		message: '',
		contactContent: false,
	};

	const [formData, setFormData] = useState(initialFormData);
	const [selectedQueryType, setSelectedQueryType] = useState('');
	const [showPopup, setShowPopup] = useState(false);
	const [errors, setErrors] = useState({});

	function handleRadioChange(event) {
		setSelectedQueryType(event.target.value);
		setFormData({ ...formData, queryType: event.target.value });
	}

	function handleChange(event) {
		const { name, value, type, checked } = event.target;
		setFormData({
			...formData,
			[name]: type === 'checkbox' ? checked : value,
		});
	}

	function validateForm() {
		const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

		let formErrors = {};

		if (formData.Firstname === '')
			formErrors.Firstname = 'This field is required';
		if (formData.Lastname === '')
			formErrors.Lastname = 'This field is required';
		if (formData.message === '') formErrors.message = 'This field is required';
		if (formData.email === '') {
			formErrors.email = 'This field is required';
		} else if (!formData.email.match(regex)) {
			formErrors.email = 'Please enter a valid email address';
		}
		if (!formData.contactContent)
			formErrors.contactContent =
				'To submit this form, please consent to being contacted';
		if (!formData.queryType)
			formErrors.queryType = 'Please select a query type';

		setErrors(formErrors);

		return Object.keys(formErrors).length === 0;
	}

	function handleSubmit(event) {
		event.preventDefault();
		if (validateForm()) {
			console.log('Form submitted:', formData);
			setFormData(initialFormData);
			setSelectedQueryType('');
			setShowPopup(true);
			setTimeout(() => {
				setShowPopup(false);
			}, 2000);
		}
	}

	return (
		<div className={`mainWrapper ${showPopup ? 'showPopup' : ''}`}>
			{showPopup && <PopUp />}
			<Header />
			<form onSubmit={handleSubmit}>
				<fieldset className='nameSection'>
					<div className='nameSectionWrapper'>
						<label htmlFor='Firstname'>
							First Name <span className='asterisk'>*</span>
						</label>
						<input
							type='text'
							id='Firstname'
							name='Firstname'
							className='inputStyles'
							value={formData.Firstname}
							onChange={handleChange}
						/>
						{errors.Firstname && (
							<p className='errorMessage'>{errors.Firstname}</p>
						)}
					</div>
					<div className='nameSectionWrapper'>
						<label htmlFor='Lastname'>
							Last Name <span className='asterisk'>*</span>
						</label>
						<input
							type='text'
							id='Lastname'
							name='Lastname'
							className='inputStyles'
							value={formData.Lastname}
							onChange={handleChange}
						/>
						{errors.Lastname && (
							<p className='errorMessage'>{errors.Lastname}</p>
						)}
					</div>
					<div className='nameSectionWrapper'>
						<label htmlFor='email'>
							Email Address <span className='asterisk'>*</span>
						</label>
						<input
							type='text'
							id='email'
							name='email'
							className='inputStyles'
							value={formData.email}
							onChange={handleChange}
						/>
						{errors.email && <p className='errorMessage'>{errors.email}</p>}
					</div>
				</fieldset>
				<fieldset className='queryTypeSection'>
					<legend>
						Query Type <span className='asterisk'>*</span>
					</legend>
					<div className='queryTypeInputBox'>
						<label
							style={{
								backgroundColor:
									selectedQueryType === 'GeneralEnquiry'
										? 'hsl(148, 38%, 91%)'
										: 'white',
							}}
							className='queryTypeLabelBox'
						>
							<input
								type='radio'
								id='GeneralEnquiry'
								name='queryType'
								value='GeneralEnquiry'
								className='inputStyles'
								checked={formData.queryType === 'GeneralEnquiry'}
								onChange={handleRadioChange}
							/>
							General Enquiry
						</label>
						<label
							style={{
								backgroundColor:
									selectedQueryType === 'SupportRequest'
										? 'hsl(148, 38%, 91%)'
										: 'white',
							}}
							className='queryTypeLabelBox'
						>
							<input
								type='radio'
								id='SupportRequest'
								name='queryType'
								value='SupportRequest'
								className='inputStyles'
								checked={formData.queryType === 'SupportRequest'}
								onChange={handleRadioChange}
							/>
							Support Request
						</label>
					</div>
					{errors.queryType && (
						<p className='errorMessage'>{errors.queryType}</p>
					)}
				</fieldset>
				<fieldset className='messageSection'>
					<label htmlFor='message'>
						Message <span className='asterisk'>*</span>
					</label>
					<textarea
						id='message'
						name='message'
						value={formData.message}
						onChange={handleChange}
					></textarea>
					{errors.message && <p className='errorMessage'>{errors.message}</p>}
				</fieldset>
				<fieldset className='checkboxSection'>
					<label className='checkboxLabelBox'>
						<input
							type='checkbox'
							id='contactContent'
							name='contactContent'
							checked={formData.contactContent}
							onChange={handleChange}
							className='inputStyles'
						/>
						<span className='checkboxText'>
							I consent to being contacted by the team
							<span className='asterisk'> *</span>
						</span>
					</label>
					{errors.contactContent && (
						<p className='errorMessage'>{errors.contactContent}</p>
					)}
				</fieldset>
				<button type='submit' className='submitButton'>
					Submit
				</button>
			</form>
		</div>
	);
}

export default FormInput;

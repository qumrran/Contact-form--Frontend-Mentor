import './FormInput.scss';
import Header from '../Header/Header';

function FormInput() {
	return (
		<>
			<Header />

			<form>
				<fieldset>
					<label htmlFor='Firstname'>First Name:</label>
					<input type='text' id='Firstname' name='Firstname' required />

					<label htmlFor='Lastname'>Last Name:</label>
					<input type='text' id='Lastname' name='Lastname' required />

					<label htmlFor='email'>Email Address:</label>
					<input type='email' id='email' name='email' required />
				</fieldset>

				<fieldset>
					<legend>Query Type</legend>

					<label>
						<input
							type='radio'
							id='GeneralEnquiry'
							name='queryType'
							value='GeneralEnquiry'
							required
						/>
						General Enquiry
					</label>

					<label>
						<input
							type='radio'
							id='SupportRequest'
							name='queryType'
							value='SupportRequest'
							required
						/>
						Support Request
					</label>
				</fieldset>

				<fieldset>
					<legend>Message</legend>
					<label htmlFor='message'>Message:</label>
					<textarea id='message' name='message' required></textarea>
				</fieldset>

				<button type='submit'>Submit</button>
			</form>
		</>
	);
}

export default FormInput;

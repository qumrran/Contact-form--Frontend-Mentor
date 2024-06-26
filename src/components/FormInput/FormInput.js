import './FormInput.scss';
import Header from '../Header/Header';

function FormInput() {
	return (
		<div className="mainWrapper"> 

			<Header />

			<form>
				<fieldset className="nameSection">
					<div className='nameSectrionWrapper'>
					    <label htmlFor='FirstName'>First Name <span className="asterisk">*</span></label>
    					<input type='text' id='Firstname' name='Firstname' className="inputStyles" required />
					</div>

					<div className='nameSectrionWrapper'>
					    <label htmlFor='Lastname'>Last Name <span className="asterisk">*</span></label>
    					<input type='text' id='LastName' name='Lastname' className="inputStyles" required />
					</div>

				<div className='nameSectrionWrapper'>
				    	<label htmlFor='email'>Email Address <span className="asterisk">*</span></label>
    					<input type='email' id='email' name='email' className="inputStyles" required />
				</div>
				</fieldset>

				<fieldset className="queryTypeSection">
					<legend>Query Type <span className="asterisk">*</span></legend>

					<label className="queryTypeLabelBox">
						<input
							type='radio'
							id='GeneralEnquiry'
							name='queryType'
							value='GeneralEnquiry'
                            className="inputStyles"
							required
						/>
						General Enquiry
					</label>

					<label className="queryTypeLabelBox">
						<input
							type='radio'
							id='SupportRequest'
							name='queryType'
							value='SupportRequest'
                            className="inputStyles"
							required
						/>
						Support Request
					</label>
				</fieldset>

				<fieldset className="messageSection">
					<label htmlFor='message'>Message <span className="asterisk">*</span></label>
					<textarea id='message' name='message' required></textarea>
				</fieldset>

                <fieldset className="checkboxSection">
                <label className="checkboxLabelBox">
                        <input
                            type='checkbox'
                            id='contactConsent'
                            name='contactConsent'
                            value='contactConsent'
                            className="inputStyles"
                            required
                        />
                        <span className="checkboxText">I consent to being contacted by the team<span className="asterisk"> *</span></span>
                    </label>
				</fieldset>

				<button type='submit' className="submitButton">Submit</button>
			</form>
		</div>
	);
}

export default FormInput;

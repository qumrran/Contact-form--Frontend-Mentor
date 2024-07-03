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

    function handleSubmit(event) {
        event.preventDefault();
        console.log('Form submitted:', formData);
        // Clear the form
        setFormData(initialFormData);
        setSelectedQueryType('');
        // Show popup
        setShowPopup(true);
        // Hide popup after 2 seconds
        setTimeout(() => {
            setShowPopup(false);
        }, 2000);
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
                            required
                        />
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
                            required
                        />
                    </div>
                    <div className='nameSectionWrapper'>
                        <label htmlFor='email'>
                            Email Address <span className='asterisk'>*</span>
                        </label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            className='inputStyles'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </fieldset>
                <fieldset className='queryTypeSection'>
                    <legend>
                        Query Type <span className='asterisk'>*</span>
                    </legend>
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
                            required
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
                            required
                        />
                        Support Request
                    </label>
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
                        required
                    ></textarea>
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
                            required
                        />
                        <span className='checkboxText'>
                            I consent to being contacted by the team
                            <span className='asterisk'> *</span>
                        </span>
                    </label>
                </fieldset>
                <button type='submit' className='submitButton'>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default FormInput;

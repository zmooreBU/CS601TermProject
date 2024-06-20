import './mainpage.css';
import MainPageTemplate from './MainPageTemplate.js';
import { useState } from 'react';

function Contact() {
        const validateName = /[a-zA-Z0-9]+/;
        const [firstName, setFirstName ] = useState("");
        const [lastName, setLastName] = useState("");
        const [email, setEmail] = useState("");
        const [message, setMessage] = useState("");
        const [firstNameError, setFirstNameError] = useState(null);
        const [lastNameError, setLastNameError] = useState(null);
        const [submitMessage, setSubmitMessage] = useState(null);

        const handleSubmit = (event) => {
            event.preventDefault();
            let isValid = validateName.test(firstName);
            if (!isValid) {
                setFirstNameError("Please enter your name using only alphanumeric characters.")
            } else {
                setFirstNameError(null);
            }
            isValid = validateName.test(lastName);
            if (!isValid) {
                setLastNameError("Please enter your name using only alphanumeric characters.")
            } else {
                setLastNameError(null);
            }
            if (isValid) {
                setSubmitMessage(`Thanks for your message, ${firstName} ${lastName}!`)
            }
        }

        return(
        <MainPageTemplate title="Contact Me" img="/CS601TermProject/assets/mainpage-img.png">
            <div className="contact">
                <p>Questions? Comments? Inquiries? Send me an email!</p>
                <form id="contactForm" onSubmit={handleSubmit}>
                    <div className="name-group">
                        <div className="contact-group">
                            <label htmlFor="firstName">First Name:</label>
                            <input 
                                type="text" 
                                id="firstName" 
                                name="firstName"
                                onChange={(e) => setFirstName(e.target.value)}/>
                            <span className="contact-error" id="firstNameError">{firstNameError}</span>
                        </div>
                        <div className="contact-group">
                            <label htmlFor="lastName">Last Name:</label>
                            <input 
                                type="text" 
                                id="lastName" 
                                name="lastName"
                                onChange={(e) => setLastName(e.target.value)}/>
                            <span className="contact-error" id="lastNameError">{lastNameError}</span>
                        </div>
                    </div>
                    <div className="contact-group">
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="contact-group">
                        <label htmlFor="message">Your message:</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            rows="10" cols="50"
                            onChange={(e) => setMessage(e.target.value)}>
                        </textarea>
                    </div>
                    <button type="submit" id="submit" className="contact-submit">Submit</button>
                </form>
                <span>{submitMessage}</span>
            </div>
        </MainPageTemplate>
    )
}

export default Contact;
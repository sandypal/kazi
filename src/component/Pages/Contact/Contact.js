import React from 'react';
import ContactBanner from '../Contact/Sections/ContactBanner';
import '../Contact/Contact.css';
import ContactForm from './Sections/ContactForm';
import ContactInfo from './Sections/ContactInfo';
function Contact () {
	return <div>
		<ContactBanner/>
		<ContactInfo/>
		<ContactForm/>
	</div>
}
export default Contact;


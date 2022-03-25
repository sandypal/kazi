import React from 'react';
import Faqbanner from '../Guide/SubPages/Faq/Sections/Faqbanner';
import FaqList from '../Guide/SubPages/Faq/Sections/FaqList';
import FaqTab from '../Guide/SubPages/Faq/Sections/FaqTab';
import '../Guide/Guide.css';

function Faq () {
	return <div>
		<Faqbanner/>
		<FaqList/>
		<FaqTab/>

        
	</div>
}
export default Faq;
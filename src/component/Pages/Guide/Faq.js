import React from 'react';
import Faqbanner from '../Guide/SubPages/Faq/Sections/Faqbanner';
import FaqList from '../Guide/SubPages/Faq/Sections/FaqList';
import FaqText from '../Guide/SubPages/Faq/Sections/FaqText';
import '../Guide/Guide.css';

function Faq () {
	return <div>
		<Faqbanner/>
		<FaqList/>
		<FaqText/>

        
	</div>
}
export default Faq;
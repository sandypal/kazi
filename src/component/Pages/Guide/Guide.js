import React from 'react';
import Guidebanner from '../Guide/Sections/Guidebanner';
import GuideList from '../Guide/Sections/GuideList';
import GuideText from '../Guide/Sections/GuideText';
import '../Guide/Guide.css';

function Guide () {
	return <div>
		<Guidebanner/>
		<GuideList/>
		<GuideText/>

        
	</div>
}
export default Guide;
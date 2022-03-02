import React from 'react';
import Gettingstartedbanner from '../Guide/SubPages/Gettingstarted/Sections/Gettingstartedbanner';
import GettingstartedList from '../Guide/SubPages/Gettingstarted/Sections/GettingstartedList';
import GettingstartedText from '../Guide/SubPages/Gettingstarted/Sections/GettingstartedText';
import '../Guide/Guide.css';

function Gettingstarted () {
	return <div>
		<Gettingstartedbanner/>
		<GettingstartedList/>
		<GettingstartedText/>

        
	</div>
}
export default Gettingstarted;
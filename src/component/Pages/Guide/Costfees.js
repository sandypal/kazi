import React from 'react';
import Costfeesbanner from '../Guide/SubPages/Costfees/Sections/Costfeesbanner';
import CostfeesList from '../Guide/SubPages/Costfees/Sections/CostfeesList';
import CostfeesText from '../Guide/SubPages/Costfees/Sections/CostfeesText';
import '../Guide/Guide.css';

function Costfees () {
	return <div>
		<Costfeesbanner/>
		<CostfeesList/>
		<CostfeesText/>

        
	</div>
}
export default Costfees;
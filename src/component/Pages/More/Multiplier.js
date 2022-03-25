import React from 'react';
import MultiplierBanner from './SubPages/Multiplier/Sections/MultiplierBanner';
import MultiplierList from './SubPages/Multiplier/Sections/MultiplierList';
import MultiplierText from './SubPages/Multiplier/Sections/MultiplierText';
import '../More/SubPages/Multiplier/Multiplier.css'; 
function Multiplier () {
	return <div>
		<MultiplierBanner/>
        <MultiplierList/>
		<MultiplierText/>
      
	</div>
}
export default Multiplier;
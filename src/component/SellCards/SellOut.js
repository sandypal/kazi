import React from 'react';
import SellOutBanner from '../SellCards/SellOut/Sections/SellOutBanner';
import SelloutIndividual from '../SellCards/SellOut/Sections/SelloutIndividual';
import '../SellCards/SellCards.css';
function SellOut () {
	return <div>
        <SellOutBanner/>
		<SelloutIndividual/>
	</div>
}
export default SellOut;
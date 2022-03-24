import React from 'react';
import SellConfirmationBanner from '../SellCards/SellConfirmation/Sections/SellConfirmationBanner';
import SellConfirmationTaxt from '../SellCards/SellConfirmation/Sections/SellConfirmationTaxt';
import '../SellCards/SellCards.css';
function SellConfirmation () {
	return <div>
        <SellConfirmationBanner/>
		<SellConfirmationTaxt/>
	</div>
}
export default SellConfirmation;
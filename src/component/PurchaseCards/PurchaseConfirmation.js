import React from 'react';
import PurchaseConfirmationBanner from '../PurchaseCards/MarketPlace/PurchaseConfirmation/Sections/PurchaseConfirmationBanner';
import PurchaseConfirmationTaxt from '../PurchaseCards/MarketPlace/PurchaseConfirmation/Sections/PurchaseConfirmationTaxt';
import '../PurchaseCards/PurchaseCards.css';
function PurchaseConfirmation () {
	return <div>
        <PurchaseConfirmationBanner/>
        <PurchaseConfirmationTaxt/>
	</div>
}
export default PurchaseConfirmation;
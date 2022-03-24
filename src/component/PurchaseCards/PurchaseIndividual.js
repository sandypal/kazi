import React from 'react';
import IndividualPurchase from '../PurchaseCards/MarketPlace/PurchaseIndividual/Sections/IndividualPurchase';
import CurrentStatus from '../PurchaseCards/MarketPlace/PurchaseIndividual/Sections/CurrentStatus';
import CardDetails from '../PurchaseCards/MarketPlace/PurchaseIndividual/Sections/CardDetails';
import FeaturesCard from '../PurchaseCards/MarketPlace/PurchaseIndividual/Sections/FeaturesCard';
import '../PurchaseCards/PurchaseCards.css';
function PurchaseIndividual () {
	return <div>
        <IndividualPurchase/>
        <CardDetails/>
		<CurrentStatus/>
        <FeaturesCard/>
	</div>
}
export default PurchaseIndividual;
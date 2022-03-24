import React from 'react';
import AuctionHero from '../PurchaseCards/AuctionHouse/AuctionIndividual/Sections/AuctionHero';
import CardDetails from '../PurchaseCards/AuctionHouse/AuctionIndividual/Sections/CardDetails';
import CurrentStatus from '../PurchaseCards/AuctionHouse/AuctionIndividual/Sections/CurrentStatus';
import FeaturesCard from '../PurchaseCards/AuctionHouse/AuctionIndividual/Sections/FeaturesCard';
import '../PurchaseCards/PurchaseCards.css';
function AuctionIndividual () {
	return <div>
    <AuctionHero/>
	<CardDetails/>
	<CurrentStatus/>
	<FeaturesCard/>
	</div>
}
export default AuctionIndividual;
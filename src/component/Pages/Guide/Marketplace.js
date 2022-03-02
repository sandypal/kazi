import React from 'react';
import Marketplacebanner from '../Guide/SubPages/Marketplace/Sections/Marketplacebanner';
import MarketplaceList from '../Guide/SubPages/Marketplace/Sections/MarketplaceList';
import MarketplaceText from '../Guide/SubPages/Marketplace/Sections/MarketplaceText';
import '../Guide/Guide.css';

function Marketplace () {
	return <div>
		<Marketplacebanner/>
		<MarketplaceList/>
		<MarketplaceText/>

        
	</div>
}
export default Marketplace;
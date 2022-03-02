import React from 'react';
import BuyNftBanner from './SubPages/BuyNft/Sections/BuyNftBanner';
import BuyNftList from './SubPages/BuyNft/Sections/BuyNftList';
import BuyNftText from './SubPages/BuyNft/Sections/BuyNftText';
import '../More/SubPages/BuyNft/Buynft.css'; 
function Buynft () {
	return <div>
		<BuyNftBanner/>
        <BuyNftList/>
		<BuyNftText/>
	</div>
}
export default Buynft;
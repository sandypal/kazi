import React from 'react';
import Blacknetbanner from '../Cardcollection/SubPages/Blacknet/Sections/Blacknetbanner';
import BlacknetText from '../Cardcollection/SubPages/Blacknet/Sections/BlacknetText';
import BlacknetList from '../Cardcollection/SubPages/Blacknet/Sections/BlacknetList';
import '../Cardcollection/CardCollection.css';

function BlacknetCard () {
	return <div>
		<Blacknetbanner/>
		<BlacknetList/>
		<BlacknetText/>

        
	</div>
}
export default BlacknetCard;
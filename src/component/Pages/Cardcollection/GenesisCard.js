import React from 'react';
import Genesisbanner from '../Cardcollection/SubPages/Genesis/Sections/Genesisbanner';
import GenesisText from '../Cardcollection/SubPages/Genesis/Sections/GenesisText';
import GenesisList from '../Cardcollection/SubPages/Genesis/Sections/GenesisList';
import '../Cardcollection/CardCollection.css';

function GenesisCard () {
	return <div>
		<Genesisbanner/>
		<GenesisList/>
		<GenesisText/>

        
	</div>
}
export default GenesisCard;
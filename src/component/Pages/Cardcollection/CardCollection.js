import React from 'react';
import Allcardsbanner from '../Cardcollection/Sections/Allcardsbanner';
import AllcardsText from '../Cardcollection/Sections/AllcardsText';
import AllcardsList from '../Cardcollection/Sections/AllcardsList';
import '../Cardcollection/CardCollection.css';

function CardCollection () {
	return <div>
		<Allcardsbanner/>
		<AllcardsList/>
		<AllcardsText/>

        
	</div>
}
export default CardCollection;
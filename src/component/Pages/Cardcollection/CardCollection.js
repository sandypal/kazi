import React from 'react';
import Allcardsbanner from '../Cardcollection/Sections/Allcardsbanner';
import AllcardsText from '../Cardcollection/Sections/AllcardsText';
import AllcardsList from '../Cardcollection/Sections/AllcardsList';
import '../Cardcollection/CardCollection.css';
import Footer from '../../Footer/Footer';

function CardCollection () {
	//(CardCollection)?Footer(false):Footer(true);
	return <div>
		<Allcardsbanner/>
		<AllcardsList/>
		<AllcardsText/>

        
	</div>
}
export default CardCollection;
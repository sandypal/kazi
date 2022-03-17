import React from 'react';
import Alicebanner from '../Cardcollection/SubPages/AliceCard/Sections/Alicebanner';
import AliceText from '../Cardcollection/SubPages/AliceCard/Sections/AliceText';
import AliceList from '../Cardcollection/SubPages/AliceCard/Sections/AliceList';
import '../Cardcollection/CardCollection.css';

function AliceCard () {
	return <div>
		<Alicebanner/>
		<AliceList/>
		<AliceText/>

        
	</div>
}
export default AliceCard;
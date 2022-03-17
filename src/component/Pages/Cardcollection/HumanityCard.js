import React from 'react';
import Humanitybanner from '../Cardcollection/SubPages/Humanity/Sections/Humanitybanner';
import HumanityText from '../Cardcollection/SubPages/Humanity/Sections/HumanityText';
import HumanityList from '../Cardcollection/SubPages/Humanity/Sections/HumanityList';
import '../Cardcollection/CardCollection.css';

function HumanityCard () {
	return <div>
		<Humanitybanner/>
		<HumanityList/>
		<HumanityText/>

        
	</div>
}
export default HumanityCard;
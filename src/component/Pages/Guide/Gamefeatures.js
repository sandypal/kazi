import React from 'react';
import Gamefeaturesbanner from '../Guide/SubPages/Gamefeatures/Sections/Gamefeaturesbanner';
import GamefeaturesList from '../Guide/SubPages/Gamefeatures/Sections/GamefeaturesList';
import GamefeaturesText from '../Guide/SubPages/Gamefeatures/Sections/GamefeaturesText';
import '../Guide/Guide.css';

function Gamefeatures () {
	return <div>
		<Gamefeaturesbanner/>
		<GamefeaturesList/>
		<GamefeaturesText/>

        
	</div>
}
export default Gamefeatures;
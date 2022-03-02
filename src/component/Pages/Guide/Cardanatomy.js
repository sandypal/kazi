import React from 'react';
import Cardanatomybanner from '../Guide/SubPages/Cardanatomy/Sections/Cardanatomybanner';
import CardanatomyList from '../Guide/SubPages/Cardanatomy/Sections/CardanatomyList';
import CardanatomyText from '../Guide/SubPages/Cardanatomy/Sections/CardanatomyText';
import '../Guide/Guide.css';

function Cardanatomy () {
	return <div>
		<Cardanatomybanner/>
		<CardanatomyList/>
		<CardanatomyText/>

        
	</div>
}
export default Cardanatomy;
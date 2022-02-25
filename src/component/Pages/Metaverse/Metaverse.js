import React from 'react';
import Metaversebanner from '../Metaverse/Sections/Metaversebanner';
import MetaverseText from '../Metaverse/Sections/MetaverseText';
import MetaverseBlacknet from '../Metaverse/Sections/MetaverseBlacknet';
import MetaverseAlice from '../Metaverse/Sections/MetaverseAlice';
import MetaverseHumanity from '../Metaverse/Sections/MetaverseHumanity';
import '../Metaverse/Metaverse.css';
function Metaverse () {
	return <div>
		<Metaversebanner/>
       	<MetaverseText/>
		<MetaverseBlacknet/>
		<MetaverseAlice/>
		<MetaverseHumanity/>
        
	</div>
}
export default Metaverse;
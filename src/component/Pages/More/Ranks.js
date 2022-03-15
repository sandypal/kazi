import React from 'react';
import RanksBanner from './SubPages/Ranks/Sections/RanksBanner';
import RanksList from './SubPages/Ranks/Sections/RanksList';
import RanksText from './SubPages/Ranks/Sections/RanksText';
import '../More/SubPages/Ranks/Ranks.css'; 
function Ranks () {
	return <div>
		<RanksBanner/>
        <RanksList/>
		<RanksText/>
      
	</div>
}
export default Ranks;
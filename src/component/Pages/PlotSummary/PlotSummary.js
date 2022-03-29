import React from 'react';
import Plotbanner from '../PlotSummary/Sections/Plotbanner';
import OriginText from '../PlotSummary/Sections/OriginText';
import '../PlotSummary/PlotSummary.css';
function PlotSummary () {
	return <div>
		<Plotbanner/>
       <OriginText/>
        
	</div>
}
export default PlotSummary;
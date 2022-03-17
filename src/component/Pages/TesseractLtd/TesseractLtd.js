import React from 'react';
import TesseractBanner from '../TesseractLtd/Sections/TesseractBanner';
import TesseractText from '../TesseractLtd/Sections/TesseractText';
import RoadMap from '../TesseractLtd/Sections/RoadMap';
import '../TesseractLtd/TesseractLtd.css';
function TesseractLtd () {
	return <div>
		<TesseractBanner/>
        <TesseractText/>
        <RoadMap/>
	</div>
}
export default TesseractLtd;
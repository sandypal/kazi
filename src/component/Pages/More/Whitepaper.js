import React from 'react';
import WhitepaperBanner from './SubPages/Whitepaper/Sections/WhitepaperBanner';
import WhitepaperList from './SubPages/Whitepaper/Sections/WhitepaperList';
import WhitepaperText from './SubPages/Whitepaper/Sections/WhitepaperText';
import '../More/SubPages/Whitepaper/Whitepaper.css'; 
function Whitepaper () {
	return <div>
		<WhitepaperBanner/>
        <WhitepaperList/>
		<WhitepaperText/>
	</div>
}
export default Whitepaper;
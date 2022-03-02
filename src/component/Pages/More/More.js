import React from 'react';
import MoreBanner from './Sections/MoreBanner';
import MoreText from './Sections/MoreText';
import ListMore from './Sections/ListMore';
import '../More/More.css';
function More () {
	return <div>
		<MoreBanner/>
        <ListMore/>
        <MoreText/>
	</div>
}
export default More;

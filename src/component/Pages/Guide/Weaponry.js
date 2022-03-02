import React from 'react';
import Weaponrybanner from '../Guide/SubPages/Weaponry/Sections/Weaponrybanner';
import WeaponryList from '../Guide/SubPages/Weaponry/Sections/WeaponryList';
import WeaponryText from '../Guide/SubPages/Weaponry/Sections/WeaponryText';
import '../Guide/Guide.css';

function Weaponry () {
	return <div>
		<Weaponrybanner/>
		<WeaponryList/>
		<WeaponryText/>

        
	</div>
}
export default Weaponry;
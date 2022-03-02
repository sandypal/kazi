import React from 'react';
import WeaponsBanner from './SubPages/Weaponslist/Sections/WeaponsBanner';
import Weaponslist from './SubPages/Weaponslist/Sections/WeaponsList';
import WeaponsText from './SubPages/Weaponslist/Sections/WeaponsText';
import '../More/SubPages/Weaponslist/Weapons.css'; 
function Weapons () {
	return <div>
		<WeaponsBanner/>
        <Weaponslist/>
		<WeaponsText/>
	</div>
}
export default Weapons;
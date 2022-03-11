import React from 'react';
import BreedSelfBanner from '../BreedSelf/Sections/BreedSelfBanner';
import BreedSelfTaxt from '../BreedSelf/Sections/BreedSelfTaxt';
import BreedCard from '../BreedSelf/Sections/BreedCard';
import '../BreedSelf/BreedSelf.css';
function BreedSelf(){
 return <div>
<BreedSelfBanner/>
<BreedSelfTaxt/>
<BreedCard/>
</div>


}
export default BreedSelf;
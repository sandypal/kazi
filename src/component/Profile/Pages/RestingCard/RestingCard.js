import React from 'react';
import RestingCardBanner from '../RestingCard/Sections/RestingCardBanner';
import RestingCardDetails from '../RestingCard/Sections/RestingCardDetails';
import RestingCardStatus from '../RestingCard/Sections/RestingCardStatus';
import RestingFeatures from '../RestingCard/Sections/RestingFeatures';
import '../RestingCard/RestingCard.css';
function RestingCard(){
 return <div>
<RestingCardBanner/>
<RestingCardDetails/>
<RestingCardStatus/>
<RestingFeatures/>
 </div>


}
export default RestingCard;
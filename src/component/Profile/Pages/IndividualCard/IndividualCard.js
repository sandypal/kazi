import React from 'react';
import IndividualBanner from '../IndividualCard/Sections/IndividualBanner';
import CardDetails from '../IndividualCard/Sections/CardDetails';
import CurrentStatus from '../IndividualCard/Sections/CurrentStatus';
import FeaturesCard from '../IndividualCard/Sections/FeaturesCard';
import '../IndividualCard/IndividualCard.css';
function IndividualCard(){
 return <div>
<IndividualBanner/>
<CardDetails/>
<CurrentStatus/>
<FeaturesCard/>
 </div>


}
export default IndividualCard;
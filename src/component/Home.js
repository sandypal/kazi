import React from 'react';
import HeroBanner from './HeroBanner';
import BannerText from './BannerText';
import SynopsisSlider from './SynopsisSlider';
import ProfileSlider from './ProfileSlider';
import PlayBanner from './PlayBanner';
import PlayTaxt from './PlayTaxt';
import BuildArmy from './BuildArmy';
import JoinCommunity from './JoinCommunity';
import WorkWith from './WorkWith';
function Home () {
	return <div>
        <HeroBanner/>
        <BannerText/>
        <SynopsisSlider/>
        <ProfileSlider/>
        <PlayBanner/>
        <PlayTaxt/>
        <BuildArmy/>
        <JoinCommunity/>
        <WorkWith/>
        </div>
}
export default Home;

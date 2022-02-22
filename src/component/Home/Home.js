import React from 'react';
import HeroBanner from './Sections/HeroBanner';
import BannerText from './Sections/BannerText';
import SynopsisSlider from './Sections/SynopsisSlider';
import ProfileSlider from './Sections/ProfileSlider';
import PlayBanner from './Sections/PlayBanner';
import PlayTaxt from './Sections/PlayTaxt';
import BuildArmy from './Sections/BuildArmy';
import JoinCommunity from './Sections/JoinCommunity';
import WorkWith from './Sections/WorkWith';
import './Home.css';
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

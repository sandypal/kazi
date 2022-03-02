import React from 'react';
import LeaderboardBanner from './SubPages/Leaderboard/Sections/LeaderboardBanner';
import LeaderboardList from './SubPages/Leaderboard/Sections/LeaderboardList';
import LeaderboardText from './SubPages/Leaderboard/Sections/LeaderboardText';
import '../More/SubPages/Leaderboard/Leaderboard.css'; 
function Leaderboard () {
	return <div>
		<LeaderboardBanner/>
        <LeaderboardList/>
		<LeaderboardText/>
      
	</div>
}
export default Leaderboard;
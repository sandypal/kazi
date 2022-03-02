import React from 'react';
import MeetTeamBanner from './SubPages/MeetTeam/Sections/MeetTeamBanner';
import MeetTeamList from './SubPages/MeetTeam/Sections/MeetTeamList';
import MeetTeamText from './SubPages/MeetTeam/Sections/MeetTeamText';
import '../More/SubPages/MeetTeam/Team.css'; 
function Meetteam () {
	return <div>
		<MeetTeamBanner/>
        <MeetTeamList/>
		<MeetTeamText/>
	</div>
}
export default Meetteam;
import React from 'react';
import UserProfileBanner from './Sections/UserProfile/UserProfileBanner';
import UserProfile from './Sections/UserProfile/UserProfile';
import UserProfileTab from './Sections/UserProfile/UserProfileTab';
import '../Profile/Sections/UserProfile/UserProfile.css';
function Profile (){
 return <div>
<UserProfileBanner/>
<UserProfile/>
<UserProfileTab/>
 </div>
}
export default Profile;
import React from 'react';
import ProfileForm from './ProfileForm/ProfileForm';
import user from "../Images/user.png";
function ProfileEdit () {
	return <div>
<section className="profile_edit">
         <div className="container">
            <div className="row">
               <div className="col-md-10 offset-md-1">
                  <div className="edit_image">
                      <h2>ACCOUNT SETTINGS</h2>
                      <div className="edit_icon">
                      <img src={user}/>
                      
                      
                      <div class="image-upload">
    <label for="file-input">
    <i class="far fa-edit"></i>
    </label>

    <input id="file-input" type="file"/>
</div>
                      </div>
                      </div>
               </div>
            </div>
         </div>
      </section>
      <ProfileForm/>
    </div>
}
export default ProfileEdit;



import React from "react";
import user from "../UserProfile/Images/user.png";
function UserProfile(){
    return <div>
   <div className="user_section">
            <div className="container">
               <div className="row">
                  <div className="col-md-2">
                <div className="user_profile_image">
                <img src={user}/>
                    </div>
                  </div>
                  <div className="col-md-5">
                      <div className="profile_info">
                <h3>Username</h3>
                <p>User ID</p>
                </div>
                  </div>
                  <div className="col-md-5">
                  <div className="profile_info">
                <h3>15</h3>
                <p>Battles won</p>
                </div>
                  </div>
               </div>
            </div>
         </div>
    </div>
   
   
   }
   export default UserProfile;
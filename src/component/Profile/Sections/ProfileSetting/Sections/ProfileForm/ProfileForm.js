import React from 'react';
function ProfileForm () {
	return <div>
<section className="profile_form">
         <div className="container">
            <div className="row">
               <div className="col-md-8 offset-md-1">
                  <div className="edit_from">
                     <h2>CHANGE USERNAME</h2>
                     <form action="/profile">
                     <div className="row">
                        <div className="col-md-6">
                        <div className="form-group mb-3">
                        <label>Current username*</label>
                                <input type="text" className="form-control" aria-label="Current username*"/>
                            </div>
                            </div>

                            <div class="col-md-6">
                            <div className="form-group mb-3">
                            <label>New username*</label>
                                <input type="text" className="form-control" aria-label="New username*"/>
                            </div>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-md-6">
                        <div className="form-group mb-3">
                        <label>User ID*</label>
                                <input type="text" className="form-control" aria-label="User ID*"/>
                            </div>
                            </div>
                            
                            <div class="col-md-6">
                            <div className="form-group mb-3">
                            <label>Confirm username*</label>
                                <input type="text" className="form-control" aria-label="Confirm username*"/>
                            </div>
                            </div>
                        </div>
                        <div className="form-group">
                           <button type="submit" className="form-control btn btn-primary rounded submit px-3">SAVE CHANGES</button>
                        </div>
                        </form>
                      </div>
                      
               </div>
            </div>

            <div className="row">
               <div className="col-md-5 offset-md-1">
                  <div className="edit_from mt-5">
                     <h2>CHANGE USERNAME</h2>
                     <form action="/profile">
                    
                        <div className="form-group mb-3">
                        <label>Current password*</label>
                                <input type="password" className="form-control" aria-label="Current username*"/>
                            </div>
                            <div className="form-group d-md-flex forget_password">
                           <div className="text-md-left">
                              <a href="#">Forgot Password</a>
                           </div>
                        </div>

                            
                            <div className="form-group mb-3">
                            <label>New password*</label>
                                <input type="password" className="form-control" aria-label="New password"/>
                            </div>
                            
                        
                        <div className="form-group mb-3">
                        <label>Confirm new password*</label>
                                <input type="password" className="form-control" aria-label="password"/>
                            </div>
                            <div className="form-group">
                           <button type="submit" className="form-control btn btn-primary rounded submit px-3">SAVE CHANGES</button>
                        </div>
                        </form>
                      </div>
                      
               </div>
            </div>
            <div className="row">
               <div className="col-md-8 offset-md-1">
                  <div className="edit_from mt-5">
                     <h2>ACCOUNT DEACTIVATION</h2>
                     <form action="/profile">
                     <div className="row">
                        <div className="col-md-6">
                        <div className="form-group mb-3">
                        <label>User ID*</label>
                                <input type="text" className="form-control" aria-label="user id*"/>
                            </div>
                            </div>

                            <div class="col-md-6">
                            <div className="form-group mb-3">
                            <label>Password*</label>
                                <input type="password*" className="form-control" aria-label="Password*"/>
                            </div>
                            </div>
                        </div>
                        
                        <div className="form-group">
                           <button type="submit" className="form-control btn btn-primary rounded submit px-3">DEACTIVATE ACCOUNT</button>
                        </div>
                        </form>
                      </div>
                      
               </div>
            </div>
         </div>
      </section>
    </div>
}
export default ProfileForm;
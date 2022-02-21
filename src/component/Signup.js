import React from 'react';

function Signup () {
    
	return <div>
		<div className="login_section">
         <div className="container-fluid">
            <div className="row">
               <div className="col-md-6"></div>
               <div className="col-md-6 bg-black">
                  <div className="logup_form">
                     <h2>SIGN UP</h2>
                     <form action="/login.html" className="signup-form">
                        <div className="row">
                           <div className="col-md-6"><div className="form-group mb-3">
                              <input type="text" className="form-control" placeholder="First name*" required=""/>
                           </div></div>
                           <div className="col-md-6"><div className="form-group mb-3">
                              <input type="text" className="form-control" placeholder="Last name*" required=""/>
                           </div></div>
                        </div>
                        <div className="form-group mb-3">
                           <input type="text" className="form-control" placeholder="Email address*" required=""/>
                        </div>
                        <div className="form-group mb-3">
                           <input type="password" className="form-control" placeholder="Password*" required="" id="id_password"/>
                           <i className="far fa-eye" id="togglePassword"></i>
                        </div>
                        <div className="form-group mb-3">
                           <input type="password" className="form-control" placeholder="Confirm password*" required="" id="id_password"/>
                           <i className="far fa-eye" id="togglePassword"></i>
                        </div>
                        <div className="form-group mb-3">
                           <input type="text" className="form-control" placeholder="Wallet address*" required=""/>
                        </div>
                        <div className="form-group">
                           <button type="submit" className="form-control btn btn-primary rounded submit px-3">CONNECT WALLET</button>
                        </div>
                        <br></br>
                        <div className="form-group">
                           <button type="submit" className="form-control btn btn-primary rounded submit px-3">SIGN UP</button>
                        </div>
                        
                     </form>
                     <div className="signup_text text-center">
                        <p>Already have an account? <a href="/login">SIGN IN</a></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
	</div>
}
export default Signup;
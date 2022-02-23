import React from 'react';
import '../UserPage/User.css';
function Signup () {
    
	return <div>
		<div className="login_section">
         <div className="container-fluid">
            <div className="row">
              
               <div className="col-md-6 offset-md-6">
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
                        <div className="row">
                           <div className="col-md-6"><div className="form-group mb-3">
                              <input type="text" className="form-control" placeholder="User name*" required=""/>
                           </div></div>
                           <div className="col-md-6"><div className="form-group mb-3">
                              <input type="tel" className="form-control" placeholder="Phone Number*" required=""/>
                           </div></div>
                        </div>
                        <div className="form-group mb-3">
                           <input type="text" className="form-control" placeholder="Email address*" required=""/>
                        </div>
                        <div className="form-group mb-3">
                           <input type="password" className="form-control" placeholder="Password*" required="" id="id_password"/>
                           <i className="fas fa-eye-slash" id="togglePassword"></i>
                        </div>
                        <div className="form-group mb-3">
                           <input type="password" className="form-control" placeholder="Confirm password*" required="" id="id_password"/>
                           <i className="fas fa-eye-slash" id="togglePassword"></i>
                        </div>
                        <div className="form-group mb-3">
                           <input type="text" className="form-control" placeholder="Wallet address*" required="" id="id_password"/>
                           <i className="fas fa-eye-slash" id="togglePassword"></i>
                        </div>
                        <div className="form-group">
                           <a href="/connect-wallet" className="form-control btn btn-primary rounded submit px-3">CONNECT WALLET</a>
                        </div>
                        <br></br>
                        <div className="form-group">
                           <button type="submit" className="form-control btn btn-primary rounded submit px-3">SIGN UP</button>
                        </div>
                        
                     </form>
                     <div className="signup_text text-center">
                        <p>Already have an account? <a href="/signin">SIGN IN</a></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
	</div>
}
export default Signup;
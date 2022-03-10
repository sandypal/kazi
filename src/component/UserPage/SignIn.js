import React from 'react';
import '../UserPage/User.css';
function Login () {
    
	return <div>
		<div className="login_section">
         <div className="container-fluid">
            <div className="row">
               
               <div className="col-md-6 offset-md-6">
                  <div className="login_form">
                     <h2>SIGN IN</h2>
                     <form action="/" className="signin-form">
                        <div className="form-group mb-3">
                           <input type="text" className="form-control" placeholder="Username or email*" required=""/>
                        </div>
                        <div className="form-group mb-3">
                           <input type="password" className="form-control" placeholder="Password*" required="" id="id_password"/>
                           <i className="far fa-eye" id="togglePassword"></i>
                        </div>
                        <div className="form-group">
                           <button type="submit" className="form-control btn btn-primary rounded submit px-3">Sign In</button>
                        </div>
                        <div className="form-group d-md-flex forget_password">
                           <div className="text-md-left">
                              <a href="#">Forgot Password</a>
                           </div>
                        </div>
                     </form>
                     <div className="signup_text text-center">
                        <p>Don't have an account? <a href="/signup">SIGN UP</a></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
	</div>
}
export default Login;
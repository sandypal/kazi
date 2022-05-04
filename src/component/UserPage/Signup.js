import React, { useEffect, useState } from 'react';
import '../UserPage/User.css';
import { putData } from './dynamoData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
function Signup () {
  
  
    
   function randomRange(min, max){
      max = 1000;
      min = 100;
      return Math.floor(Math.random(1000,100) * (max - min + 1)) + min;
   }
      console.log('random2',randomRange())
   const [formerror,setFormerror]=useState({})
   const [user,setUserData]=useState([])
   const [signUp,setSignUp]=useState({

      'firstname':'',
      'lastname':'',
      'username':'',
      'phone':'',
      'email':'',
      'password':'',
      'confirm':'',
      'wallet':'',
      'CustomerID':`${randomRange()}`

   })
   console.log('random',randomRange())
   const addDataToDynamoDB = async (e) => {
      
       setUserData({signUp})
       console.log(signUp);
       setSignUp({addDataToDynamoDB: signUp})
      
         await putData('CustomerInfo' , signUp);
         
         //e.preventDefault();
          setFormerror(validate(signUp))
         
   //   setSignUp({
   //    'firstname':'',
   //    'lastname':'',
   //    'username':'',
   //    'phone':'',
   //    'email':'',
   //    'password':'',
   //    'confirm':'',
   //    'wallet':'',
   // })

    }
   
    useEffect(()=>{
      localStorage.setItem('form', JSON.stringify (signUp));
    })
    var regex = /^[^\s@]+@[^\s@]{2,}$/i;
    const validate=(values)=>{
       const error={}
       
       
       if(values.firstname== ''){
          error.firstname='Firstname is Required'
       }else if(values.firstname.length < 4){
         error.firstname='Firstname is not valid'
       }
        if(!values.lastname){
         error.lastname='Lastname is Required'
      }else if(values.lastname.length <= 3){
         error.lastname='Last Name Must Be More Then 3 Letter'
      }
       if(!values.email){
         error.email='Email is Required'
       }else if(!regex.test(values.email)){
         error.email='Your Email Address Is Invalid '
       }
       if(!values.username){
         error.username='Username is Required'
       }if(!values.password){
         error.password='Password is Required'
       }else if(values.password.length < 4){
         error.password='Password must be more than 4 letter'
       }if(!values.phone){
         error.phone='Phone is Required'
       }else if (values.phone.length<=10){
          error.phone='phone number must be 10 letter'
      }if(!values.confirm){
         error.confirm='Please confirm your password'
      }else if(values.password!=values.confirm){
         error.confirm='Please confirm Correct password'
      }
       return error
    }
    useEffect(()=>{
       console.log('error',formerror)
       if (Object.keys(formerror).length===0) {
          console.log('formvalue',signUp)
       }
    },[formerror])
   
   const addData=(e)=>{
      setSignUp(
        { ...signUp,
         [e.target.name]:e.target.value
      }
      )
      console.log('signup',signUp)
   }

const click=(e)=>{
setUserData({signUp})
console.log('clicked')
console.log('click',user)
   }
    
	return <div>
   
		<div className="login_section">
         <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 offset-md-6">
                  <div className="logup_form">
                     <h2>SIGN UP</h2>
                     <form action="/signin" className="signup-form">
                        <div className="row">
                           <div className="col-md-6">
                           <div className="form-group mb-3">
                              <input type="text"  className="form-control" onChange={addData} name='firstname' value={signUp.firstname} placeholder="Firstname*"/>
                              <p className='error'>{formerror.firstname}</p>
                           </div>
                           </div>
                           <div className="col-md-6"><div className="form-group mb-3">
                              <input type="text" className="form-control" onChange={addData} name='lastname' value={signUp.lastname} placeholder="Lastname*" />
                              <p className='error'>{formerror.lastname}</p>
                           </div></div>
                        </div>
                        <div className="row">
                           <div className="col-md-6"><div className="form-group mb-3">
                         
                              <input type="text" className="form-control" onChange={addData} name='username' value={signUp.username} placeholder="Username*" required=""/>
                              <p className='error'>{formerror.username}</p>
                           </div></div>
                           <div className="col-md-6"><div className="form-group mb-3">
                              <input type="tel" className="form-control" onChange={addData} name='phone' value={signUp.phone} placeholder="Phone Number*" required=""/>
                              <p className='error'>{formerror.phone}</p>
                           </div></div>
                        </div>
                        <div className="form-group mb-3">
                           <input type="Email" className="form-control" onChange={addData} name='email' value={signUp.email} placeholder="Email address*" required=""/>
                           <p className='error'>{formerror.email}</p>
                        </div>
                        <div className="form-group mb-3">
                           <input type="password" className="form-control" onChange={addData} name='password' value={signUp.password} placeholder="Password*" required="" id="id_password"/>
                           <p className='error'>{formerror.password}</p>
                           <i className="fas fa-eye-slash" id="togglePassword"></i>
                        </div>
                        <div className="form-group mb-3">
                           <input type="password" className="form-control" onChange={addData} name='confirm' value={signUp.confirm} placeholder="Confirm password*" required="" id="id_password"/>
                           <p className='error'>{formerror.confirm}</p>
                           <i className="fas fa-eye-slash" id="togglePassword"></i>
                        </div>
                        <div className="form-group mb-3">
                           <input type="text" className="form-control" onChange={addData} name='wallet' value={signUp.wallet} placeholder="Wallet address*" required="" id="id_password"/>
                           <i className="fas fa-eye-slash" id="togglePassword"></i>
                        </div>
                        <div className="form-group">
                           <a href="/connect-wallet" className="form-control btn btn-primary rounded submit px-3">CONNECT WALLET</a>
                        </div>
                        <br></br>
                        <div className="form-group">
                           <button type="button" onClick={() => addDataToDynamoDB()} className="form-control btn btn-primary rounded submit px-3">SIGN UP</button>
                         
                        </div>
                      
                        </form>
                        
                        <ToastContainer />
                      
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
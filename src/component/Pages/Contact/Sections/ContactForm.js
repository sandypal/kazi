import React from "react";

function ContactForm (){
return <div>
<div className="contact_form">
         <div className="container">
            <div className="row align-items-center">
            <div className="col-md-6">
                <div className="contant_map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2516.932553185617!2d2.6580545155622404!3d50.88795866362448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dcc21756f7d7cd%3A0xea0264390c1703c5!2sextremis!5e0!3m2!1sen!2sin!4v1646313616429!5m2!1sen!2sin"
              width="100%"
              height="550"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="true"
              tabIndex="0"
            />
           
                </div>
            </div>
            <div className="col-md-6">
           <div className="form_contact">
               <h3>Get In Tech</h3>
           <form action="/">
           <div class="row">
  <div className="col">
  <div className="form-group mb-3">
  <label>First name:</label>
    <input type="text" className="form-control" placeholder="First Name" aria-label="First name"/>
  </div>
  </div>
  <div className="col">
  <div className="form-group mb-3">
  <label>Last name:</label>
    <input type="text" className="form-control" placeholder="Last Name" aria-label="Last name"/>
  </div>
  </div>
</div>
<div class="row">
  <div className="col">
  <div className="form-group mb-3">
    <label>Email Address</label>
    <input type="email" className="form-control" placeholder="Enter email" aria-label="email"/>
  </div>
  </div>
  <div className="col">
  <div className="form-group mb-3">
  <label>Phone Number</label>
    <input type="tel" className="form-control" placeholder="Phone Number" aria-label="phone"/>
  </div>
  </div>
  </div>
  <div class="row">
  <div class="col">
  <div className="form-group mb-3">
  <label>Message</label>
  <textarea class="form-control" placeholder="Message" aria-label="Message" id="exampleFormControlTextarea1" rows="5"></textarea>
</div>
</div>
</div>
    <div className="form-group">
        <button type="submit" className="form-control btn btn-primary rounded submit px-3">submit</button>
    </div>
  </form>
           </div>
        
</div>
            </div>
            </div>
            </div>
</div>
}
export default ContactForm;

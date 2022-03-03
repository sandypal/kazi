import React from "react";
function ContactInfo (){
return <div>
<section className="contact_info">
    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <div className="contact_box">
                    <div className="icon"><i class="fal fa-envelope"></i></div>
                    <div className="contact_text">
                        <a href="mailto:extremis@gmail.com">extremis@gmail.com</a>
                    </div>

                </div>
            </div>
            <div className="col-md-4">
                <div className="contact_box">
                    <div className="icon"><i class="fal fa-phone-alt"></i></div>
                    <div className="contact_text">
                        <a href="tel:0987654321">098 (7654) 321</a>
                    </div>

                </div>
            </div>
            <div className="col-md-4">
                <div className="contact_box">
                    <div className="icon"><i class="fal fa-map-marker-alt"></i></div>
                    <div className="contact_text">
                        <p>World of EXTREMIS Lorem Ipsum USA 100012</p>
                    </div>

                </div>
            </div>
            
        </div>
    </div>
</section>
</div>

}

export default ContactInfo;
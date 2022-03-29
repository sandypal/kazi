import React from 'react';
function CurrentStatus(){
 return <div>
<section className="card_details_purchase">
         <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="sell_current_status">
                        <ul>
                            <li><span>Time on sale</span><br></br>
                                <strong>00:11:48</strong></li>
                                <li><span>Market price</span><br></br>
                                <strong>5 MATIC</strong></li>
                                <li><span>Time left</span><br></br>
                                <strong className="text-danger">00:11:48</strong></li>
                                <li><a href="/sell-auction-confirmation">PURCHASE</a></li>
                                
                        </ul>
                        </div>
          </div>
            </div>
         </div>
      </section>
 </div>


}
export default CurrentStatus;
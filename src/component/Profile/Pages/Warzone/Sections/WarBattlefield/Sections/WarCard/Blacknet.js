import React from 'react';
import blacknet from '../../Images/blacknet.png';
function Blacknet(){
 return <div>
<div className="row">
<div className="col-md-12">
    <div className="war_card">
        <img src={blacknet}/>
        <h4>CARD NAME</h4>
        <h5>BLACKNET</h5>
        <div className="war_list">
            <ul>
            <li><span>Rank:</span> Private</li>
            <li><span>Type:</span> Gen 1</li>
            <li><span>IQ:</span> 101</li>
            <li><span>Potential:</span> 101</li>
            <li><span>EQ:</span> 101</li>
            <li><span>Wisdom:</span> 101</li>
            <li><span>Melee:</span> 101</li>
            <li><span>Leadership:</span> 101</li>
            <li><span>Weapon:</span> 101</li>
            <li><span>Feature 9:</span> 101</li>
            </ul>
            </div>
            <div className="bettle_btn">
              <a className="btn" href="#">SELECT</a>
              
              </div>
        </div>

        <div className="war_card">
        <div className="upload_img">
                           <div class="image-upload"><label for="file-input"><i class="far fa-plus"></i><br></br>
                              Drag and drop card <br></br>to enter Battle</label><input id="file-input" type="file"/>
                           </div>
                        </div>
        <h4>EMPTY</h4>
        <h5>---</h5>
        <div className="war_list">
            <ul>
            <li><span>Rank:</span> ---</li>
            <li><span>Type:</span> ---</li>
            <li><span>IQ:</span> ---</li>
            <li><span>Potential:</span> ---</li>
            <li><span>EQ:</span> ---</li>
            <li><span>Wisdom:</span> ---</li>
            <li><span>Melee:</span> ---</li>
            <li><span>Leadership:</span> ---</li>
            <li><span>Weapon:</span> ---</li>
            <li><span>Feature 9:</span> ---</li>
            </ul>
            </div>
            <div className="bettle_btn">
              <a className="btn" href="#">SELECT</a>
              
              </div>
        </div>
    </div>
</div>
 </div>


}
export default Blacknet;
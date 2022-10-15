import React from "react";
import './Sidebar.css';

function Sidebar(){
    return(
        <div class = "left">
        <span>    
          <img src = "img/img1.jpg" alt ="img1" className = "profile_pic"/>
         
          <p className='h1'>EZ CHO</p>
          <p className='h2'>Seoultech </p>
          <p className='h2'>Computer Science </p>

          <img src = "img/kakaotalk.png" className="contact" a href = "#!"/>
          
          <br/>
         <img src = "img/maps.png" className="contact"/>
        <b className = 'h2'>서울시 노원구 공릉동 593-5</b>    
         </span>
      </div>
    );
}
export default Sidebar;
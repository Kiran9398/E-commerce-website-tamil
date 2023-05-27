import React from "react";
import '../App.css';
const Corousal = ()=>{
  return(
    <div id="carouselHero" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://m.media-amazon.com/images/I/41FGPAslf8L._SX300_SY300_QL70_FMwebp_.jpg" class="d-block w-100" alt="Image Description"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Slide 01</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni magnam perferendis, similique saepe quas pariatur deleniti ratione dolorum, consequatur ea incidunt, quo corporis suscipit culpa atque ipsum possimus exercitationem commodi!</p>
      </div>      
    </div>
    <div class="carousel-item">
      <img src="https://pixelprowess.com/i/spoon.webp" class="d-block w-100" alt="POW Logo"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Slide 02</h5>
        <p>Alias, repudiandae illum maiores vitae dolores, soluta quasi commodi quas, ex dolorum impedit enim reprehenderit doloremque quos earum at saepe temporibus vero voluptatibus hic accusamus eos. Quis odio ex voluptate!</p>
      </div>      
     </div>
  </div>
</div>
  )
}
export default Corousal;
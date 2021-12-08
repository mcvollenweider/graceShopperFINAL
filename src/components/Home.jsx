//Daniel is doing home page
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./220px-NFT_Icon.png";

// import logo from './favicon-32x32.png';

const Home = () => {
  return (
    <div>
    
      <h1 class="text-center" data-toggle="collapse">
        <b>
          <br></br>
        
          &nbsp;&nbsp;&nbsp;Discover, collect, and sell extraordinary NFTs
        </b>
      </h1>
      <h2 class="text-center" data-toggle="collapse">&nbsp;&nbsp;&nbsp;on one of the world's largest NFT marketplace</h2>
      <br></br>
      <br></br>
      
      <div class="col-md-12 text-center" data-toggle="collapse" >
 <div class="col-12" >
 <img class="img-responsive" src={logo} />
 <br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
 </div>
</div>
    
    </div>
  );
};

export default Home;

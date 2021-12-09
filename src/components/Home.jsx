//Daniel is doing home page
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./220px-NFT_Icon.png";
//import logo from './favicon-32x32.png';

const Home = () => {
  return (
    <div className="bg-image"
    style={{ backgroundImage: "url('https://i2.wp.com/files.123freevectors.com/wp-content/original/115982-abstract-cool-blue-blurred-lights-background-design.jpg?w=800&q=95)",backgroundSize:"100%",backgroundRepeat:"no-repeat" }}>
     
  
      <h1 class="text-center text-white " data-toggle="collapse">
        <b>
          <br></br>
        
          &nbsp;&nbsp;&nbsp;Discover, collect, and sell extraordinary NFTs
        </b>
      </h1>
      <h2 class="text-center text-white" data-toggle="collapse">&nbsp;&nbsp;&nbsp;on one of the world's largest NFT marketplace</h2>
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

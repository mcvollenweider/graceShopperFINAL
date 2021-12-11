//Daniel is doing home page
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./220px-NFT_Icon.png";

// import logo from './favicon-32x32.png';

const Home = () => {
  return (
    <div>
      <h1 className="text-center" data-toggle="collapse">
        <b>
          Discover, collect, and sell extraordinary NFTs
        </b>
      </h1>
      <h2 className="text-center" data-toggle="collapse">
        on one of the world's largest NFT marketplace
      </h2>
      <br></br>
      <br></br>

      <div className="col-md-12 text-center" data-toggle="collapse">
        <div className="col-12">
          <img className="img-responsive" src={logo} />
        </div>
      </div>
    </div>
  );
};

export default Home;


//Daniel is doing home page
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./images/nft_icon.png";

const Home = () => {
  return (
    <div>
      <div>
        
          <div
            className="bg-image"
            style={{
              backgroundImage:
                "url('https://i2.wp.com/files.123freevectors.com/wp-content/original/115982-abstract-cool-blue-blurred-lights-background-design.jpg?w=800&q=95)",
              height: "100vh",
              backgroundSize: "100%",
            }}
          >
            <div class="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", height: "100vh",
              backgroundSize: "100%", }}>
            <br></br>
            <br></br>
            <div class="row justify-content-evenly" data-toggle="collapse">
              <div class="col-7 text-center text-white">
                {" "}
                <h1> Discover, collect, and sell extraordinary NFTs </h1>{" "}
              </div>

              <div className="text-center text-white" data-toggle="collapse">
                <h4> on one of the world's largest NFT marketplace </h4>
              </div>
              <br></br><br></br><br></br><br></br><br></br>
              <div className="col-md-12 text-center" data-toggle="collapse">
                <div className="col-12">
                  <img className="img-responsive" src={logo} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

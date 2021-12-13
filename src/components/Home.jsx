//Daniel is doing home page
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./images/nft_icon.png";
import { Container, Nav, } from "react-bootstrap";

const Home = () => {
  return (
    <div
      className="bg-image "
      style={{
        backgroundImage:
          "url('https://i2.wp.com/files.123freevectors.com/wp-content/original/115982-abstract-cool-blue-blurred-lights-background-design.jpg?w=800&q=95)",
        height: "100vh",
        backgroundSize: "100%",
      }}
    >
      <div
        className="mask"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          height: "100vh",
          backgroundSize: "100%",
        }}
      >
        <br></br>
        <br></br>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-7">
              <h1 className="text-center text-white">
                {" "}
                Discover, collect, and sell extraordinary NFTs{" "}
              </h1>
            </div>
          </div>
          <br></br>
          <div className="row justify-content-center">
            <div className="col-7">
              <h4 className="text-center text-white">
                {" "}
                on one of the world's largest NFT marketplaces{" "}
              </h4>
            </div>
          </div>
          <br></br><br></br><br></br>
          <div className="row justify-content-end">
            <div className="col-7">
              
             <a href="docs" title="">
             <img  className="img-responsive" src={logo} alt="Image"/>
               </a> 
              
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

{
  /*  />
{" "}
              </div>

                 */
}

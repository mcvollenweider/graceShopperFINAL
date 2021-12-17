import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";



import {
  Home,
  Discord,
  Newsletter,
  ContactUs,
  Footer,
  NavigationBar,
  About,
  Settings,
  Docs,
  Careers,
  Careers2,
  Profile,
  Login,
  Register,
  Products,
  AllProducts
} from "./components";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartShow, setCartShow] = useState(false);
  


  return (
    <>
      <Router>
        <div className="App">
          <div className="d-flex flex-column min-vh-100">
            <NavigationBar
              cart={cart}
              setTotalPrice={setTotalPrice}
              totalPrice={totalPrice}
              cartShow={cartShow}
              setCartShow={setCartShow}
            />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/Home">
                <Home />
              </Route>
              <Route path="/Settings">
                <Settings />
              </Route>
              <Route path="/Docs">
                <Docs />
              </Route>
              <Route path="/Careers">
                <Careers />
              </Route>
              <Route path="/Careers2">
                <Careers2 />
              </Route>
              <Route path="/ContactUs">
                <ContactUs />
              </Route>
              <Route path="/Discord">
                <Discord />
              </Route>
              <Route path="/Newsletter">
                <Newsletter />
              </Route>
              <Route path="/Login">
                <Login
                  setIsLoggedIn={setIsLoggedIn}
                  isLoggedIn={isLoggedIn}
                  setUsername={setUsername}
                  username={username}
                />
              </Route>
              <Route path="/Register">
                <Register
                  setIsLoggedIn={setIsLoggedIn}
                  isLoggedIn={isLoggedIn}
                  setUsername={setUsername}
                  username={username}
                />
              </Route>
              <Route path="/About">
                <About />
              </Route>
              <Route path="/Profile">
                <Profile />
              </Route>
              <Route path="/products/:id">
                <Products
                  cart={cart}
                  setCart={setCart}
                  totalPrice={totalPrice}
                  setTotalPrice={setTotalPrice}
                  setCartShow={setCartShow}
                  cartShow={cartShow}
                />
              </Route>
              <Route exact path="/products">
                <AllProducts
                  totalPrice={totalPrice}
                  setTotalPrice={setTotalPrice}
                />
              </Route>
            </Switch>
            <div className="wrapper flex-grow-1"></div>
            <Footer className="mt-auto" />
          </div>
        </div>
      </Router>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

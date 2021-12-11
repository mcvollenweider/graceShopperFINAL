import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import sampleProduct_DATA from "./api/structures";



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
  Blog,
  Rankings,
  Activity,
  AllNft,
  Profile,
  Login,
  Register,
  Products,
} from "./components";

const App = () => {
  let products = sampleProduct_DATA();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  let { fakeData } = sampleProduct_DATA(); 
  let allProducts = fakeData;
console.log(allProducts);
  return (
    <Router>
      <div className="App">
        {/* Daniel starts here */}
        <NavigationBar />

        <Switch>
          <Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Home">
              <Home />
            </Route>
            <Route path="/Settings">
              <Settings />
            </Route>
            <Route path="/Blog">
              <Blog />
            </Route>
            <Route path="/Docs">
              <Docs />
            </Route>
            <Route path="/Careers">
              <Careers />
            </Route>

            <Route path="/ContactUs">
              <ContactUs />
            </Route>
            <Route path="/Discord">
              <Discord />
            </Route>
            <Route path="/Rankings">
              <Rankings />
            </Route>
            <Route path="/Activity">
              <Activity />
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
            <Route path="/All_Nfts">
              <AllNft allProducts={allProducts}/>
            </Route>
            <Route />

            {/* Daniel ends here */}
          </Route>
        </Switch>
      </div>
      <Footer />
      {/* Evan starts here */}
      {/* The products is appearing on a few pages */}
      {/* <Products allProducts={allProducts}/> */}
      {/* Evan ends here */}
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

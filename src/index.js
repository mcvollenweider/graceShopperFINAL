import React,{useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import sampleProduct_DATA from './api/structures';
// import { getToken, getUser } from "./auth";

import { 
  Home,
  Discord,
  Newsletter,
  ContactUs,
  Footer,
  NavigationBar,
  Create,
  // AllNft,
  // Profile,
  // Login,
  // Explore,
  Products 
} from './components';

const App = () => {
  let products = sampleProduct_DATA();
  const [allProducts, setProducts] = useState(products);


  return (
    <Router>
    <div className="App">
      {/* Daniel starts here */}
      <NavigationBar/>
   
  
      <Switch>
        <Route>
          <Route path = "/Home">
          <Home/>
          </Route>
<Route path = "/ContactUs">
 <ContactUs/>
</Route>
<Route path = "/Discord">
<Discord/>
</Route>
<Route path = "/Newsletter">
<Newsletter/>
</Route>
<Route/>
{/* Daniel ends here */}
        </Route>
        </Switch>
       
      </div>
        <Footer/>
         {/* Evan starts here */}
         {/* The products is appearing on a few pages */}
      <Products allProducts={allProducts}/>
{/* Evan ends here */}
    </Router>
    
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
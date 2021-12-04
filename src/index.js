import React,{useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Products } from './components';
import sampleProduct_DATA from './api/structures';

const App = () => {
  let products = sampleProduct_DATA();
  const [allProducts, setProducts] = useState(products);


  return (
    <>
      <Products allProducts={allProducts}/>
    </>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
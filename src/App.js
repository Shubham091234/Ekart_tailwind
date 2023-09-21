import React from 'react';
import './App.css';
import Header  from './components/header';
import Home from './modules/Home';
import Footer from './components/Footer';
import {Route, Routes} from 'react-router-dom'
import Product from './modules/Product';
import Products from './modules/Products';
import CategoryProduct from './modules/CategoryProduct';


function App() {

  return (
<>
<Header />
<Routes >
<Route  path='/' element={<Home />}/>
<Route  path='/products/:id' element={<Product />}/>
<Route path='products' element={<Products />}/>
<Route path='/categories/:name' element={<CategoryProduct/>}/>
<Route  path='*' element={<div>404</div>}/>
</Routes>
<Footer />
</>
  );
}

export default App;

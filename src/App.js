import React from 'react';
import './App.css';
import Header  from './components/header';
import Home from './modules/Home';
import Footer from './components/Footer';
import {Route, Routes} from 'react-router-dom'
import Product from './modules/Product';
import Products from './modules/Products';
import CategoryProduct from './modules/CategoryProduct';
import About from './components/About';
import Contact from './components/Contact';


function App() {

  return (
<>
<Header />
<Routes >
<Route  path='/' element={<Home />}/>
<Route  path='/products/:id' element={<Product />}/>
<Route path='products' element={<Products />}/>
<Route path='/categories/:name' element={<CategoryProduct/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route  path='*' element={<Home />}/>
</Routes>
<Footer />
</>
  );
}

export default App;

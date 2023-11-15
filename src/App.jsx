import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import Properties from './components/properties/Properties';
import PropertyDetails from './components/propertyDetails/PropertyDetails';
import Header from './components/header/Header';
import Villa from './components/searchPage/villa/Villa';
import Footer from './components/footer/Footer';
import Mapp from './info/Mapp';
import Parent from './components/prop/Parent';
import ArrayData from './components/prop/ArrayData';
const App = () => {
  
  return (
   <BrowserRouter>
   <Header/>
   
    {/* <Mapp/> */}
   
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/properties" element={<Properties/>}/>
            <Route path="/details" element={<PropertyDetails/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/villa" element={<Villa/>}/>
            <Route path="parent" element={<Parent/>}/>
            <Route path="array" element={<ArrayData/>}/>
            {/* <Route path="map" element={<Mapp/>}/> */}
            {/* <Parent/> */}
        </Routes>
       
        <Footer/>
        
    </BrowserRouter>
  )
}

export default App
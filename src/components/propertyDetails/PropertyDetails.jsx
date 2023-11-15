import React from 'react'
import "./Style.scss"
import {RiDeleteBin7Fill} from "react-icons/ri";
import { useState } from 'react'
const PropertyDetails = ({data1}) => {
  const [items ,setItems]=useState(data1,false);
  const [use,setUse]=useState(false);

  const filterItem=(catItem)=>{
    const updataItem=data1.filter((curElem)=>{
      return curElem.title===catItem;
    });
    setItems(updataItem);
  }

  return (
    <div className='property'>
      
      <div className="content">
        <div className="page">
      <h5>HOME / SINGLE PROPERTY</h5>
      <h1>SINGLE PROPERTY</h1>
      </div>
        <div className="detail">
          <div className="left">
            <div className="image">
            <img src="single-property.jpg" alt="" />
            
            <div className="info">
              <h3>Appartment</h3>
              <h1> 24 New Street Miami, OR 24560</h1>
              <p>
              Get the best villa agency HTML CSS Bootstrap Template for your 
              company website. TemplateMo provides you the best free CSS templates
               in the world. Please tell your friends about it. Thank you.
                Cloud bread kogi bitters pitchfork shoreditch tumblr yr
                 succulents single-origin coffee schlitz enamel pin you probably
                  haven't heard of them ugh hella.When you look for free CSS templates, 
                  you can simply type TemplateMo in any search engine website. In addition, 
                  you can type TemplateMo Digital Marketing, TemplateMo Corporate Layouts,
                   etc. Master cleanse +1 intelligentsia swag post-ironic, slow-carb chambray
                    knausgaard PBR&B DSA poutine neutra cardigan hoodie pop-up.
              </p>
              <div className="links">
                <div onClick={()=>setUse(true)}>Best Useful links ?</div>
                {use && <p setUse= {setUse}/>}
                <p>
                Dolor almesit amet, consectetur adipiscing elit, sed doesn't
                 eiusmod tempor kinfolk tonx seitan crucifix 3 wolf moon bicycle
                  rights keffiyeh snackwave wolf same vice, chillwave vexillologist 
                  incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor
                   incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            </div>
          </div>

          <div className="right">
          <div className="allinfo">
          <div className="info1">
          <img src="./info-icon-01.png" alt="" />
          <span>250 m2</span>
          
          </div>
          <h3 className='heading'>Total Flat Space</h3>
          </div>
          <div className="allinfo">
          <div className="info2">
          <img src="./info-icon-02.png" alt="" />
          <h3 >Contract</h3>
          <h3 className='heading'>Contract Ready</h3>
          </div>
          </div>
          <div className="allinfo">
          <div className="info2">
          <img src="./info-icon-03.png" alt="" />
          <h3>Payment</h3>
          <h3 className='heading'>Payment Process</h3>
          </div>
          </div>
          <div className="last">
          <div className="info1">
          <img src="./info-icon-04.png" alt="" />
          <span>Safety </span>
           </div>
          <h3 className='heading'>Under Control</h3>
       <div/>
       </div>
        </div>
        </div>
        <div className="homeinfo">
              <div className="left">
                <h3>| BEST DEAL</h3>
                <h1>Find Your Best</h1>
                <h1> Deal Right </h1>
                <h1>  Now!</h1>
              </div>
              <div className="right">
                <button className="btn1"  onClick={()=>filterItem("Apartment")}>Appartment</button>
                <button className="btn1" onClick={()=>filterItem("Villahouse")}>Villa House</button>
                <button className="btn1" onClick={()=>filterItem("Penthouse")}>Penthose</button>
              
              </div>
           
            </div>

            {/* lopp */}
            
            
            
            {
              items?.map((item) => (
                <div key={item} className="extrainfo">
                
                  <div className="front">
                  <ul className='frontinfo'>
                    <li>{item.name1} <span>185 m2</span></li>
                    <li>Floor number <span>26th</span></li>
                    <li>Number of Rooms <span>4</span></li>
                    <li>Parking Avaliable <span>Yes</span></li>
                    <li>Payment Process <span>Bank</span></li>
                  </ul>
                </div>
                <div className="middle">
                  {item.img}
                </div>
                <div className="last">
                <h1 className='heading'>{item.heading}</h1>
                  <p>{item.des}</p>
                </div>
                
                </div>
              ))
              }
    
            
            {/* endloop */}

        
      </div>
    </div>
  )
}

export default PropertyDetails
import React, { useRef } from 'react'
import "./Style.scss"
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from "react-icons/bs";
import {RiDeleteBin7Fill} from "react-icons/ri";
import { useNavigate } from 'react-router';

const Home = () => {
  const carouselContainer = useRef();

  const navigation = (dir) => {
    const container = carouselContainer.current;
    console.log(container);

    if (container) {
      const scrollAmount = dir === 'left'
        ? container.scrollLeft - container.offsetWidth + 50
        : container.scrollLeft + container.offsetWidth + 50;

      container.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };
  

  const navigate=useNavigate();
  return (
    <div className='home'>
      
      <div className="content">
        {/* <div className="scrollimg"> */}
        <div className="image" ref={carouselContainer}>
          <img src={"./banner-01.jpg"} alt='' width="100%" height="900px"/>
          
          {/* <div className="image"> */}
          <img src="./banner-02.jpg" alt=''/>
        {/* </div> */}
        {/* <div className="image"> */}
          <img src="./banner-03.jpg" alt=''/>
        {/* </div> */}
        </div>
        {/* </div> */}
        
          <div className="arrow">
          <BsFillArrowLeftCircleFill
                    className="carouselLeftNav arrow"
                    onClick={() => navigation("left")}
                />
                <BsFillArrowRightCircleFill
                    className="carouselRighttNav arrow"
                    onClick={() => navigation("right")}
                />
                </div>
          <div className="page">
            <h5>Toranto Canada</h5>
            <h1>HURRY! GET THE BEST WILLA</h1>
      </div>
        {/* </div> */}
        
        <div className="info">
          <div className="left">
            <div className="image1">
                <img src="featured.jpg" alt=''/>
            </div>
            <div className="image2">
                <img src="./featured-icon.png" alt=''/>
                </div>

          </div>
        
        <div className="center">
          <h3>| FEATURED</h3>
          <div className="name">
            Best Appartment & Sea View
          </div>
          <h4>Best Useful Links ?</h4>
          <p>
          Get the best villa website template 
          in HTML CSS and Bootstrap for your business.
           TemplateMo provides you the best free CSS templates 
           in the world. Please tell your friends about it.
          </p>
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

        <div className="video">
          <div className="bgimg">
          <img src='./video-bg.jpg'/>
          </div>
          <div className="vimg">
            <img src='./video-frame.jpg'/>
          </div>
          </div> 
            <div className="about1">
              <div className="sec1">
                <div className="text1">
                <h1>34</h1>
                <h2>Building Finished Now</h2>
                </div>
                <span></span>
              </div>
              <div className="sec1">
                <div className="text1">
                <h1>12</h1>
                <h2>Years <br/>Experience</h2>
                </div>
                <span></span>
              </div>
              <div className="sec1">
                <div className="text1">
                <h1>24</h1>
                <h2>Awards Won 2023</h2>
                </div>
                <span></span>
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
                <button className="btn1">Appartment</button>
                <button className="btn1" onClick={()=>navigate("villa")}>Villa House</button>
                <button className="btn1">Penthose</button>
              
              </div>
           
            </div>
            <div className="extrainfo">
                <div className="front">
                  <ul className='frontinfo'>
                    <li>Total Flat Space <span>185 m2</span></li>
                    <li>Floor number <span>26th</span></li>
                    <li>Number of Rooms <span>4</span></li>
                    <li>Parking Avaliable <span>Yes</span></li>
                    <li>Payment Process <span>Bank</span></li>
                  </ul>
                </div>
                <div className="middle">
                  <img src="./property-05.jpg" alt="" />
                </div>
                <div className="last">
                  <h1 className='heading'>Extra Info About Property</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    do eiusmod tempor pack incididunt ut labore et dolore magna
                     aliqua quised ipsum suspendisse.
                     When you need free CSS templates, you can simply type TemplateMo in
                      any search engine website. In addition, you can type 
                      TemplateMo Portfolio, TemplateMo One Page Layouts, etc.
                      </p>
                      <div className="sub">
                        <div className="btnicon">
                        <RiDeleteBin7Fill size={25}/>
                        </div>
                        <button className='btn'>Shedule a visit</button>
                   </div>
                </div>
              </div>
              <div className="text">
                <div className="detail">
                <h3>| PROPERTIES </h3>
                <h1>We Provide The Best Property You Like</h1>
                </div>
              </div>
              <div className="card">
                <div className="details">
                  <img src="./property-01.jpg" alt="" width="270px"/>
                  <div className="rate">
                    <span className='name'>Luxry Villa</span>
                    <span className='price'>$2.264.000</span>
                  </div>
                  <h2>18 New Street Miami, OR 97219</h2>
                  <div className="bedroom">
                  Bedrooms:8 Bathrooms:8 Area:545m2 Floor:3
                  Parking:6 spots
                  </div>
                  <div className="visit">
                    <button className='visitbtn'>Shedule a Visit</button>
                  </div>
                </div>
                <div className="details">
                  <img src="./property-02.jpg" alt="" width="270px"/>
                  <div className="rate">
                    <span className='name'>Luxry Villa</span>
                    <span className='price'>$5.164.000</span>
                  </div>
                  <h2>18 New Street Miami, OR 97219</h2>
                  <div className="bedroom">
                  Bedrooms:8 Bathrooms:8 Area:545m2 Floor:3
                  Parking:6 spots
                  </div>
                  <div className="visit">
                    <button className='visitbtn'>Shedule a Visit</button>
                  </div>
                </div>
                <div className="details">
                  <img src="./property-03.jpg" alt="" width="270px"/>
                  <div className="rate">
                    <span className='name'>Luxry Villa</span>
                    <span className='price'>$2.164.000</span>
                  </div>
                  <h2>18 New Street Miami, OR 97219</h2>
                  <div className="bedroom">
                  Bedrooms:8 Bathrooms:8 Area:545m2 Floor:3
                  Parking:6 spots
                  </div>
                  <div className="visit">
                    <button className='visitbtn'>Shedule a Visit</button>
                  </div>
                </div>
                <div className="details">
                  <img src="./property-04.jpg" alt=""  width="270px"/>
                  <div className="rate">
                    <span className='name'>Apartment</span>
                    <span className='price'>$4.264.000</span>
                  </div>
                  <h2>18 New Street Miami, OR 97219</h2>
                  <div className="bedroom">
                  Bedrooms:8 Bathrooms:8 Area:545m2 Floor:3
                  Parking:6 spots
                  </div>
                  <div className="visit">
                    <button className='visitbtn'>Shedule a Visit</button>
                  </div>
                </div>
                <div className="details">
                  <img src="./property-05.jpg" alt="" width="270px"/>
                  <div className="rate">
                    <span className='name'>Panthouse</span>
                    <span className='price'>$3.204.000</span>
                  </div>
                  <h2>18 New Street Miami, OR 97219</h2>
                  <div className="bedroom">
                  Bedrooms:8 Bathrooms:8 Area:545m2 Floor:3
                  Parking:6 spots
                  </div>
                  <div className="visit">
                    <button className='visitbtn'>Shedule a Visit</button>
                  </div>
                </div>
                <div className="details">
                  <img src="./property-06.jpg" alt="" width="270px"/>
                  <div className="rate">
                    <span className='name'>Modern Condo</span>
                    <span className='price'>$1.264.000</span>
                  </div>
                  <h2>18 New Street Miami, OR 97219</h2>
                  <div className="bedroom">
                  Bedrooms:8 Bathrooms:8 Area:545m2 Floor:3
                  Parking:6 spots
                  </div>
                  <div className="visit">
                    <button className='visitbtn'>Shedule a Visit</button>
                  </div>
                </div>
              </div>
              <div className="map">
                <div className="bgimg">
                <img src='./video-bg.jpg'/>
                </div>
                <div className="input">
                  <div className="leftmap">
                <div className="mapimg">
                <img src='./map-img.jpg'/>
                </div>
                <div className="box">
            <div className="dial">
                <div className="image1">
                <img src="./email-icon.png" alt=''/>
                </div>
                <div className='ph'>
                    <h2>010-020-0340</h2>
                    <p>Phone Number</p>
                </div>
            </div>
            <div className="mail">
                <div className="image1">
                <img src="./phone-icon.png" alt=''/>
                </div>
                {/* <div className='ph'> */}
                    <span>info@villa.com </span>
                    <span>Business Email</span>
                {/* </div> */}
            </div>
            </div>
                </div>

          
                <div className="right">
                <form className='myform'
                >
                    <label className='lbl'>Full Name</label>
                    <input
                    type='text'
                    required
                    placeholder='Your NAme'
                    className='txt'
                    />
                    <label className='lbl'>Email Address</label>
                     <input
                    type='text'
                    required
                    placeholder='Your E-mail'
                    className='txt'/>
                    <label className="lbl">Subject</label>
                    <input
                    type='text'
                    required
                    placeholder='Subject'
                    className='txt'/>
                    <label  className="lbl">Message</label>
                    <input 
                    type='text'
                    required
                    placeholder='Your Message'
                    className='msg'/>
                     <button className="btn">
                         Send Message
                     </button>
                 </form>
             </div>
        
         </div> 
          </div>
      </div>
    </div>
  )
}

export default Home
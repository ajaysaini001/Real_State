import React from 'react'
import"./style.scss";
import Mapp from '../../info/Mapp';
const Contact = () => {
  return (
    <div className='info'>
      <div className="page">
      <h5>HOME / CONTACT US</h5>
      <h1>CONTACT US</h1>
      </div>
        <div className="content">
        
        
            <div className="left">
                <h3>|CONTACT US</h3>
                <h1>Get In Touch With Our Agents</h1>
               <p>When you really need to download free CSS templates, please remember our website TemplateMo. Also, tell your friends about our website. Thank you for visiting. There is a variety of Bootstrap HTML CSS templates on our website. If you need more information, please contact us.


             010-020-0340
             Phone Number</p>
            <div className="box">
            <div className="dial">
                <div className="image1">
                <img src="./phone-icon.png" alt=''/>
                </div>
                <div className='ph'>
                    <h2>010-020-0340</h2>
                    <p>Phone Number</p>
                </div>
            </div>
            <div className="mail">
                <div className="image1">
                <img src="./email-icon.png" alt=''/>
                </div>
                <div className='ph'>
                    <h2>info@villa.com </h2>
                    <p>Business Email</p>
                </div>
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
        <div className="map">
                <img src="./map-img.jpg" alt="" />
            
        </div>
    </div>
  )
}

export default Contact
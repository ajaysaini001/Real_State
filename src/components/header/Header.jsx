import React from 'react'
import "./Style.scss";
import {RiDeleteBin7Fill} from "react-icons/ri";
import {AiOutlineInstagram,AiFillTwitterCircle,
AiFillLinkedin,AiFillFacebook} from "react-icons/ai";
import {GrMail} from "react-icons/gr";
import {TiLocation} from "react-icons/ti";
import { useNavigate } from 'react-router';

const Header = () => {
    const navigate=useNavigate();
  return (

          <div className= {`header ${scroll ? 'sticky-header' : ""}`}> 
         
        <div className="content">
            <div className="left">
                <div className="email">
                <GrMail className='c-icon'/>
                <span> info@company.com</span>
                </div>
                <div className="add">
                <TiLocation className='c-icon'/>
                <span>Sunny Isles Beach, FL 33160</span>
                </div>
            </div>
            
            <div className="right">
                <div className="page"><AiFillFacebook size={14}/></div>
                <div className="page"> <AiFillTwitterCircle size={14}/></div>
                <div className="page"><AiFillLinkedin size={14}/></div>
                <div className="page"><AiOutlineInstagram size={14}/></div>
            </div>
        </div>
        <div className="home">
            <h1 onClick={()=>navigate("/")}>VILLA</h1>
            <ul className='item'>
                <li className='listitem' onClick={()=>navigate("/")}>Home</li>
                <li className='listitem' onClick={()=>navigate("/parent")}>Properties</li>
                <li className='listitem' onClick={()=>navigate("/array")}>PropertyDetails</li>
                <li className='listitem ' onClick={()=>navigate("contact")}>ContactUs</li>
                {/* <li className='listitem ' onClick={()=>navigate("/map")}>Map</li> */}
            </ul>
            <div className="scroll">
                <div className="btnicon">
                <RiDeleteBin7Fill size={25}/>
                </div>
                <button className='btn'>Shedule a visit</button>
            </div>
        </div>
        
        <div className='image'>
            <img src="./page-heading-bg.jpg" alt='' width="100%" height="360px"/>
        </div>
    </div>
    

       
  )
}

export default Header
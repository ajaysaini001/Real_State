import React from 'react'
import "./Style.scss";

import { useState } from 'react'
const Properties = ({data}) => {
  const[items,setItems]=useState( data);
  // const[filterData,setFilterdata]=useState(data);

  // 
  // const filterFood = (title) => {
  //   if (title === "phone") {
  //     setFilterdata(data);
  //     setFiterBtn("phone");
  //   } else {
  //     const filter = data.filter((item) => item.title.includes(title));
  //     setFilterdata(filter);
  //     setFiterBtn(title);
  //   }
  // }

  const filterItem=(catItem)=>{
    const updataItem=data.filter((curElem)=>{
      return curElem.name===catItem;
    });
    setItems(updataItem);
  }
 
  const arrayfilter=[
    {
      title:"Show All",
      name:"Bedrooms"
    },
    {
      title:"Apartment",
      name:"Apartment"
    },
    {
      title:"Villa House",
      name:"Luxuryvilla"
    },
    {
      title:"Penthouse",
      name:"Penthouse"
    }
  ]
  return (
    
    <div className='property'>
      <div className="content">
      <div className="page">
      <h5>HOME / PROPERTY</h5>
      <h1>PROPRITERS</h1>
      </div>
      <div className="submit">
                <button className="btn1" onClick={()=>setItems(data)}>ShowAll</button>
                <button className="btn1" onClick={()=>filterItem("Luxuryvilla")}>Villa House</button>
                <button className="btn1" onClick={()=>filterItem("Apartment")}>Appartment</button>
                <button className="btn1" onClick={()=>filterItem("Penthouse")}>Penthose</button>
              
              </div>
              {/* <div className="submit">
              {
                arrayfilter?.map((home)=>(
                  <button className="btn1" key={home.title} onClick={()=>filterItem(home.name)}>
                    {home.title}
                  </button>
                ))
              }
              </div> */}
             <div className="card">
            
                {
                  items?.map((item) => (
                    <div key={item.id} className="details">
                      <div className="image"> {item.img}</div> 
                      <div className="rate">
                    <span className='name'>{item.name}</span>
                    <span className='price'>{item.price}</span>
                  </div>
                  <h2>{item.des}</h2>
                  <div className="bedroom">
                    {item.info}
                  </div>
                  <div className="visit">
                    <button className='visitbtn'>Shedule a Visit</button>
                  </div>
                    
                    </div>
                  ))
                  }
                </div>
                  
              <div className="enter">
              <div className="change">
                {/* <div className="num">1</div> */}
                <div className="num" onClick={
                  () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}> 1
                </div>

                <div className="num"  onClick={
                  () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}>2
                  </div>

                <div className="num"  onClick={
                  () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}>3
                  </div>
                  
                <div className="num"  onClick={
                  () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}>*
                  </div>
              </div>
              </div>
      </div>
    </div>
  )
}

export default Properties
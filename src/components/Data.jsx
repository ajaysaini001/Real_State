// import React from 'react';
// import Properties from './properties/Properties';

// const Data = () => {
//  const  data1="My Name";
//   const data = [
//     {
//       id: 1,
//       img: "./property-01.jpg",
//       name: "Luxury Villa",
//       price: "$2,64000",
//       des: "18 New Street Miami, OR 97219",
//       info: "Bedrooms: 8 Bathrooms: 8 Area: 545m2 Floor: 3 Parking: 6 spots",
//     },
//     {
//       id: 2,
//       img: "./property-02.jpg",
//       name: "Luxury Villa",
//       price: "$3,64000",
//       des: "18 New Street Miami, OR 97219",
//       info: "Bedrooms: 8 Bathrooms: 8 Area: 545m2 Floor: 3 Parking: 6 spots",
//     },
//     {
//       id: 3,
//       img: "./property-03.jpg",
//       name: "Luxury Villa",
//       price: "$4,64000",
//       des: "18 New Street Miami, OR 97219",
//       info: "Bedrooms: 8 Bathrooms: 8 Area: 545m2 Floor: 3 Parking: 6 spots",
//     },
//     {
//       id: 4,
//       img: "./property-04.jpg",
//       name: "Apartment",
//       price: "$7,64000",
//       des: "18 New Street Miami, OR 97219",
//       info: "Bedrooms: 8 Bathrooms: 8 Area: 545m2 Floor: 3 Parking: 6 spots",
//     },
//     {
//       id: 5,
//       img: "./property-05.jpg",
//       name: "Penthouse",
//       price: "$5,64000",
//       des: "18 New Street Miami, OR 97219",
//       info: "Bedrooms: 8 Bathrooms: 8 Area: 545m2 Floor: 3 Parking: 6 spots",
//     },
//     {
//       id: 6,
//       img: "./property-06.jpg",
//       name: "Modern Condo",
//       price: "$6,64000",
//       des: "18 New Street Miami, OR 97219",
//       info: "Bedrooms: 8 Bathrooms: 8 Area: 545m2 Floor: 3 Parking: 6 spots",
//     },
//   ];

//   return (
//     <div>
//       <Properties data={data1} />
//     </div>
//   );
// };

// export default Data;
// import logo from './logo.svg';
// import './App.css';
// import NewProduct from './Component/NewProduct';
// import Product from './Component/Product';
import Contact from './contact/Contact';

const Data = () => {
  const  data1="My Name";
  const product=[
    {
    id:"1",
    title:"Nirma",
    amount:"12",
    date:new Date(3,1,2023),
    },
    {
    id:"2",
    title:"Surf Excel",
    amount:"12",
    date:new Date(3,1,2023),
      },
      {
        iid:"3",
        title:"555",
        amount:"12",
        date:new Date(3,1,2024),
        },
        {
        id:"4",
        title:"Arial",
        amount:"12",
        date:new Date(3,1,2025),
        }
  ];
  function printProductData(data){
    console.log("i am in App.js")
    console.log(data)
  }
  return (
   
    <div> 
      
      <Contact item={data1}/>
      
        
    </div>  
  );                
}                  
export default Data;

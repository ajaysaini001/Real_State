import React from 'react';
import "./style.scss";
import PropertyDetails from '../propertyDetails/PropertyDetails';
const ArrayData = () => {
  const mydata = [
    {
      id: "1",
      img:<img src="./property-02.jpg"/>,
      title:"Apartment",
      heading: "All Info About Apartment",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen",
    },
    
    {
      id: "2",
      
      name1: "Total Flat Space",
      info1:"%40 m2",
      img:<img src="./property-04.jpg"/>,
      title:"Villahouse",
      heading: "All Info About Villahouse",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen",
    },
    {
      id: "3",
      img:<img src="./property-05.jpg"/>,
      title:"Penthouse",
      heading: "All Info About Penthouse",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen",
    },
  ];
return (
<div>

<PropertyDetails data1={mydata}/>

</div>
)
}

export default ArrayData;

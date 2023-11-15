import React from 'react'
import Properties from '../properties/Properties';
import Home from '../home/Home';

const Parent = () => {

    const data1 = [
            {
              id: "1",
              img:<img src="./property-01.jpg"/>,
              name: "Luxuryvilla",
              price: "$2,64000",
              des: "18 New Street Miami, OR 97219",
              info: "Bedrooms: 8 Bathrooms: 8 Area: 545m2 Floor: 3 Parking: 6 spots",
            },
            {
              id: "2",
              img: <img src="./property-02.jpg"/>,
              name: "Luxuryvilla",
              price: "$3,64000",
              des: "18 New Street Miami, OR 97219",
              info: "Bedrooms: 8 Bathrooms: 8 Area: 545m2 Floor: 3 Parking: 6 spots",
            },
            {
              id: "3",
              img: <img src="./property-03.jpg"/>,
              name: "Luxuryvilla",
              price: "$4,64000",
              des: "18 New Street Miami, OR 97219",
              info: "Bedrooms: 8 Bathrooms: 8 Area: 545m2 Floor: 3 Parking: 6 spots",
            },
            {
              id: "4",
              img: <img src="./property-04.jpg"/>,
              name: "Apartment",
              price: "$7,64000",
              des: "18 New Street Miami, OR 97219",
              info: "Bedrooms: 8 Bathrooms: 8 Area: 545m2 Floor: 3 Parking: 6 spots",
            },
            {
              id: "5",
              img: <img src="./property-05.jpg"/>,
              name: "Penthouse",
              price: "$5,64000",
              des: "18 New Street Miami, OR 97219",
              info: "Bedrooms: 8 Bathrooms: 8 Area: 545m2 Floor: 3 Parking: 6 spots",
            },
            {
              id: "7",
              img: <img src="./property-01.jpg"/>,
              name: "Penthouse",
              price: "$6,64000",
              des: "18 New Street Miami, OR 97219",
              info: "Bedrooms: 8 Bathrooms: 8 Area: 545m2 Floor: 3 Parking: 6 spots",
            },
            {
              id: "8",
              img: <img src="./property-02.jpg"/>,
              name: "Apartment",
              price: "$6,64000",
              des: "18 New Street Miami, OR 97219",
              info: "Bedrooms: 8 Bathrooms: 8 Area: 545m2 Floor: 3 Parking: 6 spots",
            },
            {
              id: "9",
              img: <img src="./property-03.jpg"/>,
              name: "Apartment",
              price: "$6,64000",
              des: "18 New Street Miami, OR 97219",
              info: "Bedrooms: 8 Bathrooms: 8 Area: 545m2 Floor: 3 Parking: 6 spots",
            },
            {
              id: "10",
              img: <img src="./property-04.jpg"/>,
              name: "Apartment",
              price: "$6,64000",
              des: "18 New Street Miami, OR 97219",
              info: "Bedrooms: 8 Bathrooms: 8 Area: 545m2 Floor: 3 Parking: 6 spots",
            },
          ];
  return (
    <div>
    
        <Properties data={data1}/>
        {/* <Home data={data1}/> */}
    </div>
  )
}

export default Parent
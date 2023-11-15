import {useJsApiLoader,GoogleMap} from "@react-google-maps/api";
import "./style.scss";
import React from 'react'
const center={lat: 48.8584, lng: 2.2945}
const Mapp = () => {
    const {isLoaded}=useJsApiLoader({
        googleMapsApiKey: "AIzaSyC-GyY7CmQigmP_aMhiURw-lKTA2mxHnHI",
    });
  
  return (
    <div className="maps">
      <GoogleMap center={center} zoom={15} mapContainerStyle={{width: "100%", height: "100%"}}>

      </GoogleMap>
    </div>
  )
}

export default Mapp
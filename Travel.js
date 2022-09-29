import React from "react"



function Travel(props) {
    return (
        <div className="travel-card">
        
        <div className="img-div">
        <img src={props.item.imageUrl} alt="" className="location-img"/>
        </div>
        
        <div className="card-text">
        
        <div className="text-div">
        
          <img src="../images/location.png" alt="" className="pin-img"/>
          <span className="black">{props.item.location}</span>
          <span className="gray"><a href={props.item.googleMapsUrl}>View On Google Maps</a></span>
        
        </div>
        
          <h1>{props.item.title}</h1>
          <p className="date-txt">{props.item.startDate} - {props.item.endDate}</p>
          <p className="txt">{props.item.description}</p>
          
        </div>
        
        </div>
    )
}


















export default Travel

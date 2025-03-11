// write the component code here
import React from 'react'
import './usercard.css'

const Usercard = () => {  
    const data = { 
        photourl:"https://res.cloudinary.com/dabeupfqq/image/upload/v1736155511/uploads/umfvwghnqwtg0whlvcms.jpg", 
        name:"P Sagar", 
        email:"pitta.sagar.s81@kalvium.community", 
        phoneNumber:"3345665352", 
        address: "Bangalore, India" 
    }
    return (  
      <div className="usercard">  
        <img src={data.photourl} alt={data.name} className="usercard-photo" />  
        <div className="usercard-details">  
          <h2 className="usercard-name">{data.name}</h2>  
          <p className="usercard-email">{data.email}</p>  
          <p className="usercard-phone">{data.phoneNumber}</p>  
          <p className="usercard-address">{data.address}</p>  
        </div>  
      </div>  
    );  
};  

export default Usercard
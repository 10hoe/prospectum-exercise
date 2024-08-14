import { useState } from "react"

import penIcon from "../../public/pen-svgrepo-com.svg" 

import Button from "./Button"

// eslint-disable-next-line react/prop-types
const Usercard = ({ userProps, className }) => {
    const [editMode, setEditMode] = useState(false)
    
    // eslint-disable-next-line react/prop-types
    const {name, imageUrl, phoneNumber, country, city, email} = userProps
    // Ideoita:
    // pieni maan lippu
    // pieni svg-puhelinikoni
    // pieni location-ikoni "neula kartalla"

    if(!editMode){
        return (
            <div className={className}>
                <img src={imageUrl}></img>
                <h1>{name}</h1>
                <div>Phone: {phoneNumber}</div>
                <div>Country: {country}</div>
                <div>City: {city}</div>
                <div>Email: {email}</div>
                <img src={penIcon}></img>
                <Button handleClick={() => setEditMode(!editMode)} text="Edit" />
            </div>
        )
    }
    else {
        return(
            <div className={className}>
                <img src={imageUrl}></img>
                <h1>{name}</h1>
                <div>Phone: {phoneNumber}</div>
                <div>Country: {country}</div>
                <div>City: {city}</div>
                <div>Email: {email}</div>
                <img src={penIcon}></img>
            <Button handleClick={() => setEditMode(!editMode)} text="Edit" />
                
            </div>
        )
    }
   
}

export default Usercard
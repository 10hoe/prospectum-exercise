import { useState } from "react"

import penIcon from "../../public/pen-svgrepo-com.svg" 

import Button from "./Button"

// eslint-disable-next-line react/prop-types
const Usercard = ({ className, userProps, setUserProps }) => {
    const [editMode, setEditMode] = useState(false)
    
    // eslint-disable-next-line react/prop-types
    const {name, imageUrl, phoneNumber, country, city, email} = userProps
    // Ideoita:
    // pieni maan lippu
    // pieni svg-puhelinikoni
    // pieni location-ikoni "neula kartalla"

    if(editMode){
        return (
            <div className={className}>
                <img src={imageUrl}></img>
                <h1><input type="text" value={name} onChange={(e) => setUserProps({ ...userProps, name: e.target.value })} /></h1>
                <div>Phone:&nbsp;
                    <input type="text"value={phoneNumber} onChange={(e) => setUserProps({ ...userProps, phoneNumber: e.target.value })} />
                </div>
                <div>Country:&nbsp;
                    <input type="text" value={country} onChange={(e) => setUserProps({ ...userProps, country: e.target.value })} />
                </div>
                <div>City:&nbsp;
                    <input type="text" value={city} onChange={(e) => setUserProps({ ...userProps, city: e.target.value })}/>
                </div>
                <div>Email:&nbsp;
                    <input type="text" value={email} onChange={(e) => setUserProps({ ...userProps, email: e.target.value })} />
                </div>
                <img src={penIcon}></img>
                <Button handleClick={() => setEditMode(!editMode)} text="Save" />
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
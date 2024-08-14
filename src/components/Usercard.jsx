import { useState } from "react"

import penIcon from "../../public/pen-svgrepo-com.svg"
import phoneIcon from "../../public/phone-call-svgrepo-com.svg"
import emailIcon from "../../public/email-svgrepo-com.svg"

import IconButton from "./IconButton"

// This component displays user info as a card-like element 
const Usercard = ({ className, userProps, setUserProps }) => {

    // Destructure user info
    const {name, imageUrl, phoneNumber, country, city, email} = userProps

    // State for toggling edit mode
    const [editMode, setEditMode] = useState(false)

    // Allow saving changes with Enter
    const handleKeydown = (e)=> {
        if(e.key === 'Enter') {
            setEditMode(!editMode)
        }
    }

    // Toggle edit mode
    const handleClick = () => setEditMode(!editMode)

    // Conditional rendering based on edit mode
    if(editMode){
        return (
            <div className={className}>
                <form className="user-edit-form" onKeyDown={handleKeydown}>
                    <img src={imageUrl}></img>
                    <div>Name:&nbsp;
                        <input type="text" value={name} onChange={(e) => setUserProps({ ...userProps, name: e.target.value })} />
                    </div>
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
                    <IconButton handleClick={handleClick} text="Save" icon={penIcon} id="save" />
                </form>
            </div>
        )
    }
    else {
        return(
            <div className={className}>
                <img src={imageUrl}></img>
                <IconButton handleClick={handleClick} text="Edit" icon={penIcon} id="edit" />
                <h2>{name}</h2>
                <div className="location">{city}, {country}</div>
                <div><img src={phoneIcon} className="phone-icon" />&nbsp;{phoneNumber}</div>
                <div><img src={emailIcon} className="email-icon" />&nbsp;{email}</div>
            </div>
        )
    }
   
}

export default Usercard
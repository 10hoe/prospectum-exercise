import { useState } from "react"

import penIcon from "../../public/pen-svgrepo-com.svg"
import phoneIcon from "../../public/phone-call-svgrepo-com.svg"
import emailIcon from "../../public/email-svgrepo-com.svg"

import IconButton from "./IconButton"
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

    // Allow saving changes with spacebar
    const handleKeydown = (e)=> {
        if(e.key === 'Enter') {
            setEditMode(!editMode)
        }
    }

    if(editMode){
        return (
            <div className={className}>
                <form className="user-edit-form" onKeyDown={handleKeydown} onSubmit={() => {}}>
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
                    <IconButton handleClick={() => setEditMode(!editMode)} text="Save" icon={penIcon} id="save" />
                </form>
            </div>
        )
    }
    else {
        return(
            <div className={className}>
                <img src={imageUrl}></img>
                <IconButton handleClick={() => setEditMode(!editMode)} text="Edit" icon={penIcon} id="edit" />
                <h2>{name}</h2>
                <div className="location">{city}, {country}</div>
                <div><img src={phoneIcon} className="phone-icon" />&nbsp;{phoneNumber}</div>
                <div><img src={emailIcon} className="email-icon" />&nbsp;{email}</div>
                
            </div>
        )
    }
   
}

export default Usercard
// eslint-disable-next-line react/prop-types
const Usercard = ({ userProps }) => {
    
    // eslint-disable-next-line react/prop-types
    const {name, imageUrl, phoneNumber, country, city, email} = userProps
    // Ideoita:
    // pieni maan lippu
    // pieni svg-puhelinikoni
    // pieni location-ikoni "neula kartalla"

    return (
        <>
        <img src={imageUrl}></img>
        <h1>{name}</h1>
        <div>Phone: {phoneNumber}</div>
        <div>Country: {country}</div>
        <div>City: {city}</div>
        <div>Email: {email}</div>
        </>
    )
}

export default Usercard
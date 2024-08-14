// eslint-disable-next-line react/prop-types
const IconButton = ({ handleClick, text, icon, id }) => {
    return(
        <button id={id} type="button" className="icon-button" onClick={handleClick}><img src={icon}/> {text}</button>
    )
}

export default IconButton
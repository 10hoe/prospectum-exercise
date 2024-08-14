// eslint-disable-next-line react/prop-types
const Button = ({ handleClick, text }) => {
    return(
        <button className="edit-button" onClick={handleClick}>{text}</button>
    )
}

export default Button
import { useState, useEffect } from 'react'
import axios from 'axios'

import placeHolderImage from "../public/user-image-l.png"

import Usercard from "./components/Usercard"

function App() {
  const [userProps, setUserProps] = useState({
    name: "",
    imageUrl: placeHolderImage,
    phoneNumber: "",
    country: "",
    city: "",
    email: "",
  })

  const userDataHook = () => {

    const getData = async () => {
      const res = await axios.get("https://randomuser.me/api/")
      const userData = res.data.results[0]
      const newUserProps = {
        name: userData.name.first + " " + userData.name.last,
        imageUrl: userData.picture.large,
        phoneNumber: userData.cell,
        country: userData.location.country,
        city: userData.location.city,
        email: userData.email,
      }

    setUserProps(newUserProps)
    }
    getData()
  }

  useEffect(userDataHook, [])

  return (
    <>
      <Usercard userProps={userProps}/>
    </>
  )
}

export default App

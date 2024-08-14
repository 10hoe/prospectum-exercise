import { useState, useEffect } from 'react'
import axios from 'axios'

import placeHolderImage from "../public/user-image-l.png"

import Usercard from "./components/Usercard"

import './App.css'

function App() {

  // A state that stores the current user information
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
    <div className='center-strip'>
      <Usercard className="rand-user" userProps={userProps} setUserProps={setUserProps} />
    </div>
  )
}

export default App

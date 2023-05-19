import React from 'react'
import Navbar from '../../components/Navbar'
import "../../App.css"
import Courses from './Courses'
import Team from './Team'
const Home = () => {
  return (
    <>
    <Navbar/>
    <Courses/>
    <Team/>
    </>
  )
}

export default Home
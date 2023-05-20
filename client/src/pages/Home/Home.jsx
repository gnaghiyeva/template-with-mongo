import React from 'react'
import Navbar from '../../components/Navbar'
import "../../App.css"
import Courses from './Courses'
import Team from './Team'
import Experts from './Experts'
import Education from './Education'
import Footer from '../../components/Footer'
const Home = () => {
  return (
    <>
    <Navbar/>
    <Courses/>
    <Experts/>
    <Team/>
    <Education/>
    <Footer/>
    </>
  )
}

export default Home
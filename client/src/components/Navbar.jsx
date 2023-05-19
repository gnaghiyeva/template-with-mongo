import React from 'react'
import navbarstyle from "../components/navbar.module.css"
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
const Navbar = () => {

  return (
    <>
    <header className={navbarstyle.header} >

    <nav className={navbarstyle.navbar}>
        <div>
        <h2 style={{color:'white'}}>BrandName</h2>
        </div>

        
        <ul className={navbarstyle.navbarList} style={{listStyle:'none'}}>
            <li className={navbarstyle.navbarListItem}><Link style={{color:'white', textDecoration:'none'}} to='/'>Home</Link></li>
            <li className={navbarstyle.navbarListItem} style={{color:'white', textDecoration:'none'}}>Product</li>
            <li className={navbarstyle.navbarListItem}style={{color:'white', textDecoration:'none'}}>Pricing</li>
            <li className={navbarstyle.navbarListItem}style={{color:'white', textDecoration:'none'}}>Contact</li>
        </ul>
        

     
            <ul className={navbarstyle.navbarButtons} >
                <li style={{color:'white', listStyle:'none', marginRight:'40px'}}>Login</li>
                <Button variant="contained" color='warning'>JOIN US</Button>
            </ul>
        

    </nav>
    
    <div className={navbarstyle.navbarTexts}>
        <span>For Better Future</span>
        <br/>  <br/>
        <h1>25K+ STUDENTS <br/> TRUST US</h1>
        <br/>  <br/>
        <p>Find the right instructor for you from over 10,000 teachers</p>
        <br/>  <br/>
        <div >
            <Button style={{marginRight:'20px'}} variant='contained' color='warning'>Get Quote Now</Button>
            <Button variant='outlined' color='warning'>Learn More</Button>
        </div>
    </div>

    </header>
    
    </>
  )
}

export default Navbar
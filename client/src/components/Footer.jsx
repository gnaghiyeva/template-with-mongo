import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import { Col, Row } from 'antd';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
  return (
    <>

      <Row  style={{ backgroundColor: "#26335D", color: 'white', display: 'flex', justifyContent: 'center', padding: '30px 100px' }}>
        {/* style={{ backgroundColor: "#26335D", color: 'white', display: 'flex', justifyContent: 'center', padding: '30px 100px' }}> */}
        <Col className="gutter-row" span={4}  xs={24} sm={24} md={12} lg={4}>
        <ul style={{ listStyle: 'none' }}>
            <h5>Company Info</h5><br />
            <li>About Us</li>
            <li>Carrier</li>
            <li>We are hiring</li>
            <li>Blog</li>
          </ul>
      </Col>

          
      <Col className="gutter-row" span={4} xs={24} sm={24} md={12} lg={4}>
          <ul style={{ listStyle: 'none' }}>
            <h5>Legal</h5><br />
            <li>About Us</li>
            <li>Carrier</li>
            <li>We are hiring</li>
            <li>Blog</li>
          </ul>

        </Col>
        <Col className="gutter-row" span={4} xs={24} sm={24} md={12} lg={4}>
          <ul style={{ listStyle: 'none' }}>
            <h5>Features</h5><br />
            <li>Business Marketing</li>
            <li>User Analytic</li>
            <li>Live Chat</li>
            <li>Unlimited Support</li>
          </ul>
        </Col>
        <Col className="gutter-row" span={4} xs={24} sm={24} md={12} lg={4}>
          <ul style={{ listStyle: 'none' }}>
            <h5>Resources</h5><br />
            <li>IOS & Android</li>
            <li>Watch a Demo</li>
            <li>Customers</li>
            <li>API</li>
          </ul>
        </Col>
        <Col className="gutter-row" span={4} xs={24} sm={24} md={12} lg={4}>
          <ul style={{ listStyle: 'none' }}>
            <h5>Get In Touch</h5><br />
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <PhoneIcon />
              <li>(480) 555-0103</li>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <LocationOnIcon />
              <li>4517 Washington Ave. Manchester,
                Kentucky 39495</li>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <EmailIcon />
              <li>debra.holt@example.com</li>
            </div>
          </ul>
        </Col>
      </Row>

      <div style={{display:'flex', justifyContent:'space-between',padding: '15px 200px' }}>
        <article>
        <h6 style={{fontSize:'14px', lineHeight:'24px', fontWeight:700, color:'#737373'}}>Made With Love By Figmaland All Right Reserved </h6>
        </article>

        <div>
        <FacebookIcon style={{color:'#FF6551', marginRight:'15px'}}/>
        <InstagramIcon style={{color:'#FF6551',marginRight:'15px'}}/>
        <TwitterIcon style={{color:'#FF6551'}}/>
        </div>
      </div>
    </>
  )
}

export default Footer
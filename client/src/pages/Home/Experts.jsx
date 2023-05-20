import React from 'react'
import expert1 from "../Home/svg/expert-1.svg"
import expert2 from "../Home/svg/expert-2.svg"
import stars from "../Home/svg/stars.svg"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Col, Row } from 'antd';
const Experts = () => {
    return (
        <>
            <section style={{ width: '80%', margin: '100px auto' }}>
                <article style={{marginBottom:'100px'}}>
                    <h6 style={{color:'#FF6551',lineHeight:'50px', fontSize:'14px'}}>Testimonials</h6>
                    <h2 style={{lineHeight:'50px',fontSize:'40px'}}>Our Experts Teacher</h2>
                    <p style={{lineHeight:'30px'}}>Problems trying to resolve the conflict between
                        the two major realms of Classical physics: Newtonian mechanics </p>
                </article>
                <div>
                    {/* <div>
                        <img src={expert1} />
                        <p>Slate helps you see how many more days
                            you need to work to reach your financial
                            goal for the month and year.</p>
                        <img src={stars}/>
                        <h5></h5>
                    </div> */}

                    <Row style={{width:'80%', margin:'0 auto', display:'flex', justifyContent:'space-between'}} gutter={[20, 30]}>
                        <Col >
                            <Card sx={{ maxWidth: 345 }}>
                                <CardContent style={{ textAlign: 'center' }}>
                                    <img style={{ borderRadius: '50%' }} src={expert1} alt='expert1'/>
                                    <Typography gutterBottom variant="p" component="div">
                                        Slate helps you see how many more days
                                        you need to work to reach your financial
                                        goal for the month and year.
                                    </Typography>
                                    <img src={stars} alt='stars'/>
                                    <h5>Regina Miles</h5>
                                    <span>Designer</span>
                                </CardContent>

                            </Card>
                        </Col>
                        <Col >
                            <Card sx={{ maxWidth: 345 }}>

                                <CardContent style={{ textAlign: 'center' }}>
                                    <img style={{ borderRadius: '50%' }} src={expert2}alt='expert1' />
                                    <Typography gutterBottom variant="p" component="div">
                                        Slate helps you see how many more days
                                        you need to work to reach your financial
                                        goal for the month and year.
                                    </Typography>
                                    <img src={stars} alt='stars' />
                                    <h5>Regina Miles</h5>
                                    <span>Designer</span>
                                </CardContent>

                            </Card>
                        </Col>
                    </Row>


                    <div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Experts
import { Button, Grid } from '@mui/material'
import React from 'react'
import { Card } from 'antd';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Courses = () => {
    return (
        <>
        <div style={{width:'80%', margin:'0 auto'}}>

        
            <article>
                <span style={{ color: "#FF6551" }}>COURSES</span>
                <h2 style={{ fontWeight: '700', fontSize: '40px' }}>Video in Live Action</h2>
                <p style={{ color: "#737373", fontSize: '14px', fontWeight: '400' }}>Problems trying to resolve the conflict between
                    the two major realms of Classical physics: Newtonian mechanics </p>
            </article>

            <Grid container spacing={2} style={{marginTop:'100px'}}>
                <Grid item lg={3} md={6} sm={12}>
                    <Card
                        hoverable
                        style={{
                            width: 240,
                            position:'relative'
                        }}
                        cover={<img  src={require('./images/product-1.png')} alt="example" />
                    
                    }
                    >
                        <span style={{padding:'8px', backgroundColor:"orange", position:'absolute', top:'20px', left:'20px' }}>Sale</span>

                        <div style={{position:'absolute', bottom:'50%', left:'30%',  transform: `translate(${-50}, ${-50})`, }}>
                        <FavoriteBorderIcon style={{marginRight:'10px', color:'white'}} />
                        <AddShoppingCartIcon  style={{marginRight:'10px', color:'white'}}/>
                        <VisibilityIcon  style={{marginRight:'10px', color:'white'}}/>
                        </div>
                        <span style={{color:'red',lineHeight:'20px'}}>2,769 online courses	</span>
                        <h5 style={{lineHeight:'28px'}}>Watch our Courses</h5>
                        <p style={{lineHeight:'28px'}}>We focus on ergonomics 
                            and meeting you....</p>
                            <div style={{display:'flex',alignItems:'center'}}>
                            <ExpandCircleDownIcon/> 
                            <span style={{lineHeight:'28px'}}>15 Sales</span>
                            </div>
                            <div style={{display:'flex',alignItems:'center'}}>
                            <h5 style={{lineHeight:'28px'}}>$16.48</h5>
                            
                            <h5 style={{lineHeight:'28px'}}>$6.48</h5>
                            </div>
                            <Button variant='outlined' color='warning' style={{borderRadius:'20px'}}>Learn More<ChevronRightIcon/></Button>
                            
                       
                    </Card>
                </Grid>
                <Grid item lg={3} md={6} sm={12}>
                    <Card
                        hoverable
                        style={{
                            width: 240,
                            position:'relative'
                        }}
                        cover={<img  src={require('./images/product-1.png')} alt="example" />
                    
                    }
                    >
                        <span style={{padding:'8px', backgroundColor:"orange", position:'absolute', top:'20px', left:'20px' }}>Sale</span>

                        <div style={{position:'absolute', bottom:'50%', left:'30%',  transform: `translate(${-50}, ${-50})`, }}>
                        <FavoriteBorderIcon style={{marginRight:'10px', color:'white'}} />
                        <AddShoppingCartIcon  style={{marginRight:'10px', color:'white'}}/>
                        <VisibilityIcon  style={{marginRight:'10px', color:'white'}}/>
                        </div>
                        <span style={{color:'red',lineHeight:'20px'}}>2,769 online courses	</span>
                        <h5 style={{lineHeight:'28px'}}>Watch our Courses</h5>
                        <p style={{lineHeight:'28px'}}>We focus on ergonomics 
                            and meeting you....</p>
                            <div style={{display:'flex',alignItems:'center'}}>
                            <ExpandCircleDownIcon/> 
                            <span style={{lineHeight:'28px'}}>15 Sales</span>
                            </div>
                            <div style={{display:'flex',alignItems:'center'}}>
                            <h5 style={{lineHeight:'28px'}}>$16.48</h5>
                            
                            <h5 style={{lineHeight:'28px'}}>$6.48</h5>
                            </div>
                            <Button variant='outlined' color='warning' style={{borderRadius:'20px'}}>Learn More<ChevronRightIcon/></Button>
                            
                       
                    </Card>
                </Grid>
                <Grid item lg={3} md={6} sm={12}>
                    <Card
                        hoverable
                        style={{
                            width: 240,
                            position:'relative'
                        }}
                        cover={<img  src={require('./images/product-1.png')} alt="example" />
                    
                    }
                    >
                        <span style={{padding:'8px', backgroundColor:"orange", position:'absolute', top:'20px', left:'20px' }}>Sale</span>

                        <div style={{position:'absolute', bottom:'50%', left:'30%',  transform: `translate(${-50}, ${-50})`, }}>
                        <FavoriteBorderIcon style={{marginRight:'10px', color:'white'}} />
                        <AddShoppingCartIcon  style={{marginRight:'10px', color:'white'}}/>
                        <VisibilityIcon  style={{marginRight:'10px', color:'white'}}/>
                        </div>
                        <span style={{color:'red',lineHeight:'20px'}}>2,769 online courses	</span>
                        <h5 style={{lineHeight:'28px'}}>Watch our Courses</h5>
                        <p style={{lineHeight:'28px'}}>We focus on ergonomics 
                            and meeting you....</p>
                            <div style={{display:'flex',alignItems:'center'}}>
                            <ExpandCircleDownIcon/> 
                            <span style={{lineHeight:'28px'}}>15 Sales</span>
                            </div>
                            <div style={{display:'flex',alignItems:'center'}}>
                            <h5 style={{lineHeight:'28px'}}>$16.48</h5>
                            
                            <h5 style={{lineHeight:'28px'}}>$6.48</h5>
                            </div>
                            <Button variant='outlined' color='warning' style={{borderRadius:'20px'}}>Learn More<ChevronRightIcon/></Button>
                            
                       
                    </Card>
                </Grid>
                <Grid item lg={3} md={6} sm={12}>
                    <Card
                        hoverable
                        style={{
                            width: 240,
                            position:'relative'
                        }}
                        cover={<img  src={require('./images/product-1.png')} alt="example" />
                    
                    }
                    >
                        <span style={{padding:'8px', backgroundColor:"orange", position:'absolute', top:'20px', left:'20px' }}>Sale</span>

                        <div style={{position:'absolute', bottom:'50%', left:'30%',  transform: `translate(${-50}, ${-50})`, }}>
                        <FavoriteBorderIcon style={{marginRight:'10px', color:'white'}} />
                        <AddShoppingCartIcon  style={{marginRight:'10px', color:'white'}}/>
                        <VisibilityIcon  style={{marginRight:'10px', color:'white'}}/>
                        </div>
                        <span style={{color:'red',lineHeight:'20px'}}>2,769 online courses	</span>
                        <h5 style={{lineHeight:'28px'}}>Watch our Courses</h5>
                        <p style={{lineHeight:'28px'}}>We focus on ergonomics 
                            and meeting you....</p>
                            <div style={{display:'flex',alignItems:'center'}}>
                            <ExpandCircleDownIcon/> 
                            <span style={{lineHeight:'28px'}}>15 Sales</span>
                            </div>
                            <div style={{display:'flex',alignItems:'center'}}>
                            <h5 style={{lineHeight:'28px'}}>$16.48</h5>
                            
                            <h5 style={{lineHeight:'28px'}}>$6.48</h5>
                            </div>
                            <Button variant='outlined' color='warning' style={{borderRadius:'20px'}}>Learn More<ChevronRightIcon/></Button>
                            
                       
                    </Card>
                </Grid>

            </Grid>
            </div>
        </>
    )
}

export default Courses
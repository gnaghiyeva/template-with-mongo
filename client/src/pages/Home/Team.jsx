import React, { useEffect, useState } from 'react'
import { deleteEmployeeByID, getAllEmployees} from '../../api/httprequests'
import { Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { Card, Col, Row } from 'antd'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Swal from "sweetalert2";
const Team = () => {
    const [employees, setEmployees] = useState([])
    useEffect(() => {
        getAllEmployees().then((res) => {
            setEmployees(res.data)
        })
    }, [])
    return (
        <>
            <section style={{ width: '80%', margin: '100px auto' }}>
                <article style={{ width: '40%' }}>
                    <span style={{color:'#FF6551', fontSize:'15px'}}> Team</span> <br/>
                    <h2>Video in Live Action</h2><br/>
                    <p style={{color:'#737373'}}>Problems trying to resolve the conflict between
                        the two major realms of Classical physics: Newtonian mechanics  </p>
                </article>

                <div>

                    <Row container spacing={2} style={{ marginTop: '100px', display:'flex',justifyContent:'center', gap:'30px' }}>
                        {employees && employees.map((employee) => {
                            return (
                                <Col key={employee._id} >
                                    <Card
                                        hoverable
                                        style={{
                                            width: 240,
                                            height:450
                                        }}
                                        cover={<img src={employee.imageURL} alt="example" />

                                        }
                                    >
                                        
                                            <Link style={{color:'black'}}><h3 style={{textAlign:'center'}}>{employee.fullname}</h3></Link>
                                            <Link style={{color:'#737373'}}><h4 style={{textAlign:'center'}}>{employee.occupation}</h4></Link>

                                            <Typography style={{textAlign:'center'}}>
                                            <a href={employee.linkF}><FacebookIcon style={{color:'#FF6551'}}/></a>
                                            <a href={employee.linkI}><InstagramIcon style={{color:'#FF6551'}}/></a>
                                            <a href={employee.linkT}><TwitterIcon style={{color:'#FF6551'}}/></a>
                                            </Typography>

                                            <div style={{display:'flex', justifyContent:'space-around'}}>
                                            <Button variant='contained' color='primary' onClick={()=>{
                                                Swal.fire({
                                                    title: 'Are you sure?',
                                                    text: "You won't be able to revert this!",
                                                    icon: 'warning',
                                                    showCancelButton: true,
                                                    confirmButtonColor: '#3085d6',
                                                    cancelButtonColor: '#d33',
                                                    confirmButtonText: 'Yes, delete it!'
                                                  }).then((result) => {
                                                    if (result.isConfirmed) {
                                                        deleteEmployeeByID(employee._id).then((res)=>{
                                                            Swal.fire(
                                                              'Deleted!',
                                                              'Your file has been deleted.',
                                                              'success'
                                                            )
                                                        }) 
                                                        setEmployees(
                                                       employees.filter((x)=>x._id!==employee._id)
                                                )
                                                    }
                                                  })
                                                
                                               
                                            }}>Delete</Button>
                                            <Button variant='contained' color='error'><Link to={`/edit-employee/${employee._id}`}>Edit</Link></Button>
                                            </div>
                                    </Card>
                                </Col>

                            )

                        })}





                    </Row>
                </div>
            </section>
        </>
    )
}

export default Team
import React, { useEffect, useState } from 'react'
import { getAllEmployees} from '../../api/httprequests'
import { Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { Card } from 'antd'

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
                <article>
                    <span>Team</span>
                    <h2>Video in Live Action</h2>
                    <p>Problems trying to resolve the conflict between
                        the two major realms of Classical physics: Newtonian mechanics  </p>
                </article>

                <div>

                    <Grid container spacing={2} style={{ marginTop: '100px' }}>
                        {employees && employees.map((employee) => {
                            return (
                                <Grid key={employee._id} item lg={3} md={6} sm={12}>
                                    <Card
                                        hoverable
                                        style={{
                                            width: 240,
                                        }}
                                        cover={<img src={employee.imageURL} alt="example" />

                                        }
                                    >
                                        <Typography>
                                            <Link>{employee.fullname}</Link>
                                            <Typography> {employee.linkF}</Typography>
                                            <Typography> {employee.linkI}</Typography>
                                            <Typography> {employee.linkT}</Typography>
                                        </Typography>
                                    </Card>
                                </Grid>

                            )

                        })}





                    </Grid>
                </div>
            </section>
        </>
    )
}

export default Team
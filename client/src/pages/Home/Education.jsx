import { Button, TextField } from '@mui/material'
import React from 'react'
import { useFormik } from 'formik';
import { EducationValidation } from '../../validation/EducationValidation';
const Education = () => {
  const handleSubmit=(values,actions)=>{
    actions.resetForm()
  }
  const formik = useFormik({
    initialValues: {
      email:''
    },

    onSubmit:handleSubmit,
    validationSchema:EducationValidation

  })
  return (
    <>
    <section style={{ width: '80%', margin: '100px auto', textAlign:'center' }}>
        <article style={{}}>
            <h6 style={{color:'#FF6551', fontSize:'14px', lineHeight:'24px'}}>Newsletter</h6><br/>
            <h2 style={{fontSize:'40px', lineHeight:'50px'}}>Get Quality Education</h2><br/>
            <p style={{fontSize:'14px', lineHeight:'20px',color:'#737373'}}>Problems trying to resolve the conflict between <br/>
               the two major realms of Classical physics: Newtonian mechanics </p>
        </article>
            <br/>
        <form style={{display:'flex',textAlign:'center', width:'50%',  margin:'0 auto'}} onSubmit={formik.handleSubmit}>
        
        <TextField onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} name='email' style={{width:'90%'}} id="outlined-basic" label="email" placeholder='Your Email' variant="outlined" />
        {(formik.errors.email && formik.touched.email) && <p style={{ color: 'red' }}>{formik.errors.email}</p>}
        <Button type='submit' variant='contained' color='warning'>Subscribe</Button>
        
        </form>
    </section>
    </>
  )
}

export default Education
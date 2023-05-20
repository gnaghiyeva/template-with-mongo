import React, { useEffect, useState } from 'react'
import {useEmployeeContext} from "../../context/EmployeeContext"
import { useNavigate, useParams } from 'react-router-dom';
import { editEmployee, getEmployeeByID } from '../../api/httprequests';
import { useFormik } from 'formik';
import { Button, TextField, Typography } from '@mui/material';

const EditEmployee = () => {
    const[employees,setEmployees] = useEmployeeContext();
    console.log('artists context: ',employees);
    const {id} = useParams();
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({});
    const[loading,setLoading] = useState(true);

    useEffect(() => {
        getEmployeeByID(id).then((res) => {
          setEmployee(res);
          formik.values.fullname = res.fullname;
          formik.values.occupation = res.occupation;
          formik.values.imageURL = res.imageURL;
          formik.values.linkF = res.linkF;
          formik.values.linkI = res.linkI;
          formik.values.linkT = res.linkT;
          setLoading(false);
        });
      }, [id]);
      const handleEdit = async(values, actions) => {
        // artist.find((x)=>x._id===id)
        setEmployees(values);
        await editEmployee(id,values);
        navigate('/');
        actions.resetForm();
      };
      const formik = useFormik({
        initialValues: {
          fullname: employee.fullname,
          occupation: employee.occupation,
          imageURL: employee.imageURL,
          linkF:employee.linkF,
          linkI: employee.linkI,
          linkT:employee.linkT
        },
        onSubmit: handleEdit,
      });
  return (
    <>
    <Typography
      style={{ textAlign: "center", marginTop: "40px", fontSize: "30px" }}
    >
      {employee.fullname} Edit
    </Typography>
    { loading ? <div>loading...</div> : <form style={{width:'60%',margin:'0 auto'}} onSubmit={formik.handleSubmit}>
      <div style={{display:'flex',justifyContent:'center'}}>
      <TextField
        type="text"
        placeholder="artist name"
        name="fullname"
        value={formik.values.fullname}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
       <TextField
        type="text"
        placeholder="artist occupation"
        name="occupation"
        value={formik.values.occupation}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
       <TextField
        type="text"
        placeholder="artist image"
        name="imageURL"
        value={formik.values.imageURL}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
       <TextField
        type="text"
        placeholder="artist image"
        name="linkF"
        value={formik.values.linkF}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
       <TextField
        type="text"
        placeholder="artist image"
        name="linkI"
        value={formik.values.linkI}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
       <TextField
        type="text"
        placeholder="artist linkT"
        name="linkT"
        value={formik.values.linkT}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      </div>
      <Button style={{margin:'0 auto',display:'block',marginTop:'20px'}} variant="contained" color="primary" type="submit">Edit</Button>
    </form> }
  </>
  )
}

export default EditEmployee



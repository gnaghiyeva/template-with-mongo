import React from 'react'
import { EmployeeValidation } from '../../validation/EmployeeValidation';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useFormik } from 'formik';
import { postEmployee } from '../../api/httprequests';

const AddEmployee = () => {
    const navigate = useNavigate();
    const handleSubmit = async (values, actions) => {
        await postEmployee(values);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${values.fullname} posted successfully!`,
            showConfirmButton: false,
            timer: 1500
        })
        actions.resetForm();
        navigate('/');
    };
    const formik = useFormik({
        initialValues: {
            fullname: "",
            occupation: "",
            imageURL: "",
            linkF: "",
            linkI: "",
            linkT: "",
        },
        validationSchema: EmployeeValidation,
        onSubmit: handleSubmit,
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullname}
                placeholder="enter fullname"
                type="text"
                name="fullname"
            />
            {formik.errors.fullname && formik.touched.fullname && (
                <span>{formik.errors.fullname}</span>
            )}
            <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.occupation}
                placeholder="enter occupation"
                type="text"
                name="occupation"
            />
            {formik.errors.occupation && formik.touched.occupation && (
                <span>{formik.errors.occupation}</span>
            )}

            <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.imageURL}
                placeholder="enter imageURL"
                type="text"
                name="imageURL"
            />
             <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.linkF}
                placeholder="enter linkF"
                type="text"
                name="linkF"
            />
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.linkI}
                placeholder="enter linkI"
                type="text"
                name="linkI"
            />
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.linkT}
                placeholder="enter linkT"
                type="text"
                name="linkT"
            />
            <button
                disabled={Object.keys(formik.errors).length !== 0 ? true : false}
                type="submit"
            >
                Add New Employee
            </button>
        </form>
    )
}

export default AddEmployee
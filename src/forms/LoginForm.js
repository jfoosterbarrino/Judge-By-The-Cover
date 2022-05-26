import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Button from '../components/Button';
import TextField from '@mui/material/TextField';

const FormSchema=Yup.object(
    {
        email: Yup.string().email("Please check your email. Must be valid format.").required(),
        password: Yup.string().required()
    }
)

const initialValues = {
    email:'',
    password:''
}

const handleSubmit=(values)=>{
    console.log(values)
}

export default function LoginForm(){

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema : FormSchema,
        onSubmit:(values)=>{handleSubmit(values)}
    })

    return(
        <form onSubmit={formik.handleSubmit}>
            <TextField
                id = 'email'
                name = 'email'
                fullWidth
                sx = {{mb:2,mt:2, width:"50%"}}
                color = "info"
                placeholder = "Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error = {formik.touched.email && Boolean(formik.errors.email)}
                helperText = {formik.touched.email && formik.errors.email}
            />
            <br/>

            <TextField
                id = 'password'
                name = 'password'
                type = "password"
                fullWidth
                sx = {{mb:2, mt:2, width:"50%"}}
                color = "info"
                placeholder = "Password"
                value = {formik.values.password}
                onChange = {formik.handleChange}
                error = {formik.touched.password && Boolean(formik.errors.password)}
                helperText = {formik.touched.password && formik.errors.password}
            />
            <br/>

            <Button type="submit " color = "info">Login</Button>
        </form>
    )
}
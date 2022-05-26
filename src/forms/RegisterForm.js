import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Button from '../components/Button';
import TextField from '@mui/material/TextField';


const ValidationSchema = Yup.object(
    {
        firstName: Yup.string().required('First Name is Required'),
        lastName: Yup.string().required('Last Name is Required'),
        email: Yup.string().email("Please check your email. Must be valid format.").required('Email is Required'),
        password: Yup.string().required('Password is Required'),
        confirmPassword: Yup.string().required('Password confirmation is Required').oneOf([Yup.ref('password')], 'Your passwords do not match')

    }
)



export default function RegisterForm({user ={id:1, firstName:"Jalen", lastName:"Fooster", email:"j@f.com", password:"password",confirmPassword:"password"}}){

    const initialValues ={
        firstName:user?.firstName ?? "",
        lastName:user?.lastName ?? "",
        email:user?.email ?? "",
        password:user?.password ?? "",
        confirmPassword:user?.confirmPassword ?? ""
    }

    const handleSubmit=(values, resetForm) => {
        if(user){
            console.log("Updating...")
        }else{
            console.log("Registering...")
        }
        console.log(values)
        resetForm(initialValues)
    }


    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: ValidationSchema,
        onSubmit:(values, {resetForm}) => {handleSubmit(values, resetForm)},
        enableReinitialize : true
    })

    return(
        <form onSubmit={formik.handleSubmit}>
            <TextField
                id = "firstName"
                name="firstName"
                fullWidth
                sx={{mb:2,mt:2,width:"50%"}}
                color="success"
                placeholder="First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error ={formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText = {formik.touched.firstName && formik.errors.firstName}
            />
<br/>
            <TextField
                id = "lastName"
                name="lastName"
                fullWidth
                sx={{mb:2,mt:2,width:"50%"}}
                color="success"
                placeholder="Last Name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error ={formik.touched.lastName && Boolean(formik.errors.lastName)}
                helperText = {formik.touched.lastName && formik.errors.lastName}
            />
<br/>
            <TextField
                id = 'email'
                name = 'email'
                fullWidth
                sx = {{mb:2,mt:2, width:"50%"}}
                color="success"
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
                fullWidth
                sx = {{mb:2, mt:2, width:"50%"}}
                color="success"
                placeholder = "Password"
                value = {formik.values.password}
                onChange = {formik.handleChange}
                error = {formik.touched.password && Boolean(formik.errors.password)}
                helperText = {formik.touched.password && formik.errors.password}
            />
<br/>
            <TextField
                id = 'confirmPassword'
                name = 'confirmPassword'
                fullWidth
                sx = {{mb:2, mt:2, width:"50%"}}
                color="success"
                placeholder = "Confirm Password"
                value = {formik.values.confirmPassword}
                onChange = {formik.handleChange}
                error = {formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                helperText = {formik.touched.confirmPassword && formik.errors.confirmPassword}
            />
<br/>
            <Button type="submit" color = "success">{user ? "Edit Profile" : "Create New Account"}</Button>
        </form>
    )
}
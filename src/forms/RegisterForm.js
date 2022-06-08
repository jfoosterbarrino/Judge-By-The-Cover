import React, {useState, useContext} from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Button from '../components/Button';
import TextField from '@mui/material/TextField';
import useCreateUser from '../hooks/useCreateUser';
import useEditUser from '../hooks/useEditUser';
import {AppContext} from '../context/AppContext';


const ValidationSchema = Yup.object(
    {
        first_name: Yup.string().required('First Name is Required'),
        last_name: Yup.string().required('Last Name is Required'),
        email: Yup.string().email("Please check your email. Must be valid format.").required('Email is Required'),
        password: Yup.string().required('Password is Required'),
        confirmPassword: Yup.string().required('Password confirmation is Required').oneOf([Yup.ref('password')], 'Your passwords do not match')

    }
)



export default function RegisterForm(){
    const {user} = useContext(AppContext)

    const [newUser, setNewUser] = useState({})
    const [editUser, setEditUser] = useState({})

    useCreateUser(newUser)
    useEditUser(editUser)

    const initialValues ={
        first_name:user?.first_name ?? "",
        last_name:user?.last_name ?? "",
        email:user?.email ?? "",
        password:user?.password ?? "",
        confirmPassword:user?.confirmPassword ?? ""
    }

    const handleSubmit=(values, resetForm) => {
        if(user){
            setEditUser(values)
        }else{
            setNewUser(values)
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
                id = "first_name"
                name="first_name"
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
                id = "last_name"
                name="last_name"
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
                type = 'password'
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
                type = 'password'
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
import React from 'react';
import EditButton from '@mui/material/Button';

export default function Button({children, variant, color, ...props}){

    return(
        <EditButton variant={variant ?? "contained"} color={color ?? "secondary"} {...props}>{children}</EditButton>
    )
}
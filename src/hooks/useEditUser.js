import {useEffect, useContext} from 'react';
import apiUser from '../api/apiUser';
import {CancelToken} from 'apisauce';
import  {AppContext} from '../context/AppContext';

export default function useEditUser(newInfo){
    const {user, setUser} = useContext(AppContext)

    useEffect(()=>{
        const source =CancelToken.source();
        const editUser = async()=>{
            const response = await apiUser.putUser(user.token,newInfo, source.token)
            setUser(response)
        }
        editUser()
        return ()=>{source.cancel()}
    },
    [newInfo]
    )
}
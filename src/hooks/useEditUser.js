import {useEffect, useContext} from 'react';
import apiUser from '../api/apiUser';
import {CancelToken} from 'apisauce';
import  {AppContext} from '../context/AppContext';

export default function useEditUser(userInfo){
    const {user, setUser} = useContext(AppContext)

    useEffect(()=>{
        const source =CancelToken.source();
        const editUser = async()=>{
            const response = await apiUser.putUser(user.token,userInfo, source.token)
            if (response){
                setUser(response)
                console.log(`User: ${userInfo.first_name} ${userInfo.last_name} Edited`)
            }else if(response === false && response !== undefined){
                console.log(`Please reauthorize you account`)
            }
            
        }
        editUser()
        return ()=>{source.cancel()}
    },
    [userInfo]
    )
}
import {useEffect, useContext} from 'react';
import apiUser from '../api/apiUser';
import {CancelToken} from 'apisauce';
import {AppContext} from '../context/AppContext';

export default function useCreateUser(userData){

    useEffect(()=>{

            const source = CancelToken.source()
            const createUser = async()=>{
                const response = await apiUser.postUser(userData, source.token);
                console.log(response);
                if (response){
                    console.log(`User: ${userData.first_name} ${userData.last_name} Created`)
                }else if(response === false && response !== undefined){
                    console.log(`Please reauthorize you account`)
                }
            }
            createUser()
            return ()=>{source.cancel()}
            
        },
        [userData]
    )
}
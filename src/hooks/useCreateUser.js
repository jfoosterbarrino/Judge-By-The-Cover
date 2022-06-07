import {useEffect} from 'react';
import apiUser from '../api/apiUser';
import {CancelToken} from 'apisauce';

export default function useCreateUser(userData){

    useEffect(()=>{

            const source = CancelToken.source()
            const createUser = async()=>{
                const response = await apiUser.postUser(userData, source.token);
                if (response){
                    console.log(`User: ${userData.firstName} ${userData.lastName} Created`)
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
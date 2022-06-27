import React, {useState} from 'react'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const subjects =[{id:1,name:"All"}, {id:2,name:"Self Help"}, {id:3,name:"Science"}, {id:4,name:"Marriage Advice"}, {id:5,name:"Entertainment"}, {id:6,name:"Programming"}, {id:7,name:"Cooking"}]




export default function SubjectBar(handleClick=()=>{}) {

    const  [actSubj, setActSubj] = useState({});

    const handleActSubj =(subj)=>{
        if(actSubj ===subj){
            setActSubj({})
        }else{
            setActSubj(subj)
        }
    }
    
  return (
    <Stack direction="row" spacing={1} sx={{display:"flex", justifyContent: "center"}}>
      {subjects?.map((subj)=>(
      subj === actSubj ? 
      <Chip  
      key ={subj.id} 
      color="success" 
      label={subj?.name} 
      onClick={()=>{handleActSubj(subj); handleClick()}} /> 
      : 
      <Chip 
      variant ="outlined" 
      color ="success" 
      key ={subj.id} 
      label={subj.name} 
      onClick={()=>{handleActSubj(subj); handleClick()}} />
      ))}

    </Stack>
  );
}
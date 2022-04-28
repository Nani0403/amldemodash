import React from 'react'
import { Stack , Alert} from '@mui/material';
function Alerts(props) {
  return (
   

    props.alert && 
    <Stack spacing={2}>
   <Alert variant="outlined" severity="error" >
      {props.alert.type} :  {props.alert.msg}
    </Alert>
   </Stack>
      
  )
}
        
     

export default Alerts

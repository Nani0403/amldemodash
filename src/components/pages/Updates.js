import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "./updates.css";
import "../Navigators/luffy.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function Updates() {

  return (  
    <div style={{ alignItems:'center' ,height: "100%",   width: "1850px",marginTop: '3%'}} >
  <h1>Updates</h1>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>
   
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>

          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
 
       </Item>
        </Grid>
        <Grid item xs={8}>
          <Item></Item>
        </Grid>
      </Grid>
    </Box>
 
</div>
  );
}
export default Updates;



import React, {useState} from 'react'
import {Container, Paper,TextField , FilledInput ,Button, Typography ,Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
const Info = (props)=>{
    // const [progress, setProgress]  = useState(props.progress)

    const classes = useStyles();
    return(
        <Container fixed>
            
            <Typography variant="h4" style={{color:"#007bfc", paddingBottom:"20px",}} >Fill Information</Typography>
           
            {/* <Grid container spacing={1}>
                     <Grid item xs={12} sm={12} md={6} lg={6}> */}
                     <TextField variant="outlined" required type="text" autoFocus 
                           className= {classes.input1}
                           color="secondary"

                            onChange={(event)=>props.addName(event.target.value)}
                                placeholder="your name..."
                        />
                     {/* </Grid>
                     <Grid item xs={12} sm={12} md={6} lg={6}> */}
                     <TextField variant="outlined" required type="text" 
                            className= {classes.input1}
                            onChange={(event)=>props.addPhone(event.target.value)}
                                color="secondary"
                                placeholder="phone..."
                        />
                     {/* </Grid>
                     <Grid item xs={12} sm={12} md={6} lg={6}> */}
                     <TextField  variant="outlined" required type="email" 
                            className= {classes.input1}
                            onChange={(event)=>props.addEmail(event.target.value)}
                           color="secondary"
                                placeholder="email..."
                        />
                     {/* </Grid>
                </Grid>      */}
        </Container>
    )
}

export default Info


const useStyles = makeStyles({

    input1: {
        width: '50vw',
        minWidth:"100%",
        textAlign:"center",
        backgroundColor:'lightgrey',
        // borderRadius:"15px",
        marginBottom:"10px"
    },
  
  })

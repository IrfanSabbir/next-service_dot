import React , {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Button, Grid} from '@material-ui/core'
import Navigation  from './Navigation/Navigations'


const useStyles = makeStyles({
    input: {
        marginTop:"20px",
        height:"80%",
        // width: '70%',

        // paddingTop:"5px"
    }
  })

   
const Toolbar = (props)=>{
    const classes = useStyles();
    
    return (
        <div >
        

                <Navigation /> 

        </div>
      
    )
}



export default Toolbar
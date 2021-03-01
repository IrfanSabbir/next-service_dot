import React from 'react'
import { Grid, Container, Paper, Button , Typography, Modal} from '@material-ui/core'

import Router from 'next/router'


const Top = ()=>{
    return(
        <div>
            
            <Container>
                
            <Grid container  style={{marginTop:"50px"}}>
                <Grid item xs ={12} sm ={6} md={6} lg={6}>
                    <div className="Left_Top_Grid">
                          <Typography variant="h2" style={{ color:"#007bff"}}>Service<b style={{ color:"#031b4e"}}>Dot</b></Typography><br/>
 
                         <Typography variant="h3" style={{color:"#007bff", fontWeight:"bolder" }}>OUR CLEANING SERVICES
                         AND OUR CONTINUED COMMITMENT TO YOU</Typography><br/>
                         <p style={{color:"#031b4e"}}>For over 35 years, customers have welcomed the trusted cleaning professionals from locally owned and operated Molly Maid businesses into their homes.</p><br/><br/>
                         <Button variant="contained" onClick={()=>Router.push("/quote")} style={{backgroundColor:"#031b4e", width:"180px", height:"70px", color:"#007bfc", fontSize:"17px", fontWeight:"bold" , marginRight:"20px", marginBottom:"20px" }}>Get Quote</Button>
                         {/* <Button variant="outlined" style={{border:"2px solid #325FFF", height:"70px", color:"black", fontSize:"17px" ,fontWeight:"bold" , marginBottom:"20px" }}>Call (8 400 324 123)</Button> */}
                         
                                                

                    </div>

                </Grid>
                <Grid item xs={12} sm ={6} md={6} lg={6} style={{textAlign:"right"}}>
                <img className="TopPersonImage" src="./static/file/top_image.png" width="70%"  alt="Logo"/>

                </Grid>
            </Grid>
            </Container>
        </div>
    )
}

export default Top
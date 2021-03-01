import React from 'react'
import {Container, Grid, Typography, ListItem, Button, ListItemIcon, ListItemText} from '@material-ui/core'
import Router from 'next/router'
const About_Us = ()=>{
    return(
        <div>
           
        <Container style={{marginTop:"30px"}}>
            {/* <Typography variant="h3" style={{fontWeight:"bold",paddingLeft:"20px"}}>About <span style={{color:"#0051AA"}}>us</span></Typography><br/> */}
            <Typography variant="h2" style={{ color:"#007bff"}}>About Service<b style={{ color:"#031b4e"}}>Dot</b></Typography>

            <Grid container spacing={3} justify="center" style={{textAlign:"center"}}>
                <Grid item xs={12} sm={6} md ={4} lg={4} >
                 <Typography variant="h1" style={{color:"#0051AA", fontWeight:"bold"}}>15</Typography><br/>
                 <Typography variant="h5"><span style={{fontWeight:"bold"}}>YEARS</span> IN CLEANING BUSINESS</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md ={4} lg={4} >
                <Typography variant="h1" style={{color:"#0051AA" ,fontWeight:"bold"}}>30000</Typography><br/>
                 <Typography variant="h5">Cleaning<br/> <span style={{fontWeight:"bold"}}>SERVICE</span> Provided</Typography>
                   
                </Grid>

                <Grid item xs={12} sm={6} md ={4} lg={4} >
                <Typography variant="h1" style={{color:"#0051AA", fontWeight:"bold"}}>15</Typography><br/>
                 <Typography variant="h5"><span style={{fontWeight:"bold"}}>Country</span> Takes our <br/>cleaning service</Typography>
                   
                </Grid>

            </Grid><br/><br/>
            <div style={{textAlign:"left"}}>
            <Typography  variant="h4" style={{fontWeight:"bold"}}> <span style={{color:"#0051AA"}}>Steps</span> to have us to solve </Typography><br/>
            <Typography  variant="h4" style={{fontWeight:"bold"}}>your <span style={{color:"#0051AA"}}>Challenges</span></Typography><br/>
            </div>
           {/* </Container>  */}
           {/* <div style={{position:"absolute", width:"100%", marginTop:"-130px"}}>
                <img src="./static/assets/about pattern 2.png" width="70%" alt="pattern" style={{marginRight:"30%",  height:"25vw"}}/>
                <img src="./static/assets/about pattern 1.png" width="100%"alt="patter" style={{ height:"30vw"}}/>

            </div> */}
            {/* <Container> */}
            <Grid container justify="center" spacing={3} >
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    
                    <img src="./static/file/cleaning1.png" width="100%" alt="wipper" style={{borderRadius:"50%", height:"380px" }}/>
                </Grid>
                <Grid  item xs={12} sm={8} md={8} lg={8} >
                    <ListItem style={{textAlign:"center"}}>
                        <ListItemIcon><img src="./static/assets/mdi.png" alt="img"/></ListItemIcon>
                        <ListItemText><Typography variant="h5" style={{fontWeight:"bold"}}>  Choose a cleaning service.</Typography></ListItemText>
                    </ListItem><br/><br/>
                    <ListItem style={{textAlign:"center"}}>
                        <ListItemIcon><img src="./static/assets/phone-call.png" alt="img"/></ListItemIcon>
                        <ListItemText><Typography variant="h5" style={{fontWeight:"bold"}}> Get Quote or Call us, tell us the number of rooms and requirements.</Typography></ListItemText>
                    </ListItem><br/><br/>
                    <ListItem style={{textAlign:"center"}}>
                        <ListItemIcon><img src="./static/assets/carbon.png" alt="img"/></ListItemIcon>
                        <ListItemText><Typography variant="h5" style={{fontWeight:"bold"}}>Enjoy your day, while we clean.</Typography></ListItemText>
                    </ListItem><br/><br/>
                    <p >Enjoy your day, while we clean based on your requirements.</p><br/>
                    <Button variant="contained" onClick={()=>Router.push("/quote")} style={{backgroundColor:"#031b4e", width:"180px", height:"70px", color:"#007bfc", fontSize:"17px", fontWeight:"bold" , marginRight:"2vw", marginBottom:"20px" }}>Get a Quote</Button>
                         <Button variant="outlined" style={{border:"2px solid #031b4e",  height:"70px", color:"031b4e", fontSize:"17px" ,fontWeight:"bold" , marginBottom:"20px" }}>Call (8 400 324 123)</Button>
                         
                </Grid>
            </Grid>

        </Container>
        
      </div>
    )
}

export default About_Us
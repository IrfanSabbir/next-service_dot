import React from 'react'

import { Grid, Container, Button , Typography,  ListItem, ListItemIcon, li} from '@material-ui/core'
import Router from 'next/router'

import Layout from '../components/Layout/LandingPageLayout'


import Certification from '../components/mainpage/Certification'





const  Team = ()=>{
    return(
        <Layout>
        <div style={{marginTop:"50px"}}>
   
         <Container fixed  style={{position:"relative"}}>
             {/* <img  src={LogoTest} width="30%"/> */}
              {/* <p style={{ color:"#23548B"}}>  <img src={Logo2} style={{width:"100px", paddingLeft:"50px"}} alt="Logo"/> <br/>Rengjøringssentralen</p> */}
            <Grid container>
        

                <Grid item xs ={12} sm ={12} md={6} lg={7}>
                    <div style={{textAlign:"left"}}>
                    
                    <Typography variant="h2" style={{ color:"#007bff"}}>About Service<b style={{ color:"#031b4e"}}>Dot</b></Typography>

                        <p>
                        Our cleaning services include Corporate Cleaning services in Dhaka Bangladesh, Industrial Cleaning services in Dhaka Bangladesh, Commercial Cleaning services in Dhaka Bangladesh, Residential Cleaning services in Dhaka Bangladesh, Exterior & interior glass cleaning services in Dhaka Bangladesh, Floor scrubbing services in Dhaka Bangladesh, Floor stripping, waxing and buffing services in Dhaka Bangladesh, Carpet, chair, sofa shampooing and cleaning services in Dhaka Bangladesh, All premises master cleaning services in Dhaka Bangladesh
<br/><br/>
We at White Window Ltd believe that the productivity and the quality of our surrounding; we strive to provide excellent services to satisfy the challenging need of our customers. Our customers are an evidence for our achievement.


                        </p><br/><br/><br/><br/>
                        <div style={{width:"100%", textAlign:"center"}}>

                        <Button variant="contained" onClick={()=>Router.push("/quote")} style={{backgroundColor:"#031b4e", width:"140", height:"60px", color:"#007bfc", fontSize:"14px", fontWeight:"bold" , marginRight:"20px", marginBottom:"20px" }}>Get a Quote</Button>
                    <Button variant="outlined" style={{border:"2px solid #031b4e",  height:"60px", color:"#031b4e", fontSize:"14px" ,fontWeight:"bold" , marginBottom:"20px" }}>Call 01625-00</Button>
                        </div>
                            
                    
                    </div>

                </Grid>
                <Grid item xs ={12} sm ={12} md={6} lg={5} style={{textAlign:"right"}}>
                <img  src="./static/file/team.png" width="70%"  alt="Image"/><br/><br/>
                    
                </Grid>
            
            </Grid>
        </Container>
        <div style={{ height:"auto", position:"relative" , backgroundColor:"lightgray",marginTop:"50px"}}><br/>
                
                <Typography variant="h5" style={{fontWeight:"bold" ,color:"#090765",textAlign:"center",}}>Our Team</Typography>
            <Container fixed  style={{marginTop:"50px"}}>
                <Grid container justify="center" spacing={3}>
                    <Grid item xs ={6} sm ={4} md={3} lg={2}>
                        <img src="./static/file/m3.png" alt="jan" width="70%" style={{borderRadius:"50%", height:"120px"}}/><br/>
                        <h4 style={{color:"#090765"}}><b>Emmaline</b></h4>
                    </Grid>
                    <Grid item xs ={6} sm ={4} md={3} lg={2}>
                        <img src="./static/file/m5.jpg" alt="Lovorka" width="65%"  style={{borderRadius:"50%", height:"120px"}}/><br/>
                        <h4 style={{color:"#090765"}}><b>Rymer</b></h4>
                    </Grid><Grid item xs ={6} sm ={4} md={3} lg={2}>
                        <img src="./static/file/m6.jpg" alt="Alice" width="65%" style={{borderRadius:"50%", height:"120px"}}/><br/>
                        <h4 style={{color:"#090765"}}><b>Feltner</b></h4>
                    </Grid><Grid item xs ={6} sm ={4} md={3} lg={2}>
                        <img src="./static/file/top_image.png" alt="Elle" width="70%"  style={{borderRadius:"50%", height:"120px"}}/><br/>
                        <h4 style={{color:"#090765"}}><b>Zahn</b></h4>
                    </Grid><Grid item xs ={6} sm ={4} md={3} lg={2}>
                        <img src="./static/file/m1.png" alt="Monica" width="70%"  style={{borderRadius:"50%", height:"120px"}}/><br/>
                        <h4 style={{color:"#090765"}}><b>Shery Piel</b></h4>
                    </Grid>

                </Grid>
            </Container>

        </div>
             
            <div><Certification/></div>

           
        <Container fixed style={{marginTop:"60px", position:"relative"}}>
            {/* <Typography variant="h3" style={{fontWeight:"bold",marginTop:"60px"}}>About <span style={{color:"#0051AA"}}>us</span></Typography><br/> */}
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
        </Container>
    </div>
    </Layout> 
    )
}

export default Team
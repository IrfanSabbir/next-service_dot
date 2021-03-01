import React from 'react'

import { Grid, Container, Button , Typography,  ListItem, ListItemIcon, li} from '@material-ui/core'
import Router from 'next/router'

const Office = ()=>{
    return(
        <Container fixed >
       <div id="office" style={{paddingTop:"30px"}}></div>
       
        <Grid container >
            <Grid item xs ={12} sm ={12} md={7} lg={8}>
                <div style={{textAlign:"left"}}>
                
                     <Typography style={{ color:"#007bfc", fontSize:"40px", fontWeight:"bold"}}>Office cleaning</Typography><br/><br/>

                    <p>
                    How you take care of your building tells your customers how you’ll take care of them. Give them a good first impression to make future negotiations much easier.<br/><br/>
                    Eliminate dust, dirt, unpleasant odors and more from your office building with office cleaning services from ServiceMaster Clean. A fresh and pristine office emphasizes professionalism and creates a healthy work atmosphere for your employees. We'll work with you to develop a customized cleaning program for your office that meets your cleaning needs.


                   </p><br/><br/>
                     {/* <Button variant="contained" style={{backgroundColor:"#325FFF", width:"140", height:"60px", color:"white", fontSize:"14px", fontWeight:"bold" , marginRight:"20px", marginBottom:"20px" }}>Get a Quote</Button>
                     <Button variant="outlined" style={{border:"2px solid #325FFF", width:"150", height:"60px", color:"black", fontSize:"14px" ,fontWeight:"bold" , marginBottom:"20px" }}>Call us</Button>
                      */}
                    <div style={{width:"100%", textAlign:"center"}}>
                    <Button variant="contained" onClick={()=>Router.push("/quote")} style={{backgroundColor:"#031b4e", width:"140", height:"60px", color:"#007bfc", fontSize:"14px", fontWeight:"bold" , marginRight:"20px", marginBottom:"20px" }}>Get a Quote</Button>
                <Button variant="outlined" style={{border:"2px solid #031b4e",  height:"60px", color:"#031b4e", fontSize:"14px" ,fontWeight:"bold" , marginBottom:"20px" }}>Call 01625-00</Button>
                </div><br/>                  
              
                <ListItem style={{textAlign:"left"}}>
                        <ListItemIcon><img src="/static/assets/Ellipse 65.png" alt="img"/></ListItemIcon>
                        <Typography variant="h6" >Cleaning and putting away the dishes</Typography>
                    </ListItem>
                    <ListItem style={{textAlign:"left"}}>
                        <ListItemIcon><img src="/static/assets/Ellipse 65.png" alt="img"/></ListItemIcon>
                        <Typography variant="h6" >Sweeping and mopping floors</Typography>
                    </ListItem>  
                    
                <ListItem style={{textAlign:"left"}}>
                        <ListItemIcon><img src="/static/assets/Ellipse 65.png" alt="img"/></ListItemIcon>
                       <Typography variant="h6" >Cleaning toilets, bathtubs, and showers</Typography>
                    </ListItem>         
                   <ListItem style={{textAlign:"left"}}>
                        <ListItemIcon><img src="/static/assets/Ellipse 65.png" alt="img"/></ListItemIcon>
                        <Typography variant="h6" >Taking out the trash</Typography>
                    </ListItem>        
                    <ListItem style={{textAlign:"left"}}>
                        <ListItemIcon><img src="/static/assets/Ellipse 65.png" alt="img"/></ListItemIcon>
                        <Typography variant="h6" >Wiping countertops, door handles, and light switches</Typography>
                    </ListItem> 
                </div>

            </Grid>
            <Grid item xs ={12} sm ={12} md={5} lg={4} style={{textAlign:"right"}}>
               <img  src="./static/file/office_cleaning.jpg" width="85%"  alt="Image" style={{borderRadius:"50%", height:"330px"}}/><br/><br/>
               {/* <Button variant="contained" style={{backgroundColor:"#325FFF", width:"140", height:"60px", color:"white", fontSize:"14px", fontWeight:"bold" , marginRight:"20px", marginBottom:"20px" }}>Get a Quote</Button>
                <Button variant="outlined" style={{border:"2px solid #325FFF", width:"150", height:"60px", color:"black", fontSize:"15px" ,fontWeight:"bold" , marginBottom:"20px", padding:"0 10px 0 10px" }}>Call us</Button>
                      */}
            </Grid>
        </Grid>
    </Container>
    )
}

export default Office
import React from 'react'

import { Grid, Container, Button , Typography,  ListItem, ListItemIcon, li} from '@material-ui/core'
import Router from 'next/router'


const HomeOrApartment = ()=>{
    return(
        <Container className="">
       <div id="homeapartment" style={{paddingTop:"30px"}}></div>
       
        <Grid container style={{textAlign:"left"}}>
        <Grid item xs ={12} sm ={12} md={5} lg={4} style={{display:'block', alignItems:"center", justifyContent:'center'}}>
               <img  src="./static/file/home service.jpg" width="85%"  alt="Image" style={{borderRadius:"50%", height:"330px"}}/><br/><br/>
                
            </Grid>

            <Grid item xs ={12} sm ={12} md={7} lg={8}>
                <div style={{textAlign:"left"}}>
                
                     <Typography  style={{ color:"#007bfc", fontSize:"40px", fontWeight:"bold"}}>Home/Apartment <br/>cleaning</Typography><br/><br/>

                    <p>
                    Cleaning up is hazardous. You have to get dirty to clean up things. In today’s rushing fast life, some household and commercial cleanings are better off be done by experts and professionals.

Thanks to internet availability, we have many online services for cleaning jobs nowadays. Here are five best Cleaner & Cleaning services in Dhaka for you to bookmark.


                     </p><br/>
                     <div style={{width:"100%", textAlign:"center"}}>
                     <Button variant="contained" onClick={()=>Router.push("/quote")} style={{backgroundColor:"#031b4e", width:"140", height:"60px", color:"#007bfc", fontSize:"14px", fontWeight:"bold" , marginRight:"20px", marginBottom:"20px" }}>Get a Quote</Button>
                <Button variant="outlined" style={{border:"2px solid #031b4e",  height:"60px", color:"#031b4e", fontSize:"14px" ,fontWeight:"bold" , marginBottom:"20px" }}>Call 01625-00</Button>
                   </div>
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
           
        </Grid>
    </Container>
    )
}

export default HomeOrApartment
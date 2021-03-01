import React from 'react'

import { Grid, Container, Button , Typography,  ListItem, ListItemIcon, li} from '@material-ui/core'
import Router from 'next/router'

const Carpet = ()=>{
    return(
        <Container fixed className="">
       <div id="carpet" style={{paddingTop:"30px"}}></div>
        <Grid container >
          <Grid item xs ={12} sm ={12} md={5} lg={4} style={{display:'block', alignItems:"center", justifyContent:'center'}}>
               <img  src="./static/file/carpet cleaning.jpg" width="90%"  alt="Image" style={{borderRadius:"50%", height:"330px"}}/><br/><br/>
               
            </Grid>

            <Grid item xs ={12} sm ={12} md={7} lg={8}>
                <div style={{textAlign:"left"}}>
                
                     <Typography style={{ color:"#007bfc", fontSize:"40px", fontWeight:"bold"}}>Carpet cleaning</Typography><br/><br/>

                    <p>
                    We understand that you have a choice in carpet cleaning services. But not all carpet cleaning services are alike. To find out how big an impact a Chem-Dry cleaning can have on home health, we thought it would be helpful to measure how effective our cleaning process is in eliminating unhealthy and unwanted elements from your home. So we commissioned a leading independent air quality laboratory to conduct a study using Chem-Dry’s Hot Carbonating Extraction (HCE) process in multiple homes. 
                   </p><br/><br/>
                   {/* <Button variant="contained" style={{backgroundColor:"#325FFF", width:"140", height:"60px", color:"white", fontSize:"14px", fontWeight:"bold" , marginRight:"20px", marginBottom:"20px" }}>Get a Quote</Button>
                  <Button variant="outlined" style={{border:"2px solid #325FFF", width:"150", height:"60px", color:"black", fontSize:"15px" ,fontWeight:"bold" , marginBottom:"20px", padding:"0 10px 0 10px" }}>Call us</Button>
                  
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
         
        </Grid>
    </Container>
    )
}

export default Carpet
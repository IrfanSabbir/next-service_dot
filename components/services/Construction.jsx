import React from 'react'
import { Grid, Container, Button , Typography,  ListItem, ListItemIcon, li} from '@material-ui/core'
import Router from 'next/router'


const Construction = ()=>{
    return(
        <Container className="">
       <div id="construction" style={{paddingTop:"30px"}}></div>
         
        <Grid container style={{textAlign:"left"}}>
       

            <Grid item xs ={12} sm ={12} md={7} lg={8}>
                <div style={{textAlign:"left"}}>
                
                     <Typography style={{ color:"#007bfc", fontSize:"40px", fontWeight:"bold"}}>Construction Cleaning</Typography><br/><br/>

                    <p>
                   
                    Construction cleaning is rarely foremost when anyone considers undertaking a remodel or moving out. Instead, when people think about remodeling their workspace or moving to a more spacious office, they usually think about the effort that the renovation takes or the stress of moving everything from one place to the other. Then, you get to enjoy the fabulous new space, right
                     </p><br/><br/>
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
               <img  src="./static/file/construction cleaning.jpg" width="85%"  alt="Image" style={{borderRadius:"50%", height:"330px"}}/><br/><br/>
               {/* <Button variant="contained" style={{backgroundColor:"#325FFF", width:"140", height:"60px", color:"white", fontSize:"14px", fontWeight:"bold" , marginRight:"20px", marginBottom:"20px" }}>Get a Quote</Button>
                <Button variant="outlined" style={{border:"2px solid #325FFF", width:"150", height:"60px", color:"black", fontSize:"14px" ,fontWeight:"bold" , marginBottom:"20px" }}>Call us</Button>
                      */}
            </Grid>
           
        </Grid>
    </Container>
    )
}

export default Construction
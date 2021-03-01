import React from 'react'

import {Container, Grid, Typography,Button, ListItem, ListItemIcon, ListItemText} from '@material-ui/core'

const Map =()=>{
    return(
        <div>
           
            <Container style={{marginTop:"30px"}}>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md ={6}lg={6}  style={{textAlign:"left"}}>
                    {/* <Typography variant="h3" style={{fontWeight:"bold"}}>Location we  <span style={{color:"#325FFF"}} >clean</span></Typography><br/><br/><br/> */}
                 

                     <Typography variant="h3" style={{fontWeight:"bold"}}>Contacts </Typography><br/>
                    
                    <ListItem>
                        <ListItemIcon><img src="./static/assets/ic_outline-mail.png" alt="Message"/></ListItemIcon>
                        <ListItemText >
                         adminhr@service.com
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><img src="./static/assets/phone-call.png" width="35px" alt="call"/></ListItemIcon>
                        <ListItemText>
                          012 86 23
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><img src="./static/assets/phone-call.png" width="35px" alt="call"/></ListItemIcon>
                        <ListItemText>
                          234 123 23
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><img src="./static/assets/grommet-icons_map.png" alt="LocationMap"/></ListItemIcon>
                        <ListItemText>
                        Radioactivity Testing and Monitoring Laboratory<br/>
Chittagong Medical Collage Rd · 031-632147
                        </ListItemText>
                    </ListItem>

                </Grid>
                <Grid item xs={12} sm={12} md ={6}lg={6} style={{textAlign:"center"}}>
                    <img src="./static/file/map.jpg" width="90%" height="300px" style={{border:"10px solid #325FFF", borderRadius:"20px"}} alt="map"/>
                </Grid>

            </Grid>
            <br/><br/><br/>
          
        </Container>
        </div>
    )
}

export default Map

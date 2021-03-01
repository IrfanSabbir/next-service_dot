import React from 'react'
import { Container, Grid ,Typography,ListItem , ListItemIcon} from '@material-ui/core'


import Router from 'next/router'

const Footer = ()=>{
    // const history =useHistory()
    return(
        <div>
          
               {/* <ForumIcon fontSize="large" style={{marginLeft:"80%"}} /> */}
           
        <div className="Footer" >
              <Container fixed>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={2} md={2} lg={2}>
                    <Typography variant="h4" style={{ color:"#007bff"}}>Service<b style={{ color:"#031b4e"}}>Dot</b></Typography><br/>
                    </Grid>
                    <Grid item xs={4} sm={2} md={2} lg={2}>
                        <a href="#" onClick={()=>Router.push('/')} style={{color:"#007bff",fontWeight:"bold", textDecoration:"none"}}>Home</a>
   
                    </Grid>
                    <Grid item xs={4} sm={2} md={2} lg={2} style={{textAlign:"left"}}>
                        <a href="#" style={{fontWeight:"bold",color:"#007bff", textDecoration:"none"}} onClick={() => Router.push('/services')}>Services</a><br/><br/>
                        <a href="#daycare" style={{color:"#007bff", textDecoration:"none"}} onClick={() => Router.push('/services')}>Daycare</a><br/><br/>
                        <a href="#office" style={{color:"#007bff", textDecoration:"none"}} onClick={() => Router.push('/services')}>Office</a><br/><br/>
                        <a href="#moveinout" style={{color:"#007bff", textDecoration:"none"}} onClick={() => Router.push('/services')}>Move in/out</a><br/><br/>
                        <a href="#airbnb" style={{color:"#007bff", textDecoration:"none"}} onClick={() => Router.push('/services')}>Arnbnb</a><br/><br/>
                        <a href="#construction" style={{color:"#007bff", textDecoration:"none"}} onClick={() => Router.push('/services')}>Constraction</a><br/><br/>


                    </Grid>
                    {/* <Grid item xs={4} sm={2} md={2} lg={2} style={{textAlign:"left"}}>
                        <p style={{fontWeight:"bold"}}>Gift Cards</p>
                        <p >Daycare</p>
                        <p >Home</p>
                        <p >OFFICE</p>
                        <p >move in/out</p>
                        <p >Arnbnb</p>
                        <p >constraction</p>


                    </Grid> */}
                    <Grid item xs={4} sm={2} md={2} lg={2} style={{textAlign:"left"}}>
                    <a href="#" style={{fontWeight:"bold",color:"#007bff", textDecoration:"none"}} onClick={() => Router.push('/team')}>Team</a><br/><br/>


                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={4} style={{textAlign:"left"}}>
                    <ListItem style={{textAlign:"center"}}>
                        <ListItemIcon><img src="./static/assets/Group 372.png" alt="In"/></ListItemIcon>
                        <ListItemIcon><img src="./static/assets/jam_whatsapp.png" alt="Wp"/></ListItemIcon>
                        <ListItemIcon><img src="./static/assets/Group 364.png" alt="Fb"/></ListItemIcon>
                        <ListItemIcon><img src="./static/assets/Group 365.png" alt="Uk"/></ListItemIcon>
                        
                    </ListItem><br/><br/>
        

                    </Grid>
                </Grid>
                </Container>
        </div>
        </div> 
    )
}

export default Footer
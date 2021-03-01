import React from 'react'
import {Container, Grid, Typography} from '@material-ui/core'
const Certification = ()=>{
    return(
        <Container style={{marginTop:"30px"}}>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md ={6}lg={7}  style={{textAlign:"left"}}>
                    <Typography variant="h3" style={{color:"#031b4e",fontWeight:"bold"}}>Our cleaning program</Typography><br/>
                     <p>
                     We are involved in offering premium quality Sofa Cleaning Services. We offer this service in an excellent manner within a scheduled time-frame. The offered service is performed by our highly qualified professionals using excellent grade machines and advanced technology.
<br/>
                     Due to our vast acquaintance of this area, we are proficient to render Kitchen Cleaning Service to our valued patrons. Due to their timely completion and flexibility, this service is vastly well-liked and enormously admired in the market.
<br/><br/>
                     Our professional cleaning service will be so affordable cost for you to deep cleaning. we have 20 years’ experience in this service industry. We know that water is the most important fluid to sustain life. We use water for every aspect of life, such as drinking, bathing, cleaning, and so on.
                     With a thorough understanding of this business industry, we are engrossed in Toilet Cleaning Services to our clients. Due to personnel dedication and knowledge helps us to meet the detailed needs of the clients within the given period of time.
<br/><br/>
                     We use a Ultra-Low Volume (ULV) machine to convey the disinfectant to the entire space being treated. Surfaces such as doors and handles that are frequently touched by people will be swabbed with disinfectant.


                     </p>
                </Grid>
                <Grid item xs={12} sm={12} md ={6}lg={5} style={{textAlign:"center"}}>
                    <img src="./static/file/cleaning_image2.jpg" width="90%" alt="Certification"/>
                </Grid>

            </Grid>
        </Container>
    )
}

export default Certification
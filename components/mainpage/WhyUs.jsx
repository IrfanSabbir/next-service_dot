import React from 'react'
import {Container, Typography} from '@material-ui/core'
const WhyUs = ()=>{
    return(
        <Container fixed style={{marginTop:"50px", position:"relative"}}>
             <Typography  variant="h3" style={{color:"#031b4e", fontWeight:"bold",}}>Why choose us?</Typography><br/><br/>
            
                 <img src="./static/file/cleaning_image.png" alt="why us" width="60%" style={{marginLeft:"20%"}} height="auto"/>
             
                {/*             
                 <p  className="Why_Timeline_1_text_1">100 % Satisfaction <br/> guaranteed</p >
                 <p  className="Why_Timeline_1_text_2">Only the best for our clients, we guarantee <br/>you’ll be satisfied with the results.
                 </p > */}

           
        </Container>
    )
}

export default WhyUs
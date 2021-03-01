import React , {useState}from 'react'
import {Container, Paper, Typography  } from '@material-ui/core'
import Router from 'next/router'

const Final = (props)=>{
    const [progress, setProgress]  = useState(props.progress)
  
    return(
        <Container fixed><br/>
   

            {/* <img className="quote_progress_right_icon"  src="./static/image/destination.png"/> */}
            <div className="quote_progress">
                    <div style={{width:`${progress}%`}} className="quote_progress_done"></div>
            </div>
            <p className="quote_progress_left_text_final"  >{progress}%</p>
            <br/> 
            <Typography style={{ paddingBottom:"20px",fontSize:"4vw", color:"#0051AA", fontWeight:"bolder"}} >
                Congratulation! your quote <br/>is on the way
                </Typography>
  
            <p className="NavigationLandingPage" onClick={()=>Router.push("/")} style={{fontSize:"4vw",cursor:"pointer", marginTop:"20px", color:"#007bff"}}>
                Service <b style={{color:"#031b4e"}}>Dot</b> 

               </p>
           
        </Container>
    )
}

export default Final




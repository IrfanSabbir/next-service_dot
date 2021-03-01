import React, {useState, useEffect,useMemo} from 'react'
import {Typography, Container, Grid,Paper, Button,Radio} from '@material-ui/core'
import { useRouter } from 'next/router'
import Checkbox from '@material-ui/core/Checkbox';
import fetch from 'isomorphic-unfetch'
import axios from 'axios'
import { API } from '../../config'
import Link from 'next/link'

import Info from './info'
import Review from './review'
import Final from './final'
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';


const Services = (props)=>{
    const router = useRouter()
    // const [progress, setProgress]  = useState(90)
    const [step , setStep] = useState(1)
    const [selectedService, setSelectedService] = useState([])
    const [name, setName]  = useState("")
    const [infoCheck, setInfoCheck]=useState([false, false, false])
    const [phone, setPhone]  = useState("")
    const [email, setEmail]  = useState("")
    const [company_id, setCompanyId]  = useState()
    const [review, setReview] = useState(false)
    const [progress, setProgress]  = useState(30)
    const [length, setLength] = useState(0)
    const [subStep, setSubStep] = useState(0)
    const [stepProgress, setStepProgree] = useState(0)
    const [finalStep, showFinalStep ] = useState(false)
    // console.log(window.innerWidth)

   
   
         
    const handleQuote = ()=>{
        let progresss = progress+10
        progresss =  progresss>100?   100 : progresss
        setProgress(progresss)
        setStep(4)
        showFinalStep(true)
    }
    const NextStep =()=>{
        let s= step+1
        if(s==4){
            handleQuote()
        }
        else{
            setStep(s)
        }
        if(s==3){
            setProgress(progress+5)
        }
    }
    const PrevioustStep =()=>{
        let s= step-1
        setStep(s)
        setSelectedService(selectedService)
        console.log(s)
        if(s===0){
            router.push('/quote')
        }
        if(s===1){
           setSubStep(length-1)
           setReview(false)
        }
    } 
    const addNameHandler = (value)=>{
        setName(value)
        if(!infoCheck[0] && value){
            console.log(value)
            const check = [...infoCheck]
            check[0]= true
            setInfoCheck(check)
            setProgress(progress+20)
        }
        else if(infoCheck[0]  && !value){
            console.log(value)
            const check = [...infoCheck]
            check[0]= false
            setInfoCheck(check)
            setProgress(progress-20)

        }
    }  
    const addEmailHandler = (value)=>{
        setEmail(value)
        if(!infoCheck[1] && value){
            console.log(value)
            const check = [...infoCheck]
            check[1]= true
            setInfoCheck(check)
            setProgress(progress+20)
        }
        else if(infoCheck[1]  && !value){
            console.log(value)
            const check = [...infoCheck]
            check[1]= false
            setInfoCheck(check)
            setProgress(progress-20)

        }
    }   
    const addPhoneHandler = (value)=>{
        setPhone(value)
        if(!infoCheck[2] && value){
            console.log(value)
            const check = [...infoCheck]
            check[2]= true
            setInfoCheck(check)
            setProgress(progress+20)
        }
        else if(infoCheck[2]  && !value){
            console.log(value)
            const check = [...infoCheck]
            check[2]= false
            setInfoCheck(check)
            setProgress(progress-20)

        }
    }   
   
    return(
        <Container fixed>
            <br/><br/>
           {!finalStep &&  <div>
            <span className="Quote_service_container_title" >Take few steps before <br/>perfect clean place</span><br/><br/><br/><br/>

          {/* <img className="quote_progress_left_icon"  style={{marginLeft:`${progress}%`}}src="./static/image/progress.png"/> */}
          <p className="quote_progress_right_icon"> {progress}%</p>
            

            {/* <img className="quote_progress_right_icon"  src="./static/image/destination.png"/> */}
            <div className="quote_progress">
                    <div style={{width:`${progress+3}%`}} className="quote_progress_done"></div>
            </div>
            <p className="quote_progress_left_text"  style={{marginLeft:`${progress}%`}}>{progress}%</p><br/>
             <Review
             selctedService ={selectedService}
             service={props.service}
            />
            <Info
                addName ={addNameHandler}
                addPhone ={addPhoneHandler}
                addEmail ={addEmailHandler}
            />
            <Button variant="outlined" style={{marginRight:"10px",color:"white"}}>
               <Link href="/">
                   <a>Back</a>
               </Link>
           </Button> 
           <Button variant="contained" color="primary" onClick={handleQuote}>Send</Button>
           </div>}
           {finalStep && 
           <Final
            progress = {progress}
            />  }


         {/* commenting previous code */}

         <div>

        
            {/* {step!==4 && 
               <span className="Quote_service_container_title" >Take few steps before <br/>perfect clean place</span>
            
            } */}
            
            {/* {!review && <div>
           {step ===1 &&  <div>
            <br/><br/><br/>
            <img className="quote_progress_left_icon"  style={{marginLeft:`${progress}%`}}src="./static/image/progress.png"/>
            

            <img className="quote_progress_right_icon"  src="./static/image/destination.png"/>
            <div className="quote_progress">
                    <div style={{width:`${progress+3}%`}} className="quote_progress_done"></div>
            </div>
            <p className="quote_progress_left_text"  style={{marginLeft:`${progress}%`}}>{progress}%</p>
               </div>}<br/><br/><br/>
            <Typography variant="h4" style={{color:"#0051AA", paddingBottom:"20px",}} >Choice the service you need </Typography>
            <br/><br/> */}
           
               {/* <div style={{display:'flex', justifyContent:"center", textAlign:"center"}}> */}
               {/* <Grid container spacing={3} > */}
                {/* <Grid item xs={12} sm={6} md={4} lg={4}>
                  {services[subStep]}
                </Grid> */}
                  {/* {(subStep+1)<length && 
                <Grid item xs={12} sm={6} md={4} lg={4} style={{filter:"blur(2px)"}}>             
                       {services[subStep+1]}     
                </Grid>} */}
                {/* {(subStep+2)<length && 
                <Grid item xs={12} sm={6} md={4} lg={4} style={{filter:"blur(2px)"}}>             
                       {services[subStep+2]}     
                </Grid>} */}
                
               {/* </Grid>    */}

               {/* </div><br/><br/> */}
            {/* { subStep===0  && <Button variant="outlined" style={{marginRight:"10px",color:"white"}}>
               <Link href="/quote">
                   <a>Back</a>
               </Link>
           </Button> }
            {subStep>0 &&<Button variant="outlined" color="primary" onClick={()=>handleSubStep(-1)}  style={{marginRight:"10px"}}>Back</Button>}
            <Button variant="contained" color="primary" onClick={()=>handleSubStep(1)}>next</Button> */}

           {/* </Grid> */}
           {/* <br/><br/>
           
           </div>} */}
           {/* {review&&
           <div>
            {InfoReview}
            <br/><br/>
           { step >=2 && step <=3 && <Button variant="outlined"  onClick={PrevioustStep} style={{marginRight:"10px"}}>Back</Button> }
           { step<3 && <Button variant="contained" color="primary" onClick={NextStep}>Next</Button>}
           { step==3  && <Button variant="contained" color="primary" onClick={NextStep}>Send</Button>}
           </div>}
            */}
      </div>       
        </Container>
    )
}


export default Services






   // console.log(areas)
    // let services = "Loading~~~~~"
    // let InfoReview = ''
    // if(step === 1){

    
    //services = selectedService.map((service,rootIndex)=>
    //         // <Grid item key={rootIndex} xs={12} sm={6} md={4} lg={4}>
    //         <Paper variant="outlined"  key={rootIndex} style={{padding:"15px", backgroundColor:"#325FFF"}}>
    //             <Typography variant="h5" style={{color:"white"}}>{props.service}</Typography>
    //             <br/>
    //             <Typography variant="h6" style={{color:"white"}}>{service.area}</Typography>
    //             <br/>
    //             <div style={{textAlign:"left", marginLeft:"10px"}}>
    //                 {
    //                     service.tasks.map((task,index)=>
                        
    //                     <Typography key={index}
    //                     >
                               
    //                             <Checkbox
    //                                 checked={task.selected}
    //                                 style ={{
    //                                     color: "white",
    //                                     // backgroundColor:"black"
    //                                   }}
    //                                 onClick={()=>setServices(rootIndex, index) }
    //                                 color="secondary"
    //                                 inputProps={{ 'aria-label':  'secondary checkbox' }}
    //                                 /> 
    //                         {task.title}
    //                         </Typography>
    //                     )
    //                 }
    //             </div>
    //         </Paper>
    //         // </Grid>
    //     )}
        // if(step===2){
    
        // InfoReview=<Info
        //     addName ={setName}
        //     addPhone ={setPhone}
        //     addEmail ={setEmail}
        //     progress = {progress}
        //     />
        // }
        // if(step===3){
        //     console.log(name)
            
        //     InfoReview=<Review
        //     selctedService ={selectedService}
        //     name ={name}
        //     phone ={phone}
        //     email ={email}
        //     progress = {progress}
        //     service={props.service}
        //     />
        // }
        // if(step===4){
        //     InfoReview=<Final
        //     progress = {progress}
        //     />
    // }
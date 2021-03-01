import React , {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import Area from '../components/quote/area'
import Link from 'next/link'

import Layout from '../components/Layout/LandingPageLayout'
import {Container, Grid} from '@material-ui/core'

import DayCare from '../components/services/Daycare'
import HomeApartment from '../components/services/HomeOrApartment'
import Office from '../components/services/Office'
import MoveInOut from '../components/services/MoveInOrOut'
import Construction from '../components/services/Construction'
import Airbnb from '../components/services/Airbnb'
import Carpet from '../components/services/Carpet'
import Infection from '../components/services/Infection'

const list =[false, false, true, false, false, false, false, false,false]

const Service = (props)=>{
    const router = useRouter()
    const {name} = router.query
    const service_name = router.query.serviceQuery
    const service = router.query.service
    


    const [showtext, setShowtext] = useState([...list])

    const changeRead= (val)=>{
        let listBoool = [false, false, false, false, false, false, false, false, false]
        
        listBoool[val]= true
        setShowtext(listBoool)
        
    }
    const style={
        backgroundColor:"white"
    }
    return(
        <Layout>
            <div className="Review-component">
                <Container>
                <Grid container justify="center"  style={{backgroundColor:"lightgray", textAlign:"center"}}>
               <Grid item sx= {3} sm={2} md={1} lg={1} style={{backgroundColor: showtext[0] && "white" , textAlign:"center"}}>
                  <p className="Review"  onClick={()=>{changeRead(0)}} >Airbnb</p>
               </Grid>
               <Grid item sx= {3} sm={2} md={1} lg={1}   style={{backgroundColor: showtext[1]&&"white" ,textAlign:"center"}}>
                  <p className="Review"  onClick={()=>{changeRead(1)}} >DayCare</p>
               </Grid>
               <Grid item sx= {3} sm={2} md={1} lg={1} style={{backgroundColor: showtext[2] && "white" , textAlign:"center"}} >
                  <p className="Review"  onClick={()=>{changeRead(2)}} >Home</p>
               </Grid>
               <Grid item sx= {3} sm={2} md={1} lg={1} style={{backgroundColor: showtext[3] && "white", textAlign:"center" }}>
                  <p className="Review"  onClick={()=>{changeRead(3)}} >Office</p>
               </Grid>
               <Grid item sx= {3} sm={3} md={2} lg={2} style={{backgroundColor: showtext[4] && "white", textAlign:"center" }}>
                  <p className="Review"  onClick={()=>{changeRead(4)}} >Constractions</p>
               </Grid>
               <Grid item sx= {3} sm={3} md={2} lg={2} style={{backgroundColor: showtext[5] && "white", textAlign:"center" }}>
                  <p className="Review"  onClick={()=>{changeRead(5)}} >Move in/out</p>
               </Grid>
               <Grid item sx= {3} sm={2} md={1} lg={1} style={{backgroundColor: showtext[6] && "white", textAlign:"center" }}>
                  <p className="Review"  onClick={()=>{changeRead(6)}} >Carpet</p>
               </Grid>
               {/* <Grid item sx= {3} sm={2} md={1} lg={1} style={{backgroundColor: showtext[7] && "white" , textAlign:"center"}}>
                  <p className="Review"  onClick={()=>{changeRead(7)}} >Infection</p>
               </Grid> */}

           </Grid>
           <div style={{backgroundColor:"white", paddingBottom:"20px", width:"100%"}}>
                {showtext[0] && <Airbnb/>}
                 {showtext[1] && <DayCare/>}
                {showtext[2] && <HomeApartment/>}
                {showtext[3] && <Office/>}
                {showtext[4] && <Construction/>}
                {showtext[5] && <MoveInOut/>}
                {showtext[6] && <Carpet/>}
                {/* {showtext[7] && <Infection/>} */}
           </div>    
         </Container>
        </div>
        {/* <div className="Quote_service"> */}
            {/* <Container fixed className="Quote_service_container"> */}
                {/* service */}
            {/* <div style={{float:'right', marginTop:"-1vh"}}>
              <Link href="/">
                  <a>

                    <img src="./static/image/Vector 5.png"/>
                  </a>
              </Link>
            </div> <br/> <br/>  */}
                
                {/* <Area service_name={service_name} service={service}/> */}
            {/* </Container> */}
         {/* </div> */}
     </Layout>

    )
}


export default Service


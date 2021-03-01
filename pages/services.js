import React from 'react'

import DayCare from '../components/services/Daycare'
import HomeApartment from '../components/services/HomeOrApartment'
import Office from '../components/services/Office'
import MoveInOut from '../components/services/MoveInOrOut'
import Construction from '../components/services/Construction'
import Airbnb from '../components/services/Airbnb'
import Carpet from '../components/services/Carpet'
import Infection from '../components/services/Infection'
import Layout from '../components/Layout/LandingPageLayout'

import {Container} from '@material-ui/core'
const Srvices = ()=>{
    return(
        <Layout>
            <div id="DayCare"><DayCare /></div><br/><br/><br/>
            <div id="HomeApartment"><HomeApartment/></div><br/><br/><br/>
            <div id="Office"><Office/></div><br/><br/><br/>
            <MoveInOut/><br/><br/><br/>
            <div id="Construction"> <Construction/></div><br/><br/><br/> <div  id="Airbnb"><Airbnb/></div><br/><br/><br/>
            <div id="Carpet"><Carpet/></div>
            {/* <div id="Infection"><Infection/></div> */}

        </Layout>
    )
}

export default Srvices

// <div id="DayCare"><DayCare /></div><br/><br/><br/>
// <div id="HomeApartment"><HomeApartment/></div><br/><br/><br/>
// <div id="Office"><Office/></div><br/><br/><br/>
// <MoveInOut/><br/><br/><br/>
// <div id="Construction"> <Construction/></div><br/><br/><br/>
// <div  id="Airbnb"><Airbnb/></div><br/><br/><br/>
// <div id="Carpet"><Carpet/></div>
// <div id="Infection"><Infection/></div>
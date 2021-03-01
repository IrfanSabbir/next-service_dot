import {Container , Typography,Button} from '@material-ui/core'
import Head from 'next/head'
import Link from 'next/link'

import Layout from '../components/Layout/LandingPageLayout'

import TopContent from '../components/mainpage/TopContent'
import AboutUs from '../components/mainpage/AboutUs'
import Services from '../components/mainpage/OurService'
import Certificate from '../components/mainpage/Certification'
import Map from '../components/mainpage/Map'
import Why_us from '../components/mainpage/WhyUs'



const Index = ()=>{
    const service="Construction"
    const serviceQuery="Construction cleaning"

    return(
             <Layout>
        {/* <Container> */}
            {/* <Typography>Welcome to app</Typography>
            <Button >
                <Link href="/quote">
                    <a>
                       Get quote
                    </a>
                </Link>
        </Button>
        <Button >
                <Link href={`/service/?serviceQuery=${serviceQuery}&service=${service}`}>
                    <a>
                       Construction
                    </a>
                </Link>
        </Button> */}
                <TopContent/><br/><br/>
                <Services/><br/><br/>
                  <Why_us/><br/><br/>
                 <Certificate/><br/><br/>
                <AboutUs/><br/><br/>
                <Map/><br/><br/>



        {/* </Container> */}
        </Layout>
    )
}


export default Index
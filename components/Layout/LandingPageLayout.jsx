import React,{useState}  from 'react'
import Toolbar from '../Toolbar/LandingPageToolBar'
import Footer from './footer'

const  Layout = (props)=>{
   
    const [sideDrawer , setSideDrawer] = useState(false)

    const SidedrawerControllHandler = ()=>{
        setSideDrawer(!sideDrawer)
    }
    
   
    const cancleDrawerHandler=()=>{
        setSideDrawer(false)
    }
    
        return(
            <div >
                <Toolbar 
                // SidedrawerControll={SidedrawerControllHandler}
                // cancleDrawer={cancleDrawerHandler}
                />
                

                <main>
                    {props.children}
                </main>
                    <Footer/>
             
            </div>
        )
    
}


  
export default Layout
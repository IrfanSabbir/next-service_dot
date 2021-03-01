import React ,{useState} from 'react'
// import {NavLink} from 'react-router-dom'
import {Container, Typography, Grid , ListItem, ListItemIcon,  Button} from '@material-ui/core'
import Link from 'next/link'
import Router ,{useRouter} from 'next/router'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from 'reactstrap';
  

const Navigation = (props)=>{
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };
    console.log()
    const route = useRouter()
    const pathname= route.pathname

    console.log(pathname)
    return (
        //  <Container fixed >
           <Navbar light expand="lg" >

       
              <p className="NavigationLandingPage" onClick={()=>Router.push("/")} style={{fontSize:"30px",cursor:"pointer",marginLeft:"5vw", marginTop:"20px", color:"#007bff"}}>
                Service <b style={{color:"#031b4e"}}>Dot</b> 

               </p>
              
          
               
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto mr-auto" navbar style={{marginTop:"20px"}} >
          {/* <ul className="NavigationLandingPage"> */}
            <div style={{textAlign:"center", padding:"10px"}}>

                <span style={{textAlign:"center", padding:"10px"}} onClick={()=>Router.push("/")} className={pathname ==="/" ? "Navigation_button_active": "Navigation_button"}> Home </span> 
                <span style={{textAlign:"center", padding:"10px"}} onClick={()=>Router.push("/service")} className={pathname ==="/service" ? "Navigation_button_active": "Navigation_button"}> Service </span> 
                <span  style={{textAlign:"center", padding:"10px"}}onClick={()=>Router.push("/team")} className={pathname ==="/team" ? "Navigation_button_active": "Navigation_button"}> Team </span> 
                <span style={{textAlign:"center", padding:"10px"}} onClick={()=>Router.push("/quote")} className={pathname ==="/quote" ? "Navigation_button_active": "Navigation_button"}> Quote </span> 
            </div>
            </Nav> 
            <Nav className="mr-auto" navbar style={{marginTop:"20px"}} >
            <div style={{textAlign:"right",}}>
             <Typography variant="h6" style={{color:"#0051AA", fontWeight:"bold"}}>
             <img  style={{cursor:"pointer"}} src="./static/assets/phone-call.png" width="30px" alt="CallIcon"/>&nbsp;&nbsp;
                 8 400 324 123
                 
                 </Typography>


            </div>

                {/* <li><span onClick={()=>Router.push("/")} className={pathname ==="/" ? "Navigation_button_active": "Navigation_button"}> Home </span> </li>
                <li><span onClick={()=>Router.push("/service")} className={pathname ==="/service" ? "Navigation_button_active": "Navigation_button"}> Service </span> </li>
                <li><span onClick={()=>Router.push("/team")} className={pathname ==="/team" ? "Navigation_button_active": "Navigation_button"}> Team </span> </li>
                <li><span onClick={()=>Router.push("/quote")} className={pathname ==="/quote" ? "Navigation_button_active": "Navigation_button"}> Quote </span> </li> */}

                    {/* <li><Link href="/"> Home </Link> </li> */}
                    {/* <li><Link href="/service"> Service </Link> </li> */}
                    {/* <li><Link href="/team"> Team </Link> </li> */}
                    {/* <li><Link href="/quote"> Quote </Link> </li> */}
            {/* </ul> */}

           
          </Nav>
        </Collapse>
               
          
        {/* </Container> */}
     </Navbar>
)}

export default Navigation
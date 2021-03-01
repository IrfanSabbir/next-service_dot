
import React , {useState} from 'react'
import {Container, Typography, Grid , Button} from '@material-ui/core'

import Router from 'next/router'

const dayCare = "Children’s bad habits make them incredible contagion spreaders. Secure your day care from infections like Hepatitis A and Diarrhea. Since the 1940s daycares have been sources of disease outbreaks, and with the more and more children being admitted to daycare there’s an even higher risk of infection. Without proper infection control and cleaning, the children are in danger for outbreaks of diseases like Hepatitis A and other infections."
const  Home = "Come to a clean home where you can enjoy the sun streaming through clean windows while you do what you’ve dreamt of doing all day. Our cleaners use only the best equipment with eco-friendly and safe cleaning products. They’ll go from roof to floor to ensure no dirt is left when they’re done.Let us bother with the more challenging rooms. Just choose whichever rooms you’d like us to clean so you can make better use of your time."
const Office = "How you take care of your building tells your customers how you’ll take care of them. Give them a good first impression to make future negotiations much easier."
const Construction = "Avoid unexpected fines while getting praise from grateful clients. Professional cleaning during and after construction guarantee proper sorting of building materials and garbage from the construction site. Once you’re done your clients will get a spotless new building ready for use right away. Unless you’re training your employees to be cleaning personnel, you risk getting fines from bad garbage sorting and wrong clean up after you’re done building. With experienced professionals, you can expect a clean construction site for your workers and no fines in your mail."
const Carpet ="You can hide the dust under the carpet, but all the dirt atop will sit and fester. Send your carpet to cleaned once a year to ensure a good as new and long-lasting carpet. Carpets are like a bank of dust in your house. Daily vacuuming can only take away 80-90% of dry dirt on the upper layers But in the roots, skin cells, mites, moisture and fungal spores get trapped in the fibres. These can cause allergic reactions and asthma problems unless properly cleaned."
const Move ="Don’t stop the moving party because someone hounds a spot you forgot, or begin the celebration as soon as you come into your new home. Whether you’re selling or moving in the cleanup is often bigger than expected. That’s why we go through every possible detail so your home shines to its full potential. The cleanup is often harder and longer than you might expect. You could start with the walls, move to the cabinets, but then suddenly the inside of the oven has to be scraped and in the end, you’ll have to go over every floor again. And finally, one last cleanup of the floor again to get the last dust away. Use that time to celebrate instead, while we make either your old, or new home shine."
const AIRBNB = "Don’t use more time than necessary on bad guests. Just put out fresh towels and bed linens, then we’ll take care of the cleaning and disinfecting while you do more important things."
const Infection = "Our cleaners are certified in infection control. They prevent cross-contamination from surfaces and ensure any infectious zones stay disinfected hours after cleaning."


  
  const list =[false, false, false, false, false, false, false, false]
const Services =(props)=>{

    const [showtext, setShowtext] = useState([...list])

    const changeRead= (val)=>{
        let listBoool = [...showtext]
        listBoool[val]= !listBoool[val]
        setShowtext(listBoool)
        
    }
    return(
        <Container fixed style={{marginTop:"30px"}}>
            <Typography variant="h3" style={{fontWeight:"bold"}}>Our services</Typography><br/>
            <Grid container spacing ={2} justify="center">
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <img src="./static/file/day icon.png" width="150px" height="150px" alt="DayCareCleaning" className="ServicessImg"/>
                    <Typography variant="h4" className="ServicesTitle" style={{color: "#031b4e"}}>DayCare<br/>cleaning</Typography><br/>
                    <p  className="ServicesText">
                    Keeping your child care facility clean is vital for the health, safety and well-being of children and you. One of the most important steps you can take to reduce the spread of germs 


                     {! showtext[0] && <span>....</span>}<br/>
                    { showtext[0] && <span>(i.e. bacteria, viruses and fungi) is keeping your environment clean throughout the day. Always look for the EPA registration number on the product label to verify you are using a product that sanitizes or disinfects.</span>}
                    </p>
                   
                        <p style={{cursor: "pointer", color:"#325FFF", width:"100%", textAlign:"center"}}  onClick={()=>{changeRead(0)}} >Read {showtext[0] ? " Less" :" More"}</p>
             
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <img src="./static/file/home icon.png" width="150px" height="150" alt="HomeOrApartmentCleaning" className="ServicessImg"/>
                    <Typography variant="h4" style={{color: "#031b4e"}} className="ServicesTitle">Home/Apartment<br/>cleaning</Typography><br/>
                    <p  className="ServicesText">
                    Germs suppress the immune system and cause you to become sick. However, by continuously cleaning your home with a quality disinfectant, you can kill up to 98 germs. 
                       { !showtext[1] && <span >...</span>}<br/>
                       {showtext[1] && <span>A clean home is like heaven and it is always welcoming to come to a clean house. It takes a lot of effort to maintain and keep your house clean but it has its own advantages and perks. If you clean regularly and effectively, your house as it will always look as good as new. Hygienically it is important to live in a clean house. Here are some great benefits or importance of regular house clean.

House cleaning is a very challenging task that we all have to do at some time. The main motive of getting the place clean and organized is to make it inviting and most peaceful place to stay in and relax at the same time. There are plenty of handy organizing tips available that come in very useful when you are planning to clean and organize your place.</span>}
                   </p>
                
                 <p style={{cursor: "pointer", color:"#325FFF", width:"100%", textAlign:"center"}}  onClick={()=>{changeRead(1)}} >Read {showtext[1] ? " Less" :" More"}</p>
              
                   
                        
                   
                </Grid>
                <Grid item  xs={12} sm={6} md={4} lg={3}>
                    <img src="./static/file/office.jpg" width="160px" height="150px" alt="OfficeCleaning" className="ServicessImg"/>
                    <Typography variant="h4" style={{color: "#031b4e"}} className="ServicesTitle">Office<br/>cleaning</Typography><br/>
                    <p  className="ServicesText">
                    A clean workplace is a more productive workplace. Reduce Amount of Sick Days – Having a clean, hygienic and germ-free workplace will reduce the amount of illnesses being spread around.
                     {! showtext[2] && <span>....</span>}
                    { showtext[2] && <span> You only get one chance to impress a client, customer or employee so, it’s vital you make a lasting first impression for all the right reasons. As soon as they enter your business they are judging you based on their surroundings. If your premises is dirty, unpleasant or uninviting then you may lose the business to your competitors. The physical appearance of your building can say a lot about your business and your work ethic. By not taking pride in the appearance of your business’ premises then you may be saying all the wrong things to potential clients or customers.B38 Group’s cleaning and soft services division will deliver superior cleaning services to your business’ premises creating a positive and professional appearance which will give your client or customer the right first impression of your business.</span>}
                    </p>
                   
                        <p style={{cursor: "pointer", color:"#325FFF", width:"100%", textAlign:"center"}}  onClick={()=>{changeRead(2)}} >Read {showtext[2] ? " Less" :" More"}</p>
                     
                </Grid>
                <Grid item  xs={12} sm={6} md={4} lg={3}>
                
                    <img src="./static/file/construction icon.png" width="150px" height="140" alt="ConstructionCleaning" className="ServicessImg"/>
                    <Typography variant="h4" style={{color: "#031b4e"}} className="ServicesTitle">Construction<br/>cleaning</Typography><br/>
                    <p  className="ServicesText">
                    Construction cleanup is an important factor for anyone who hopes to avoid injuries that could lead to lawsuits or, worst case scenario, even death. Instead of leaving the hazardous work of cleaning up after a construction project to your staff
                     {! showtext[3] && <span>....</span>}
                    { showtext[3] && <span> One of the most persistent issues on a construction site is the dust. If it’s not handled in the right way, it can cause respiratory problems. Another source of potential breathing issues is the stringent chemicals that are often used to clean the carpets, hardwoods, or tile flooring after the project’s complete. If left to untrained people, these solutions can do damage to the flooring as well as to the air quality of the office.</span>}
                    </p>
                   
                        <p style={{cursor: "pointer", color:"#325FFF", width:"100%", textAlign:"center"}}  onClick={()=>{changeRead(3)}} >Read {showtext[3] ? " Less" :" More"}</p>
                   
                </Grid>
                <Grid item  xs={12} sm={6} md={4} lg={3}>
                <img src="./static/file/carpet icon.png" width="150px" height="150" alt="Carpet_cleaning" className="ServicessImg"/>
                    <Typography variant="h4" style={{color: "#031b4e"}}  className="ServicesTitle">Carpet<br/>cleaning</Typography><br/>
                 
                    <p  className="ServicesText">
                    Professional carpet cleaning helps to remove dust mites, bacteria and other allergens, which ultimately helps your family breathe easier and reduces the risk of colds and other health problems
                     {! showtext[4] && <span>....</span>}
                    { showtext[4] && <span> Carpet is notorious for becoming a home for allergens, dust particles and bacteria. If you or anyone in your home is susceptible to breathing problems, the airborne particles in carpet can increase and/or lead to breathing problems, such as asthma and allergies. These contaminants in your carpeting can cause a wide range of health problems, especially in children and the elderly. Vacuuming does help to remove dust mites, dirt and bacteria; however, it doesn’t completely remove these things and over time they accumulate, increasing the risk of health problems. Professional carpet cleaning helps to remove dust mites, bacteria and other allergens, which ultimately helps your family breathe easier and reduces the risk of colds and other health problems.</span>}
                    </p>
                   
                        <p style={{cursor: "pointer", color:"#325FFF", width:"100%", textAlign:"center"}}  onClick={()=>{changeRead(4)}} >Read {showtext[4] ? " Less" :" More"}</p>
                    </Grid>
                <Grid item  xs={12} sm={6} md={4} lg={3}>
                <img src="./static/file/movein icon.png" width="153px" height="152" alt="MOveInorOut" className="ServicessImg"/>
                    <Typography variant="h4" style={{color: "#031b4e"}}  className="ServicesTitle">Move in/out<br/>cleaning</Typography><br/>
                 
                    <p  className="ServicesText">
                    moving out, it's always a good idea to clean up your house or apartment, either to make it spotless for the new occupants or to ensure you get your security deposit back. You're ready to start the next chapter in your life,
                     {! showtext[5] && <span>....</span>}<br/>
                    { showtext[5] && <span> Moving into or out of a home is the mark of an exciting transition in life, but it can be a very stressful time. There’s so much to take care of, with everything from packing to decorating your new home and everything in between. One of the biggest pains of moving is cleaning your former or new house to prepare it for sale or the big move-in day.

Whether you’re moving into or out of a new home, Radiant Home Cleaning Services will take care of the mess for you! Radiant Home Cleaning offers move-in and move-out residential cleaning services in the Northern VA region. We believe that a cleaning company should not just simply “clean” a home or apartment, but offer a well-defined, trustworthy service that pays attention to the little details. We will thoroughly clean your new or old home with this approach to make your moving experience as smooth and worry-free as possible.

</span>}
                    </p>
                   
                        <p style={{cursor: "pointer", color:"#325FFF", width:"100%", textAlign:"center"}}  onClick={()=>{changeRead(5)}} >Read {showtext[5] ? " Less" :" More"}</p>
                    </Grid>
                <Grid item  xs={12} sm={6} md={4} lg={3}>
                      <img src="./static/file/airbon icon.png" width="150px" height="150" alt="AirBnbCleaning" className="ServicessImg"/>
              
                    <Typography variant="h4" style={{color: "#031b4e"}} className="ServicesTitle">AIRBNB<br/>cleaning</Typography><br/>
                  
                    <p  className="ServicesText">
                    Cleaning fees help hosts account for extra expenses they have getting their listing ready for new guests. Some of the costs that you could consider in your cleaning fee are: Cleaning products. Washing/drying towels and linen.
                     {! showtext[6] && <span>....</span>}
                    { showtext[6] && <span>  The average cleaning fee on Airbnb is between $50 – $80, however, this average is somewhat misleading.

With such a huge spectrum of listings from tiny rooms in shared houses, to opulent mansions with 10+ rooms, it’s very hard to find an accurate average.

The best way to find a workable average is to study the cleaning fees of comparable listings within your area, and generate an average from that.</span>}
                    </p>
                   
                        <p style={{cursor: "pointer",  color:"#325FFF", width:"100%", textAlign:"center"}}  onClick={()=>{changeRead(6)}} >Read {showtext[6] ? " Less" :" More"}</p>
               
                </Grid>
                {/* <Grid item  xs={12} sm={6} md={4} lg={3}>
                    <img src="./static/assets/info.png" width="150px" height="150" alt="InfectionControlForBusinesses" className="ServicessImg"/>
              
                    <Typography variant="h4"  className="ServicesTitle">
                        Infection control<br/>for businesses
                        </Typography><br/>
                        <p  className="ServicesText">
                        Our cleaners are certified in infection control. They prevent cross-contamination from surfaces and ensure any infectious zones stay
                     {! showtext[7] && <span>....</span>}
                    { showtext[7] && <span> disinfected hours after cleaning.</span>}
                    </p>
                   
                        <p style={{cursor: "pointer", color:"#325FFF", width:"100%", textAlign:"center"}}  onClick={()=>{changeRead(7)}} >Read {showtext[7] ? " Less" :" More"}</p>
                   
                        
               
                
                </Grid> */}
                

            </Grid><br/><br/>
            <div style={{textAlign:"center"}}>
            <Button variant="contained" onClick={()=>Router.push("/quote")}  style={{backgroundColor:"#031b4e", width:"140", height:"60px", color:"#007bfc", fontSize:"14px", fontWeight:"bold" , marginRight:"20px", marginBottom:"20px" }}>Get a Quote</Button>
          <Button variant="outlined" style={{border:"2px solid #031b4e",  height:"60px", color:"#031b4e", fontSize:"14px" ,fontWeight:"bold" , marginBottom:"20px" }}>Call 01625-00</Button>
            </div>
                         
        </Container>
    )
}

export default Services
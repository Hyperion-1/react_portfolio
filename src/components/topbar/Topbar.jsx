import "./topbar.css"
import {Person, Mail, Code} from "@material-ui/icons"

export default function Topbar() {
  return (
    <div className='Topbar'>
       <div className="wrapper">

         

         <div className="left">

           <a href="#Intro" className="logo">
             BmW
           </a>

           <div className="itemContainer">
             <Person className="icon"/>
             <span>+1 618-402-4102</span>
            </div>

            <div className="itemContainer">
              <Mail className="icon"/>
              <span>walker.brad26@gmail.com</span>              
            </div>



                   {/*
           <a href="#Skills">skills</a>
           <a href="#Projects">projects</a>
           <a href="#Contact">contact</a>
                   */}
         </div>
         

        <h1><Code/></h1>

          {/*hamburger menu*/}         
        <div className="right">
           <div className="hamburger">
               <span classname='line1'></span>
               <span classname='line2'></span>
               <span classname='line3'></span>    
           </div>
           
         </div>

       </div>

    </div>
  )
}

import react, {useState} from 'react';

import "./topbar.css"
import {Person, Mail, Code} from "@material-ui/icons"




const NavBar = () => {

  const[burger_class, setBurgerClass] = useState("burger-bar unclicked")
  const[menu_class, setMenuClass] = useState("menu hidden")
  const[isMenuClicked, setIsMenuClicked] = useState(false)


  //burger toggle
  const updateMenu = () => {
    if(!isMenuClicked){
      setBurgerClass("burger-bar clicked")
      setMenuClass("menu visable")      
    }
     else{
      setBurgerClass("burger-bar unclicked")
      setMenuClass("menu hidden")
    }
  }//end updateMenu
  

}//end NavBar




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
           <div className="burger-menu">
             <div className={burger_class} onClick={updateMenu}></div>

             
               <span classname='burgerBar'></span>
               <span classname='burgerBar'></span>
               <span classname='burgerBar'></span>    
           </div>
           
         </div>

       </div>

    </div>
  )
}

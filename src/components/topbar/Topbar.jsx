//import styles fromm css
import "./topbar.css"

export default function Topbar() {
  return (
    <div className='Topbar'>
       <div className="wrapper">

         <div className="left">
           <a href="#Intro">intro</a>
           <a href="#Skills">skills</a>
           <a href="#Projects">projects</a>
           <a href="#Contact">contact</a>

         </div>
         
         <h1>Hello</h1>

         <div className="right">
           this is right
         </div>

       </div>

    </div>
  )
}

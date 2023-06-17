import "./Skills.scss"

//Icon imports
import HTML5Icon from "/home/brad/Nu_repos/react_portfolio/src/assets/html5-icon.png"
import CSSIcon from "/home/brad/Nu_repos/react_portfolio/src/assets/CSS3.png"
import JSIcon from "/home/brad/Nu_repos/react_portfolio/src/assets/javascript.png"
import SQLIcon from "/home/brad/Nu_repos/react_portfolio/src/assets/mysql-logo-circle.png"
import PHPIcon from "/home/brad/Nu_repos/react_portfolio/src/assets/PHP-logo.svg.png"
import CPlusPlusIcon from "/home/brad/Nu_repos/react_portfolio/src/assets/Cpp_Logo.svg.png"
import JavaIcon from "/home/brad/Nu_repos/react_portfolio/src/assets/JavaIcon.png"
import gitIcon from "/home/brad/Nu_repos/react_portfolio/src/assets/git.png"
import gitHubIcon from "/home/brad/Nu_repos/react_portfolio/src/assets/gitHubIcon.svg"
import reactIcon from "/home/brad/Nu_repos/react_portfolio/src/assets/React-icon.svg.png"
import nodejsIcon from "/home/brad/Nu_repos/react_portfolio/src/assets/nodejsIcon.png"



export default function Skills() {
  return (
    <div className='Skills' id="Skills">

      <h1 className="SkillsHeader">
        List of my current coding languages, ect.
      </h1>

      

      


    <h2>skills: </h2> 
      

      <div className="flex-container"> 



      <div className="flex-top">
       React 
       <img src={reactIcon} alt="Reacticon" className="skillReactTop"></img>   
      </div>   






      <div className="flex-Row-1">
     
       HTML
       <img src={HTML5Icon} alt="HTML5icon"   className="skillRow1"></img>
      
       CSS
       <img src={CSSIcon} alt="CSSicon" className="skillRow1"></img>

       JavaScript
       <img src={JSIcon} alt="JSicon"  className="skillRow1"></img>   
       
      </div>




{/* 
      <div className="gridRow2">
       MySQL 
       <img src={SQLIcon} alt="SQLicon" width="100" height="200"></img>

       PHP(ish)
       <img src={PHPIcon} alt="PHPicon" width="100" height="200"></img>

       Node.js
       <img src={nodejsIcon} alt="GitHubicon" width="200" height="300"></img>
      </div>

       <div className="gridRow3">
       C++ 
       <img src={CPlusPlusIcon} alt="CPlusPlusicon" width="100" height="200"></img>

       Java 
       <img src={JavaIcon} alt="Javaicon" width="100" height="200"></img>

      </div>


      <div className="gridRow4">
       Git 
       <img src={gitIcon} alt="Giticon" width="200" height="300"></img>

       GitHub
       <img src={gitHubIcon} alt="GitHubicon" width="200" height="300"></img>
      </div>
       */} 

    </div>

  </div>
  )
}

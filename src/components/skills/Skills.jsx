import "./skills.css"

import HTML5Icon from "/home/brad/Nu_repos/react_portfolio/src/assets/html5-icon.png"
import CSSIcon from "/home/brad/Nu_repos/react_portfolio/src/assets/CSS3.png"
import JSIcon from "/home/brad/Nu_repos/react_portfolio/src/assets/javascript.png"
import SQLIcon from "/home/brad/Nu_repos/react_portfolio/src/assets/mysql-logo-circle.png"
import PHPIcon from "/home/brad/Nu_repos/react_portfolio/src/assets/PHP-logo.svg.png"
import CPlusPlusIcon from "/home/brad/Nu_repos/react_portfolio/src/assets/Cpp_Logo.svg.png"
import JavaIcon from "/home/brad/Nu_repos/react_portfolio/src/assets/JavaIcon.png"


export default function Skills() {
  return (
    <div className='Skills' id="Skills">
      
      <h1 className="SkillsHeader">
        List of my current coding languages, ect.
       </h1>

      

      


       skills:

       HTML
       <img src={HTML5Icon} width="200" height="300"></img>
      
       CSS
       <img src={CSSIcon} width="200" height="300"></img>

       JavaScript
       <img src={JSIcon} width="200" height="300"></img>
       
       React 

       MySQL 
       <img src={SQLIcon} width="100" height="200"></img>

       PHP(ish)
       <img src={PHPIcon} width="100" height="200"></img>

       C++ 
       <img src={CPlusPlusIcon} width="100" height="200"></img>

       Java 
       <img src={JavaIcon} width="100" height="200"></img>
       Git 
       GitHub
       Node.js


    </div>
  )
}

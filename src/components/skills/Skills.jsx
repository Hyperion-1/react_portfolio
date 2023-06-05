import "./skills.css"

import HTML5Icon from "/home/brad/Nu_repos/react_portfolio/src/assets/html5-icon.png"
import CSSIcon from "/home/brad/Nu_repos/react_portfolio/src/assets/CSS3.png"
import JSIcon from "/home/brad/Nu_repos/react_portfolio/src/assets/javascript.png"

export default function Skills() {
  return (
    <div className='Skills' id="Skills">
       skills:

       HTML
       <img src={HTML5Icon} width="100" height="200"></img>
      
       CSS
       <img src={CSSIcon} width="100" height="200"></img>

       JavaScript
       <img src={JSIcon} width="100" height="200"></img>
       
       React 
       MySQL 
       PHP(ish)
       C++ 
       Java 
       Git 
       GitHub
       Node.js


    </div>
  )
}

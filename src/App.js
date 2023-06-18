import "./App.scss"

//React components
//import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";



function App() {
  return (
    
    <div className="app">     
     <div className="app-grid-container">
      
       <div className="introDiv-flex grid-item">     <Intro/>    </div>
       <div className="skillsDiv">    <Skills/>   </div>
       <div className="projectsDiv">  <Projects/> </div>
       <div className="contactDiv">   <Contact/>  </div>

      </div> 
      
    </div>
  );
}


export default App;

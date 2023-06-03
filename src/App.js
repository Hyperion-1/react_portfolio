import "./app.css"

import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";



function App() {
  return (
    <div className="app">

     <Topbar/> 
     
     <div className="sections">

       <Intro/>
       <Skills/>
       <Projects/>
       <Contact/>
       
      </div> 
      
    </div>

  );
}


export default App;

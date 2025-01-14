import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero"
import Certificates from "./components/Certificates";
import { Navbar } from "./components/Navbar"
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Technologies from "./components/Technologies"
import { motion, useSpring, useScroll } from "motion/react"
import ScrollToTop from "react-scroll-to-top";
import Highlights from "./components/Highlights";

function App() {
  const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })
  return (
    <>
       <motion.div
                id="scroll-indicator"
                style={{
                    scaleX,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 10,
                    originX: 0,
                    backgroundColor: "#ff0088",
                }}
          />
      
      <div className="overflow-x-hidden text-neutral-300 antialiased">
        <ScrollToTop 
          smooth 
          className="fixed right-4 bottom-4 p-2 bg-gray-800 rounded-full shadow-md"
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        />
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>     
        </div>
        <div className="relative container mx-auto px-8">
          <Navbar />  
          <Hero />
          <Education />
          <Experience />
          <Projects />
          <Certificates />
          <Highlights />
          <Publications />
          <Technologies />
          <Contact />
        </div>
      </div>
    </>
    
  );
}

export default App

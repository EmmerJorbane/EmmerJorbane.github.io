import Hero from "./components/hero";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";

export default function App() {
    return (
        <div 
            className="app"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
            <Hero />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
}
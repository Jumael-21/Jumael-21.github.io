import Hero from './components/Hero';
import Toolkit from './components/Toolkit';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 cursor-none">
      <CustomCursor />
      <Hero />
      <Toolkit />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

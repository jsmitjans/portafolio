import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Resume from '../components/sections/Resume';
import Portfolio from '../components/sections/Portfolio';

function Home() {
  return (
    <main className="main">
      <Hero />
      <About />
      <Skills />
      <Resume />
      <Portfolio />
    </main>
  );
}

export default Home;

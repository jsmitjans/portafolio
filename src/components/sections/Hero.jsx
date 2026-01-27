import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { getAssetPath } from '../../utils/paths';

function Hero() {
  const typedRef = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      typedInstance.current = new Typed(typedRef.current, {
        strings: [
          'Desarrollador Web',
          'Desarrollador Full Stack',
          'Backend',
          'Frontend'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true
      });
    }

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, []);

  return (
    <section id="inicio" className="hero section dark-background">
      <img src={getAssetPath('/img/fondo.jpg')} alt="" />

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <h2>Jesús Soto Mitjans</h2>
        <p>Soy <span ref={typedRef} className="typed"></span></p>
      </div>
    </section>
  );
}

export default Hero;

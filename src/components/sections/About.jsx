import { getAssetPath } from '../../utils/paths';

function About() {
  return (
    <section id="sobre-mi" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Sobre Mí</h2>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img src={getAssetPath('/img/imagen_perfil.JPG')} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 content">
            <h2>Desarrollador Full Stack</h2>
            <p className="py-3">
              Desarrollador Full Stack con más de 10 años de experiencia construyendo plataformas web, sistemas internos e integraciones para sector público y privado. He liderado y desarrollado soluciones orientadas a gestión, analítica, onboarding, capacitación y automatización de procesos, combinando backend, frontend e integración de APIs. Aporto una mirada técnica y funcional para transformar requerimientos complejos en productos digitales escalables, mantenibles y alineados con objetivos de negocio.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>jsmitjans@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Título:</strong> <span>Ingeniero en Ciencias Informáticas</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>País:</strong> <span>Cuba</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Residencia actual:</strong> <span>Chile</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

function About() {
  return (
    <section id="sobre-mi" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Sobre Mí</h2>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img src="/img/imagen_perfil.JPG" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 content">
            <h2>Desarrollador Full Stack</h2>
            <p className="py-3">
              Ingeniero en Ciencias Informáticas con más de 10 años de experiencia en desarrollo web. Especializado en la creación de soluciones escalables y optimizadas. Acostumbrado a trabajar en entornos colaborativos, fomentando el trabajo en equipo y la comunicación efectiva. Apasionado por la tecnología, con una mentalidad autodidacta y en constante aprendizaje para adaptarse a nuevas herramientas y tendencias del sector.
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

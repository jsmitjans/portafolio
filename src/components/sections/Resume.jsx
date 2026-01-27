import { experience, education } from '../../data/experience';

function Resume() {
  return (
    <section id="experiencia" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Experiencia Profesional</h2>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12" data-aos="fade-up" data-aos-delay="100">

            <h3 className="resume-title">Experiencia Laboral</h3>

            {experience.map((job) => (
              <div key={job.id} className="resume-item">
                <h4>{job.title}</h4>
                <h5>{job.period}</h5>
                <p><em>{job.company}, {job.location}</em></p>
                <ul>
                  {job.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}

            <h3 className="resume-title">Formación Académica</h3>

            {education.map((edu) => (
              <div key={edu.id} className="resume-item">
                <h4>{edu.title}</h4>
                <h5>{edu.period}</h5>
                <p><em>{edu.institution}</em></p>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;

import { getAssetPath } from '../../utils/paths';
import { skills } from '../../data/skills';

function Skills() {
  return (
    <section id="habilidades" className="skills section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Habilidades</h2>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          {skills.map((skill) => (
            <div key={skill.id} className="col-lg-4 col-md-6 mb-4">
              <div className="skill-item">
                <h5><i className={skill.icon}></i> {skill.title}</h5>
                <div className="skill-icons">
                  {skill.technologies.map((tech, index) => (
                    tech.image ? (
                      <img
                        key={index}
                        src={getAssetPath(tech.image)}
                        style={tech.style || {}}
                        title={tech.name}
                        alt={tech.name}
                        className="skill-image"
                      />
                    ) : (
                      <i
                        key={index}
                        className={tech.icon}
                        style={tech.style || {}}
                        title={tech.name}
                      ></i>
                    )
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

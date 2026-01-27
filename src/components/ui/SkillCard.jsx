function SkillCard({ skill }) {
  return (
    <div className="skill-item">
      <h5>
        <i className={`bi ${skill.icon}`}></i>
        {skill.title}
      </h5>
      <div className="skill-icons">
        {skill.technologies.map((tech, index) => (
          <i
            key={index}
            className={tech.icon}
            title={tech.name}
          ></i>
        ))}
      </div>
    </div>
  );
}

export default SkillCard;

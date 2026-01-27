function Skills() {
  return (
    <section id="habilidades" className="skills section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Habilidades</h2>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">

          {/* Frontend */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="skill-item">
              <h5><i className="bi bi-code-slash"></i> HTML, CSS, Javascript, jQuery, Bootstrap</h5>
              <div className="skill-icons">
                <i className="devicon-html5-plain colored" title="HTML5"></i>
                <i className="devicon-css3-plain colored" title="CSS3"></i>
                <i className="devicon-javascript-plain colored" title="JavaScript"></i>
                <i className="devicon-jquery-plain colored" title="jQuery"></i>
                <i className="devicon-bootstrap-plain colored" title="Bootstrap"></i>
              </div>
            </div>
          </div>

          {/* PHP Frameworks */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="skill-item">
              <h5><i className="bi bi-braces"></i> PHP, Symfony, Yii2, Laravel</h5>
              <div className="skill-icons">
                <i className="devicon-php-plain colored" title="PHP"></i>
                <i className="devicon-symfony-original colored" title="Symfony"></i>
                <i className="devicon-yii-plain colored" title="Yii2"></i>
                <i className="devicon-laravel-original colored" title="Laravel"></i>
              </div>
            </div>
          </div>

          {/* Node.js */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="skill-item">
              <h5><i className="bi bi-server"></i> Node.js, Express, React.js</h5>
              <div className="skill-icons">
                <i className="devicon-nodejs-plain colored" title="Node.js"></i>
                <i className="devicon-express-original colored" title="Express"></i>
                <i className="devicon-react-original colored" title="React.js"></i>
              </div>
            </div>
          </div>

          {/* Python & Java */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="skill-item">
              <h5><i className="bi bi-code-square"></i> Python, Java Spring MVC</h5>
              <div className="skill-icons">
                <i className="devicon-python-plain colored" title="Python"></i>
                <i className="devicon-java-plain colored" title="Java"></i>
                <i className="devicon-spring-original colored" title="Spring"></i>
              </div>
            </div>
          </div>

          {/* API */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="skill-item">
              <h5><i className="bi bi-plug"></i> API REST, Slim, Postman</h5>
              <div className="skill-icons">
                <i className="devicon-fastapi-plain colored" title="API REST"></i>
                <i className="devicon-postman-plain colored" title="Postman"></i>
              </div>
            </div>
          </div>

          {/* Databases */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="skill-item">
              <h5><i className="bi bi-database"></i> MySQL, PostgreSQL, Oracle SQL</h5>
              <div className="skill-icons">
                <i className="devicon-mysql-plain colored" title="MySQL"></i>
                <i className="devicon-postgresql-plain colored" title="PostgreSQL"></i>
                <i className="devicon-oracle-original colored" title="Oracle"></i>
              </div>
            </div>
          </div>

          {/* DevOps */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="skill-item">
              <h5><i className="bi bi-git"></i> Git, GitLab, Docker, Jenkins</h5>
              <div className="skill-icons">
                <i className="devicon-git-plain colored" title="Git"></i>
                <i className="devicon-gitlab-plain colored" title="GitLab"></i>
                <i className="devicon-docker-plain colored" title="Docker"></i>
                <i className="devicon-jenkins-line" style={{ color: '#D33833' }} title="Jenkins"></i>
              </div>
            </div>
          </div>

          {/* CMS */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="skill-item">
              <h5><i className="bi bi-globe"></i> Drupal, WordPress</h5>
              <div className="skill-icons">
                <i className="devicon-drupal-plain colored" title="Drupal"></i>
                <i className="devicon-wordpress-plain colored" title="WordPress"></i>
              </div>
            </div>
          </div>

          {/* Project Management */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="skill-item">
              <h5><i className="bi bi-kanban"></i> Trello, Meistertask, Jira</h5>
              <div className="skill-icons">
                <i className="devicon-trello-plain colored" title="Trello"></i>
                <i className="devicon-jira-plain colored" title="Jira"></i>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;

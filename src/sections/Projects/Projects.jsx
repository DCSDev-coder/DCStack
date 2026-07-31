import Container from '../../components/Container/Container.jsx';
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx';
import { projects } from '../../data/projects.js';
import acMonitoringPreview from '../../assets/images/Dashboard_Monitor/AC Monitoring.png';
import dashboardPreview from '../../assets/images/Dashboard_Monitor/Dashboard.png';
import systemHealthPreview from '../../assets/images/Dashboard_Monitor/System Health.png';
import './Projects.css';

function ProjectVisual() {
  return (
    <div className="projects__visual">
      <div className="projects__visual-heading">
        <span>Interface preview</span>
        <strong>Simple monitoring, wherever you work.</strong>
      </div>
      <div className="projects__screens" aria-label="Preview of the Smart Rack Monitoring interface">
        <figure className="projects__screen projects__screen--health">
          <img src={systemHealthPreview} alt="System health overview in the Smart Rack Monitoring app" />
        </figure>
        <figure className="projects__screen projects__screen--dashboard">
          <img src={dashboardPreview} alt="Main monitoring dashboard in the Smart Rack Monitoring app" />
        </figure>
        <figure className="projects__screen projects__screen--ac">
          <img src={acMonitoringPreview} alt="Air conditioning monitoring view in the Smart Rack Monitoring app" />
        </figure>
      </div>
      <p>This preview shows a sample interface. Features and information may differ for each setup.</p>
    </div>
  );
}

function Projects() {
  return (
    <section className="section projects" id="projects" aria-labelledby="projects-title">
      <Container>
        <SectionHeading
          eyebrow="Featured projects"
          id="projects-title"
          title="Products Built for Daily Work"
        />
        <p className="projects__intro">
          See the products we design, build, and support for internal teams and approved clients.
        </p>

        <div className="projects__list">
          {projects.map((project) => (
            <article className="projects__card" key={project.slug}>
              <div className="projects__content">
                <div className="projects__meta">
                  <span>{project.category}</span>
                  <span>{project.status}</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <ul>
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <div className="projects__actions">
                  <a className="projects__primary-link" href={project.detailHref}>View project</a>
                  <a href={project.supportHref}>Get support</a>
                </div>
              </div>
              <ProjectVisual />
            </article>
          ))}
        </div>

        <div className="projects__support-strip">
          <div>
            <span>Already using a DCStack product?</span>
            <strong>Find support for your product.</strong>
          </div>
          <a href="/support">Visit support centre</a>
        </div>
      </Container>
    </section>
  );
}

export default Projects;

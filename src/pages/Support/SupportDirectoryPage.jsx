import Container from '../../components/Container/Container.jsx';
import { projects } from '../../data/projects.js';
import './SupportDirectoryPage.css';

function SupportDirectoryPage() {
  return (
    <div className="support-directory">
      <section className="support-directory__hero">
        <Container>
          <p className="page-eyebrow">DCStack support centre</p>
          <h1>Support for each product.</h1>
          <p>
            Choose a product for setup help, common fixes, privacy details, and contact options.
          </p>
        </Container>
      </section>

      <section className="support-directory__content" aria-labelledby="support-projects-title">
        <Container>
          <div className="support-directory__heading">
            <div>
              <p className="page-eyebrow">Project support</p>
              <h2 id="support-projects-title">Select a product</h2>
            </div>
            <p>Each product has its own support page with the information you need.</p>
          </div>

          <div className="support-directory__grid">
            {projects.map((project) => (
              <article key={project.slug}>
                <div className="support-directory__project-mark" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <p className="page-eyebrow">{project.category}</p>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <div className="support-directory__links">
                  <a href={project.supportHref}>Open support</a>
                  <a href={project.privacyHref}>Privacy</a>
                </div>
              </article>
            ))}
          </div>

          <div className="support-directory__general">
            <div>
              <p className="page-eyebrow">General enquiries</p>
              <h2>Not sure which project you need?</h2>
              <p>Our team can send your request to the right person.</p>
            </div>
            <div>
              <a href="mailto:dcstack26@gmail.com?subject=DCStack%20Support%20Request">dcstack26@gmail.com</a>
              <a href="tel:+601111476110">+60 11-1147 6110</a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default SupportDirectoryPage;

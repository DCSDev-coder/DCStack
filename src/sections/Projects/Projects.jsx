import { useEffect, useRef } from 'react';
import Container from '../../components/Container/Container.jsx';
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx';
import { projects } from '../../data/projects.js';
import { ArrowRight } from 'lucide-react';
import './Projects.css';

const shortDescriptions = {
  'smart-rack': 'Real-time server rack temperature, humidity, PDU power control, and mobile alerts.',
  'c2-pos-system': 'High-speed counter point-of-sale with live ingredient tracking and shift sales reports.',
  'c2-ordering-app': 'Mobile pre-orders, custom item options, loyalty stamps, and cashless checkout.',
  'fintech-payments': 'Paperless cloud vault with e-signatures, approval workflows, and instant search.',
};

function Projects() {
  const listRef = useRef(null);
  const titleRefs = useRef([]);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let rafId = 0;

    const updateScrollText = () => {
      rafId = 0;

      if (reducedMotion.matches) {
        titleRefs.current.forEach((el) => {
          if (el) el.style.transform = '';
        });
        return;
      }

      const vh = window.innerHeight || 1;
      titleRefs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        // Progress from 0 (entering bottom) to 1 (leaving top)
        const progress = Math.min(Math.max((vh - rect.top) / (vh + rect.height), 0), 1);
        const direction = idx % 2 === 0 ? 1 : -1;
        const offset = (0.5 - progress) * 32 * direction;
        el.style.transform = `translate3d(${offset.toFixed(2)}px, 0, 0)`;
      });
    };

    const scheduleUpdate = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(updateScrollText);
      }
    };

    updateScrollText();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate, { passive: true });
    reducedMotion.addEventListener('change', scheduleUpdate);

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      reducedMotion.removeEventListener('change', scheduleUpdate);
    };
  }, []);

  return (
    <section className="section projects" id="projects" aria-labelledby="projects-title">
      <Container>
        <div className="projects__header">
          <SectionHeading
            eyebrow="Proven Solutions & Products"
            id="projects-title"
            title="Engineered for Reliability and Scale"
          />
        </div>

        <div className="projects__line-list" ref={listRef}>
          {projects.map((project, idx) => (
            <a
              key={project.slug}
              href={project.detailHref}
              className="projects__line-row"
            >
              <span className="projects__line-num" aria-hidden="true">
                0{idx + 1}
              </span>

              <div className="projects__line-title-wrap">
                <h3
                  ref={(el) => {
                    titleRefs.current[idx] = el;
                  }}
                >
                  {project.name}
                </h3>
                <div className="projects__line-desc">
                  <p>{shortDescriptions[project.slug] || project.summary}</p>
                </div>
              </div>

              <span className="projects__line-arrow" aria-hidden="true">
                <ArrowRight size={20} />
              </span>
            </a>
          ))}
        </div>

        <div className="projects__more">
          <a href="/projects" className="projects__more-link">
            <span>View All Projects</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </Container>
    </section>
  );
}

export default Projects;

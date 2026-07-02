import Container from '../../components/Container/Container.jsx';
import './About.css';

function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <Container className="about__inner">
        <div className="about__heading">
          <p className="eyebrow">About DCStack</p>
          <h2 id="about-title">A focused technology studio for dependable digital growth.</h2>
        </div>
        <div className="about__divider" aria-hidden="true" />
        <div className="about__copy">
          <p>
            DCStack is the technology development department of Data Center Specialists, focused on building
            reliable, scalable, and secure digital solutions for modern organizations. We turn ideas into
            practical platforms that drive efficiency, visibility, and growth.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default About;

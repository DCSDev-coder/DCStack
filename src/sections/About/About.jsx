import Container from '../../components/Container/Container.jsx';
import './About.css';

function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <Container className="about__inner">
        <div className="about__left">
          <p className="about__subtitle">ABOUT DCSTACK</p>
          <h2 className="about__title" id="about-title">
            Digital products and software built under the DCStack brand.
          </h2>
        </div>
        
        <div className="about__divider" aria-hidden="true" />
        
        <div className="about__right">
          <p className="about__copy">
            DCStack builds business software, mobile apps, monitoring platforms, and custom systems that help
            teams work faster and stay in control.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default About;

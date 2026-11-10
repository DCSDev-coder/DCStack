import Container from '../../components/Container/Container.jsx';
import './About.css';

function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <Container className="about__inner">
        <div className="about__left">
          <p className="eyebrow">About DCStack</p>
          <h2 className="about__title" id="about-title">
            Smart infrastructure and software built under the DCStack brand.
          </h2>
        </div>

        <div className="about__divider" aria-hidden="true" />

        <div className="about__right">
          <p className="about__copy">
            DCStack designs and builds intelligent IoT monitoring platforms, mobile applications, point-of-sale systems, and custom software that help teams work faster, operate smoothly, and stay in complete control.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default About;

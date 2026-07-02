import Button from '../../components/Button/Button.jsx';
import Container from '../../components/Container/Container.jsx';
import HeroStack from './HeroStack.jsx';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <Container className="hero__inner">
        <div className="hero__content">
          <p className="eyebrow">Technology. Innovation. Impact.</p>
          <h1 id="hero-title">Building Digital Solutions Across Industries</h1>
          <p className="hero__lead">
            DCStack develops mobile applications, website systems, dashboards, monitoring platforms, and
            custom digital solutions that help organizations operate smarter, faster, and more efficiently.
          </p>
          <div className="hero__actions" aria-label="Hero actions">
            <Button href="#build">Learn More</Button>
            <Button href="#contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </div>
        <div className="hero__visual">
          <HeroStack />
        </div>
      </Container>
    </section>
  );
}

export default Hero;

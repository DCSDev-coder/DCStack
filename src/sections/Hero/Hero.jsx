import Button from '../../components/Button/Button.jsx';
import Container from '../../components/Container/Container.jsx';
import HeroStack from './HeroStack.jsx';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <Container className="hero__inner">
        <div className="hero__content">
          <p className="eyebrow">Smart Infrastructure & Software</p>
          <h1 id="hero-title">Intelligent IoT & Custom Software Built for Control</h1>
          <p className="hero__lead">
            From real-time Smart Rack IoT monitoring and environmental controls to modern store POS,
            customer mobile apps, and automated platforms — DCStack engineers reliable,
            high-impact digital systems for modern operations.
          </p>
          <div className="hero__actions" aria-label="Hero actions">
            <Button href="#projects">Explore Solutions</Button>
            <Button href="#contact" variant="secondary">
              Request a Demo
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

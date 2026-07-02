import Button from '../../components/Button/Button.jsx';
import Container from '../../components/Container/Container.jsx';
import IconGlyph from '../../components/IconGlyph/IconGlyph.jsx';
import './CTA.css';

function CTA() {
  return (
    <section className="cta" id="contact" aria-labelledby="cta-title">
      <Container>
        <div className="cta__inner">
          <span className="cta__icon">
            <IconGlyph color="navy" name="rocket" />
          </span>
          <div>
            <h2 id="cta-title">More projects are currently in development.</h2>
            <p>Let’s build the next digital solution together.</p>
          </div>
          <Button href="mailto:hello@dcstack.io" variant="accent">
            Contact Us
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default CTA;

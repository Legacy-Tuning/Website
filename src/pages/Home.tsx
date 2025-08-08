import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Checklist from '../components/Checklist';

interface Testimonial { name: string; quote: string; }

export default function Home() {
  const [benefits, setBenefits] = useState<string[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    import('../data/benefits.json').then((m) => setBenefits(m.default));
    import('../data/testimonials.json').then((m) => setTestimonials(m.default));
  }, []);

  return (
    <div className="home">
      <section className="hero">
        <div>
          <span className="badge" style={{ marginBottom: 12 }}>Kraft. Presisjon. PD.</span>
          <h1>Legacy Tuning</h1>
          <p>Ren, mørk UI. Fokus på ytelse og pålitelighet for VW PD TDI. Egenbygger-guiden for 275 hk / 600 Nm på T5 2.5 TDI.</p>
          <div className="hero-cta">
            <NavLink to="/t5-byggeguide" className="btn primary">T5 Byggeguide</NavLink>
            <NavLink to="/deler" className="btn secondary">Deler</NavLink>
            <NavLink to="/mapping" className="btn">Mapping</NavLink>
          </div>
        </div>
        <div className="card">
          <p className="card-title">Dette får du</p>
          <p className="card-subtitle">Praktisk guide, deler og kartforespørsel</p>
          <Checklist items={benefits} />
        </div>
      </section>

      <section style={{ marginTop: 30 }}>
        <div className="grid cols-3">
          <div className="card">
            <p className="card-title">Ytelse</p>
            <p className="card-subtitle">230–275 hk med riktig hardware, logging og kart.</p>
          </div>
          <div className="card">
            <p className="card-title">Pålitelighet</p>
            <p className="card-subtitle">Steg 0 fokus: kompresjon, service, oljer og kjøling.</p>
          </div>
          <div className="card">
            <p className="card-title">DIY</p>
            <p className="card-subtitle">Akkordion-guide, sjekklister og copy-knapper for effektiv bygging.</p>
          </div>
        </div>
      </section>

      <section style={{ marginTop: 30 }}>
        <div className="card">
          <p className="card-title">Kundeuttalelser</p>
          <div className="grid cols-3">
            {testimonials.map((t, i) => (
              <blockquote key={i} className="card">
                <p style={{ margin: 0 }}>&ldquo;{t.quote}&rdquo;</p>
                <footer style={{ marginTop: 8, color: '#9CA3AF' }}>— {t.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
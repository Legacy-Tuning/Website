import React, { useEffect, useMemo, useState } from 'react';
import Accordion from '../components/Accordion';
import CopyButton from '../components/CopyButton';

type Step = { id: string; title: string; items: string[] };

export default function T5Byggeguide() {
  const [steps, setSteps] = useState<Step[]>([]);

  useEffect(() => {
    import('../data/guide.json').then((m) => setSteps(m.default));
  }, []);

  const items = useMemo(() => steps.map((s) => ({
    id: s.id,
    title: s.title,
    content: (
      <div>
        <ul>
          {s.items.map((it, idx) => (
            <li key={idx} style={{ marginBottom: 6 }}>{it}</li>
          ))}
        </ul>
        <CopyButton label="Kopier sjekkliste" text={s.items.map((i) => `- ${i}`).join('\n')} />
      </div>
    )
  })), [steps]);

  const allText = steps.flatMap((s) => s.items.map((i) => `${s.title}: ${i}`)).join('\n');

  return (
    <div>
      <div className="grid cols-2">
        <div className="card">
          <p className="card-title">T5 2.5 TDI — 275 hk / 600 Nm</p>
          <p className="card-subtitle">Akkordion-guide med steg 0–3</p>
          <Accordion items={items} />
          <div style={{ marginTop: 12 }}>
            <CopyButton label="Kopier alt" text={allText} />
          </div>
        </div>
        <div className="card">
          <p className="card-title">Tips: EGT/Boost-logging</p>
          <ul>
            <li>Hold EGT under 900°C ved varig belastning</li>
            <li>Logg overboost og N75 duty ved pulls</li>
            <li>Bruk VCDS: mål 011, 003, 004 for luftmasse/boost</li>
          </ul>
          <div style={{ marginTop: 8 }}>
            <span className="badge warning">Overvåk EGT</span>{' '}
            <span className="badge">Lagre logs som CSV</span>
          </div>
        </div>
      </div>
    </div>
  );
}
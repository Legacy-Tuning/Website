import React, { useEffect, useMemo, useState } from 'react';
import Modal from '../components/Modal';

export type Part = {
  id: string;
  kategori: string;
  navn: string;
  leverandør: string;
  url: string;
  merknader?: string;
  estimertPrisNOK?: number | null;
};

const kategorier = ['Alle', 'Turbo', 'Dyser', 'Intercooler', 'Eksos', 'Clutch', 'Måleinstrumenter', 'Verktøy'];

type ViewMode = 'tabell' | 'kort';

export default function Deler() {
  const [parts, setParts] = useState<Part[]>([]);
  const [kategori, setKategori] = useState<string>('Alle');
  const [view, setView] = useState<ViewMode>('tabell');
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    import('../data/parts.json').then((m) => setParts(m.default));
  }, []);

  const filtered = useMemo(() => parts.filter((p) => (kategori === 'Alle' ? true : p.kategori === kategori)), [parts, kategori]);

  function openAll() {
    setModalOpen(true);
  }

  function confirmOpenAll() {
    setModalOpen(false);
    filtered.forEach((p) => window.open(p.url, '_blank'));
  }

  return (
    <div>
      <div className="card">
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {kategorier.map((k) => (
              <button key={k} className={`btn ${kategori === k ? 'primary' : 'ghost'}`} onClick={() => setKategori(k)}>{k}</button>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className={`btn ${view === 'tabell' ? 'secondary' : 'ghost'}`} onClick={() => setView('tabell')}>Tabell</button>
            <button className={`btn ${view === 'kort' ? 'secondary' : 'ghost'}`} onClick={() => setView('kort')}>Kort</button>
            <button className="btn danger" onClick={openAll}>Åpne alle lenker</button>
          </div>
        </div>
      </div>

      {view === 'tabell' ? (
        <div className="card" style={{ marginTop: 12 }}>
          <table className="table">
            <thead>
              <tr>
                <th>Kategori</th>
                <th>Navn</th>
                <th>Leverandør</th>
                <th>Lenke</th>
                <th>Estimert pris</th>
                <th>Merknader</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => (
                <tr key={p.id}>
                  <td>{p.kategori}</td>
                  <td>{p.navn}</td>
                  <td>{p.leverandør}</td>
                  <td><a className="btn" href={p.url} target="_blank" rel="noreferrer">Åpne</a></td>
                  <td>{p.estimertPrisNOK ? `${p.estimertPrisNOK.toLocaleString('no-NO')} kr` : '—'}</td>
                  <td style={{ color: '#9CA3AF' }}>{p.merknader ?? ''}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="grid cols-3" style={{ marginTop: 12 }}>
          {filtered.map((p) => (
            <div key={p.id} className="card">
              <p className="card-title">{p.navn}</p>
              <p className="card-subtitle">{p.kategori} · {p.leverandør}</p>
              {p.merknader && <p style={{ color: '#9CA3AF' }}>{p.merknader}</p>}
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 8 }}>
                <a className="btn" href={p.url} target="_blank" rel="noreferrer">Åpne</a>
                <span className="badge">{p.estimertPrisNOK ? `${p.estimertPrisNOK.toLocaleString('no-NO')} kr` : '—'}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      <Modal open={modalOpen} title="Ansvarsfraskrivelse" onClose={() => setModalOpen(false)} actions={
        <>
          <button className="btn ghost" onClick={() => setModalOpen(false)}>Avbryt</button>
          <button className="btn danger" onClick={confirmOpenAll}>Jeg forstår, åpne lenker</button>
        </>
      }>
        <p>Deler og endringer kan påvirke typegodkjenning, utslipp og forsikring. Du er selv ansvarlig for lovlighet og teknisk tilstand. Fortsett?</p>
      </Modal>
    </div>
  );
}
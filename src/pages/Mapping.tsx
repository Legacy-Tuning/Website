import React, { useEffect, useMemo, useState } from 'react';
import Dropzone from '../components/Dropzone';
import CopyButton from '../components/CopyButton';

export default function Mapping() {
  const [ecuId, setEcuId] = useState('');
  const [sw, setSw] = useState('');
  const [notes, setNotes] = useState('');
  const [mapIndex, setMapIndex] = useState<Record<string, { trygg: string; fullsend: string }>>({});

  useEffect(() => {
    import('../data/maps.json').then((m) => setMapIndex(m.default as any));
  }, []);

  const match = useMemo(() => (ecuId && mapIndex[ecuId] ? mapIndex[ecuId] : null), [ecuId, mapIndex]);

  const requestText = useMemo(() => {
    const lines = [
      'Kartforespørsel — Legacy Tuning',
      `ECU-ID: ${ecuId || '(fyll inn)'}`,
      `Programvareversjon: ${sw || '(fyll inn)'}`,
      'Ønskede kart:',
      ' - Trygg Kart (230 hk / 500 Nm)',
      ' - Full Send Kart (275 hk / 600 Nm)',
      `Merknader: ${notes || '(valgfritt)'}`,
      'Vedlagt: Original .bin (referanse)'
    ];
    return lines.join('\n');
  }, [ecuId, sw, notes]);

  return (
    <div className="grid cols-2">
      <div className="card">
        <p className="card-title">Lesing/skriving med KESS</p>
        <ul>
          <li>Les ut original .bin med KESS (Master/Slave etter behov)</li>
          <li>Lagre filnavn som inkluderer ECU-ID og SW-versjon</li>
          <li>Skriv inn Trygg Kart først, logg, deretter Full Send</li>
        </ul>
        <div className="grid cols-2" style={{ marginTop: 12 }}>
          <div className="card">
            <p className="card-title">Trygg Kart</p>
            <p className="card-subtitle">Mål: 230 hk / 500 Nm</p>
            <span className="badge success">Konservativ EGT</span>
          </div>
          <div className="card">
            <p className="card-title">Full Send Kart</p>
            <p className="card-subtitle">Mål: 275 hk / 600 Nm</p>
            <span className="badge warning">Krever komplett Steg 1–2</span>
          </div>
        </div>
        {match ? (
          <div style={{ marginTop: 12, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <a className="btn secondary" href={match.trygg} download>
              Last ned Trygg .bin
            </a>
            <a className="btn primary" href={match.fullsend} download>
              Last ned Full Send .bin
            </a>
            <span className="badge">ECU funnet: {ecuId}</span>
          </div>
        ) : (
          <div style={{ marginTop: 12 }}>
            <span className="badge">Ingen kart koblet til ECU-ID ennå</span>
          </div>
        )}
      </div>

      <div className="card">
        <p className="card-title">Generer kartforespørsel</p>
        <div className="grid cols-2">
          <div>
            <label className="label" htmlFor="ecu">ECU-ID</label>
            <input id="ecu" className="input" placeholder="F.eks. 028101XXXX" value={ecuId} onChange={(e) => setEcuId(e.target.value)} />
          </div>
          <div>
            <label className="label" htmlFor="sw">Programvareversjon</label>
            <input id="sw" className="input" placeholder="F.eks. 1037XXXX" value={sw} onChange={(e) => setSw(e.target.value)} />
          </div>
        </div>
        <div style={{ marginTop: 10 }}>
          <label className="label" htmlFor="notes">Merknader</label>
          <textarea id="notes" className="textarea" placeholder="Ekstra info (hardware, logger, feil osv.)" value={notes} onChange={(e) => setNotes(e.target.value)} />
        </div>
        <div style={{ marginTop: 10 }}>
          <textarea className="textarea" readOnly value={requestText} />
        </div>
        <div style={{ marginTop: 8, display: 'flex', gap: 8 }}>
          <CopyButton label="Kopier forespørsel" text={requestText} />
        </div>
        <div style={{ marginTop: 12 }}>
          <Dropzone />
        </div>
      </div>
    </div>
  );
}
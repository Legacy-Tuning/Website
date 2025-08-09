import React from 'react';

export default function Verktoy() {
  return (
    <div className="grid cols-2">
      <div className="card">
        <p className="card-title">Hurtigguide: Boost/EGT-logging</p>
        <ol>
          <li>Varm opp motor og olje til driftstemperatur</li>
          <li>Logg 3. gir 1500–4500 rpm WOT (der mulig)</li>
          <li>Overvåk EGT (&lt; 900°C varig), boost og N75 duty</li>
          <li>Sjekk for overboost/underboost og juster lekkasjer</li>
        </ol>
      </div>
      <div className="card">
        <p className="card-title">Dreiemomentbegrensning</p>
        <p className="card-subtitle">Informasjon</p>
        <ul>
          <li>Beskytt clutch og gir: bruk momentbegrensning på lave gir</li>
          <li>Skaler momentkart etter faktiske logger, ikke bare mål</li>
          <li>Ved glipp: reduser moment og boost transient</li>
        </ul>
      </div>
      <div className="card">
        <p className="card-title">VCDS måleblokker</p>
        <ul>
          <li><a className="btn" href="https://www.ross-tech.com/vag-com/m_blocks/" target="_blank" rel="noreferrer">Ross-Tech måleblokker</a></li>
          <li className="card-subtitle">T5 PD TDI tips: 003, 004, 011, 013, 015</li>
        </ul>
      </div>
    </div>
  );
}
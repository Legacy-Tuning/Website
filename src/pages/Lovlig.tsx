import React from 'react';

export default function Lovlig() {
  return (
    <div className="grid cols-1">
      <div className="card" style={{ borderColor: 'rgba(239,68,68,0.5)' }}>
        <div className="badge danger">Kun for bane/off-road med mindre godkjent</div>
        <h2 style={{ marginTop: 12 }}>Lovlighet & Ansvarsfraskrivelse</h2>
        <ul>
          <li>Endringer kan være i strid med typegodkjenning (EU/Norge)</li>
          <li>Utslipp kan overstige lovlige grenser uten godkjent etterbehandling</li>
          <li>Forsikring kan bortfalle ved ikke-godkjente modifikasjoner</li>
          <li>Du er ansvarlig for kjøretøyets tekniske tilstand og lovlighet</li>
        </ul>
        <p>Kontroller lokale regler, PKK-krav og eventuelle godkjenningsordninger før du tar i bruk bilen på offentlig vei.</p>
      </div>
    </div>
  );
}
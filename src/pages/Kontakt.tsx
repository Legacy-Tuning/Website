import React from 'react';

export default function Kontakt() {
  return (
    <div className="grid cols-2">
      <div className="card">
        <p className="card-title">Kontakt</p>
        <p>Send e-post eller ping på Discord.</p>
        <div style={{ display: 'flex', gap: 8 }}>
          <a className="btn" href="mailto:kontakt@legacy-tuning.no">E-post</a>
          <a className="btn ghost" href="https://discord.com/app" target="_blank" rel="noreferrer">Discord: legacytuning</a>
        </div>
      </div>
    </div>
  );
}
import React from 'react';

export default function Modal({ open, title, children, onClose, actions }: { open: boolean; title: string; children: React.ReactNode; onClose: () => void; actions?: React.ReactNode }) {
  if (!open) return null;
  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label={title}>
      <div className="modal">
        <h3>{title}</h3>
        <div>{children}</div>
        <div className="modal-actions">
          {actions}
          <button className="btn ghost" onClick={onClose}>Lukk</button>
        </div>
      </div>
    </div>
  );
}
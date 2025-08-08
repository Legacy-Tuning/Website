import React, { useState } from 'react';

export default function CopyButton({ text, label = 'Kopier' }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  async function onCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {}
  }
  return (
    <button className={`btn ${copied ? 'success' : 'ghost'}`} onClick={onCopy} aria-label={label}>
      {copied ? 'Kopiert' : label}
    </button>
  );
}
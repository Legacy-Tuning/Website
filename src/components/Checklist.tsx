import React, { useEffect, useState } from 'react';

export default function Checklist({ items, intervalMs = 700 }: { items: string[]; intervalMs?: number }) {
  const [visibleCount, setVisibleCount] = useState(1);
  useEffect(() => {
    setVisibleCount(1);
    if (!items?.length) return;
    const id = setInterval(() => {
      setVisibleCount((c) => (c < items.length ? c + 1 : c));
    }, intervalMs);
    return () => clearInterval(id);
  }, [items, intervalMs]);

  return (
    <div className="checklist">
      {items.slice(0, visibleCount).map((text, idx) => (
        <div className="checklist-item" key={idx}>
          <span className="check-icon">✓</span>
          <span>{text}</span>
        </div>
      ))}
    </div>
  );
}
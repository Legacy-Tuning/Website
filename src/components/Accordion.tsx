import React, { useState } from 'react';

export interface AccordionItemData {
  id: string;
  title: string;
  content: React.ReactNode;
}

export default function Accordion({ items }: { items: AccordionItemData[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);
  return (
    <div className="accordion">
      {items.map((it) => (
        <div className="accordion-item" key={it.id}>
          <button className="accordion-header" onClick={() => setOpenId((p) => (p === it.id ? null : it.id))}>
            <span>{it.title}</span>
            <span>{openId === it.id ? '−' : '+'}</span>
          </button>
          {openId === it.id && <div className="accordion-content">{it.content}</div>}
        </div>
      ))}
    </div>
  );
}